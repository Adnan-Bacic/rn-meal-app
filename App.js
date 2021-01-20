//143

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator'

enableScreens()


//must load fonts async
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const App = () => {

  const [fontLoaded, setFontLoaded] = useState(false)

  //if fonts are not loaded, show apploading
  if(!fontLoaded){
    return(
      //start getting fonts. then set to true, so we no longer show apploading
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}></AppLoading>
    )
  }
  return (
    <MealsNavigator></MealsNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App