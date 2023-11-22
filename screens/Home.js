import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        id: 1,
        image: require('../assets/img/pic1.jpg')
    },
    {
        id: 2,
        image: require('../assets/img/pic2.jpg')
    },
    {
        id: 3,
        image: require('../assets/img/pic3.jpg')
    },
    {
        id: 4,
        image: require('../assets/img/pic4.jpg')
    },
];

function HomeScreen({ navigation }) {
    const [showSlide, setShowSlide] = useState(false);

    const _renderItem = ({ item }) => {
        return (
            <Image
                source={item.image}
                style={{
                    width: '100%', height: 240,
                    marginTop: 20,
                    resizeMode: 'cover',
                    borderRadius: 12,
                }}
            />
        );
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            marginTop: 30, paddingHorizontal: 12,
        }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '92%',
                    padding: 6,
                    backgroundColor: '#ddd', borderRadius: 6,
                }}>
                    <Ionicons name='search' size={20} color='#666' />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor='#888'
                        style={{
                            marginLeft: 4,
                            fontSize: 15,
                        }}
                    />
                </View>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={28} color='#666' />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <AppIntroSlider
                        data={slides}
                        keyExtractor={item => item.id}
                        showDoneButton={false}
                        showNextButton={false}
                        renderItem={({ item }) => (
                            <Image
                                source={item.image}
                                style={{
                                    width: 420, height: 240,
                                    marginTop: 20, marginRight: 12,
                                    resizeMode: 'cover',
                                    borderRadius: 12,
                                }}
                            />
                        )}
                    />
                </View>
                <TouchableOpacity style={{
                    marginTop: 24,
                    width: '100%', height: 200,
                    borderRadius: 24, overflow: 'hidden'
                }}>

                    <ImageBackground
                        source={require('../assets/img/pic1.jpg')}
                        style={{
                            resizeMode: "contain", width: '100%', height: '100%',
                        }}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(255,255,255,0.4)',
                        }}>
                            <Text style={{
                                position: 'absolute', bottom: 24, left: 12,
                                fontSize: 28, fontWeight: 'bold',
                            }}>
                                Men
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginTop: 24,
                    width: '100%', height: 200,
                    borderRadius: 24, overflow: 'hidden'
                }}
                    onPress={() => navigation.navigate('Category')}
                >

                    <ImageBackground
                        source={require('../assets/img/pic1.jpg')}
                        style={{
                            resizeMode: "contain", width: '100%', height: '100%',
                        }}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(255,255,255,0.4)',
                        }}>
                            <Text style={{
                                position: 'absolute', bottom: 24, left: 12,
                                fontSize: 28, fontWeight: 'bold',
                            }}>
                                Women   
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;