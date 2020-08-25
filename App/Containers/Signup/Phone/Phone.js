import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Modal,
	FlatList,
} from 'react-native';
import { Images, Colors } from 'App/Theme';
import { TextInput } from 'react-native-paper';
import styles from './PhoneStyle';
import PhoneInput from 'App/Components/Input/PhoneInput';

export default class Phone extends Component {
	_onPress = () => {
		this.props._nextStep(2);
	};

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={Images.logo} resizeMode="contain" />

				<View style={styles.subContainer}>
					<Text style={styles.header}>Numéro de{'\n'}téléphone portable</Text>

					<Text style={{ fontSize: 13, flex: 0.2 }}>
						Taper votre numéro de téléphone portable
					</Text>

					<PhoneInput style={{ flex: 0.4 }} />

					<TouchableOpacity style={styles.button} onPress={this._onPress}>
						<Text style={{ color: 'white', fontSize: 16, alignSelf: 'center' }}>
							SUIVANT
						</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flex: 0.13 }}>
					<Text style={styles.text}>
						Nous utilisons votre numéro de téléphone uniquement pour vous
						identifier, il ne sera partagé avec personne.
					</Text>
					<Text
						style={{ alignSelf: 'center', marginVertical: 10, fontSize: 12 }}
					>
						Vous avez déja un compte?
					</Text>
					<Text
						style={{ alignSelf: 'center', color: Colors.primary, fontSize: 16 }}
					>
						SE CONNECTER
					</Text>
				</View>
			</View>
		);
	}
}
