export const CUBE_VERTICES = [
  ...[
    [-1, -1, -1],
    [1, -1, -1],
    [1, -1, 1],
    [-1, -1, 1],
  ],
  ...[
    [-1, 1, -1],
    [1, 1, -1],
    [1, 1, 1],
    [-1, 1, 1],
  ],
  ...[
    [-1, -1, -1],
    [-1, 1, -1],
    [-1, 1, 1],
    [-1, -1, 1],
  ],
  ...[
    [1, -1, -1],
    [1, -1, 1],
    [1, 1, 1],
    [1, 1, -1],
  ],
  ...[
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, 1],
    [-1, 1, 1],
  ],
  ...[
    [-1, -1, -1],
    [1, -1, -1],
    [1, 1, -1],
    [-1, 1, -1],
  ],
].flat();

export const CUBE_INDICES = Array.from({ length: 6 }, (_, index) => {
  const offset = index * 4;

  return [
    ...[offset, offset + 1, offset + 2],
    ...[offset, offset + 2, offset + 3],
  ];
}).flat();

export const CUBE_COLORS = Array.from({ length: 6 }, () => [
  Math.random(),
  Math.random(),
  Math.random(),
])
  .flatMap((color) => Array(4).fill(color))
  .flat();
