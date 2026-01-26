
import React, { useState } from 'react';
import { LogEntry } from '../types';

const INITIAL_LOGS: LogEntry[] = [
  { timestamp: '14:22:01', source: '192.168.1.45', event: 'SSH Login Attempt', status: 'warning', details: 'User: admin, Port: 22' },
  { timestamp: '14:22:05', source: '10.0.0.12', event: 'S3 Object Access', status: 'info', details: 'IAM: service-account-01' },
  { timestamp: '14:23:12', source: '88.15.201.2', event: 'SQL Injection Pattern', status: 'critical', details: 'Endpoint: /api/v1/users?id=1%27%20OR%201=1' },
  { timestamp: '14:24:00', source: 'Internal-SOC', event: 'Auto-Block Triggered', status: 'info', details: 'IP 88.15.201.2 blacklisted' },
];

const SecurityLab: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-500 bg-red-500/10';
      case 'warning': return 'text-yellow-500 bg-yellow-500/10';
      default: return 'text-cyber-primary bg-cyber-primary/10';
    }
  };

  return (
    <section id="lab" className="py-24 bg-cyber-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h3 className="text-cyber-primary font-mono text-sm tracking-widest uppercase mb-2">Interactive Environment</h3>
            <h2 className="text-4xl font-heading font-bold">Security Lab</h2>
          </div>
          <p className="text-gray-400 max-w-md text-right">
            Explore a simulated threat landscape. Select logs to see how an engineer analyzes patterns and automates defense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-black/40 border border-cyber-muted rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-cyber-muted bg-black/20 flex justify-between">
              <span className="font-mono text-xs text-gray-500 uppercase">Live Log Feed</span>
              <span className="flex items-center text-[10px] text-cyber-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse mr-2"></span>
                ACTIVE MONITORING
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="text-gray-500 border-b border-cyber-muted">
                  <tr>
                    <th className="px-6 py-3">Timestamp</th>
                    <th className="px-6 py-3">Source</th>
                    <th className="px-6 py-3">Event</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyber-muted/30">
                  {logs.map((log, idx) => (
                    <tr 
                      key={idx} 
                      onClick={() => setSelectedLog(log)}
                      className="hover:bg-cyber-primary/5 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-400">{log.timestamp}</td>
                      <td className="px-6 py-4">{log.source}</td>
                      <td className="px-6 py-4 font-medium">{log.event}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${getStatusColor(log.status)}`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-cyber-muted/30 border border-cyber-muted rounded-xl p-6 flex flex-col">
            <h4 className="font-heading font-bold text-lg mb-4 flex items-center">
              <span className="mr-2 text-cyber-primary">⚡</span> Analyst View
            </h4>
            
            {selectedLog ? (
              <div className="space-y-6">
                <div className="bg-black/40 p-4 rounded border border-cyber-primary/20">
                  <div className="text-xs text-gray-500 mb-1">Raw Payload Details</div>
                  <code className="text-cyber-accent block break-all">{selectedLog.details}</code>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-tighter mb-2">Engineer's Logic</div>
                  <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 border-cyber-primary pl-4">
                    {selectedLog.status === 'critical' 
                      ? "This pattern indicates a classic SQLi attempt. My standard procedure triggers an immediate blackhole of the source IP at the edge firewall and alerts the DB owner for a sanitization audit."
                      : selectedLog.status === 'warning'
                      ? "Frequent SSH attempts from internal IPs often suggest credential stuffing or a lateral movement script. I'd verify if the source IP belongs to a jump server or an authorized dev node."
                      : "Routine service-to-service communication. Established baseline monitoring allows us to ignore these unless volume spikes significantly."
                    }
                  </p>
                </div>

                <button className="w-full py-2 bg-cyber-primary text-cyber-bg font-bold rounded hover:bg-white transition-colors text-xs uppercase tracking-widest">
                  Deploy Auto-Response
                </button>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
                <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <p className="text-sm italic">Select a log entry from the table to begin forensic analysis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityLab;
