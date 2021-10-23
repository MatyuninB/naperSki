import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route, Switch } from 'react-router';
import { NativeRouter } from 'react-router-native';
import GameScreen from './components/GameScreen';
import MainScreen from './components/MainScreen';
import styles from './styles/styles';

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path='/' component={MainScreen} />
        <Route exact path='/game'>
          <GameScreen />
        </Route>
      </View>
    </NativeRouter>
  );
}
