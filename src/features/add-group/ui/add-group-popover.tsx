import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';

import styles from './add-group-popover.module.css';
import { useAddGroup } from '../hooks/use-add-group';
import { useScene, type Primitive } from '@/entities/scene';
import { Button } from '@/shared/ui/button';
import { Select } from '@/shared/ui/select';
import { Input } from '@/shared/ui/input';

export function AddGroupPopover() {
  const { group, setGroup, initialState } = useAddGroup();

  const { createPrimitive } = useScene();

  function handleAddGroup() {
    const { number, ...rest } = group;
    const color: Primitive['color'] = [
      Math.random(),
      Math.random(),
      Math.random(),
    ];

    for (let i = 0; i < number; i++) {
      createPrimitive({ ...rest, color });
    }

    setGroup(initialState);
  }

  return (
    <Popover className={styles.popover}>
      <PopoverButton as={Button}>Add group</PopoverButton>
      <PopoverPanel
        anchor={{ to: 'right end', gap: '0.5rem' }}
        className={styles.panel}
      >
        <p className={styles.heading}>Add group</p>
        <div className={styles.fields}>
          <label htmlFor="type">Type</label>
          <Select
            id="type"
            name="type"
            aria-label="Primitive type"
            value={group.type}
            onChange={(event) =>
              setGroup((state) => ({
                ...state,
                type: event.target.value as Primitive['type'],
              }))
            }
          >
            <option value="cube">Cube</option>
            <option value="pyramid">Pyramid</option>
          </Select>
          <label htmlFor="width">Width</label>
          <Input
            id="width"
            type="number"
            value={group.width}
            onChange={(event) =>
              setGroup((state) => ({
                ...state,
                width: Number(event.target.value),
              }))
            }
          />
          <label htmlFor="height">Height</label>
          <Input
            id="height"
            type="number"
            value={group.height}
            onChange={(event) =>
              setGroup((state) => ({
                ...state,
                height: Number(event.target.value),
              }))
            }
          />
          <label htmlFor="length">Length</label>
          <Input
            id="length"
            type="number"
            value={group.length}
            onChange={(event) =>
              setGroup((state) => ({
                ...state,
                length: Number(event.target.value),
              }))
            }
          />
          <label htmlFor="number">Number</label>
          <Input
            id="number"
            type="number"
            value={group.number}
            onChange={(event) =>
              setGroup((state) => ({
                ...state,
                number: Number(event.target.value),
              }))
            }
          />
        </div>
        <div className={styles.buttons}>
          <CloseButton as={Button}>Cancel</CloseButton>
          <Button onClick={handleAddGroup}>OK</Button>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
