import { Link } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Container from './ui/Container';
import Badge from './ui/Badge';
import type { LegalSection } from '../legal/privacy-content';

interface LegalLayoutProps {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export default function LegalLayout({ title, updated, sections }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg">
      <Navbar />
      <Container className="flex-1 py-14">
        <Badge>Legal</Badge>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-app-text sm:text-4xl">{title}</h1>
        <p className="mt-2 text-[13px] text-app-muted">Última actualización: {updated}</p>

        <article className="prose-legal mt-8 max-w-none">
          {sections.map((section) => (
            <section key={section.heading} className="mb-8">
              <h2 className="mb-3 border-b border-app-border pb-2 text-[17px] font-bold text-app-text">{section.heading}</h2>
              <div className="space-y-3 text-[14px] leading-relaxed text-app-secondary [&_a]:rounded [&_a]:text-app-accent [&_a:hover]:underline [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-app-accent [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-app-text [&_ul]:space-y-1.5 [&_h3]:mt-4 [&_h3]:mb-1.5 [&_h3]:text-sm [&_h3]:font-bold [&_h3]:text-app-secondary">
                {section.body}
              </div>
            </section>
          ))}
        </article>

        <Link
          to="/"
          className="mt-4 inline-block rounded text-sm text-app-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
        >
          ← Volver al inicio
        </Link>
      </Container>
      <Footer />
    </div>
  );
}
