/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import ServicePage from './pages/ServicePage';

import { ScrollLockProvider } from './context/ScrollLockContext';

export default function App() {
  const isHome = window.location.pathname === '/';
  const [loading, setLoading] = useState(isHome);
  const [scrollLocked, setScrollLocked] = useState(isHome);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position which causes a jerk and header color change
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && isHome) {
      // Keep scroll locked for a short time to ensure animations are complete
      const timer = setTimeout(() => {
        window.scrollTo(0, 0); // Force scroll to top right before unlocking
        setScrollLocked(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading, isHome]);

  return (
    <ScrollLockProvider scrollLocked={scrollLocked}>
      <div className={scrollLocked ? "h-[100svh] overflow-hidden touch-none" : ""}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home loading={loading} onLoadingComplete={() => setLoading(false)} />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="case/:id" element={<CaseStudy />} />
            <Route path="services/:id" element={<ServicePage />} />
          </Route>
        </Routes>
      </div>
    </ScrollLockProvider>
  );
}
