import { Canvas } from '@react-three/fiber';

import styles from './view-panel.module.css';
import { Ground, Camera, Primitives } from '@/entities/scene';

export function ViewPanel() {
  return (
    <section className={styles.viewer}>
      <Canvas camera={{ position: [10, 10, 10], fov: 60 }}>
        <Primitives />
        <Ground />
        <Camera />
      </Canvas>
    </section>
  );
}
