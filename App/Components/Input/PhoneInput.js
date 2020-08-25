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
import { Flag as SVG } from 'react-native-svg-flagkit';

function PhoneInput({ style }) {
	// Default render of country flag
	const defaultFlag = data.filter(obj => obj.name === 'Tunisia')[0].code;
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
			)[0].code;
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
			<View onPress={onPressFlag} style={[borderStyle, styles.flagContainer]}>
				{/* country flag */}
				<SVG width={44} height={25} id={flag} onPress={onPressFlag} />
			</View>

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
						<View style={{ flex: 7, marginTop: 80 }}>
							{/* Render the list of countries */}
							<FlatList
								data={countryData}
								keyExtractor={(item, index) => index.toString()}
								renderItem={({ item }) => (
									<TouchableWithoutFeedback
										onPress={() => selectCountry(item.name)}
									>
										<View style={styles.countryStyle}>
											<Text style={styles.textStyle}>
												{item.flag} {item.name} ({item.dial_code})
											</Text>
										</View>
									</TouchableWithoutFeedback>
								)}
							/>
						</View>
						<TouchableOpacity
							onPress={() => hideModal()}
							style={styles.closeButtonStyle}
						>
							<Text style={styles.textStyle}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		</View>
	);
}

export default PhoneInput;
