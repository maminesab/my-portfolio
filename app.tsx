
import React from 'react';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import SecurityLab from './components/SecurityLab';
import GeminiChat from './components/GeminiChat';
import { SKILLS, PROJECTS, CERTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-body text-cyber-text selection:bg-cyber-primary selection:text-cyber-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 hex-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-cyber-primary font-mono tracking-[0.2em] uppercase text-sm block">Established Credibility // 0x01</span>
              <h1 className="text-6xl md:text-7xl font-heading font-bold leading-tight">
                Alex <span className="text-cyber-primary">Vance</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-400 font-heading">
                Cybersecurity Engineer
              </p>
            </div>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Specialized in Defensive Security & Threat Analysis. Building resilient, identity-centric architectures for modern enterprises. I believe security is not just about tools—it’s about system-level thinking.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-cyber-primary text-cyber-bg font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1">
                View Security Projects
              </a>
              <button className="px-8 py-3 border border-cyber-muted text-white font-bold rounded-lg hover:border-cyber-primary transition-all">
                Download Resume
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-cyber-primary/10 blur-3xl rounded-full"></div>
            <Terminal />
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section id="about" className="py-24 border-y border-cyber-muted bg-black/20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold">Philosophy</h2>
            <blockquote className="text-2xl italic text-gray-400 border-l-4 border-cyber-accent pl-6 py-2">
              “Security is not about tools — it’s about thinking like an attacker and acting like an engineer.”
            </blockquote>
            <p className="text-gray-300 leading-relaxed">
              With over 6 years in the field, I focus on the intersection of human behavior and technical vulnerabilities. My approach is data-driven, prioritizing automation to allow security teams to focus on complex threat hunting rather than mundane alerts.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {CERTS.map(cert => (
              <div key={cert.name} className="bg-cyber-muted/30 p-6 rounded-xl border border-cyber-muted flex flex-col items-center text-center group hover:border-cyber-primary transition-colors">
                <img src={cert.logo} alt={cert.name} className="w-16 h-16 rounded-full grayscale group-hover:grayscale-0 transition-all mb-4" />
                <h4 className="font-bold text-white">{cert.name}</h4>
                <p className="text-xs text-gray-500 uppercase">{cert.issuer}</p>
                <p className="text-[10px] text-cyber-primary mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center">Skills <span className="text-cyber-primary">Matrix</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-cyber-muted/20 border border-cyber-muted p-8 rounded-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-primary/5 rounded-bl-full transform group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-heading font-bold text-cyber-primary mb-6 flex items-center">
                  <span className="w-8 h-px bg-cyber-primary mr-3"></span>
                  {skill.category}
                </h3>
                <div className="space-y-6">
                  {skill.items.map(item => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="text-[10px] bg-cyber-primary/10 text-cyber-primary px-2 py-0.5 rounded uppercase font-bold tracking-widest">{item.level}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold">Case Studies</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Real-world scenarios where I applied offensive thinking to defensive architecture. Note: Client names have been anonymized for confidentiality.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <div key={project.id} className="bg-cyber-bg border border-cyber-muted rounded-2xl p-8 flex flex-col space-y-6 hover:border-cyber-primary/50 transition-all group">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyber-primary transition-colors">{project.title}</h3>
                  <span className="text-[10px] text-gray-500 font-mono">ID: PROJ-{project.id}</span>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <label className="text-[10px] text-cyber-accent uppercase font-bold tracking-widest block mb-1">Context</label>
                    <p className="text-sm text-gray-300">{project.context}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-red-500 uppercase font-bold tracking-widest block mb-1">Threat Model</label>
                    <p className="text-sm text-gray-300">{project.threatModel}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-cyber-primary uppercase font-bold tracking-widest block mb-1">Impact</label>
                    <p className="text-sm text-gray-300 font-medium">{project.impact}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-cyber-muted flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-2 py-1 bg-cyber-muted/50 rounded text-[10px] text-gray-400 font-mono">{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Lab */}
      <SecurityLab />

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-cyber-bg relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-cyber-muted/20 border border-cyber-muted rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyber-accent/5 blur-3xl rounded-full"></div>
            
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-5xl font-heading font-bold">Secure <span className="text-cyber-accent">Contact</span></h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Open to security engineering roles and high-impact research collaborations. I prefer encrypted communications when possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="#" className="flex flex-col items-center p-6 bg-black/40 rounded-2xl hover:bg-cyber-primary/5 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyber-muted group-hover:bg-cyber-primary transition-colors text-white group-hover:text-cyber-bg mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="font-heading font-bold">Email</span>
                <span className="text-sm text-gray-500 mt-1">alex@vance.security</span>
              </a>

              <a href="#" className="flex flex-col items-center p-6 bg-black/40 rounded-2xl hover:bg-cyber-primary/5 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyber-muted group-hover:bg-cyber-primary transition-colors text-white group-hover:text-cyber-bg mb-4">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span className="font-heading font-bold">LinkedIn</span>
                <span className="text-sm text-gray-500 mt-1">in/alex-vance-sec</span>
              </a>

              <div className="flex flex-col items-center p-6 bg-black/40 rounded-2xl hover:bg-cyber-primary/5 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyber-muted group-hover:bg-cyber-primary transition-colors text-white group-hover:text-cyber-bg mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                </div>
                <span className="font-heading font-bold">PGP Key</span>
                <span className="text-sm text-gray-500 mt-1 cursor-pointer hover:text-cyber-primary">Copy Fingerprint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-cyber-muted bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyber-accent"></span>
            <span>SYSTEMS ONLINE // NO VULNERABILITIES DETECTED</span>
          </div>
          <div>© {new Date().getFullYear()} Alex Vance. Designed with Precision.</div>
          <div className="font-mono text-[10px]">BUILD: 2.4.0-STABLE</div>
        </div>
      </footer>

      {/* Gemini Security Advisor */}
      <GeminiChat />
    </div>
  );
};

export default App;
