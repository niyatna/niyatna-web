import { Logo } from '../ui/Logo';
import { ProductCta } from '../ui/ProductCta';
import { SectionHeader } from '../ui/SectionHeader';
import { FooterColumn, FooterLink, type FooterLink as FooterLinkData } from './FooterLinks';
import {
  EARLY_ACCESS_URL,
  OPEN_INTENT_URL,
  PROOF_OF_INTENT_URL,
  SITE_URL,
  THESIS_URL,
} from '../../lib/links';

const footerColumns: { title: string; links: FooterLinkData[] }[] = [
  {
    title: 'Brand',
    links: [
      { label: 'Thesis', href: THESIS_URL },
      { label: 'Early access', href: EARLY_ACCESS_URL },
      { label: 'Niyatna.xyz', href: SITE_URL },
    ],
  },
  {
    title: 'Primitives',
    links: [
      { label: 'OpenIntent', href: OPEN_INTENT_URL },
      { label: 'Proof of Intent', href: PROOF_OF_INTENT_URL },
      { label: 'Agentic company layer', href: '#openintent' },
    ],
  },
  {
    title: 'Direction',
    links: [
      { label: 'Intent capture', href: '#feature-01' },
      { label: 'Trusted delegation', href: '#feature-02' },
      { label: 'Evidence ledger', href: '#openintent' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="early-access" className="mt-20 border-t border-border-subtle bg-background px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-24 flex flex-col items-center text-center">
          <SectionHeader
            align="center"
            title="Start with intent. Return with proof."
            description="Niyatna is the public layer for turning human intention into delegated agentic execution that remains reviewable by the human."
            className="mb-8 max-w-3xl"
            titleClassName="mb-4 text-3xl md:text-5xl"
          />
          <ProductCta variant="footer" />
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-border-subtle pt-12 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Logo className="mb-6" textClassName="text-lg" />
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              A clean public brand for the bridge between human intent, AI-agent delegation, and proof-bearing execution.
            </p>
          </div>

          {footerColumns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Niyatna. Empowering human intent.</p>
          <div className="flex items-center gap-4">
            <FooterLink href={SITE_URL}>niyatna.xyz</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
