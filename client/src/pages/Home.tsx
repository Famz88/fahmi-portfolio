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
    link.href = `${import.meta.env.BASE_URL}FAHMI_AHMED_GHAZAL_Resume.pdf`;
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
