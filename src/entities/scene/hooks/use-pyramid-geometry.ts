import { useMemo } from 'react';
import { BufferAttribute, BufferGeometry } from 'three';

import {
  PYRAMID_INDICES,
  PYRAMID_VERTICES,
} from '../constants/pyramid-geometry';

export function usePyramidGeometry() {
  const vertices = useMemo(() => new Float32Array(PYRAMID_VERTICES), []);

  const indices = useMemo(() => new Uint16Array(PYRAMID_INDICES), []);

  const colors = useMemo(
    () =>
      new Float32Array([
        ...Array(6).fill([Math.random(), Math.random(), Math.random()]).flat(),
        ...Array.from({ length: 4 }, () => [
          Math.random(),
          Math.random(),
          Math.random(),
        ])
          .flatMap((color) => Array(3).fill(color))
          .flat(),
      ]),
    [],
  );

  const geometry = useMemo(() => {
    const geometry = new BufferGeometry();

    geometry.setIndex(new BufferAttribute(indices, 1));
    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new BufferAttribute(colors, 3));

    return geometry;
  }, [indices, vertices, colors]);

  return geometry;
}
