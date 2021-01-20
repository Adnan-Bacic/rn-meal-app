import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MealItem from './MealItem'

const MealList = ({ navigation, listData }) => {

    const renderMealItm = (itemData) => {
        return(
          <MealItem
          onSelectMeal={() => {
            navigation.navigate('MealDetailsScreen', {
              mealID: itemData.item.id,
              mealTitle: itemData.item.title
            })
          }}
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          ></MealItem>
        )
      }

  return (
    <View style={styles.list}>
      <FlatList data={listData} renderItem={renderMealItm} keyExtractor={(item, index) => item.id} style={{ width: '100%' }}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default MealList