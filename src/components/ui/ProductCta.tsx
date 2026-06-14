import { ArrowRight01Icon, GithubIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { EARLY_ACCESS_URL, THESIS_URL } from '../../lib/links';
import { Button } from './Button';

type ProductCtaVariant = 'hero' | 'footer';

type ProductCtaProps = {
  variant: ProductCtaVariant;
};

const productCtaConfig = {
  hero: {
    wrapperClassName: 'flex flex-col items-center justify-center gap-3 sm:flex-row',
    size: 'lg',
    primaryLabel: 'Map first intent',
    secondaryLabel: 'View thesis',
  },
  footer: {
    wrapperClassName: 'flex flex-col items-center justify-center gap-3 sm:flex-row',
    size: 'md',
    primaryLabel: 'Start with intent',
    secondaryLabel: 'Read the thesis',
  },
} as const;

export function ProductCta({ variant }: ProductCtaProps) {
  const config = productCtaConfig[variant];

  return (
    <div className={config.wrapperClassName}>
      <Button as="a" href={EARLY_ACCESS_URL} size={config.size}>
        {config.primaryLabel}
        <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
      </Button>
      <Button as="a" href={THESIS_URL} variant="outline" size={config.size}>
        <HugeiconsIcon icon={GithubIcon} className="size-4" strokeWidth={2} />
        {config.secondaryLabel}
      </Button>
    </div>
  );
}
