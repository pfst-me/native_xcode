import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import Design from './screens/Design';

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        shifting={true}
        style={{backgroundColor: '#E9190F'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#EE6123',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor: '#009DDC',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#59A96A',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Design"
          component={Design}
          options={{
            tabBarLabel: 'Design',
            tabBarColor: '#8963BA',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="desktop-mac"
                color={color}
                size={26}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
