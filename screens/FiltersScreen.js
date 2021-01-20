import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';

import Colors from '../Constant/Colors'

const FiltersScreen = (props) => {

  const { navigation } = props

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setisLactoseFree] = useState(false)
  const [isVegan, setisVegan] = useState(false)
  const [isVegetarian, setisVegetarian] = useState(false)

  const FilterSwitch = (props) => {
    return(
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={ Platform.OS === 'android' ? Colors.primaryColor : ''}></Switch>
      </View>
    )
  }

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    console.log('appliedfilters', appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters, navigation])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters / Restrictions</Text>
        <FilterSwitch label="Gluten free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
        >
        </FilterSwitch>

        <FilterSwitch label="Lactose free"
        state={isLactoseFree}
        onChange={newValue => setisLactoseFree(newValue)}>
        </FilterSwitch>

        <FilterSwitch label="Vegan"
        state={isVegan}
        onChange={newValue => setisVegan(newValue)}>
        </FilterSwitch>

        <FilterSwitch label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setisVegetarian(newValue)}>
        </FilterSwitch>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen