import type { ReactNode } from 'react';

import { cn } from '../../lib/utils';

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'start' | 'center';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'start',
  className,
  titleClassName,
  descriptionClassName,
  titleId,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div
          className={cn(
            'mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-8 bg-white/14" />
          {eyebrow}
        </div>
      )}
      <h2
        id={titleId}
        className={cn(
          'text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-7 text-zinc-400 sm:text-lg', descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
