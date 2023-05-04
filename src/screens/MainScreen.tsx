import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Keyboard from '../components/main/Keyboard';
import CardInput from '../components/main/CardInput';
import SelectedCards from '../components/main/SelectedCards';
import Card, {
  emptyCard,
  checkCardValid,
  checkCardEmpty,
} from '../components/types/Card';

const MainScreen: React.FC = () => {
  const [selectedInputIndex, setSelectedInputIndex] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([
    emptyCard(),
    emptyCard(),
    emptyCard(),
    emptyCard(),
  ]);
  function handlePress(isSuit: boolean, data: string) {
    var nextCard: boolean = false;
    var lastCard: boolean = false;
    setCards(oldCards =>
      oldCards.map((card, i) => {
        if (i !== selectedInputIndex) {
          return card;
        }
        const newCard = isSuit ? {...card, suit: data} : {...card, value: data};
        if (checkCardValid(newCard)) {
          if (selectedInputIndex === oldCards.length - 1) {
            lastCard = true;
          } else if (checkCardEmpty(oldCards[selectedInputIndex + 1])) {
            nextCard = true;
          }
          if (lastCard) {
          } else if (nextCard) {
            setSelectedInputIndex(index => index + 1);
          }
        }
        return newCard;
      }),
    );
  }
  return (
    <View style={styles.container}>
      <View>
        <SelectedCards
          cards={cards}
          index={selectedInputIndex}
          setIndex={index => setSelectedInputIndex(index)}
        />
        <CardInput card={cards[selectedInputIndex]} />
      </View>
      <Keyboard onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flex: 1,
    padding: 16,
  },
});

export default MainScreen;
