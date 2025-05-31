import { useEffect, useRef } from 'react';
import { CameraControls } from '@react-three/drei';

import { useScene } from '../hooks/use-scene';

export function Camera() {
  const camera = useRef<CameraControls>(null);

  const { target } = useScene();

  useEffect(() => {
    if (camera.current) {
      camera.current.setTarget(...target, true);
    }
  }, [target]);

  return (
    <CameraControls
      ref={camera}
      truck={false}
      minDistance={3}
      maxDistance={50}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2.25}
    />
  );
}
