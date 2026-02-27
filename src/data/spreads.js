// Tarot spread definitions
// Positions use percentage-based x/y coordinates (center of the card)
// The `rotate` field (in degrees) applies to the card wrapper for the crossing card

export const SPREADS = {
  single: {
    id: 'single',
    name: 'Carte du Jour',
    nameEn: 'Single Card',
    description: 'One card for clarity on a focused question or daily guidance.',
    cardCount: 1,
    positions: [
      { id: 0, label: 'Your Message', x: 50, y: 50 },
    ],
  },

  threeCard: {
    id: 'threeCard',
    name: 'Trois Cartes',
    nameEn: 'Past · Present · Future',
    description: 'A three-card spread revealing the timeline of your situation.',
    cardCount: 3,
    positions: [
      { id: 0, label: 'Past',    x: 15, y: 50 },
      { id: 1, label: 'Present', x: 50, y: 50 },
      { id: 2, label: 'Future',  x: 85, y: 50 },
    ],
  },

  celticCross: {
    id: 'celticCross',
    name: 'La Croix Celtique',
    nameEn: 'Celtic Cross',
    description: 'The classic ten-card spread for deep insight into any situation.',
    cardCount: 10,
    positions: [
      { id: 0, label: 'The Situation',      x: 33, y: 48 },
      { id: 1, label: 'The Challenge',      x: 33, y: 48, rotate: 90 },
      { id: 2, label: 'Foundation',         x: 33, y: 74 },
      { id: 3, label: 'Recent Past',        x: 18, y: 48 },
      { id: 4, label: 'Best Outcome',       x: 33, y: 22 },
      { id: 5, label: 'Near Future',        x: 48, y: 48 },
      { id: 6, label: 'Your Approach',      x: 72, y: 78 },
      { id: 7, label: 'External Forces',    x: 72, y: 59 },
      { id: 8, label: 'Hopes & Fears',      x: 72, y: 40 },
      { id: 9, label: 'Final Outcome',      x: 72, y: 21 },
    ],
  },
};

export const SPREAD_LIST = Object.values(SPREADS);
