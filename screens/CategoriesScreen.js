import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  //console.log(props)

  const renderGridItem = (itemData) => {
    return(
      <CategoryGridTile title={itemData.item.title} onSelect={() => {navigation.navigate('CategoryMealsScreen', {
        categoryID: itemData.item.id,
        categoryTitle : itemData.item.title
      }) }}
      itemBGColor={itemData.item.color}></CategoryGridTile>
    )
  }

  return (
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}></FlatList>
  );
}

const styles = StyleSheet.create({
  
});

export default CategoriesScreen