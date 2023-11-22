import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import LoginScreen from './Login';

const slides = [
    {
        id: 1,
        title: 'Welcome to the Fashion',
        description: 'The largest selection of luxury item in the world',
        image: require('../assets/img/slide1.jpg')
    },
    {
        id: 2,
        title: 'For you',
        description: '300,000+ collections of clothes for men, women, and children',
        image: require('../assets/img/slide2.jpg')
    },
    {
        id: 3,
        title: 'Lets get started!',
        description: 'The largest selection of luxury item in the world',
        image: require('../assets/img/slide3.jpg')
    }
];

function SlideScreen({ navigation }) {
    const [showRealApp, setShowRealApp] = useState(false);

    const _renderItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image}
                style={{
                    flex: 1,
                    resizeMode: 'contain',
                }}
            >
                <TouchableOpacity
                    onPress = {() => { _onDone() }}
                    style = {{
                        marginTop: 24,
                    }}
                >
                    <Text style={{
                        color: "#fff", textAlign: 'right', fontWeight: 'bold', fontSize: 16,
                    }}>Skip</Text>
                </TouchableOpacity>
                <View style={{
                    marginTop: 420, marginLeft: 24,
                }}>
                    <Text style={{
                        fontSize: 36, fontWeight: 'bold', color: '#fff',
                        height: 100, width: 280,
                    }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 16, color: '#fff',
                    }}>
                        {item.description}
                    </Text>
                </View>
            </ImageBackground>
        )
    };

    const _onDone = () => {
        setShowRealApp(true);
    };

    return (
        <>
            {showRealApp ? (
                <LoginScreen navigation={navigation} />
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={_renderItem}
                    showDoneButton={false}
                    showNextButton={false}
                    dotStyle={{ backgroundColor: '#fff' }}
                    activeDotStyle={{ backgroundColor: "rgba(228, 107, 31, 0.81)", }}
                />
            )}
        </>
    );
}

export default SlideScreen;