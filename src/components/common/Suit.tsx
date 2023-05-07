import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Suits = {
  SPADE: '♠️',
  HEART: '♥️',
  CLUB: '♣️',
  DIAMOND: '♦️',
} as const;

const Suit: React.FC<{suit: string}> = ({suit}) => {
  return (
    <View>
      <Text style={styles.text}>{suit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'NotoSansJP-Regular',
  },
});

export default Suit;
