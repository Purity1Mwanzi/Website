import React from 'react';
import { ThemeProvider } from 'next-themes';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './Pages/Contacts';
import Hero from './Pages/Hero';
import { Page } from './constants';
import AboutPage from './Pages/AboutPage';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path={Page.Home} element={<Hero />} />
          <Route path={Page.About} element={<AboutPage />} />
          <Route path={Page.Contact} element={<Contacts />} />
          <Route path={Page.Projects} element={<Projects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
