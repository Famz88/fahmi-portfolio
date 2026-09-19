import { Mail, Linkedin, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Modern Technical Minimalism Portfolio
 * Design: Clean, grid-based layout with cyan accents
 * Typography: IBM Plex Mono for headings, Inter for body
 * Color: Deep slate blue primary (#1e293b), Cyan accent (#06b6d4)
 */

export default function Home() {
  const experiences = [
    {
      title: 'IT Technician',
      company: 'AMWAJ Catering Group',
      location: 'Qatar',
      period: 'Jan 2023 – Present',
      highlights: [
        'Manage and support all company IT infrastructure including networks and system upgrades',
        'Configure Cisco switches, routers, and wireless access points (VLANs, DHCP, ACLs)',
        'Deploy and troubleshoot Ruijie Reyee switches, access points, and cloud-managed systems',
        'Support GrandStream APs and cloud-managed wireless environments',
        'Diagnose network outages and coordinate with ISPs to minimize downtime',
        'Provide Level 1 & 2 desktop support across Windows, macOS, Linux, printers, and mobile devices',
      ],
    },
    {
      title: 'IT Helpdesk Specialist',
      company: 'NCC Group Ltd',
      location: 'UAE',
      period: 'Jun 2017 – May 2022',
      highlights: [
        'Provided first-line support to 300+ enterprise users',
        'Resolved hardware, software, and network incidents via tickets, calls, and walk-ins',
        'Installed and configured OS, applications, and enterprise systems',
        'Supported remote employees using VPN and remote access tools',
        'Achieved 95% first-call resolution and 4.8/5 user satisfaction rating',
      ],
    },
    {
      title: 'Hardware Technician',
      company: 'AMWAJ Catering Services',
      location: 'Qatar',
      period: 'Mar 2013 – Mar 2017',
      highlights: [
        'Installed, repaired, and maintained desktops, laptops, and peripherals',
        'Performed diagnostics and preventive maintenance to reduce system downtime',
        'Optimized troubleshooting processes to improve response times',
        'Documented repair logs and provided technical reports',
      ],
    },
  ];

  const skills = {
    'Core Competencies': [
      'IT Support',
      'Network Configuration',
      'System Administration',
      'Cybersecurity',
      'Troubleshooting',
      'Remote Support',
    ],
    'Technologies': [
      'Cisco (Switches, Routers, AP, Meraki)',
      'Ruijie Reyee',
      'GrandStream',
      'Microsoft 365',
      'SAP',
      'ServiceNow',
    ],
    'Operating Systems': [
      'Windows XP–11',
      'macOS',
      'Linux/Ubuntu',
      'iOS',
      'Android',
    ],
    'Tools & Platforms': [
      'VPN',
      'Remote Desktop',
      'AnyDesk',
      'TeamViewer',
      'Citrix',
      'Freshdesk',
      'Zendesk',
    ],
  };

  const certifications = [
    'Palo Alto Networks Cybersecurity Foundations',
    'Cisco Certified Network Associate (CCNA)',
    'CompTIA Network+',
    'Technical Support Fundamentals – Coursera',
    'Windows 11 Troubleshooting – LinkedIn',
    'IT Service Desk Careers – LinkedIn',
    'CS50 Computer Science – HarvardX',
  ];

  const languages = [
    { lang: 'English', level: 'Fluent' },
    { lang: 'Arabic', level: 'Conversational' },
    { lang: 'Kiswahili', level: 'Native' },
    { lang: 'Hindi/Urdu', level: 'Conversational' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Fahmi Ahmed Ghazal</h1>
            <p className="text-sm text-muted-foreground">IT Support Engineer | Network Technician</p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:fahmyghazal@outlook.com" className="text-accent hover:text-accent/80 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/fahmiahmedghazal/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="tel:+97477698378" className="text-accent hover:text-accent/80 transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Hero Section */}
        <section className="mb-16 pb-8 border-b-2 border-accent/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-primary">IT Professional with 10+ Years Experience</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Specializing in enterprise IT support, network infrastructure, cybersecurity practices, and systems administration. 
                Skilled in troubleshooting complex issues, managing Cisco/Ruijie/GrandStream networks, and maintaining secure, 
                high-availability environments across Windows, macOS, Linux, and cloud platforms.
              </p>
              <div className="flex gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Download size={18} className="mr-2" />
                  Download CV
                </Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 h-fit">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Al Wukair, Qatar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+974 77698378</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">fahmyghazal@outlook.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="flex gap-3 text-sm">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <span className="text-accent font-bold text-lg">✓</span>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Languages */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Education</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">B.Sc. Information Technology</h3>
              <p className="text-accent font-semibold mb-1">Jomo Kenyatta University of Agriculture & Technology</p>
              <p className="text-sm text-muted-foreground">Graduated 2012</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Languages</h2>
            <div className="space-y-3">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-card border border-border rounded-lg">
                  <span className="font-semibold">{lang.lang}</span>
                  <span className="text-accent font-bold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Soft Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Troubleshooting & Problem Solving',
              'Communication & Customer Service',
              'Time Management',
              'Team Collaboration',
              'Attention to Detail',
              'Leadership & Mentoring',
            ].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                <span className="text-accent text-xl">→</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-6 opacity-90">Let's discuss how I can support your IT infrastructure and team</p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get in Touch
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View LinkedIn
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Fahmi Ahmed Ghazal. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
