import type { IconSvgElement } from '@hugeicons/react';
import {
  ArchiveRestoreIcon,
  ClockIcon,
  FileSearchIcon,
  Globe02Icon,
  Notification01Icon,
  SecurityLockIcon,
} from '@hugeicons/core-free-icons';

export type MoreFeature = {
  icon: IconSvgElement;
  title: string;
  description: string;
};

export const moreFeatures: MoreFeature[] = [
  {
    icon: FileSearchIcon,
    title: 'Intent memory',
    description: 'Goals, taste, constraints, and prior decisions stay attached to the work instead of disappearing into chat history.',
  },
  {
    icon: SecurityLockIcon,
    title: 'Permission boundaries',
    description: 'Safe actions can run; publishing, spend, privacy, and irreversible moves require explicit human approval.',
  },
  {
    icon: ArchiveRestoreIcon,
    title: 'Evidence ledger',
    description: 'Important actions return receipts: diffs, checks, screenshots, URLs, logs, and decision notes.',
  },
  {
    icon: Notification01Icon,
    title: 'Human review points',
    description: 'The system calls the human back when judgment matters instead of pretending every choice is automatable.',
  },
  {
    icon: Globe02Icon,
    title: 'OpenIntent lane',
    description: 'A possible shared schema for goals, permissions, context, and proof across agentic systems.',
  },
  {
    icon: ClockIcon,
    title: 'Time returned',
    description: 'The outcome is less operational drag and more time for human agency, not automation theatre.',
  },
];
