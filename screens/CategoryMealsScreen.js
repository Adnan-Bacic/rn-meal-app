import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'

import MealList from '../components/MealList'


const CategoryMealScreen = ({ navigation, route }) => {

  //destructurecategoryTitle
  const { categoryID, categoryTitle } = route.params

  //find the meal based on the route param
  const displayedMeals = MEALS.filter(meal => meal.categoryIDs.indexOf(categoryID) >= 0)

  return (
    <MealList listData={displayedMeals} navigation={navigation}></MealList>
  );
}

const styles = StyleSheet.create({
  
});

export default CategoryMealScreen