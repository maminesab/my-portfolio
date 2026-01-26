
import React from 'react';
import { Project, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Enterprise Network Hardening',
    context: 'Securing a distributed hybrid-cloud corporate infrastructure.',
    threatModel: 'Lateral movement, unauthorized data exfiltration, ransomware.',
    tools: ['Splunk', 'Palo Alto FW', 'CrowdStrike', 'Tenable'],
    contribution: 'Designed and implemented network segmentation and automated patch management workflows.',
    impact: 'Reduced attack surface by 43% and mean time to remediate (MTTR) by 60%.'
  },
  {
    id: '2',
    title: 'Zero-Trust Architecture Migration',
    context: 'Moving from a traditional perimeter-based security to Identity-centric security.',
    threatModel: 'Compromised credentials, supply chain attacks.',
    tools: ['Okta', 'Zscaler', 'Azure AD', 'BeyondTrust'],
    contribution: 'Architected the transition for 5,000+ employees, replacing VPNs with secure application access.',
    impact: 'Eliminated VPN-based lateral movement risks and improved user auth speed by 30%.'
  },
  {
    id: '3',
    title: 'Automated Incident Response Pipeline',
    context: 'Reducing manual toil in the SOC for common alert types.',
    threatModel: 'Phishing, brute force, known CVE exploitation.',
    tools: ['Python', 'Cortex XSOAR', 'Elasticsearch', 'VirusTotal API'],
    contribution: 'Developed custom SOAR playbooks that handle 80% of low-level alerts without human intervention.',
    impact: 'Saved 200+ analyst hours monthly; improved consistency in investigation quality.'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Defensive Security',
    items: [
      { name: 'Threat Detection', level: 'Expert', details: 'SIEM (Splunk, Elastic), Custom Detection Logic' },
      { name: 'Incident Response', level: 'Advanced', details: 'Forensics, Containment, Eradication' }
    ]
  },
  {
    category: 'Offensive Security',
    items: [
      { name: 'Vulnerability Assessment', level: 'Advanced', details: 'Nessus, Burp Suite, Nmap' },
      { name: 'Red Teaming', level: 'Proficient', details: 'Phishing Simulations, Lateral Movement Testing' }
    ]
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS/Azure Security', level: 'Advanced', details: 'IAM, GuardDuty, Sentinel, S3 Hardening' },
      { name: 'Infrastructure as Code', level: 'Proficient', details: 'Terraform, Ansible' }
    ]
  }
];

export const CERTS: Certification[] = [
  { name: 'CISSP', issuer: 'ISC²', year: '2023', verifyLink: '#', logo: 'https://picsum.photos/seed/cissp/100/100' },
  { name: 'OSCP', issuer: 'OffSec', year: '2022', verifyLink: '#', logo: 'https://picsum.photos/seed/oscp/100/100' },
  { name: 'Security+', issuer: 'CompTIA', year: '2021', verifyLink: '#', logo: 'https://picsum.photos/seed/secplus/100/100' }
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Lab', href: '#lab' },
  { name: 'Contact', href: '#contact' }
];
