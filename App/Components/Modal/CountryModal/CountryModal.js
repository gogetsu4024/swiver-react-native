/* @flow weak */

import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Modal,
	FlatList,
} from 'react-native';
import styles from './CountryModalStyle';
import { Colors } from 'App/Theme';
import data from 'App/Utils/Json/Countries';
import Icon from 'react-native-vector-icons/AntDesign';
import Flag from 'react-native-flags';

function CountryModal({
	visible,
	withDialCode,
	hideModal,
	selectCountryCallback,
}) {
	const [countryData, setCountryData] = useState(data);
	const arrayholder = data;

	const searchFilterFunction = text => {
		//passing the inserted text in textinput
		const newData = arrayholder.filter(function(item) {
			//applying filter for the inserted text in search bar
			const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
			const textData = text.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});
		setCountryData(newData);
	};

	const selectCountry = country => {
		// Get data from Countries.js
		const countryData = data;
		try {
			// Get the country code
			const countryCode = countryData.filter(obj => obj.name === country)[0]
				.dial_code;
			// Get the country flag
			const countryName = countryData.filter(obj => obj.name === country)[0]
				.name;
			// Get the country name
			const countryFlag = countryData.filter(obj => obj.name === country)[0]
				.code;
			// Update the state then hide the Modal
			const selectedCountry = {
				'code': countryCode,
				'flag': countryFlag,
				'name': countryName
			}
			selectCountryCallback(selectedCountry);
			hideModal();
		} catch (err) {
			console.log(err);
		}
	};

	const onClosePressed = () => {
		setCountryData(arrayholder);
		hideModal();
	};

	return (
		<Modal animationType="slide" transparent={false} visible={visible}>
			<View>
				<View>
					<View style={styles.header}>
						<TouchableOpacity
							onPress={() => onClosePressed()}
							style={{ marginRight: 10 }}
						>
							<Icon name="closesquare" size={30} color={Colors.primary} />
						</TouchableOpacity>

						<TextInput
							//	onChangeText={text => searchFilterFunction(text)}
							placeholder="Find country"
							placeholderTextColor={Colors.lightGrey}
							style={styles.input}
						/>
					</View>
					{/* Render the list of countries */}
					<FlatList
						keyboardShouldPersistTaps="handled"
						data={countryData}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableWithoutFeedback
								onPress={() => selectCountry(item.name)}
							>
								<View style={styles.itemContainer}>
									<Flag
										style={{ marginHorizontal: 10 }}
										size={32}
										type="flat"
										code={item.code}
									/>
									<Text style={styles.text}>{item.name}</Text>
									{withDialCode ? (
										<Text style={{ fontSize: 16 }}>({item.dial_code})</Text>
									) : null}
								</View>
							</TouchableWithoutFeedback>
						)}
					/>
				</View>
			</View>
		</Modal>
	);
}

export default CountryModal;
