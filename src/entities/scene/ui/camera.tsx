import { useRef } from 'react';
import { CameraControls } from '@react-three/drei';

export function Camera() {
  const camera = useRef<CameraControls>(null);

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
