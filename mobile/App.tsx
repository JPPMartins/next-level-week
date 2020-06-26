import React from 'react';
import {AppLoading} from 'expo';
import {  StatusBar, Text, View } from 'react-native';
import Home from './src/pages/Home';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

export default function App() {
  const [fontLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}
