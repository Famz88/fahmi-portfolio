import { ArrowLeft, ExternalLink, Github, CheckCircle2, Monitor, Database, ShieldCheck, TestTube2 } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const capabilities = [
  {
    icon: Monitor,
    title: 'Restaurant operations',
    description: 'Dine-in, takeaway, and delivery orders with kitchen tickets, menu, table, staff, cash-shift, and day-close workflows.',
  },
  {
    icon: Database,
    title: 'Offline-first data',
    description: 'Local database workflows keep the application useful during connectivity interruptions, with an SAP outbound queue for compatible integrations.',
  },
  {
    icon: ShieldCheck,
    title: 'Controlled access and backups',
    description: 'Role-based staff access, encrypted backups, signed annual license-file activation, and a 14-day evaluation period.',
  },
  {
    icon: TestTube2,
    title: 'Verified release',
    description: 'Version 1.0.4 was verified with 38 automated regression tests and dependency audits reporting zero known vulnerabilities.',
  },
];

export default function FamzzPos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container py-5 flex items-center justify-between gap-4">
          <Link href={import.meta.env.BASE_URL} className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <ArrowLeft size={17} /> Back to portfolio
          </Link>
          <a href="https://github.com/Famz88/famzz-pos-downloads" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            <Github size={17} /> GitHub repository
          </a>
        </div>
      </header>

      <main className="container py-12 md:py-20">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">Independent Windows application</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">FamZz POS</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-5 leading-relaxed">A Windows restaurant point-of-sale application designed for practical, offline-capable operations.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://famz88.github.io/famzz-pos-downloads/website" target="_blank" rel="noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90"><ExternalLink size={17} className="mr-2" /> Product website</Button>
            </a>
            <a href="https://github.com/Famz88/famzz-pos-downloads" target="_blank" rel="noreferrer">
              <Button variant="outline"><Github size={17} className="mr-2" /> View on GitHub</Button>
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mt-16">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-card border border-border rounded-lg p-6">
              <Icon className="text-accent mb-5" size={26} />
              <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </section>

        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 mt-16 pt-10 border-t border-border">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-5">What I built</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>FamZz POS is a standalone Windows x64 application for restaurants and cafeterias. It brings front-of-house ordering, kitchen workflow, and back-office administration into one focused desktop experience.</p>
              <p>The application uses an offline local database with role-based staff access, encrypted backup handling, and signed license-file activation. An SAP outbound queue supports integration with a separately configured compatible endpoint.</p>
              <p>The release process included automated regression coverage, dependency auditing, an installer, user guide, live web demo, and a licensing website.</p>
            </div>
          </div>
          <aside className="bg-secondary/50 rounded-lg p-6 h-fit">
            <h2 className="text-lg font-bold text-primary mb-4">Release snapshot</h2>
            <dl className="space-y-4 text-sm">
              <div><dt className="text-muted-foreground">Platform</dt><dd className="font-semibold mt-1">Windows x64</dd></div>
              <div><dt className="text-muted-foreground">Verified version</dt><dd className="font-semibold mt-1">v1.0.4</dd></div>
              <div><dt className="text-muted-foreground">Automated regression tests</dt><dd className="font-semibold mt-1">38</dd></div>
              <div><dt className="text-muted-foreground">Security audit</dt><dd className="font-semibold mt-1 inline-flex items-center gap-2"><CheckCircle2 className="text-accent" size={16} /> Zero known vulnerabilities</dd></div>
            </dl>
          </aside>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>FamZz POS · Independent project by Fahmi Ahmed Ghazal</span>
          <Link href={import.meta.env.BASE_URL} className="text-accent hover:underline">Return to portfolio</Link>
        </div>
      </footer>
    </div>
  );
}
