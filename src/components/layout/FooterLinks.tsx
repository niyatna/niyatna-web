import type { ReactNode } from 'react';

export type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

const footerLinkClassName =
  'transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.98]';

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-medium text-white">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm text-zinc-500">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={footerLinkClassName}
    >
      {children}
    </a>
  );
}
