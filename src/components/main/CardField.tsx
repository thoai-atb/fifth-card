import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Card from '../types/Card';

interface Props {
  onPress?: () => void;
  card?: Card;
  highlight?: boolean;
}

const CardField: React.FC<Props> = ({onPress, card, highlight}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, highlight && styles.highlightContainer]}>
      <Text style={styles.text}>
        {card?.value}
        {card?.suit}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 50,
  },
  highlightContainer: {
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});

export default CardField;
