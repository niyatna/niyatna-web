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
    description:
      'Keep the original human context close: goals, taste, constraints, and previous decisions are treated as execution-critical input.',
  },
  {
    icon: SecurityLockIcon,
    title: 'Permission boundaries',
    description:
      'Separate safe autonomous actions from approval gates, private data, spend, publishing, and irreversible operations.',
  },
  {
    icon: ArchiveRestoreIcon,
    title: 'Evidence ledger',
    description:
      'Every important action should leave a reviewable trail: diff, check result, screenshot, receipt, or decision record.',
  },
  {
    icon: Notification01Icon,
    title: 'Human review points',
    description:
      'The system returns when judgment is needed instead of pretending all decisions can be automated away.',
  },
  {
    icon: Globe02Icon,
    title: 'Agentic company layer',
    description:
      'Niyatna can describe how individuals and companies delegate work to agent workforces without losing governance.',
  },
  {
    icon: ClockIcon,
    title: 'Time as the output',
    description:
      'The point is not machine activity. The point is more time and agency for the human who carried the intent.',
  },
];
