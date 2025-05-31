import { useScene } from '@/entities/scene';
import { Button } from '@/shared/ui/button';

export function ClearSceneButton() {
  const { clearScene } = useScene();

  function handleClick() {
    clearScene();
  }

  return (
    <Button type="button" variant="danger" onClick={handleClick}>
      Clear scene
    </Button>
  );
}
