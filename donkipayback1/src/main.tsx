import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import DonkiPage from './pages/DonkiPage.tsx';
import DrugstorePage from './pages/DrugstorePage.tsx';
import DepartmentPage from './pages/DepartmentPage.tsx';
import ElectronicsPage from './pages/ElectronicsPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/donki" element={<DonkiPage />} />
        <Route path="/drugstore" element={<DrugstorePage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
