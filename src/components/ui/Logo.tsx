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
        'flex items-center gap-2.5 font-semibold tracking-tight transition-[opacity,transform] duration-150 ease-[var(--ease-out)] hover:opacity-80 active:scale-[0.98]',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white text-sm font-bold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]',
          iconClassName,
        )}
      >
        N
      </span>
      <span className={cn('text-base text-white', textClassName)}>Niyatna</span>
    </Link>
  );
};
