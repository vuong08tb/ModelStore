import React from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            marginTop: 48, paddingHorizontal: 12,
        }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
            }}>
                <Ionicons
                    name="arrow-back" size={24} color='#666'
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{
                        fontSize: 16, fontWeight: 'bold', color: "rgba(147, 70, 22, 0.8)",
                    }}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 24,
            }}>
                <Text style={{
                    fontSize: 36, fontFamily: 'Roboto',
                }}>
                    Let's Get Started
                </Text>
                <Text style={{
                    marginTop: 12,
                    color: "#999", fontSize: 14, width: 360,
                }}>
                    Please complete the form to create an Model account
                </Text>
            </View>
            <View style={{
                marginTop: 36,
            }}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='#aaa'
                    style={{
                        paddingHorizontal: 12, paddingVertical: 10,
                        marginVertical: 12,
                        width: '100%',
                        borderColor: '#999',
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                />
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    paddingHorizontal: 12, paddingVertical: 10,
                    marginVertical: 12,
                    width: '100%',
                    borderColor: '#999',
                    borderWidth: 1,
                    borderRadius: 6,
                }}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor='#aaa'
                        secureTextEntry
                        style={{
                            width: '92%',
                        }}
                    />
                    <Ionicons
                        name="eye-outline" size={26} color='#666'
                    />
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    paddingHorizontal: 12, paddingVertical: 10,
                    marginVertical: 12,
                    width: '100%',
                    borderColor: '#999',
                    borderWidth: 1,
                    borderRadius: 6,
                }}>
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor='#aaa'
                        secureTextEntry
                        style={{
                            width: '92%',
                        }}
                    />
                    <Ionicons
                        name="eye-outline" size={26} color='#666'
                    />
                </View>
            </View>
            <View style={{
                marginTop: 12,
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 6,
                }}>
                    <Ionicons
                        name="checkmark" size={22} color='#777'
                    />
                    <View style={{
                        width: 6,
                    }}></View>
                    <Text style={{
                        fontSize: 14, color: '#666',
                        textAlignVertical: 'center',
                    }}>
                        Must include capital letters A-Z
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 6,
                }}>
                    <Ionicons
                        name="checkmark" size={22} color='#777'
                    />
                    <View style={{
                        width: 6,
                    }}></View>
                    <Text style={{
                        fontSize: 14, color: '#666',
                        textAlignVertical: 'center',
                    }}>
                        Must be 8-15 characters
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 6,
                }}>
                    <Ionicons
                        name="checkmark" size={22} color='#777'
                    />
                    <View style={{
                        width: 6,
                    }}></View>
                    <Text style={{
                        fontSize: 14, color: '#666',
                        textAlignVertical: 'center',
                    }}>
                        Must include numbers
                    </Text>
                </View>
            </View>
            <View style={{
                marginTop: 160,
            }}>
                <TouchableOpacity style={{
                    width: '100%', height: 48,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(113, 86, 56, 1)',
                    borderRadius: 12,
                }} onPress={()=>navigation.navigate('Home')}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold', color: '#fff',
                    }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}