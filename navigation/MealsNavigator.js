import React from "react";
import { Platform } from 'react-native'

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../Constant/Colors'
import { Ionicons } from '@expo/vector-icons'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const Stack = createStackNavigator()
const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
const Drawer = createDrawerNavigator()

//bottom tab navigator
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            //ios
            activeTintColor: Colors.secondaryColor,
        }}
        //android
        barStyle={{
            backgroundColor: Colors.primaryColor,
        }}
        >
            <Tab.Screen name="CategoriesScreen" component={CategoriesScreen}
            options={{
                title: 'All Meal Categories',
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}></Ionicons>
                    )
                }
            }}></Tab.Screen>

            <Tab.Screen name="FavoritesScreen" component={FavoritesScreen}
            options={{
                title: 'Favorite meals',
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}></Ionicons>
                    )
                }
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

//drawer navigator
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator}
            options={{
                title: 'Home'
            }}></Drawer.Screen>

            <Drawer.Screen name="FiltersScreen" component={FiltersScreen}
            options={{
                title: 'Filters'
            }}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

//create the stack navigation
const MealsNavigator =  () => {
    return(
        <NavigationContainer>
            <Stack.Navigator mode="modal"
            initialRouteName="CategoriesScreen"
            //default values used if nothing else is defined in the Stack.Screen
            screenOptions={{
                title: 'Meal App',
                headerStyle:{
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
            }}>
                
                {/*
                <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}
                options={{
                    title: 'Categories',
                }}></Stack.Screen>
                */}

                {/* drawer navigator */}
                <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
                options={({ navigation }) => ({
                    headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title="Menu" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>

                        </Item>
                    </HeaderButtons>
                    ),
                    title: 'Meal Categories' })}></Stack.Screen>
                
                <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen}
                options={({ route }) => ({ title: route.params.categoryTitle })}></Stack.Screen>
                    

                <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}
                options={({ route }) => ({headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Favorite" iconName="ios-star" onPress={() => {
                        console.log('marked favorite')
                    }}></Item>
                </HeaderButtons>
                ),
                title: route.params.mealTitle})}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator