interface Card {
  suit?: string;
  value?: string;
}

export interface ValidCard {
  suit: string;
  value: string;
}

export function emptyCard(): Card {
  return {suit: undefined, value: undefined};
}

export function checkCardValid(card: Card): boolean {
  if (card.suit && card.value) {
    return true;
  }
  return false;
}

export function checkCardEmpty(card: Card): boolean {
  if (card.suit === undefined && card.value === undefined) {
    return true;
  }
  return false;
}

export function convertCardToValidCard(card: Card): ValidCard {
  if (card.suit && card.value) {
    return {
      suit: card.suit,
      value: card.value,
    };
  }
  throw new Error('card is not valid');
}

export function convertCardsToValidCards(cards: Card[]): ValidCard[] {
  return cards.map(card => convertCardToValidCard(card));
}

export function createCard(suit: string, value: string): ValidCard {
  return {
    suit: suit,
    value: value,
  };
}

export default Card;
