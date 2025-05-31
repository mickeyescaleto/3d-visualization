import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/styles/fonts.css';
import '@/app/styles/main.css';

createRoot(document.getElementById('application')!).render(
  <StrictMode>
    <h1>3D Visualization</h1>
  </StrictMode>,
);
