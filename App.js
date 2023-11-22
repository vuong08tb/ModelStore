import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SlideScreen from './screens/Slide';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/Home';
import WishlistScreen from './screens/Wishlist';
import CartScreen from './screens/Cart';
import ProfileScreen from './screens/Profile';
import CategoryScreen from './screens/Category';
import ListScreen from './screens/List';
import NewArrivalScreen from './screens/NewArrival';
import BestSellerScreen from './screens/BestSeller';
import SearchScreen from './screens/Search';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={
      ({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let colorIcon;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            colorIcon = focused ? 'rgba(140, 82, 36, 1)' : '#444';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart-outline';
            colorIcon = focused ? 'rgba(140, 82, 36, 1)' : '#444';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
            colorIcon = focused ? 'rgba(140, 82, 36, 1)' : '#444';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            colorIcon = focused ? 'rgba(140, 82, 36, 1)' : '#444';
          }
          return <Ionicons name={iconName} size={20} color={colorIcon} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'rgba(140, 82, 36, 1)',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'My Order',
      }} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} options={{
      }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slide" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Slide" component={SlideScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="List" component={ListScreen}/>
        <Stack.Screen name="NewArrival" component={NewArrivalScreen} />
        <Stack.Screen name="BestSeller" component={BestSellerScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

