import { Button } from '@headlessui/react';
import clsx from 'clsx';

import styles from './primitive-card.module.css';
import { useScene } from '../../hooks/use-scene';
import type { Primitive } from '../../types/primitive';

type PrimitiveCardProps = {
  id: Primitive['id'];
};

export function PrimitiveCard({ id }: PrimitiveCardProps) {
  const { primitives, selected, setSelected, setTarget } = useScene();

  const primitive = primitives[id];

  const { label, position, color } = primitive;

  function handleSelect() {
    setSelected((state) => (state === primitive ? null : primitives[id]));
    setTarget(selected === primitive ? [0, 0, 0] : primitive.position);
  }

  return (
    <Button
      type="button"
      onClick={handleSelect}
      className={clsx(styles.card, {
        [styles.selected]: primitive === selected,
      })}
    >
      <div className={styles.info}>
        <span className={styles.label}>{label}</span>
        <span className={styles.position}>
          position: ({position.join(', ')})
        </span>
      </div>
      <span
        className={styles.color}
        style={{
          background: `rgb(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255})`,
        }}
      />
    </Button>
  );
}
