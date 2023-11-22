import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header ({ navigation, title}) {
    return(
        <View style={{
            position: 'absolute', top: 0,
            width: '94%',
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            marginTop: 24, marginHorizontal: 12,
            zIndex: 3,
        }}>
            <TouchableOpacity style={styler.button}>
                <Ionicons
                    name = "chevron-back"
                    color = "#888"
                    size={32}
                />
            </TouchableOpacity>
            <Text style={{
                fontSize: 24, fontWeight: 'bold',
            }}>{title}</Text>
            <TouchableOpacity>
                <Ionicons
                    name = "cart-outline"
                    color = "#888"
                    size={32}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;

const styler = StyleSheet.create({
    button: {

    }
})