import { useState } from 'react';
import { DoubleSide } from 'three';
import { Edges, useCursor } from '@react-three/drei';

import { useScene } from '../hooks/use-scene';
import { useCubeGeometry } from '../hooks/use-cube-geometry';
import type { Primitive } from '../types/primitive';

type CubeProps = {
  id: Primitive['id'];
};

export function Cube({ id }: CubeProps) {
  const [hovered, setHovered] = useState(false);

  const { primitives, selected, setTarget, setSelected } = useScene();

  const geometry = useCubeGeometry();

  useCursor(hovered);

  const primitive = primitives[id];

  return (
    <mesh
      geometry={geometry}
      position={primitive.position}
      scale={[primitive.width, primitive.height, primitive.length]}
      onClick={(event) => {
        event.stopPropagation();
        setSelected((state) => (state === primitive ? null : primitives[id]));
        setTarget(selected === primitive ? [0, 0, 0] : primitive.position);
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <meshBasicMaterial attach="material" vertexColors side={DoubleSide} />
      <Edges visible={id === selected?.id} scale={1.1} />
    </mesh>
  );
}
