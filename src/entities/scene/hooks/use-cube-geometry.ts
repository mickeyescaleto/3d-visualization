import { useMemo } from 'react';
import { BufferAttribute, BufferGeometry } from 'three';

import { CUBE_VERTICES, CUBE_INDICES } from '../constants/cube-geometry';

export function useCubeGeometry() {
  const vertices = useMemo(() => new Float32Array(CUBE_VERTICES), []);

  const indices = useMemo(() => new Uint16Array(CUBE_INDICES), []);

  const colors = useMemo(
    () =>
      new Float32Array(
        Array.from({ length: 6 }, () => [
          Math.random(),
          Math.random(),
          Math.random(),
        ])
          .flatMap((color) => Array(4).fill(color))
          .flat(),
      ),
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
