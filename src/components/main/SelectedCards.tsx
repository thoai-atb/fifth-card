import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardField from '../common/CardField';
import Card from '../types/Card';

interface Props {
  cards: Card[];
  index: number;
  setIndex?: (index: number) => void;
}

const SelectedCards: React.FC<Props> = ({cards, index, setIndex}) => {
  return (
    <View style={styles.container}>
      {cards.map((card, i) => (
        <CardField
          onPress={() => setIndex && setIndex(i)}
          key={i}
          card={card}
          highlight={i === index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SelectedCards;
