import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView
            style={{
                marginTop: 48,
                paddingHorizontal: 12,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Ionicons name="arrow-back" size={24} color="#666" />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "rgba(147, 70, 22, 0.8)",
                        }}
                    >
                        Create an Account
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginTop: 24,
                }}
            >
                <Text
                    style={{
                        fontSize: 36,
                        fontFamily: "Roboto",
                    }}
                >
                    Welcome back,
                </Text>
                <Text
                    style={{
                        marginTop: 12,
                        color: "#999",
                        fontSize: 14,
                        width: 320,
                    }}
                >
                    Enter your e-mail account and password to browse Model collections
                </Text>
            </View>
            <View
                style={{
                    marginTop: 36,
                }}
            >
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    style={{
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                        marginVertical: 12,
                        width: "100%",
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                        marginVertical: 12,
                        width: "100%",
                        borderColor: "#999",
                        borderWidth: 1,
                        borderRadius: 6,
                    }}
                >
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                    />
                    <Ionicons name="eye-outline" size={26} color="#666" />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{
                        flexDirection: 'row', 
                    }}>
                        <Ionicons
                            name="checkbox-outline"
                            size={20}
                            color="rgba(174, 128, 36, 1)"
                        />
                        <View style={{width: 12}}></View>
                        <Text style={{
                            fontSize: 15,
                            color: "#666",
                        }}>
                            Stay Signed In
                        </Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "#666",
                        }}
                    >
                        Forgot Password?
                    </Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: 240,
                    width: "100%",
                    alignItems: "center",
                    paddingHorizontal: 24,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        width: 280,
                        color: '#666',
                    }}
                >
                    By signin in you accept our Term & Condition and privacy policy.
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        justifyContent: 'center',
                        marginTop: 12,
                        width: "100%", height: 48,
                        backgroundColor: "#553239", borderRadius: 8,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#fff", fontSize: 18, fontWeight: 'bold',
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}