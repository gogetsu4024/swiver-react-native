import React from 'react'
import styles from './SplashScreenStyle'
import { Images, Colors } from 'App/Theme'

import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    ActivityIndicator,
} from 'react-native';

export default class SplashScreen extends React.Component {
    state = {
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
    };

    componentDidMount() {
        const { LogoAnime, LogoText } = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 1200,
            }),
        ]).start(() => {
            // Go to authentication screen after delay
            setTimeout(() => this.props.navigation.navigate('MainScreen'), 1500);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [80, 0],
                        }),
                    }}
                >
                    <Image source={Images.swiver} style={{marginBottom: 20}} />
                </Animated.View>
                <Animated.View style={{ opacity: this.state.LogoText }}>
                    <Text style={styles.logoText}> Swiver </Text>
                </Animated.View>
            </View>
        );
    }
}
