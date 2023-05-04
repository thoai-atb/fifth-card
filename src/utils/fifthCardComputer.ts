import {ValidCard} from '../components/types/Card';

export function compareCards(cardA: ValidCard, cardB: ValidCard): number {
  // prettier-ignore
  const valueOrder = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
  const suitOrder = ['♠️', '♥️', '♣️', '♦️'];

  const aValue = valueOrder.indexOf(cardA.value);
  const bValue = valueOrder.indexOf(cardB.value);

  if (aValue !== bValue) {
    return bValue - aValue;
  } else {
    const aSuit = suitOrder.indexOf(cardA.suit);
    const bSuit = suitOrder.indexOf(cardB.suit);
    return bSuit - aSuit;
  }
}

export function fifthCardCompute(cards: ValidCard[]): ValidCard {
  let centralCard = cards[0];
  let threeCards = [cards[1], cards[2], cards[3]];
  let sorted = [...threeCards].sort(compareCards);
  let order = '';
  for (let c of threeCards) {
    // l = low, m = medium, h = high
    order += c === sorted[0] ? 'l' : '';
    order += c === sorted[1] ? 'm' : '';
    order += c === sorted[2] ? 'h' : '';
  }
  let offset = ['-', 'lmh', 'lhm', 'mlh', 'mhl', 'hlm', 'hml'].indexOf(order);
  // prettier-ignore
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  return {
    value: values[(values.indexOf(centralCard.value) + offset) % values.length],
    suit: centralCard.suit,
  };
}
