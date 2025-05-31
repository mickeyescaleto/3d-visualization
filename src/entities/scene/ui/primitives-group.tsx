import { useScene } from '../hooks/use-scene';
import { PrimitiveCard } from './primitive-card/primitive-card';

export function PrimitivesGroup() {
  const { primitives } = useScene();

  return primitives.map((primitive) => (
    <PrimitiveCard key={`card-${primitive.id}`} id={primitive.id} />
  ));
}
