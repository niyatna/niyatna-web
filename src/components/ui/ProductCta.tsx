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
    wrapperClassName:
      'flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row',
    buttonClassName: 'w-full sm:w-auto',
    size: 'lg',
    primaryLabel: 'Join early access',
    secondaryLabel: 'Read the thesis',
    showArrow: true,
  },
  footer: {
    wrapperClassName: 'flex flex-col items-center gap-4 sm:flex-row',
    buttonClassName: undefined,
    size: 'md',
    primaryLabel: 'Start with intent',
    secondaryLabel: 'OpenIntent notes',
    showArrow: false,
  },
} as const;

export function ProductCta({ variant }: ProductCtaProps) {
  const config = productCtaConfig[variant];

  return (
    <div className={config.wrapperClassName}>
      <Button
        as="a"
        href={EARLY_ACCESS_URL}
        size={config.size}
        className={config.buttonClassName}
      >
        {config.primaryLabel}
        {config.showArrow && (
          <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
        )}
      </Button>
      <Button
        as="a"
        href={THESIS_URL}
        variant="outline"
        size={config.size}
        className={config.buttonClassName}
      >
        <HugeiconsIcon icon={BookOpen01Icon} className="h-4 w-4" />
        {config.secondaryLabel}
      </Button>
    </div>
  );
}
