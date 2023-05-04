import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ValidCard} from '../types/Card';

interface Props {
  card: ValidCard;
  onRestart: () => void;
}

const FifthCardDisplay: React.FC<Props> = ({card, onRestart}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Based on the pattern, the fifth card is:</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          {card?.value}
          {card?.suit}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Do it again!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  card: {
    padding: 50,
    borderWidth: 1,
    margin: 30,
    borderRadius: 12,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 50,
  },
  button: {
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default FifthCardDisplay;
