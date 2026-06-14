import { ArrowRight01Icon, BookOpen01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { EARLY_ACCESS_URL, THESIS_URL } from '../../lib/links';
import { Button } from './Button';

type ProductCtaVariant = 'hero' | 'footer';

type ProductCtaProps = {
  variant: ProductCtaVariant;
};

const productCtaConfig = {
  hero: {
    wrapperClassName: 'flex w-full max-w-lg flex-col items-stretch gap-4 sm:flex-row sm:items-center',
    size: 'lg',
    primaryLabel: 'Map the first intent',
    secondaryLabel: 'Read the thesis',
  },
  footer: {
    wrapperClassName: 'flex w-full max-w-md flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center',
    size: 'md',
    primaryLabel: 'Start with intent',
    secondaryLabel: 'OpenIntent notes',
  },
} as const;

export function ProductCta({ variant }: ProductCtaProps) {
  const config = productCtaConfig[variant];

  return (
    <div className={config.wrapperClassName}>
      <Button as="a" href={EARLY_ACCESS_URL} size={config.size}>
        {config.primaryLabel}
        <span className="grid h-7 w-7 place-items-center rounded-full bg-earth/10 transition-transform duration-500 ease-[var(--ease-heavy)] group-hover:translate-x-1">
          <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
        </span>
      </Button>
      <Button as="a" href={THESIS_URL} variant="outline" size={config.size}>
        <HugeiconsIcon icon={BookOpen01Icon} className="h-4 w-4" />
        {config.secondaryLabel}
      </Button>
    </div>
  );
}
