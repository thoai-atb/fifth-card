import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from '../types/Card';
import {addSuffix} from '../../utils/addSuffix';

interface Props {
  card: Card;
  index: number;
}

const CardInput: React.FC<Props> = ({card, index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{addSuffix(index + 1)} card is:</Text>
      <View style={styles.card}>
        <Text style={styles.input}>{card.value}</Text>
        <Text style={styles.input}>{card.suit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  prompt: {
    textAlign: 'center',
    fontSize: 18,
  },
  card: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 75,
    overflow: 'visible',
    textAlign: 'center',
    fontFamily: 'bicycle',
  },
});

export default CardInput;
