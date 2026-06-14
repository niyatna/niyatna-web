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
  'hover:text-porcelain transition-[color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97]';

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-medium text-porcelain">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm text-gray-500">
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
