import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { Position } from '../types/position';
import type { CreatePrimitive, Primitive } from '../types/primitive';

type SceneContextType = {
  target: Position;
  primitives: Primitive[];
  selected: Primitive | null;
  setTarget: Dispatch<SetStateAction<Position>>;
  setPrimitives: Dispatch<SetStateAction<Primitive[]>>;
  setSelected: Dispatch<SetStateAction<Primitive | null>>;
  createPrimitive: (primitive: CreatePrimitive) => void;
  clearScene: () => void;
};

export const SceneContext = createContext<SceneContextType | undefined>(
  undefined,
);
