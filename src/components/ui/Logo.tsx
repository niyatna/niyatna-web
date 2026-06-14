import { Link } from 'react-router';

import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const Logo = ({ className, iconClassName, textClassName }: LogoProps) => {
  return (
    <Link
      to="/"
      aria-label="Niyatna home"
      className={cn(
        'flex items-center gap-3 transition-[opacity,transform] duration-150 ease-[var(--ease-out)] hover:opacity-80 active:scale-[0.97]',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'grid h-8 w-8 place-items-center rounded-full border border-current/20 bg-current/5 text-sm font-semibold tracking-tight',
          iconClassName,
        )}
      >
        N
      </span>
      <span className={cn('text-xl font-semibold tracking-tight', textClassName)}>Niyatna</span>
    </Link>
  );
};
