import { useScene } from '../hooks/use-scene';
import { Cube } from './cube';
import { Pyramid } from './pyramid';

export function Primitives() {
  const { primitives } = useScene();

  return primitives.map((primitive) => {
    switch (primitive.type) {
      case 'cube':
        return <Cube key={primitive.id} id={primitive.id} />;
      case 'pyramid':
        return <Pyramid key={primitive.id} id={primitive.id} />;
      default:
        return null;
    }
  });
}
