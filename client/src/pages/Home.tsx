import { ArrowUpRight, ArrowRight, ArrowDown, Mail, Linkedin, Phone, MapPin, Download, ExternalLink, Github, Youtube, Send, Bot, Code2, Terminal, Instagram, Facebook, Menu, X, Monitor, Network, ShieldCheck, GraduationCap, Check, Layers, ChevronRight, FileText, Wifi, Cpu } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'wouter';
import './portfolio.css';

const base = import.meta.env.BASE_URL;
const cvUrl = `${base}FAHMI_AHMED_GHAZAL_Resume.pdf`;
const profileUrl = `${base}Fahmi_Ahmed_Ghazal_Career_Profile.pdf`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [draftOpened, setDraftOpened] = useState(false);
  const [skillView, setSkillView] = useState('All');
  const experiences = [
    {
      title: 'IT Technician — End User & IT Infrastructure Support',
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
        'Delivered first-level support to 300+ users, achieving a 95% first-call resolution rate',
        'Administered Active Directory and supported user onboarding and offboarding',
        'Deployed workstations and maintained IT inventory and user documentation',
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
        'Managed hardware components and replacement-part inventory',
      ],
    },
  ];

  const skills = {
    'End User Support': ['Microsoft 365', 'Outlook', 'Desktop/laptop troubleshooting', 'Remote & onsite support', 'Printers & scanners', 'User access', 'Incident escalation'],
    Networking: ['Cisco switches/routers', 'VLAN segmentation', 'DHCP/DHCP relay', 'STP', 'VTP', 'ACLs', 'TCP/IP', 'LAN/WAN', 'MAC-based access control'],
    Wireless: ['Cisco Meraki', 'Grandstream', 'Ruijie Reyee', 'Cloud-managed AP deployment', 'Wi-Fi monitoring'],
    'Systems & Endpoints': ['Active Directory', 'Group Policy', 'Windows Server', 'Windows 10/11', 'PXE', 'SCCM', 'Palo Alto Cortex XDR'],
    'Business Applications': ['SAP Fiori', 'SAP SuccessFactors', 'SAP HANA', 'Zetalent', 'eZee Optimus POS'],
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
  ];

  const languages = [
    { lang: 'English', level: 'Fluent' },
    { lang: 'Arabic', level: 'Conversational' },
    { lang: 'Kiswahili', level: 'Fluent' },
    { lang: 'Hindi/Urdu', level: 'Conversational' },
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


  const skillGroups = ['All', 'Support & systems', 'Infrastructure', 'Applications & AI'];
  const visibleSkills = Object.entries(skills).filter(([name]) => {
    if (skillView === 'All') return true;
    if (skillView === 'Support & systems') return ['End User Support', 'Systems & Endpoints', 'Operating Systems & Platforms', 'Service Management'].includes(name);
    if (skillView === 'Infrastructure') return ['Networking', 'Wireless', 'Telephony & Security'].includes(name);
    return ['Business Applications', 'Development & AI'].includes(name);
  });
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${String(data.get('name') || '')}`;
    const message = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPreferred contact time: ${data.get('preferredTime') || 'Flexible'}\n\n${data.get('message')}`;
    setDraftOpened(true);
    window.location.href = `mailto:fahmyghazal@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="portfolio" id="top">
      <a href="#main-content" className="pf-skip">Skip to content</a>
      <header className="pf-header">
        <div className="pf-wrap pf-nav">
          <a href="#top" className="pf-brand" aria-label="Fahmi Ahmed Ghazal home"><span className="pf-monogram">fg<span>.</span></span><span>FAHMI GHAZAL<small>IT PROFESSIONAL · QATAR</small></span></a>
          <nav className={menuOpen ? 'pf-links is-open' : 'pf-links'} aria-label="Main navigation">
            {[['Work', '#work'], ['Experience', '#experience'], ['Expertise', '#expertise'], ['About', '#about']].map(([label, url]) => <a key={label} href={url} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href="#contact" className="pf-nav-contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16}/></a>
          </nav>
          <button className="pf-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main id="main-content">
        <section className="pf-hero pf-wrap" aria-labelledby="hero-title">
          <div className="pf-hero-copy">
            <div className="pf-eyebrow"><span className="pf-status-dot"/> OPEN TO NEW OPPORTUNITIES <span className="pf-hero-location">/ QATAR</span></div>
            <p className="pf-intro">Hello, I’m Fahmi Ahmed Ghazal.</p>
            <h1 id="hero-title">Keeping people<br/><span>connected.</span></h1>
            <p className="pf-role">End User Support Engineer <span>↗</span></p>
            <p className="pf-description">I solve everyday IT challenges and support the infrastructure behind them. 10+ years of hands-on experience helping teams across Qatar and the UAE work with confidence.</p>
            <div className="pf-actions"><a className="pf-button pf-button-primary" href={cvUrl} download="Fahmi_Ahmed_Ghazal_CV.pdf"><Download size={18}/> Download CV</a><a className="pf-button pf-button-outline" href="#contact">Let’s connect <ArrowUpRight size={18}/></a></div>
            <a className="pf-profile-link" href={profileUrl} download="Fahmi_Ahmed_Ghazal_Career_Profile.pdf"><FileText size={15}/> Download Career Profile <ArrowDown size={14}/></a>
            <div className="pf-hero-tools"><span>WINDOWS</span><i/><span>MICROSOFT 365</span><i/><span>CISCO</span><i/><span>LINUX</span></div>
          </div>
          <div className="pf-portrait-area">
            <div className="pf-orbit pf-orbit-one"/><div className="pf-orbit pf-orbit-two"/>
            <div className="pf-portrait-card">
              <div className="pf-photo-top"><span><span className="pf-status-dot"/> IT SUPPORT & NETWORKS</span><span>01 / FG</span></div>
              <img src={`${base}images/fahmi-portrait.jpg`} width="1240" height="1536" alt="Fahmi Ahmed Ghazal" fetchPriority="high" className="pf-portrait"/>
              <div className="pf-photo-caption"><div><strong>Fahmi Ahmed Ghazal</strong><span><MapPin size={13}/> Al Wukair, Qatar</span></div><a href="https://linkedin.com/in/fahmiahmedghazal/" target="_blank" rel="noreferrer" aria-label="Fahmi on LinkedIn"><Linkedin size={21}/></a></div>
            </div>
            <div className="pf-floating-badge"><ShieldCheck size={25}/><div><strong>Support that makes a difference.</strong><span>People. Systems. Solutions.</span></div></div>
            <span className="pf-portrait-note">HANDS-ON EXPERIENCE. HUMAN-FOCUSED SUPPORT.</span>
          </div>
        </section>

        <div className="pf-wrap"><section className="pf-stats" aria-label="Career highlights">
          {[['10+', 'Years in IT support', 'Qatar & UAE'], ['200+', 'Users supported', 'Current role · AMWAJ'], ['200+', 'Endpoints migrated', 'Symantec → Cortex XDR'], ['95%', 'First-call resolution', 'Previous role · NCC']].map(([n,label,note]) => <div key={label}><strong>{n}</strong><div><span>{label}</span><small>{note}</small></div></div>)}
        </section></div>

        <section className="pf-section pf-wrap" id="work">
          <div className="pf-section-head"><div><p className="pf-eyebrow">01 / SELECTED WORK</p><h2>Practical solutions.<br/><span>Real-world impact.</span></h2></div><p>A mix of enterprise IT delivery, independent development, and a curiosity for what comes next.</p></div>
          <div className="pf-featured-grid">
            <article className="pf-featured pf-pos-project">
              <div className="pf-pos-visual" aria-hidden="true"><div className="pf-demo-top"><span className="pf-pos-logo">FZ<span>POS</span></span><span>RESTAURANT WORKSPACE</span><i/></div><div className="pf-demo-body"><div className="pf-demo-menu"><span className="active">Overview</span><span>Orders</span><span>Kitchen</span><span>Reports</span></div><div className="pf-demo-screen"><div className="pf-demo-heading">Everything in order.<span>One connected workspace.</span></div><div className="pf-demo-tiles"><div><Monitor/><span>Point of sale</span></div><div><Layers/><span>Back office</span></div><div><FileText/><span>Reports</span></div></div><div className="pf-demo-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><small>INTERFACE ILLUSTRATION</small></div></div></div>
              <div className="pf-project-copy"><span className="pf-tag">INDEPENDENT DEVELOPMENT</span><h3>FamZz POS</h3><p>A restaurant point-of-sale project connecting ordering, kitchen tickets, staff workflows, and back-office reporting.</p><div className="pf-project-footer"><span>Product development · Restaurant technology</span><Link className="pf-round-link" href={`${base}projects/famzz-pos`} aria-label="Explore FamZz POS"><ArrowUpRight size={22}/></Link></div></div>
            </article>
            <article className="pf-featured pf-security-project"><div className="pf-security-visual" aria-hidden="true"><div className="pf-security-grid"/><div className="pf-shield-orbit"><ShieldCheck size={76} strokeWidth={1.2}/></div><span className="pf-system-label">ENDPOINT PROTECTION</span><div className="pf-security-flow"><span>Symantec</span><ArrowRight size={20}/><strong>Cortex XDR</strong></div><div className="pf-migration-count">200+<span>DESKTOPS & LAPTOPS</span></div></div><div className="pf-project-copy"><span className="pf-tag">ENTERPRISE IT</span><h3>A stronger security foundation.</h3><p>Migrated 200+ corporate endpoints from Symantec to Palo Alto Cortex XDR, supporting endpoint protection across the business.</p><div className="pf-project-footer"><span>Endpoint security · Migration delivery</span><a href="#experience" className="pf-round-link" aria-label="Read enterprise IT experience"><ArrowDown size={20}/></a></div></div></article>
          </div>
          <div className="pf-small-projects">
            {[{icon:Monitor,title:'Endpoint refresh',text:'Windows OS and SSD upgrades across 200+ corporate computers.'},{icon:Mail,title:'Email platform migration',text:'Supported 200+ users moving from Microsoft 365 to Google Workspace.'},{icon:Wifi,title:'Connected workplaces',text:'Grandstream Wi-Fi deployment, IP telephony relocation, cabling, and ISP coordination.'}].map(({icon:Icon,title,text})=><article key={title}><Icon size={23}/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="pf-experience-band" id="experience"><div className="pf-section pf-wrap pf-experience-layout"><div className="pf-experience-intro"><p className="pf-eyebrow">02 / THE JOURNEY</p><h2>Experience<br/>you can<br/><span>build on.</span></h2><p>From repairing hardware to supporting users and delivering infrastructure projects across multiple locations.</p><a href={cvUrl} download="Fahmi_Ahmed_Ghazal_CV.pdf" className="pf-text-link">Get the full CV <Download size={16}/></a></div><div className="pf-timeline">
          {experiences.map((exp,idx)=><article className="pf-experience-item" key={exp.company}><span className={idx===0?'pf-timeline-dot current':'pf-timeline-dot'}/><div className="pf-experience-meta"><span>{exp.period}</span><span><MapPin size={12}/>{exp.location}</span></div><h3>{exp.company}</h3><p className="pf-job-title">{exp.title}</p><ul>{exp.highlights.slice(0,3).map(t=><li key={t}>{t}</li>)}</ul>{exp.highlights.length>3&&<details className="pf-more"><summary>More about this role <ChevronRight size={14}/></summary><ul>{exp.highlights.slice(3).map(t=><li key={t}>{t}</li>)}</ul></details>}</article>)}
        </div></div></section>

        <section className="pf-section pf-wrap" id="expertise"><div className="pf-section-head"><div><p className="pf-eyebrow">03 / TECHNICAL TOOLKIT</p><h2>The tools behind<br/><span>the solutions.</span></h2></div><p>Practical knowledge built through deployments, troubleshooting, and everyday support.</p></div><div className="pf-filter" role="group" aria-label="Filter technical expertise">{skillGroups.map(g=><button type="button" aria-pressed={skillView===g} className={skillView===g?'active':''} onClick={()=>setSkillView(g)} key={g}>{g}</button>)}</div><div className="pf-skills-grid">{visibleSkills.map(([name,list],i)=><article key={name}><span className="pf-skill-number">{String(i+1).padStart(2,'0')}</span><h3>{name}</h3><div className="pf-chips">{list.map(s=><span key={s}>{s}</span>)}</div></article>)}</div></section>

        <section className="pf-wrap pf-about" id="about"><div className="pf-lab"><p className="pf-eyebrow">BEYOND THE HELP DESK</p><h2>Always learning.<br/><span>Always building.</span></h2><p>I’m an IT professional with a builder’s curiosity. Outside day-to-day support, I develop FamZz POS, work with Linux, and experiment with locally hosted AI models through Ollama.</p><div className="pf-lab-stack"><Terminal size={17}/> Linux <span>/</span> Ollama <span>/</span> GitHub <span>/</span> AI tools</div><a className="pf-text-link" href="https://github.com/Famz88" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={17}/></a><Cpu className="pf-lab-decoration" aria-hidden="true"/></div><div className="pf-qualifications"><p className="pf-eyebrow">EDUCATION & CONTINUOUS LEARNING</p><div className="pf-degree"><GraduationCap size={25}/><div><h3>BSc Information Technology</h3><p>Jomo Kenyatta University of Agriculture & Technology</p><span>2012 · Degree & transcripts attested for Qatar</span></div></div><div className="pf-cert-list">{certifications.map(c=><div key={c.name}><Check size={15}/><div><strong>{c.name}</strong><span>{c.issuer}</span></div></div>)}</div></div></section>

        <section className="pf-section pf-wrap pf-downloads" id="downloads"><div className="pf-section-head"><div><p className="pf-eyebrow">TAKE A CLOSER LOOK</p><h2>Choose your<br/><span>introduction.</span></h2></div><p>A detailed CV for your next shortlist. A visual career profile for a quick introduction.</p></div><div className="pf-download-grid"><a href={cvUrl} download="Fahmi_Ahmed_Ghazal_CV.pdf" className="pf-download-card"><div className="pf-document-preview"><img src={`${base}images/cv-preview.jpg`} loading="lazy" width="595" height="842" alt="Preview of the navy professional CV"/></div><div><span className="pf-tag">PDF · PROFESSIONAL CV</span><h3>The full picture.</h3><p>Experience, technical skills, qualifications, and key projects.</p><span className="pf-button pf-button-primary"><Download size={17}/> Download CV</span></div></a><a href={profileUrl} download="Fahmi_Ahmed_Ghazal_Career_Profile.pdf" className="pf-download-card"><div className="pf-document-preview"><img src={`${base}images/career-preview.jpg`} loading="lazy" width="1024" height="1536" alt="Preview of the Qatar career profile poster"/></div><div><span className="pf-tag">PDF · CAREER PROFILE</span><h3>A quick introduction.</h3><p>A visual overview of my background, expertise, and career goals.</p><span className="pf-button pf-button-outline"><Download size={17}/> Download Career Profile</span></div></a></div></section>

        <section className="pf-contact" id="contact"><div className="pf-wrap"><div className="pf-contact-top"><div><p className="pf-eyebrow"><span className="pf-status-dot"/> LET’S START A CONVERSATION</p><h2>Your next team member.<br/><span>Let’s make it happen.</span></h2></div><a className="pf-contact-arrow" href="mailto:fahmyghazal@outlook.com" aria-label="Email Fahmi"><ArrowUpRight size={50} strokeWidth={1.2}/></a></div><div className="pf-contact-links"><a href="mailto:fahmyghazal@outlook.com"><Mail size={20}/><span>EMAIL ME<strong>fahmyghazal@outlook.com</strong></span></a><a href="tel:+97477698378"><Phone size={20}/><span>GIVE ME A CALL<strong>+974 77698378</strong></span></a><div><MapPin size={20}/><span>BASED IN<strong>Al Wukair, Qatar</strong></span></div></div><p className="pf-licence-note">Qatar light vehicle driving licence · In progress</p><div className="pf-contact-bottom"><div className="pf-language-list">{languages.map(l=><span key={l.lang}>{l.lang} <small>{l.level}</small></span>)}</div><button type="button" className="pf-text-link" onClick={()=>setShowContactForm(!showContactForm)} aria-expanded={showContactForm} aria-controls="pf-contact-form">{showContactForm?'Close contact form':'Prefer a contact form?'} {showContactForm?<X size={16}/>:<ArrowRight size={16}/>}</button></div>
          {showContactForm&&<form className="pf-form" id="pf-contact-form" onSubmit={handleContactSubmit}><div className="pf-form-intro"><h3>Tell me what you have in mind.</h3><p>This opens a draft in your email app. Review it there and send when ready.</p></div><label>Your name<input name="name" autoComplete="name" required placeholder="Your name"/></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label><label className="pf-form-wide">Preferred contact time <small>(optional)</small><input name="preferredTime" placeholder="e.g. Afternoons, Qatar time"/></label><label className="pf-form-wide">Message<textarea name="message" rows={4} required placeholder="Tell me about the role or project."/></label><div className="pf-form-wide pf-form-submit"><button type="submit" className="pf-button pf-button-primary"><Send size={17}/> Open email draft</button>{draftOpened&&<span role="status">Please review and send the draft in your email app.</span>}</div></form>}
        </div></section>
      </main>
      <footer className="pf-footer pf-wrap"><div><a href="#top" className="pf-monogram" aria-label="Back to top">fg<span>.</span></a><p>© {new Date().getFullYear()} Fahmi Ahmed Ghazal</p></div><div className="pf-socials"><a href="https://linkedin.com/in/fahmiahmedghazal/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="https://github.com/Famz88" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>{socialLinks.map(({label,href,icon:Icon})=><a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon size={17}/></a>)}</div><a href="#top" className="pf-back-top">Back to top <ArrowUpRight size={14}/></a></footer>
    </div>
  );
}
