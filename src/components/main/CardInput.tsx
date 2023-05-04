import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from '../types/Card';

interface Props {
  card: Card;
}

const CardInput: React.FC<Props> = ({card}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>{card.value}</Text>
      <Text style={styles.input}>{card.suit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 100,
    fontFamily: 'bicycle',
  },
});

export default CardInput;
