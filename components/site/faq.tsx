import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "./section"

const faqs = [
  {
    q: "What is Niyatna?",
    a: "Niyatna is a formation system for agentic companies. It gives a company the operating layer, standards, agents, memory, approval gates, and proof needed to turn human intent into governed work.",
  },
  {
    q: "Is this just another chatbot or automation agency?",
    a: "No. Chatbots answer prompts. Automation agencies wire one-off workflows. Niyatna forms the company system around agent work: who can ask, what agents can do, what context they can access, when approval is required, and what proof must come back.",
  },
  {
    q: "What is an agentic company?",
    a: "An agentic company is a company where authorized people can ask, assign, retrieve context, automate routines, and verify outcomes through a shared operating system instead of relying on scattered chats, memory, and manual follow-up.",
  },
  {
    q: "What is OpenIntent?",
    a: "OpenIntent is the intent layer underneath Niyatna. It turns a messy request into a structured operating packet: goal, owner, constraints, permissions, risk level, expected output, and proof requirements.",
  },
  {
    q: "What is Proof of Intent?",
    a: "Proof of Intent is Niyatna's verification primitive. Every meaningful agent action should return evidence—output, logs, screenshots, checks, review status, and what changed—so the company can audit the result.",
  },
  {
    q: "How does Niyatna keep humans in control?",
    a: "Agents work inside role boundaries. Sensitive actions can be staged behind approval gates, scoped credentials, sandboxed execution, and veto windows before anything external or destructive happens.",
  },
  {
    q: "Where does company memory live?",
    a: "It depends on the deployment. Niyatna can connect SOPs, docs, decisions, customer context, and proof history from the company's approved memory layer, then expose only the context each role is allowed to use.",
  },
  {
    q: "Is access gated?",
    a: "Yes. Niyatna is not meant to be open self-serve software for anyone with a prompt. A company needs enough operational discipline, ownership, data readiness, and approval structure before agent work can be safely delegated.",
  },
  {
    q: "Is our data safe?",
    a: "Niyatna is designed for private, scoped deployments. Data handling depends on the final architecture, but the default standard is least-privilege access, company-controlled infrastructure where configured, approval gates for risky actions, and no broad agent access without a reason.",
  },
]

export function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <SectionHeading>Questions, answered.</SectionHeading>
        <SectionLead className="mx-auto">
          The short version: Niyatna is not a chatbot. It is the governed operating layer for companies ready to become agentic.
        </SectionLead>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border-border/60 bg-card/40 backdrop-blur-sm"
        >
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
