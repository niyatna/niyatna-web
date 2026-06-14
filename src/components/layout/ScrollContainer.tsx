import type { ReactNode } from 'react';

type ScrollContainerProps = {
  children: ReactNode;
  onScrollTopChange: (scrollTop: number) => void;
};

export function ScrollContainer({ children, onScrollTopChange: _onScrollTopChange }: ScrollContainerProps) {
  void _onScrollTopChange;
  return <>{children}</>;
}
