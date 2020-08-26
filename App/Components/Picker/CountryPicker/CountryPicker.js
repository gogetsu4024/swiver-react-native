/* @flow weak */

import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Picker,
	TouchableOpacity,
} from 'react-native';
import { Colors } from 'App/Theme';
import Flag from 'react-native-flags';
import data from 'App/Utils/Json/Countries';
import CountryModal from 'App/Components/Modal/CountryModal/CountryModal';

const CountryPicker = ({ label, style }) => {
	const [isFocused, setFocused] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const renderPickerItem = () => {};

	const onValueChange = itemValue => {
		setSelectedValue(itemValue);
		setFocused(true);
	};

	const labelStyle = {
    backgroundColor: 'white',
		paddingHorizontal: 5,
		zIndex: 1,
		position: 'absolute',
		left: 10,
		top: !isFocused ? 11 : -10,
		fontSize: !isFocused ? 16 : 12,
		color: Colors.lightGrey,
	};

	const borderStyle = {
		borderColor: !isFocused ? Colors.lightGrey : Colors.primary,
		borderWidth: !isFocused ? 1 : 2,
	};

	// Default render of country flag
	const defaultFlag = data.filter(obj => obj.name === 'Tunisia')[0].code;
	const [flag, setFlag] = useState(defaultFlag);
	const [name, setName] = useState('');
	const [modalVisible, setModalVisible] = useState(false);
	const showModal = () => setModalVisible(true);
	const hideModal = () => {
		setModalVisible(false);
	};

	const selectCountryCallback = selectedCountry => {
		setFlag(selectedCountry.flag);
		setName(selectedCountry.name);
    setFocused(true);
	};
	return (
		<View style={[styles.container, style]}>
			<Text style={labelStyle}>{label}</Text>
			<TouchableOpacity
				style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}
				onPress={showModal}
			>
        {isFocused?
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={styles.flagContainer}>
						{/* country flag */}
						<Flag size={48} type="flat" code={flag} />
					</View>
					<Text
						style={{
							color: '#4F4F4F',
							fontSize: 16,
							alignSelf: 'center',
							marginLeft: 5,
						}}
					>
						{name}
					</Text>
				</View>:null}

				<Picker style={{ flex: 1, alignSelf: 'center' }}></Picker>
			</TouchableOpacity>
			<CountryModal
				visible={modalVisible}
				withDialCode={false}
				hideModal={hideModal}
				selectCountryCallback={selectCountryCallback}
			/>
		</View>
	);
};

export default CountryPicker;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 4,
		borderColor: Colors.lightGrey,
		borderWidth: 1,
    marginVertical: 5
	},
	flagContainer: {
		justifyContent: 'center',
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 50,
		borderRadius: 4,
	},
	text: {
		fontSize: 16,
		alignSelf: 'center',
		marginHorizontal: 20,
	},
	input: {
		alignSelf: 'center',
		fontSize: 16,
	},
});
