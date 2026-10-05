import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts — only needed weights + subsets
import '@fontsource-variable/space-grotesk/index.css';
import '@fontsource-variable/dm-sans/index.css';

import './index.css';
import './style.css';
import './stars.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
