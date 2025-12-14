import React from 'react';
import { createRoot } from 'react-dom/client';
import AIWorkshopApp from './index.js';
import './style.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <AIWorkshopApp />
    </React.StrictMode>
  );
}
