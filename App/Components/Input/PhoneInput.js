/* @flow weak */

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './PhoneInputStyle';
import Flag from 'react-native-flags';
import { Colors } from 'App/Theme';
import CountryModal from 'App/Components/Modal/CountryModal/CountryModal';
import data from 'App/Utils/Json/Countries';

function PhoneInput({ style }) {
	// Default render of country flag
	const defaultFlag = data.filter(obj => obj.name === 'Tunisia')[0].code;
	const defaultDialCode = data.filter(obj => obj.name === 'Tunisia')[0]
		.dial_code;

	const [flag, setFlag] = useState(defaultFlag);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [dialCode, setDialCode] = useState(defaultDialCode);
	const [isFocused, setFocused] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	const handleFocus = () => setFocused(true);
	const handleBlur = () => setFocused(false);

	const showModal = () => setModalVisible(true);
	const hideModal = () => {
		setModalVisible(false);
		// Refocus on the Input field after selecting the country code
		myInput.current.focus();
	};

	const selectCountryCallback = (selectedCountry) => {
		setDialCode(selectedCountry.code);
		setFlag(selectedCountry.flag);
	};

	// todo: check if value is numeric before updating
	const onChangeText = value => setPhoneNumber(value);

	// reference for the phone textinput
	const myInput = useRef();

	const borderStyle = {
		borderColor: !isFocused ? Colors.lightGrey : Colors.primary,
		borderWidth: !isFocused ? 1 : 2,
	};

	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity
				onPress={showModal}
				style={[borderStyle, styles.flagContainer]}
			>
				{/* country flag */}
				<Flag size={48} type="flat" code={flag} />
			</TouchableOpacity>

			<View style={[borderStyle, styles.inputContainer]}>
				<Text style={styles.text}>{dialCode}</Text>

				<TextInput
					ref={myInput}
					value={phoneNumber}
					onFocus={handleFocus}
					onBlur={handleBlur}
					returnKeyType="done"
					keyboardType={'phone-pad'}
					style={styles.input}
					onChangeText={val => onChangeText(val)}
				/>

				<CountryModal
					visible={modalVisible}
					withDialCode={true}
					hideModal={hideModal}
					selectCountryCallback={selectCountryCallback}
				/>
			</View>
		</View>
	);
}

export default PhoneInput;
