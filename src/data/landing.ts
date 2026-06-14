export const pipeline = [
  {
    title: 'Intent',
    eyebrow: 'human signal',
    body: 'A person states the desired outcome, taste, constraints, risk tolerance, and what evidence would make the work believable.',
  },
  {
    title: 'Delegation',
    eyebrow: 'bounded handoff',
    body: 'The intent becomes a packet with allowed actions, approval gates, context scope, private boundaries, and stopping conditions.',
  },
  {
    title: 'Execution',
    eyebrow: 'agentic labor',
    body: 'Workers move through tasks, reviewers challenge outputs, and orchestrators keep the loop tied to the original intent.',
  },
  {
    title: 'Proof',
    eyebrow: 'reviewable trust',
    body: 'Every meaningful claim returns with evidence: diffs, checks, screenshots, receipts, URLs, logs, or decision trails.',
  },
  {
    title: 'Return',
    eyebrow: 'time / leverage',
    body: 'The human gets back time, agency, and probability acceleration instead of another dashboard to babysit.',
  },
] as const;

export const intentAnatomy = [
  ['target', 'What outcome should exist when the loop ends.'],
  ['context', 'Memory, files, taste, domain rules, and prior decisions that must shape execution.'],
  ['constraints', 'Budget, privacy, access, legal, quality, time, and human approval boundaries.'],
  ['delegates', 'Agents, tools, humans, or systems trusted to act on specific slices of the intent.'],
  ['proof', 'The evidence format required before the result can be believed.'],
  ['return', 'What the human should recover: time, options, clarity, money, reputation, or rest.'],
] as const;

export const ecosystem = [
  {
    name: 'Niyatna',
    role: 'Public parent brand',
    copy: 'The simple name for the movement: empowering human intent by turning desire into governed execution.',
  },
  {
    name: 'OpenIntent',
    role: 'Protocol / specification',
    copy: 'A future open grammar for passing intent, context, permissions, and proof requirements between agentic systems.',
  },
  {
    name: 'Proof of Intent',
    role: 'Verification primitive',
    copy: 'The mechanism that forces delegated work to return evidence before it can be called done.',
  },
] as const;

export const manifesto = [
  'The next interface is not another chat box. It is a contract between a human intention and a system that can act without erasing the human behind it.',
  'Delegation is how companies already create leverage. Agentic AI expands that leverage, but only if the work remains bounded, reviewable, and faithful to the intent that started it.',
  'Niyatna is the public language for that bridge: from niat, to delegation, to execution, to proof, to time returned.',
] as const;
