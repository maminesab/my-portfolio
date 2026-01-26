
import React, { useState, useEffect } from 'react';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const fullContent = [
    "> Initializing security protocol...",
    "> Scanning network assets...",
    "> [OK] Firewall active",
    "> [OK] IDS/IPS signatures updated",
    "> [WARNING] 3 unauthorized login attempts detected",
    "> Automating remediation script...",
    "> Connection encrypted via AES-256",
    "> User identified: Alex Vance",
    "> Access granted."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullContent.length) {
        setLines(prev => [...prev, fullContent[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl bg-black/80 rounded-lg overflow-hidden border border-cyber-muted shadow-2xl font-mono text-sm">
      <div className="bg-cyber-muted px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-500">alex-vance@security-core: ~</div>
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-2 scrollbar-hide">
        {lines.map((line, i) => (
          <div key={i} className={line.includes('[WARNING]') ? 'text-yellow-400' : line.includes('[OK]') ? 'text-cyber-accent' : 'text-cyber-text'}>
            {line}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-cyber-primary mr-2">$</span>
          <span className="w-2 h-4 bg-cyber-primary animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
