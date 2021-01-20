import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

import { MEALS } from '../data/dummy-data'

const MealDetailsScreen = ({ navigation, route }) => {

  const { mealID, mealTitle } = route.params

  //find meal based on the id sent in the param
  const seletecMeal = MEALS.find(meal => meal.id === mealID)

  const ListItem = (props) => {
    return(
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <Image source={{ uri: seletecMeal.imageUrl }} style={styles.image}></Image>
      <View style={styles.details}>
        <Text>{seletecMeal.duration}</Text>
        <Text>{seletecMeal.complexity.toUpperCase()}</Text>
        <Text>{seletecMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {seletecMeal.ingredients.map(mealIngredient => (
        <ListItem key={mealIngredient}>{mealIngredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {seletecMeal.steps.map(mealStep => (
        <ListItem key={mealStep}>{mealStep}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 200
  },
  details:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem:{
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen