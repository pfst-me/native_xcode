import React, {useState} from 'react';
import {
  Button,
  Text,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';

// const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
