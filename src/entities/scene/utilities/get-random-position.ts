import type { Position } from '../types/position';

export function getRandomPosition(): Position {
  return [
    Math.random() * 90 - 45,
    Math.random() * 24 + 1,
    Math.random() * 90 - 34,
  ];
}
