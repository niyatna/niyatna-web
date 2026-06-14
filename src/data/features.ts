import type { IconSvgElement } from '@hugeicons/react';
import {
  ArchiveRestoreIcon,
  CheckListIcon,
  CommandLineIcon,
  CpuIcon,
  FileSearchIcon,
  GitBranchIcon,
} from '@hugeicons/core-free-icons';

export type FeatureId = '01' | '02' | '03' | '04' | '05' | '06';

export type Feature = {
  id: FeatureId;
  navTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconSvgElement;
  visualTitle: string;
  visualRows: string[];
};

export const features: Feature[] = [
  {
    id: '01',
    navTitle: 'INTENT PACKET',
    eyebrow: 'Capture',
    title: 'Turn raw intent into an executable packet.',
    description:
      'Niyatna starts by preserving the human signal: goal, taste, constraints, risk, deadline, and the proof needed before work can be trusted.',
    bullets: ['Goal + taste captured together', 'Constraints stay attached to the work', 'Proof requirements defined up front'],
    icon: FileSearchIcon,
    visualTitle: 'Intent packet / build public brand surface',
    visualRows: ['goal: agentic company bridge', 'taste: clean, fast, proof-first', 'approval: publish only after review'],
  },
  {
    id: '02',
    navTitle: 'TRUST GATES',
    eyebrow: 'Delegation',
    title: 'Separate safe autonomy from human approval.',
    description:
      'The system knows which work can move, which actions need explicit permission, and which private or irreversible steps must never be guessed.',
    bullets: ['Autonomous lanes stay bounded', 'Publishing/spend/privacy are gated', 'Human judgment is called back early'],
    icon: CheckListIcon,
    visualTitle: 'Trust gate / policy router',
    visualRows: ['allowed: draft, test, summarize', 'approval: publish, spend, send', 'blocked: secrets, irreversible actions'],
  },
  {
    id: '03',
    navTitle: 'AGENT LOOP',
    eyebrow: 'Execution',
    title: 'Run work through worker, reviewer, and verifier loops.',
    description:
      'Niyatna frames agentic work as a loop, not a one-shot chat: assign, produce, inspect, verify, and return only what deserves human attention.',
    bullets: ['Worker output is not final truth', 'Reviewer checks shape and gaps', 'Verifier produces evidence'],
    icon: CpuIcon,
    visualTitle: 'Agent loop / parallel execution',
    visualRows: ['worker: builds candidate', 'reviewer: catches mismatch', 'verifier: runs checks + proof'],
  },
  {
    id: '04',
    navTitle: 'PROOF OF INTENT',
    eyebrow: 'Evidence',
    title: 'Every outcome comes back with receipts.',
    description:
      'Proof of Intent is the evidence layer: screenshots, diffs, logs, links, test output, and decision records that let the human review reality.',
    bullets: ['Claims require evidence', 'Receipts are linked to the original intent', 'Review becomes faster than redoing'],
    icon: ArchiveRestoreIcon,
    visualTitle: 'Proof bundle / result returned',
    visualRows: ['diff: source changed', 'test: build + lint passed', 'screenshot: viewport verified'],
  },
  {
    id: '05',
    navTitle: 'OPENINTENT',
    eyebrow: 'Protocol',
    title: 'A shared vocabulary for intent handoff.',
    description:
      'OpenIntent is the possible primitive: a way to describe goals, permissions, context, and proof so agentic systems can cooperate cleanly.',
    bullets: ['One name per handoff concept', 'Portable context and permissions', 'Proof schema remains machine-readable'],
    icon: CommandLineIcon,
    visualTitle: 'OpenIntent / schema draft',
    visualRows: ['intent.id', 'constraints[]', 'proof.required[]'],
  },
  {
    id: '06',
    navTitle: 'AGENCY RETURNED',
    eyebrow: 'Outcome',
    title: 'The final product is time and agency returned.',
    description:
      'The point is not more machine activity. The point is less operational drag and more room for the human to think, choose, build, rest, and decide.',
    bullets: ['Less repeated explanation', 'More leverage per decision', 'Time returns to the human'],
    icon: GitBranchIcon,
    visualTitle: 'Returned / human agency',
    visualRows: ['time saved: compounding', 'decisions: fewer, better', 'human: still in command'],
  },
];
