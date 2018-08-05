import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MosaicScreen from '../screens/MosaicScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'ios-home'}
    />
  ),
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    console.log('BUGGG WITH DISPATCH!');
    navigation.dispatch({ type: 'SET_POST_LIST_TOP', payload: { goTop: true }});
    defaultHandler();
  }
});

const SearchStack = createStackNavigator({
  Links: LinksScreen,
});

SearchStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'ios-search'}
    />
  )
});

const CameraStack = createStackNavigator({
  List: MosaicScreen,
});

CameraStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'ios-camera'}
    />
  )
});

// const LikeStack = createStackNavigator({
//   Links: LinksScreen,
// });

// LikeStack.navigationOptions = ({ navigation }) => ({
//   tabBarLabel: 'Likes',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-heart${focused ? '' : '-outline'}` : 'ios-heart'}
//     />
//   )
// });

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  )
});

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  CameraStack,
  // LikeStack,
  SettingsStack
});

export default TabNavigator;
