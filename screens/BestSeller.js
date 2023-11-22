import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HeaderCart from '../components/HeaderCart';

export default function BestSellerScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            marginTop: 40, paddingLeft: 12,
        }}>
            <HeaderCart navigation={navigation} title='Best Seller' />
            <View style={{
                marginTop: 80,
            }}>
                <FlatList
                    horizontal
                    data={['Category', 'Color', 'Price', 'Brand']}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            flexDirection: 'row', alignItems: 'center',
                            height: 36, paddingHorizontal: 12, marginHorizontal: 8,
                            borderWidth: 0.5, borderColor: '#aaa', borderRadius: 6,
                        }}>
                            <Text style={{
                                fontSize: 16, color: '#666'
                            }}>{item}</Text>
                            <Ionicons name='chevron-down' size={20} color='#888' />
                        </TouchableOpacity>
                    )}
                />
            </View>
            <ScrollView style={styler.newArrival}>
                {/* <FlatList
                    numColumns={2}
                    data={[1, 2, 3, 4, 5, 6]}
                    renderItem={({ item }) => {
                        if (item % 2 == 0) {
                            return (
                                <TouchableOpacity style={styler.itemArrival}>
                                    <Image
                                        source={require('../assets/img/shirtwomen3.jpg')}
                                        style={styler.imageItemArrival}
                                    />
                                    <View style={styler.containerItemArrival}>
                                        <Text style={styler.titleItemArrival}>ZARA Hadid Tracksuit</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <Text style={{
                                                fontSize: 12, color: 'rgba(252, 60, 60, 1)',
                                            }}>
                                                80%
                                            </Text>
                                            <Text style={{
                                                marginLeft: 6,
                                                fontSize: 12, color: '#666', textDecorationLine: 'line-through',
                                            }}>
                                                $ 2.000.000
                                            </Text>
                                        </View>
                                        <Text style={styler.priceItemArrival}>
                                            $ 500.000
                                        </Text>
                                        <View style={{
                                            width: 60,
                                            paddingHorizontal: 4, paddingVertical: 2,
                                            backgroundColor: 'rgba(252, 230, 230, 1)', borderRadius: 6,
                                        }}>
                                            <Text style={{
                                                fontSize: 12, color: 'rgba(252, 60, 60, 1)',
                                            }}>
                                                Pre-Order
                                            </Text>
                                        </View>
                                        <Text style={styler.rateItemArrival}>
                                            {staricon} 4.9   400 sold
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        } else {
                            return (
                                <TouchableOpacity style={[styler.itemArrival, { height: 256, }]}>
                                    <Image
                                        source={require('../assets/img/shirtwomen3.jpg')}
                                        style={styler.imageItemArrival}
                                    />
                                    <View style={styler.containerItemArrival}>
                                        <Text style={styler.titleItemArrival}>ZARA Hadid Tracksuit</Text>
                                        <Text style={styler.priceItemArrival}>
                                            $ 500.000
                                        </Text>
                                        <Text style={styler.rateItemArrival}>
                                            {staricon} 4.9   400 sold
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    }}
                /> */}
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <FlatList
                            // vertical
                            data={[1, 1, 1]}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={[styler.itemArrival, { height: 256, }]}>
                                    <Image
                                        source={require('../assets/img/shirtwomen3.jpg')}
                                        style={styler.imageItemArrival}
                                    />
                                    <View style={styler.containerItemArrival}>
                                        <Text style={styler.titleItemArrival}>ZARA Hadid Tracksuit</Text>
                                        <Text style={styler.priceItemArrival}>
                                            $ 500.000
                                        </Text>
                                        <Text style={styler.rateItemArrival}>
                                            {staricon} 4.9   400 sold
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View>
                        <FlatList
                            // vertical
                            data={[1, 1, 1]}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styler.itemArrival}>
                                    <Image
                                        source={require('../assets/img/shirtwomen3.jpg')}
                                        style={styler.imageItemArrival}
                                    />
                                    <View style={styler.containerItemArrival}>
                                        <Text style={styler.titleItemArrival}>ZARA Hadid Tracksuit</Text>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <Text style={{
                                                fontSize: 12, color: 'rgba(252, 60, 60, 1)',
                                            }}>
                                                80%
                                            </Text>
                                            <Text style={{
                                                marginLeft: 6,
                                                fontSize: 12, color: '#666', textDecorationLine: 'line-through',
                                            }}>
                                                $ 2.000.000
                                            </Text>
                                        </View>
                                        <Text style={styler.priceItemArrival}>
                                            $ 500.000
                                        </Text>
                                        <View style={{
                                            width: 60,
                                            paddingHorizontal: 4, paddingVertical: 2,
                                            backgroundColor: 'rgba(252, 230, 230, 1)', borderRadius: 6,
                                        }}>
                                            <Text style={{
                                                fontSize: 12, color: 'rgba(252, 60, 60, 1)',
                                            }}>
                                                Pre-Order
                                            </Text>
                                        </View>
                                        <Text style={styler.rateItemArrival}>
                                            {staricon} 4.9   400 sold
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styler = StyleSheet.create({
    newArrival: {
        marginTop: 30, paddingHorizontal: 12,
    },
    titleArrival: {
        flexDirection: 'row', justifyContent: 'space-between',
    },
    listArrival: {
        marginTop: 12,
        height: 260,
    },
    itemArrival: {
        marginTop: 12, marginRight: 32, paddingBottom: 6,
        width: 180, minHeight: 256,
        borderRadius: 6,
        overflow: 'hidden',
        shadowColor: "#888",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22, shadowRadius: 2.22,
        elevation: 1,
    },
    imageItemArrival: {
        resizeMode: 'cover', width: 180, height: 180,
    },
    containerItemArrival: {
        marginTop: 6, paddingLeft: 6,
    },
    titleItemArrival: {
        fontWeight: 'bold', color: '#222',
    },
    priceItemArrival: {
        alignItems: 'center',
        marginVertical: 4,
        fontSize: 16, fontWeight: 'bold',
    },
    rateItemArrival: {
        color: '#666',
    },
})

const forwardicon = <Ionicons name='chevron-forward' size={24} color='#666' />
const biticon = <Ionicons name='logo-bitcoin' size={16} />
const staricon = <Ionicons name='star' color='rgba(255, 215, 0, 1)' />