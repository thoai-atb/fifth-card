import React from 'react';
import {StyleSheet, View} from 'react-native';
import KeyboardButton from './KeyboardButton';
import Suit, {Suits} from '../common/Suit';
import Value, {Values} from '../common/Value';

interface Props {
  onPress?: (isSuit: boolean, data: string) => void;
}

const Keyboard: React.FC<Props> = ({onPress}) => {
  function handlePress(isSuit: boolean, data: string) {
    onPress?.(isSuit, data);
  }
  return (
    <View style={styles.keyboard}>
      <View style={styles.keyboardRow}>
        <KeyboardButton
          onPress={() => handlePress(true, Suits.SPADE)}
          children={<Suit suit={Suits.SPADE} />}
        />
        <KeyboardButton
          onPress={() => handlePress(true, Suits.HEART)}
          children={<Suit suit={Suits.HEART} />}
        />
        <KeyboardButton
          onPress={() => handlePress(true, Suits.CLUB)}
          children={<Suit suit={Suits.CLUB} />}
        />
        <KeyboardButton
          onPress={() => handlePress(true, Suits.DIAMOND)}
          children={<Suit suit={Suits.DIAMOND} />}
        />
      </View>
      <View style={styles.keyboardRow}>
        <KeyboardButton
          onPress={() => handlePress(false, Values.ACE)}
          children={<Value value={Values.ACE} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.TWO)}
          children={<Value value={Values.TWO} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.THREE)}
          children={<Value value={Values.THREE} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.FOUR)}
          children={<Value value={Values.FOUR} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.FIVE)}
          children={<Value value={Values.FIVE} />}
        />
      </View>
      <View style={styles.keyboardRow}>
        <KeyboardButton
          onPress={() => handlePress(false, Values.SIX)}
          children={<Value value={Values.SIX} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.SEVEN)}
          children={<Value value={Values.SEVEN} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.EIGHT)}
          children={<Value value={Values.EIGHT} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.NINE)}
          children={<Value value={Values.NINE} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.TEN)}
          children={<Value value={Values.TEN} />}
        />
      </View>
      <View style={styles.keyboardRow}>
        <KeyboardButton
          onPress={() => handlePress(false, Values.JACK)}
          children={<Value value={Values.JACK} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.QUEEN)}
          children={<Value value={Values.QUEEN} />}
        />
        <KeyboardButton
          onPress={() => handlePress(false, Values.KING)}
          children={<Value value={Values.KING} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
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
