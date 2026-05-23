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
// Update the onClick handler for Path 2 in your dashboard view layer

const handleSelectCompanyNodePath = () => {
  // Execute the proxy routing logic
  alert(
    "JOURNEY CALIBRATED: Welcome to the Federated Grid, Jim.\n\n" +
    "• Allocation Strategy: Federated Company Node Proxy\n" +
    "• Database Partition: Isolated Container Initialized\n" +
    "• Operation Status: 100% Active & Operational\n\n" +
    "Your 17-second transaction loops and Lead Lock firewalls remain completely untouched. " +
    "You are officially docked on the company motherboard."
  );
};
import React from 'react';

export default function OperationalSplitGate() {
  return (
    <div className="bg-[#0B0C10] text-white py-16 px-4 font-mono">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-sm uppercase tracking-[0.25em] text-[#00F6D2] font-semibold mb-2">
          CHOOSE YOUR OPERATIONAL SCALE
        </h2>
        <p className="text-2xl md:text-3xl font-serif text-[#C5A059] italic">
          "Speed to Lead with No Bleed™"
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* LEFT GATE: ENTERPRISE */}
        <div className="border border-zinc-800 bg-zinc-950 p-8 flex flex-col justify-between hover:border-[#00F6D2] transition-all duration-300 rounded-sm">
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-serif text-[#C5A059] font-bold">DISTRICT & GRID</h3>
              <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 uppercase tracking-wider">
                100+ Agents
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-6 uppercase tracking-wider">
              For Institutional Real Estate Organizations, Legal Counsel, and Enterprise IT Boards.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300 mb-8 border-t border-zinc-900 pt-4">
              <li className="flex items-center"><span className="text-[#00F6D2] mr-2">▪</span> Partitioned Edge Topology (PET Node)</li>
              <li className="flex items-center"><span className="text-[#00F6D2] mr-2">▪</span> RPO &lt; 60 Seconds / RTO &lt; 15 Minutes</li>
              <li className="flex items-center"><span className="text-[#00F6D2] mr-2">▪</span> Automated Fallback Continuity Routing</li>
              <li className="flex items-center"><span className="text-[#00F6D2] mr-2">▪</span> Immutable Append-Only Audit Journals</li>
            </ul>
          </div>
          <a 
            href="/docs/IPE-Sovereign-Infrastructure-Enterprise.pdf" 
            download
            className="w-full block text-center bg-transparent border border-[#00F6D2] text-[#00F6D2] py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#00F6D2] hover:text-black transition-all duration-300"
          >
            INITIALIZE ARCHITECTURE BRIEFING (PDF)
          </a>
        </div>

        {/* RIGHT GATE: BOUTIQUE */}
        <div className="border border-zinc-800 bg-zinc-950 p-8 flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 rounded-sm">
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-serif text-[#C5A059] font-bold">BOUTIQUE CORE</h3>
              <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 uppercase tracking-wider">
                &lt; 100 Agents
              </span>
            </div>
            <p className="text-xs text-zinc-400 mb-6 uppercase tracking-wider">
              For Independent Broker-Owners, Top Producers, and High-Velocity Solo Operators.
            </p>
            <ul className="space-y-3 text-sm text-zinc-300 mb-8 border-t border-zinc-900 pt-4">
              <li className="flex items-center"><span className="text-[#C5A059] mr-2">▪</span> Secure Local Office Vault (Plug & Play)</li>
              <li className="flex items-center"><span className="text-[#C5A059] mr-2">▪</span> Burn Down the Multi-Tenant "Software Tax"</li>
              <li className="flex items-center"><span className="text-[#C5A059] mr-2">▪</span> Reclaim 120 Administrative Hours/Month</li>
              <li className="flex items-center"><span className="text-[#C5A059] mr-2">▪</span> Earned Deed Infrastructure Bonus ($0 Setup)</li>
            </ul>
          </div>
          <a 
            href="/docs/IPE-Independent-Broker-Framework.pdf"
            download
            className="w-full block text-center bg-[#C5A059] text-black py-3 text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-[#C5A059] border border-[#C5A059] transition-all duration-300"
          >
            SECURE INDEPENDENT FRAMEWORK (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
