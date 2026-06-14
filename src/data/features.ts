export type FeatureId = '01' | '02' | '03' | '04' | '05' | '06';

export type FeatureVideo = {
  /** H.264 MP4 source. Recorded at 4:3, silent, looping. */
  src: string;
  /** Optional WebM source for smaller payloads on supporting browsers. */
  webm?: string;
  /** Optional poster image shown before the clip loads. */
  poster?: string;
};

export type Feature = {
  id: FeatureId;
  navTitle: string;
  title: string;
  description: string;
  video?: FeatureVideo;
};

export const featureBackgroundImage = '';

export const features: Feature[] = [
  {
    id: '01',
    navTitle: 'INTENT CAPTURE',
    title: 'Intent becomes a structured command.',
    description:
      'Niyatna starts from the human layer: a goal, constraint, taste, deadline, risk tolerance, and desired proof. The first artifact is not a prompt — it is an intent packet that can be delegated without losing the human signal.',
  },
  {
    id: '02',
    navTitle: 'TRUSTED DELEGATION',
    title: 'Delegation without blind autonomy.',
    description:
      'AI agents can move work forward, but the human should not disappear. Niyatna separates what can run, what needs approval, what must be verified, and what stays private before execution begins.',
  },
  {
    id: '03',
    navTitle: 'AGENTIC EXECUTION',
    title: 'Agents execute in coordinated loops.',
    description:
      'Tasks move through worker, reviewer, and evidence loops rather than one-shot chat. The goal is leverage: more surface area covered, fewer repeated decisions, and clearer paths from desire to result.',
  },
  {
    id: '04',
    navTitle: 'PROOF OF INTENT',
    title: 'Every outcome returns with proof.',
    description:
      'Proof of Intent is the mechanism language: actions should return diffs, checks, screenshots, URLs, receipts, or decision trails. The human reviews evidence instead of trusting a claim.',
  },
  {
    id: '05',
    navTitle: 'OPENINTENT',
    title: 'A future protocol for intent handoff.',
    description:
      'OpenIntent is the protocol lane: a shared way to describe intent, permissions, context, and proof requirements so agentic systems can cooperate without flattening the human behind them.',
  },
  {
    id: '06',
    navTitle: 'TIME RETURNED',
    title: 'Leverage returns as human agency.',
    description:
      'The end state is not “more automation” for its own sake. The outcome is time returned to think, rest, build, love, decide, and choose higher-leverage work with less operational drag.',
  },
];
