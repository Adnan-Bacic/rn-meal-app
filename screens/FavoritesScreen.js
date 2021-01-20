import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = ({ navigation }) => {

  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
  
  return (
    <MealList listData={favoriteMeals} navigation={navigation}></MealList>
  );
}

const styles = StyleSheet.create({
  
});

export default FavoritesScreen