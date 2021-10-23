import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/styles';

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.gameTitle}>NaperSki</Text>
      <View style={styles.buttonsWrapper}>
        <Link
          style={styles.linkButton}
          to="/game"
        > 
          <Text style={styles.linkText}>START</Text>
        </Link>
        <Button
          title={'Trophy'}
          color='#be2323'
        />
      </View>
      <Text style={styles.about}>CharlieByrd production</Text>
    </View>
  );
}

export default MainScreen;