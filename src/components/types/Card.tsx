interface Card {
  suit?: string;
  value?: string;
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

export default Card;
