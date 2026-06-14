import { Logo } from '../ui/Logo';
import { ProductCta } from '../ui/ProductCta';
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
      { label: 'Agentic layer', href: '#features' },
    ],
  },
  {
    title: 'Direction',
    links: [
      { label: 'Intent packet', href: '#feature-01' },
      { label: 'Trust gates', href: '#feature-02' },
      { label: 'Evidence ledger', href: '#proof' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="early-access" className="border-t border-white/[0.08] bg-background px-4 pb-10 pt-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-24 flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.025] p-8 text-center backdrop-blur-sm sm:p-12">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">03 — Access</div>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Start with intent. Return with proof.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            Niyatna is the public layer for turning human intention into delegated agentic execution that remains reviewable by the human.
          </p>
          <div className="mt-8">
            <ProductCta variant="footer" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-12 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Logo className="mb-6" />
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Human intent, delegated work, and proof-bearing execution — packaged as a clean public brand.
            </p>
          </div>

          {footerColumns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-sm text-zinc-600 md:flex-row">
          <p>© {new Date().getFullYear()} Niyatna. Empowering human intent.</p>
          <FooterLink href={SITE_URL}>niyatna.xyz</FooterLink>
        </div>
      </div>
    </footer>
  );
};
