import React from 'react';

import { cn } from '../../lib/utils';

type ButtonOwnProps<E extends React.ElementType> = {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: E;
};

export type ButtonProps<E extends React.ElementType = 'button'> =
  ButtonOwnProps<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof ButtonOwnProps<E>>;

type ButtonComponent = (<E extends React.ElementType = 'button'>(
  props: ButtonProps<E> & { ref?: React.ComponentPropsWithRef<E>['ref'] },
) => React.ReactElement | null) & {
  displayName?: string;
};

const renderButton = <E extends React.ElementType = 'button'>(
  { className, variant = 'primary', size = 'md', as, children, ...props }: ButtonProps<E>,
  ref: React.ComponentPropsWithRef<E>['ref'],
) => {
  const Component = as ?? 'button';
  const componentProps = Component === 'button' ? { type: 'button', ...props } : props;

  return (
    <Component
      ref={ref}
      className={cn(
        'group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full font-medium whitespace-nowrap',
        'transition-[transform,opacity,box-shadow,background-color,color,border-color] duration-500 ease-[var(--ease-heavy)] active:scale-[0.98]',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
        variant === 'primary' && [
          'border border-clay/40 bg-clay text-earth',
          'shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_18px_40px_rgba(196,130,81,0.20)]',
          'before:bg-[radial-gradient(circle_at_25%_0%,rgba(255,255,255,0.48),transparent_34%)]',
          'hover:bg-[#d69b6f]',
        ],
        variant === 'secondary' && [
          'border border-porcelain/12 bg-porcelain/[0.055] text-porcelain backdrop-blur-md',
          'shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]',
          'hover:border-porcelain/22 hover:bg-porcelain/[0.085]',
        ],
        variant === 'dark' && [
          'border border-porcelain/10 bg-ink text-porcelain',
          'shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-porcelain/[0.06]',
        ],
        variant === 'outline' && [
          'border border-porcelain/16 bg-porcelain/[0.02] text-porcelain',
          'hover:border-clay/35 hover:bg-clay/10 hover:text-clay',
        ],
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-7 py-4 text-base',
        className,
      )}
      {...componentProps}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Component>
  );
};

export const Button = React.forwardRef(
  renderButton as unknown as React.ForwardRefRenderFunction<
    unknown,
    ButtonProps<React.ElementType>
  >,
) as ButtonComponent;

Button.displayName = 'Button';
