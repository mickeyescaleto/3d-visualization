import { useState, type ReactNode } from 'react';

import {
  getRandomPosition,
  SceneContext,
  type CreatePrimitive,
  type Position,
  type Primitive,
} from '@/entities/scene';

export function SceneProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<Position>([0, 0, 0]);
  const [primitives, setPrimitives] = useState<Primitive[]>([]);
  const [selected, setSelected] = useState<Primitive | null>(null);

  function createPrimitive(primitive: CreatePrimitive) {
    setPrimitives((state) => [
      ...state,
      {
        id: state.length,
        position: getRandomPosition(),
        label: `${primitive.type.charAt(0).toUpperCase() + primitive.type.slice(1)} ${state.filter(({ type }) => type === primitive.type).length + 1}`,
        ...primitive,
      },
    ]);
  }

  function clearScene() {
    setPrimitives([]);
    setSelected(null);
    setTarget([0, 0, 0]);
  }

  return (
    <SceneContext.Provider
      value={{
        target,
        primitives,
        selected,
        setTarget,
        setPrimitives,
        setSelected,
        createPrimitive,
        clearScene,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}
