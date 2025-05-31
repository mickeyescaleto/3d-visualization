import { Grid } from '@react-three/drei';

export function Ground() {
  return (
    <Grid
      position={[0, 0, 0]}
      args={[10, 10]}
      cellColor="#6f6f6f"
      sectionSize={5}
      sectionColor="#9d4b4b"
      infiniteGrid
      fadeDistance={50}
      fadeFrom={0}
    />
  );
}
