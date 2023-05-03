import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Keyboard from '../components/main/Keyboard';

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Keyboard />
    </View>
  );
};

export default MainScreen;
