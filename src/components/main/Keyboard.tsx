import React from 'react';
import {StyleSheet, View} from 'react-native';
import KeyboardButton from './KeyboardButton';
import Suit, {Suits} from '../common/Suit';
import Value, {Values} from '../common/Value';

const Keyboard: React.FC = () => {
  return (
    <View style={styles.keyboard}>
      <View style={styles.keyboardRow}>
        <KeyboardButton children={<Suit suit={Suits.SPADE} />} />
        <KeyboardButton children={<Suit suit={Suits.HEART} />} />
        <KeyboardButton children={<Suit suit={Suits.CLUB} />} />
        <KeyboardButton children={<Suit suit={Suits.DIAMOND} />} />
      </View>
      <View style={styles.keyboardRow}>
        <KeyboardButton children={<Value value={Values.ACE} />} />
        <KeyboardButton children={<Value value={Values.TWO} />} />
        <KeyboardButton children={<Value value={Values.THREE} />} />
        <KeyboardButton children={<Value value={Values.FOUR} />} />
        <KeyboardButton children={<Value value={Values.FIVE} />} />
      </View>
      <View style={styles.keyboardRow}>
        <KeyboardButton children={<Value value={Values.SIX} />} />
        <KeyboardButton children={<Value value={Values.SEVEN} />} />
        <KeyboardButton children={<Value value={Values.EIGHT} />} />
        <KeyboardButton children={<Value value={Values.NINE} />} />
        <KeyboardButton children={<Value value={Values.TEN} />} />
      </View>
      <View style={styles.keyboardRow}>
        <KeyboardButton children={<Value value={Values.JACK} />} />
        <KeyboardButton children={<Value value={Values.QUEEN} />} />
        <KeyboardButton children={<Value value={Values.KING} />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
  },
  keyboardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    columnGap: 10,
  },
});

export default Keyboard;
