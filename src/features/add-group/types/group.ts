import type { Primitive } from '@/entities/scene';

export type Group = Pick<Primitive, 'type' | 'width' | 'height' | 'length'> & {
  number: number;
};
