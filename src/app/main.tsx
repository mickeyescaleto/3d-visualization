import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/styles/fonts.css';
import '@/app/styles/main.css';
import { SceneProvider } from '@/app/providers/scene-provider';
import { ViewPanel } from '@/widgets/view-panel';

createRoot(document.getElementById('application')!).render(
  <StrictMode>
    <SceneProvider>
      <ViewPanel />
    </SceneProvider>
  </StrictMode>,
);
