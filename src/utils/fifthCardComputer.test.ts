import {Suits} from '../components/common/Suit';
import {Values} from '../components/common/Value';
import {ValidCard, createCard} from '../components/types/Card';
import {fifthCardCompute} from './fifthCardComputer';

test('fifthCardCompute case 1', () => {
  const cards: ValidCard[] = [
    createCard(Suits.CLUB, Values.KING),
    createCard(Suits.DIAMOND, Values.EIGHT),
    createCard(Suits.HEART, Values.QUEEN),
    createCard(Suits.HEART, Values.ACE),
  ];
  const fifthCard = fifthCardCompute(cards);
  expect(fifthCard.suit).toBe(Suits.CLUB);
  expect(fifthCard.value).toBe(Values.ACE);
});

test('fifthCardCompute case 2', () => {
  const cards: ValidCard[] = [
    createCard(Suits.DIAMOND, Values.EIGHT),
    createCard(Suits.CLUB, Values.EIGHT),
    createCard(Suits.HEART, Values.EIGHT),
    createCard(Suits.SPADE, Values.EIGHT),
  ];
  const fifthCard = fifthCardCompute(cards);
  expect(fifthCard.suit).toBe(Suits.DIAMOND);
  expect(fifthCard.value).toBe(Values.NINE);
});

test('fifthCardCompute case 3', () => {
  const cards: ValidCard[] = [
    createCard(Suits.HEART, Values.KING),
    createCard(Suits.DIAMOND, Values.ACE),
    createCard(Suits.SPADE, Values.QUEEN),
    createCard(Suits.HEART, Values.ACE),
  ];
  const fifthCard = fifthCardCompute(cards);
  expect(fifthCard.suit).toBe(Suits.HEART);
  expect(fifthCard.value).toBe(Values.THREE);
});
