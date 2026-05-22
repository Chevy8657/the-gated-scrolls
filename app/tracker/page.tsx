// the-gated-scrolls/app/tracker/page.tsx
'use client';

import React from 'react';
import TimeWealthTracker from '../components/TimeWealthTracker';

export default function TrackerPage() {
  return (
    <main style={{ 
      backgroundColor: '#0B0C10', 
      minHeight: '100vh', 
      padding: '60px 20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#C5A059', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '2.5rem', marginBottom: '10px' }}>
          Value Blueprint Console
        </h1>
        <p style={{ color: '#45A29E', fontStyle: 'italic', fontSize: '1.1rem', margin: 0 }}>
          Integrated Process Efficiency (IPE) System — Localized Metrics Delivery
        </p>
      </div>

      {/* Injecting our clean interactive engine component */}
      <TimeWealthTracker />
      
    </main>
  );
}
