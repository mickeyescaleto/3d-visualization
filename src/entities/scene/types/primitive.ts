import type { Position } from './position';

export type PrimitiveType = 'cube' | 'pyramid';

export type Primitive = {
  id: number;
  type: PrimitiveType;
  position: Position;
  width: number;
  height: number;
  length: number;
  label: string;
  color: [r: number, g: number, b: number];
};

export type CreatePrimitive = Omit<Primitive, 'id' | 'position' | 'label'>;
