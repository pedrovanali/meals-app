import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Color';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
      // navigationOptions: {
      //  headerTitle: 'A something'
      // }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {}
    },
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'A screen',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites !',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name='ios-star'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accent
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
