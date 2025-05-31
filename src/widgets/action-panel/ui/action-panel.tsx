import styles from './action-panel.module.css';
import { ClearSceneButton } from '@/features/clear-scene';
import { AddGroupPopover } from '@/features/add-group';

export function ActionPanel() {
  return (
    <header className={styles.panel}>
      <div className={styles.group}>Primitives</div>
      <div className={styles.buttons}>
        <ClearSceneButton />
        <AddGroupPopover />
      </div>
    </header>
  );
}
