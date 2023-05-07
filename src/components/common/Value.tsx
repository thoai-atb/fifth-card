import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Values = {
  ACE: 'A',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'J',
  QUEEN: 'Q',
  KING: 'K',
} as const;

const Value: React.FC<{value: string}> = ({value}) => {
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
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

export default Value;
