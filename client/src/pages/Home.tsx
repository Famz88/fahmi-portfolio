import { Mail, Linkedin, Phone, MapPin, Download, ExternalLink, Github, Youtube, Send, Clock3, Bot, Code2, Terminal, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, type FormEvent } from 'react';
import { Link } from 'wouter';

/**
 * Modern Technical Minimalism Portfolio
 * Design: Clean, grid-based layout with cyan accents
 * Typography: IBM Plex Mono for headings, Inter for body
 * Color: Deep slate blue primary (#1e293b), Cyan accent (#06b6d4)
 * 
 * Contact Features:
 * - Download CV: Direct PDF download
 * - Contact Me: Opens email client
 * - Call: Direct phone link
 * - LinkedIn: Opens LinkedIn profile
 */

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const experiences = [
    {
      title: 'IT Technician (IT Support & Network Administration)',
      company: 'AMWAJ Group of Companies',
      location: 'Qatar',
      period: 'January 2023 – Present',
      highlights: [
        'Provide L1/L2 support to 200+ users across multiple departments and locations, resolving hardware, software, network, and application incidents with a focus on SLA compliance and user satisfaction',
        'Configure and manage Cisco switches with VLAN segmentation, DHCP relay, STP, VTP, and ACLs while troubleshooting LAN and endpoint connectivity',
        'Deploy, configure, and monitor cloud-managed access points on Cisco Meraki, Grandstream, and Ruijie Reyee platforms; implement MAC-based access controls at selected sites',
        'Support SAP Fiori, SAP SuccessFactors, SAP HANA, Zetalent, eZee Optimus POS, and internal POS software',
        'Administer FingerTec TA100/TA100C and ZKTeco SpeedFace-V5L devices, including registration, server connectivity, and attendance reporting',
        'Install and troubleshoot CCTV/NVR/DVR/IP camera systems, IP telephony, network printers, scanners, and MFPs',
        'Deploy Windows endpoints via PXE, USB, and Microsoft Configuration Manager; perform OS, SSD, and hardware upgrades',
        'Maintain accurate IT asset records, lifecycle tracking, hardware allocation, and support documentation',
      ],
    },
    {
      title: 'IT Helpdesk Specialist',
      company: 'NCC Group Limited',
      location: 'Abu Dhabi, UAE',
      period: 'June 2017 – May 2022',
      highlights: [
        'Provided first-level support for 300+ users with a 95% first-call resolution rate',
        'Administered Active Directory, including onboarding, offboarding, user access, and workstation deployment',
        'Installed and configured workstations, peripherals, enterprise applications, and network connectivity',
        'Maintained IT inventory, equipment lifecycle records, and user documentation',
      ],
    },
    {
      title: 'Hardware Technician',
      company: 'AMWAJ Catering Services Company Limited',
      location: 'Qatar',
      period: 'March 2014 – March 2017',
      highlights: [
        'Diagnosed and repaired desktop, laptop, and peripheral hardware issues',
        'Installed operating systems and applications and performed preventive maintenance',
        'Assembled and configured computer systems to specification',
        'Reduced average repair turnaround time by 40% through process improvements',
        'Managed hardware components and replacement-part inventory',
      ],
    },
  ];

  const keyAchievements = [
    'Support 200+ users across multiple departments and locations with SLA-focused L1/L2 service delivery',
    'Delivered enterprise network, wireless, endpoint, SAP, telephony, and security-system support across Qatar sites',
    'Led endpoint security, hardware, email, IP telephony, ISP, and Wi-Fi infrastructure migrations',
    'Achieved a 95% first-call resolution rate supporting 300+ users at NCC Group',
    'Reduced average hardware repair turnaround time by 40% through process improvements',
    'Built and released FamZz POS, an independent Windows restaurant point-of-sale application',
  ];

  const majorProjects = [
    {
      title: 'Enterprise Security Migration',
      description: 'Executed large-scale migration of endpoint protection from Symantec to Palo Alto Cortex XDR across 200+ desktops and laptops, strengthening threat detection, response capability, and centralized security visibility',
    },
    {
      title: 'Enterprise Endpoint Hardware Refresh',
      description: 'Led a major Windows OS and SSD upgrade project across 200+ corporate desktops and laptops, significantly improving boot times, endpoint performance, and device reliability',
    },
    {
      title: 'Enterprise Email Migration',
      description: 'Led a major email platform migration from Microsoft 365 to Google Workspace across 200+ users, ensuring secure mailbox transfer, minimal downtime, user access continuity, and smooth staff adoption across the organization',
    },
    {
      title: 'IP Telephony Migration',
      description: 'Led relocation of IP telephony from Mesaieed Camp to Al Wukair offices, coordinated ISP IP-PBX installation and connectivity, and commissioned IP phones across multiple buildings',
    },
    {
      title: 'Internet & ISP Coordination',
      description: 'Coordinated Internet service installation across multiple locations, managing requirements, installation, testing, and service readiness with ISP partners',
    },
    {
      title: 'Grandstream Wi-Fi Infrastructure',
      description: 'Delivered end-to-end Wi-Fi deployments including access-point configuration, structured cabling and termination, SSID setup, connectivity testing, and monitoring',
    },
    {
      title: 'FamZz POS – Windows Restaurant Point-of-Sale',
      description: 'Developed and released a standalone Windows x64 POS for dine-in, takeaway, and delivery operations with kitchen tickets, back office, cash shifts, day-close reports, offline role-based data, encrypted backups, signed licensing, and SAP outbound queue integration. Verified v1.0.4 with 38 automated regression tests and dependency audits.',
      link: 'https://famz88.github.io/famzz-pos-downloads/website',
    },
    {
      title: 'FamZzTech1 – Technology Content',
      description: 'Run a YouTube and Instagram technology channel covering gadgets, software, AI tools, and tutorials while administering additional TikTok and Facebook pages',
      link: 'https://www.youtube.com/@famzztech1',
    },
  ];

  const skills = {
    Networking: ['Cisco switches/routers', 'VLAN segmentation', 'DHCP/DHCP relay', 'STP', 'VTP', 'ACLs', 'TCP/IP', 'LAN/WAN', 'MAC-based access control'],
    Wireless: ['Cisco Meraki', 'Grandstream', 'Ruijie Reyee', 'Cloud-managed AP deployment', 'Wi-Fi monitoring'],
    'Systems & Endpoints': ['Active Directory', 'Group Policy', 'Windows Server', 'Windows 10/11', 'PXE', 'SCCM', 'Palo Alto Cortex XDR'],
    'Business Applications': ['SAP Fiori', 'SAP SuccessFactors', 'SAP HANA', 'SAP BTP (in progress)', 'Zetalent', 'eZee Optimus POS'],
    'Telephony & Security': ['IP telephony/IP-PBX', 'CCTV/NVR/DVR/IP cameras', 'FingerTec', 'ZKTeco biometrics'],
    'Operating Systems & Platforms': ['Windows 10/11', 'Windows Server', 'Linux', 'Ubuntu', 'PXE', 'SCCM'],
    'Development & AI': ['FamZz POS', 'Ollama local LLMs', 'GitHub', 'AI productivity tools'],
    'Service Management': ['L1/L2 support', 'Incident management', 'SLA compliance', 'IT asset lifecycle', 'Technical documentation'],
  };

  const certifications = [
    { name: 'CCNA Professional Qualification', issuer: 'Berkeley Training & Educational Consultancy, Doha (June 2025) — Qatar-attested' },
    { name: 'Palo Alto Networks Cybersecurity Foundations', issuer: 'Palo Alto Networks / Meeza Academy (October 2025)' },
    { name: 'Artificial Intelligence: From Infrastructure to Applications', issuer: 'Huawei / Meeza Academy (February 2026)' },
    { name: 'CompTIA Cisco Networking Pro (V8) course', issuer: 'Computer Pride (July 2026)' },
    { name: 'CS50x: Introduction to Computer Science', issuer: 'Harvard University (2022)' },
    { name: 'SAP BTP Administrator Course', issuer: 'In progress' },
  ];

  const languages = [
    { lang: 'English', level: 'Fluent' },
    { lang: 'Arabic', level: 'Conversational' },
    { lang: 'Kiswahili', level: 'Fluent' },
    { lang: 'Hindi/Urdu', level: 'Conversational' },
  ];

  const focusAreas = [
    {
      icon: Terminal,
      title: 'Enterprise IT & Networks',
      description: 'Cisco switching, VLANs, cloud-managed Wi-Fi, Active Directory, SCCM, SAP applications, IP telephony, CCTV, biometrics, and multi-site ISP coordination.',
    },
    {
      icon: Code2,
      title: 'Windows App Development',
      description: 'Independent development of FamZz POS for Windows x64, including offline workflows, role-based access, encrypted backups, licensing, testing, and SAP queue integration.',
    },
    {
      icon: Bot,
      title: 'Local AI & Linux',
      description: 'Linux-based technical workflows and offline hosting of open-source AI models with Ollama for private experimentation, productivity, research, and content creation.',
    },
  ];

  const socialLinks = [
    { label: 'FamZzTech1 on YouTube', href: 'https://youtube.com/@famzztech1', icon: Youtube },
    { label: 'FamZzTech1 on Instagram', href: 'https://www.instagram.com/famzztech1/', icon: Instagram },
    { label: 'FamZzTech on TikTok', href: 'https://www.tiktok.com/@famzztech', icon: ExternalLink },
    { label: 'DreamFuel8 on TikTok', href: 'https://www.tiktok.com/@dreamfuel8', icon: ExternalLink },
    { label: 'AI Reimagined on TikTok', href: 'https://www.tiktok.com/@aireimaginedtiktok', icon: ExternalLink },
    { label: 'Deen.75 on TikTok', href: 'https://www.tiktok.com/@deen.75', icon: ExternalLink },
    { label: 'Facebook page', href: 'https://www.facebook.com/share/1CePhLFEGB/', icon: Facebook },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '${import.meta.env.BASE_URL}FAHMI_AHMED_GHAZAL_Resume.pdf`;
    link.download = 'FAHMI_AHMED_GHAZAL_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+97477698378';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:fahmyghazal@outlook.com?subject=Hello%20Fahmi&body=I%20would%20like%20to%20connect%20with%20you.';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/fahmiahmedghazal/', '_blank', 'noopener,noreferrer');
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const availability = String(formData.get('availability') || 'Flexible');
    const preferredTime = String(formData.get('preferredTime') || 'Not specified');
    const message = String(formData.get('message') || '');
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nAvailability: ${availability}\nPreferred contact time: ${preferredTime}\n\n${message}`;
    setContactSent(true);
    window.location.href = `mailto:fahmyghazal@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Fahmi Ahmed Ghazal</h1>
            <p className="text-sm text-muted-foreground">IT Infrastructure Specialist | Windows App Developer | Local AI Practitioner</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleEmailClick}
              className="text-accent hover:text-accent/80 transition-colors p-2 hover:bg-secondary rounded-lg"
              title="Send Email"
            >
              <Mail size={20} />
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="text-accent hover:text-accent/80 transition-colors p-2 hover:bg-secondary rounded-lg"
              title="Visit LinkedIn"
            >
              <Linkedin size={20} />
            </button>
            <button 
              onClick={handleCallClick}
              className="text-accent hover:text-accent/80 transition-colors p-2 hover:bg-secondary rounded-lg"
              title="Call Now"
            >
              <Phone size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Hero Section */}
        <section className="mb-16 pb-8 border-b-2 border-accent/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-primary">IT Infrastructure, Windows Applications & Local AI</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                CCNA-trained IT Support and Network Specialist with 10+ years of experience across Qatar and the UAE. I support enterprise users, networks, endpoints, SAP applications, IP telephony, and security systems while independently developing Windows applications such as FamZz POS. I also work with Linux, host open-source AI models offline using Ollama, and manage technology-focused social media channels.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Download size={18} className="mr-2" />
                  Download CV
                </Button>
                <Button 
                  onClick={() => setShowContactForm(true)}
                  variant="outline"
                >
                  Contact Form
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  className="text-accent border-accent hover:bg-accent/10"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
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
                    <button 
                      onClick={handleCallClick}
                      className="text-accent hover:underline font-medium"
                    >
                      +974 77698378
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <button 
                      onClick={handleEmailClick}
                      className="text-accent hover:underline font-medium break-all"
                    >
                      fahmyghazal@outlook.com
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t border-border">
                  <Linkedin size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <button 
                      onClick={handleLinkedInClick}
                      className="text-accent hover:underline font-medium text-sm flex items-center gap-1"
                    >
                      View Profile <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-2 border-t border-border">
                  <Github size={18} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <a href="https://github.com/Famz88" target="_blank" rel="noreferrer" className="text-accent hover:underline font-medium text-sm flex items-center gap-1">
                      github.com/Famz88 <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {keyAchievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <span className="text-accent font-bold text-lg">✓</span>
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
                <Icon className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold text-primary mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </article>
            ))}
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

        {/* Projects & Technical Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Projects & Technical Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {majorProjects.map((project, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
                <h3 className="text-lg font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                {'link' in project && project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:underline">
                    View project <ExternalLink size={14} />
                  </a>
                )}
                {project.title.startsWith('FamZz POS') && (
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <a href="https://famz88.github.io/famzz-pos-downloads/website/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                      Product website <ExternalLink size={14} />
                    </a>
                    <a href="https://famz88.github.io/famzz-pos-downloads/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                      Live demo <ExternalLink size={14} />
                    </a>
                    <Link href="/projects/famzz-pos" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                      Case study <ExternalLink size={14} />
                    </Link>
                    <a href="https://github.com/Famz88/famzz-pos-downloads" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                )}
                {project.title.startsWith('FamZzTech1') && (
                  <a href="https://www.youtube.com/@famzztech1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:underline">
                    <Youtube size={14} /> YouTube channel
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Content & Social Operations */}
        <section className="mb-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4">Technology Content & Social Operations</h2>
              <p className="text-muted-foreground mt-3 max-w-3xl">I administer technology, AI, motivation, and educational pages across YouTube, Instagram, TikTok, and Facebook, covering content planning, publishing, tutorials, and audience-focused digital operations.</p>
            </div>
            <a href="https://github.com/Famz88" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline text-sm"><Github size={17} /> View GitHub profile</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                <Icon className="text-accent flex-shrink-0" size={19} />
                <span className="text-sm font-medium">{label}</span>
                <ExternalLink className="ml-auto text-muted-foreground" size={14} />
              </a>
            ))}
          </div>
        </section>

        {/* AI & Linux Lab */}
        <section className="mb-16">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-10 grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4"><Bot className="text-accent" size={28} /><span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Personal technical practice</span></div>
              <h2 className="text-3xl font-bold mb-4">AI & Linux Lab</h2>
              <p className="text-primary-foreground/80 leading-relaxed">I use Linux as part of my technical workflow and host open-source AI models locally with Ollama. This supports private, offline experimentation for productivity, research, automation, content creation, and technical problem-solving without depending entirely on cloud services.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/Famz88" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-4 py-3 text-sm hover:bg-primary-foreground/10"><Github size={17} /> Developer profile</a>
              <a href="https://youtube.com/@famzztech1" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-4 py-3 text-sm hover:bg-primary-foreground/10"><Youtube size={17} /> AI and tech content</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <span className="text-accent font-bold text-lg">■</span>
                <div>
                  <p className="font-semibold text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Languages */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-accent pl-4">Education</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-2">Bachelor of Science in Information Technology</h3>
              <p className="text-accent font-semibold mb-1">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
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

        {/* Contact Form */}
        {showContactForm && (
          <section id="contact-form" className="mb-16 scroll-mt-24">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary">Start a conversation</h2>
                  <p className="text-muted-foreground mt-2">Share a little context and your preferred timing. Your email app will open with the message ready to send.</p>
                </div>
                <Send className="text-accent flex-shrink-0" size={24} />
              </div>
              <form onSubmit={handleContactSubmit} className="grid md:grid-cols-2 gap-5">
                <label className="space-y-2 text-sm font-medium">
                  Your name
                  <input name="name" required className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm font-medium">
                  Your email
                  <input name="email" type="email" required className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-accent" placeholder="you@example.com" />
                </label>
                <label className="space-y-2 text-sm font-medium">
                  Availability
                  <select name="availability" defaultValue="Flexible" className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-accent">
                    <option>Immediate</option>
                    <option>This week</option>
                    <option>Within two weeks</option>
                    <option>Flexible</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm font-medium">
                  Preferred contact time <span className="text-muted-foreground font-normal">(optional)</span>
                  <input name="preferredTime" className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-accent" placeholder="e.g. Qatar time, afternoons" />
                </label>
                <label className="space-y-2 text-sm font-medium md:col-span-2">
                  Message
                  <textarea name="message" required rows={5} className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-accent" placeholder="Tell me about the role, project, or support you need." />
                </label>
                <div className="md:col-span-2 flex flex-wrap items-center gap-4">
                  <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90"><Send size={17} className="mr-2" /> Open email draft</Button>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Clock3 size={16} /> Usually responds within one business day</span>
                  {contactSent && <span className="text-sm text-accent">Email draft opened.</span>}
                </div>
              </form>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-6 opacity-90">Let's discuss how I can support your IT infrastructure and team</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => setShowContactForm(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Open Contact Form
            </Button>
            <Button 
              onClick={handleLinkedInClick}
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View LinkedIn
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Fahmi Ahmed Ghazal. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Famz88" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline"><Github size={14} /> GitHub</a>
            <a href="https://famz88.github.io/famzz-pos-downloads/website/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline"><Code2 size={14} /> FamZz POS</a>
            <a href="https://youtube.com/@famzztech1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline"><Youtube size={14} /> FamZzTech1</a>
          </div>
          <p className="mt-3">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
