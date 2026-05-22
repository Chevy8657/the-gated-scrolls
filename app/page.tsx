'use client';

import React, { useState } from 'react';
// We import the "Don't be a Dick" logic directly from your protocol layer
import { executeSecurityGovernance } from '../../protocol/dontBeADickProtocol';

export default function RecoveryPage() {
  const [handshakeStatus, setHandshakeStatus] = useState<'IDLE' | 'PROCESSING' | 'REISSUED'>('IDLE');

  // We simulate checking the physical node on the desk router
  const securityCheck = executeSecurityGovernance({
    isKeyPresent: false,        // The broker lost their key token
    isHardwareMatched: true,    // BUT the Guardian Core iron is verified on their desk
    accountCurrent: true        // Their standing is high-value and trusted
  });

  const handleConciergeReset = () => {
    setHandshakeStatus('PROCESSING');
    setTimeout(() => {
      setHandshakeStatus('REISSUED');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#0B0C10', color: '#C5C6C7', padding: '40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', border: '1px solid #1F2833', padding: '30px', background: '#0D0F14' }}>
        
        {/* THE RITZ-CARLTON CONCIERGE BANNER */}
        <h2 style={{ color: '#C5A059', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
          🛎️ Node Concierge — Identity Recovery
        </h2>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '25px', textAlign: 'justify' }}>
          If you forgot your access token or misplaced your identity key, your operation does not stop. 
          Like the Ritz-Carlton, we verify your local hardware presence and restore your credentials with 
          absolute class. We protect your data, your time, and your business continuity.
        </p>

        {/* DYNAMIC TELEMETRY LOG FROM PROTOCOL */}
        <div style={{ background: '#1F2833', padding: '20px', borderLeft: '4px solid #45A29E', marginBottom: '30px' }}>
          <span style={{ color: '#45A29E', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            SYSTEM LOG DECREE:
          </span>
          <code style={{ color: '#C5C6C7', fontSize: '0.95rem', fontFamily: 'monospace' }}>
            {securityCheck.logMessage}
          </code>
        </div>

        {/* INTERACTION BLOCKS */}
        {handshakeStatus === 'IDLE' && (
          <button
            onClick={handleConciergeReset}
            style={{
              backgroundColor: '#C5A059',
              color: '#0B0C10',
              border: 'none',
              padding: '12px 24px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              width: '100%',
              letterSpacing: '1px'
            }}
          >
            Verify Hardware & Reissue Identity Key
          </button>
        )}

        {handshakeStatus === 'PROCESSING' && (
          <div style={{ color: '#45A29E', fontWeight: 'bold', textAlign: 'center', padding: '15px' }}>
            ⏳ Multi-Party Handshake active... Reissuing key card to Jim's validated perimeter.
          </div>
        )}

        {handshakeStatus === 'REISSUED' && (
          <div style={{ backgroundColor: '#131820', border: '1px solid #45A29E', padding: '20px', textAlign: 'center' }}>
            <strong style={{ color: '#45A29E', display: 'block', marginBottom: '10px', fontSize: '1.2rem' }}>
              ✓ ACCESS RESTORED
            </strong>
            <p style={{ margin: 0, fontSize: '1.05rem' }}>
              Welcome back, Jim. New identity cryptographic signature generated. All local transaction histories inside 
              <code>the_gated_scrolls.db</code> remain completely synchronized and pristine.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
// We import the "Don't be a Dick" logic directly from your protocol layer
import { executeSecurityGovernance } from '../../protocol/dontBeADickProtocol';

export default function RecoveryPage() {
  const [handshakeStatus, setHandshakeStatus] = useState<'IDLE' | 'PROCESSING' | 'REISSUED'>('IDLE');

  // We simulate checking the physical node on the desk router
  const securityCheck = executeSecurityGovernance({
    isKeyPresent: false,        // The broker lost their key token
    isHardwareMatched: true,    // BUT the Guardian Core iron is verified on their desk
    accountCurrent: true        // Their standing is high-value and trusted
  });

  const handleConciergeReset = () => {
    setHandshakeStatus('PROCESSING');
    setTimeout(() => {
      setHandshakeStatus('REISSUED');
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#0B0C10', color: '#C5C6C7', padding: '40px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', border: '1px solid #1F2833', padding: '30px', background: '#0D0F14' }}>
        
        {/* THE RITZ-CARLTON CONCIERGE BANNER */}
        <h2 style={{ color: '#C5A059', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
          🛎️ Node Concierge — Identity Recovery
        </h2>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '25px', textAlign: 'justify' }}>
          If you forgot your access token or misplaced your identity key, your operation does not stop. 
          Like the Ritz-Carlton, we verify your local hardware presence and restore your credentials with 
          absolute class. We protect your data, your time, and your business continuity.
        </p>

        {/* DYNAMIC TELEMETRY LOG FROM PROTOCOL */}
        <div style={{ background: '#1F2833', padding: '20px', borderLeft: '4px solid #45A29E', marginBottom: '30px' }}>
          <span style={{ color: '#45A29E', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            SYSTEM LOG DECREE:
          </span>
          <code style={{ color: '#C5C6C7', fontSize: '0.95rem', fontFamily: 'monospace' }}>
            {securityCheck.logMessage}
          </code>
        </div>

        {/* INTERACTION BLOCKS */}
        {handshakeStatus === 'IDLE' && (
          <button
            onClick={handleConciergeReset}
            style={{
              backgroundColor: '#C5A059',
              color: '#0B0C10',
              border: 'none',
              padding: '12px 24px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              width: '100%',
              letterSpacing: '1px'
            }}
          >
            Verify Hardware & Reissue Identity Key
          </button>
        )}

        {handshakeStatus === 'PROCESSING' && (
          <div style={{ color: '#45A29E', fontWeight: 'bold', textAlign: 'center', padding: '15px' }}>
            ⏳ Multi-Party Handshake active... Reissuing key card to Jim's validated perimeter.
          </div>
        )}

        {handshakeStatus === 'REISSUED' && (
          <div style={{ backgroundColor: '#131820', border: '1px solid #45A29E', padding: '20px', textAlign: 'center' }}>
            <strong style={{ color: '#45A29E', display: 'block', marginBottom: '10px', fontSize: '1.2rem' }}>
              ✓ ACCESS RESTORED
            </strong>
            <p style={{ margin: 0, fontSize: '1.05rem' }}>
              Welcome back, Jim. New identity cryptographic signature generated. All local transaction histories inside 
              <code>the_gated_scrolls.db</code> remain completely synchronized and pristine.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
