/* @flow weak */

import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Modal,
	FlatList,
} from 'react-native';
import { Colors } from 'App/Theme';
import styles from './PhoneInputStyle';
import { Input } from 'native-base';
import data from './Countries';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function PhoneInput({ style }) {
	// Default render of country flag
	const defaultFlag = data.filter(obj => obj.name === 'Tunisia')[0].flag;
	const defaultDialCode = data.filter(obj => obj.name === 'Tunisia')[0]
		.dial_code;

	const [flag, setFlag] = useState(defaultFlag);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [dialCode, setDialCode] = useState(defaultDialCode);
	const [isFocused, setFocused] = useState(false);
	const [modalVisible, setModalVisible] = useState('');

	const handleFocus = () => setFocused(true);
	const handleBlur = () => setFocused(false);

	const showModal = () => setModalVisible(true);
	const hideModal = () => {
		setModalVisible(false);
		// Refocus on the Input field after selecting the country code
		//phoneInput.current.focus();
	};

	const selectCountry = async country => {
		// Get data from Countries.js
		const countryData = await data;
		try {
			// Get the country code
			const countryCode = await countryData.filter(
				obj => obj.name === country
			)[0].dial_code;
			// Get the country flag
			const countryFlag = await countryData.filter(
				obj => obj.name === country
			)[0].flag;
			// Update the state then hide the Modal
			setDialCode(countryCode);
			setFlag(countryFlag);
			await hideModal();
		} catch (err) {
			console.log(err);
		}
	};

	const countryData = data;

	const onPressFlag = () => {
		showModal();
	};

	const onChangeText = value => setPhoneNumber(value);

	const borderStyle = {
		borderColor: !isFocused ? Colors.lightGrey : Colors.primary,
		borderWidth: !isFocused ? 1 : 2,
	};

	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity onPress={onPressFlag} style={[borderStyle, styles.flagContainer]}>
				{/* country flag */}
				<Text style={{ fontSize: 28}}>{flag}</Text>
			</TouchableOpacity>

			<View style={[borderStyle, styles.inputContainer]}>
				<Text style={styles.text}>{dialCode}</Text>

				<Input
					value={phoneNumber}
					onFocus={handleFocus}
					onBlur={handleBlur}
					returnKeyType="done"
					keyboardType={'phone-pad'}
					style={styles.input}
					onChangeText={val => onChangeText(val)}
				/>

				{/* Modal for country code and flag */}
				<Modal animationType="slide" transparent={false} visible={modalVisible}>
					<View style={{ flex: 1 }}>
						<View style={{ flex: 7 }}>
							<TouchableOpacity
								onPress={() => hideModal()}
								style={styles.closeButtonStyle}
							>
								<MatIcon
									name="home"
									size={30}
									color={Colors.drawerItemLogoColor}
								/>
							</TouchableOpacity>
							{/* Render the list of countries */}
							<FlatList
								data={countryData}
								keyExtractor={(item, index) => index.toString()}
								renderItem={({ item }) => (
									<TouchableWithoutFeedback
										onPress={() => selectCountry(item.name)}
									>
										<View
											style={{
												alignItems: 'center',
												flex: 1,
												flexDirection: 'row',
												borderBottomWidth: 1,
												borderBottomColor: Colors.lightGrey,
												paddingVertical: 5,
											}}
										>
											<Text style={{ fontSize: 24, marginHorizontal: 10 }}>
												{item.flag}{' '}
											</Text>
											<Text
												style={{
													fontSize: 17,
													fontWeight: 'bold',
													marginRight: 5,
												}}
											>
												{item.name}
											</Text>
											<Text style={{ fontSize: 16 }}>({item.dial_code})</Text>
										</View>
									</TouchableWithoutFeedback>
								)}
							/>
						</View>
					</View>
				</Modal>
			</View>
		</View>
	);
}

export default PhoneInput;
