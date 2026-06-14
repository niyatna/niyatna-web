import React from 'react';

import { cn } from '../../lib/utils';

type ButtonOwnProps<E extends React.ElementType> = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
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
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium whitespace-nowrap',
        'transition-[transform,opacity,box-shadow,background-color,color,border-color] duration-300 ease-[var(--ease-out)] active:scale-[0.98]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        variant === 'primary' && [
          'border border-white/10 bg-white text-black',
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_14px_34px_-18px_rgba(255,255,255,0.55)]',
          'hover:bg-zinc-200',
        ],
        variant === 'secondary' && [
          'border border-white/12 bg-white/[0.04] text-white backdrop-blur-md',
          'hover:border-white/22 hover:bg-white/[0.07]',
        ],
        variant === 'outline' && [
          'border border-white/14 bg-black/20 text-white backdrop-blur-sm',
          'hover:border-white/28 hover:bg-white/[0.06]',
        ],
        variant === 'ghost' && [
          'border border-transparent bg-transparent text-zinc-300',
          'hover:bg-white/[0.06] hover:text-white',
        ],
        size === 'sm' && 'px-3.5 py-1.5 text-sm',
        size === 'md' && 'px-5 py-2.5 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        className,
      )}
      {...componentProps}
    >
      {children}
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
