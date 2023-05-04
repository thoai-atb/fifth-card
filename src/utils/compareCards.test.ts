import {compareCards} from './fifthCardComputer';
import {Suits} from '../components/common/Suit';
import {Values} from '../components/common/Value';

test('compareCards: should return < 0 if cardA is smaller than cardB', () => {
  const cardA = {suit: Suits.CLUB, value: Values.TWO};
  const cardB = {suit: Suits.SPADE, value: Values.ACE};
  const result = compareCards(cardA, cardB);
  expect(result).toBeLessThan(0);
});

test('compareCards: should return > 0 if cardA is larger than cardB', () => {
  const cardA = {suit: Suits.DIAMOND, value: Values.KING};
  const cardB = {suit: Suits.HEART, value: Values.QUEEN};
  const result = compareCards(cardA, cardB);
  expect(result).toBeGreaterThan(0);
});

test('compareCards: should return > 0 if cardA and cardB have the same value but suit of cardA larger', () => {
  const cardA = {suit: Suits.SPADE, value: Values.TEN};
  const cardB = {suit: Suits.CLUB, value: Values.TEN};
  const result = compareCards(cardA, cardB);
  expect(result).toBeGreaterThan(0);
});

test('compareCards: should return 0 if cardA and cardB have the same value and suits', () => {
  const cardA = {suit: Suits.SPADE, value: Values.TEN};
  const cardB = {suit: Suits.SPADE, value: Values.TEN};
  const result = compareCards(cardA, cardB);
  expect(result).toBe(0);
});
