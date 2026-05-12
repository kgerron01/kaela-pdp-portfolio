import React from 'react';
import { createRoot } from 'react-dom/client';
import KaelaPDPWebsite from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KaelaPDPWebsite />
  </React.StrictMode>
);
