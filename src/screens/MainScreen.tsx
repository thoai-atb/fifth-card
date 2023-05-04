import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Keyboard from '../components/main/Keyboard';
import CardInput from '../components/main/CardInput';
import SelectedCards from '../components/main/SelectedCards';
import Card, {
  emptyCard,
  checkCardValid,
  checkCardEmpty,
  convertCardsToValidCards,
  convertCardToValidCard,
} from '../components/types/Card';
import {fifthCardCompute} from '../utils/fifthCardComputer';
import FifthCardDisplay from '../components/main/FifthCardDisplay';

const MainScreen: React.FC = () => {
  const [selectedInputIndex, setSelectedInputIndex] = useState<number>(0);
  const [fifthCard, setFifthCard] = useState<Card | undefined>();
  const [computeCard, setComputeCard] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([
    emptyCard(),
    emptyCard(),
    emptyCard(),
    emptyCard(),
  ]);

  // Time to compute the fifth card!
  useEffect(() => {
    if (computeCard) {
      console.log('computeCard');
      const validCards = convertCardsToValidCards(cards);
      setFifthCard(fifthCardCompute(validCards));
      setComputeCard(false);
    }
  }, [computeCard, cards]);

  // Computed fifth card
  useEffect(() => {
    console.log('fifth card is: ');
    console.log(fifthCard);
  }, [fifthCard]);

  // Restart
  function handleRestart() {
    setCards([emptyCard(), emptyCard(), emptyCard(), emptyCard()]);
    setFifthCard(undefined);
    setSelectedInputIndex(0);
  }

  // Keyboard event
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
            setComputeCard(true);
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
          active={!fifthCard}
          setIndex={index => setSelectedInputIndex(index)}
        />
        {!fifthCard && (
          <CardInput
            card={cards[selectedInputIndex]}
            index={selectedInputIndex}
          />
        )}
        {fifthCard && (
          <FifthCardDisplay
            card={convertCardToValidCard(fifthCard)}
            onRestart={handleRestart}
          />
        )}
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
