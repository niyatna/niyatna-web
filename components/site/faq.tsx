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
    a: "Niyatna is the agentic-company formation system: the integrated operating stack, standards, rules, gates, and interfaces for forming and running agentic companies. We empower human intent to solve market problems by translating dreams into missions, visions, goals, and delegated AI agent workforces.",
  },
  {
    q: "Why does an Agentic Company start with real business problems?",
    a: "A company is not just a collection of people or AI agents; it is a solution to a market problem. Civilizations have problems, and companies solve them. Niyatna ensures that your agentic workforce is anchored to a real, core intent and problem-solving goal, rather than running hollow automation.",
  },
  {
    q: "What is an Agentic Company?",
    a: "An Agentic Company is the future standard of organization. It is not just a Kanban board with a chatbot. In an Agentic Company, specialized AI agents (across Finance, Marketing, Sales, and Operations) operate with defined personalities, missions, goals, responsibilities, targets, capabilities, knowledge bases, and tools like MCP skills and slash commands.",
  },
  {
    q: "How does the delegation loop work under this system?",
    a: "It starts with human intent. With intent, you get a dream. From that dream, you derive a mission. From that mission, a vision. From that vision, specific goals. Finally, these goals are delegated to specialized AI agents. This chain ensures that every autonomous action maps directly back to the human will.",
  },
  {
    q: "What boundaries and guardrails do the AI agents have?",
    a: "Every agent operates within strict permission gates and isolated workspaces. High-risk operations (such as ledger modifications, external integrations, or customer outreach) require human validation and are subject to administrator veto gates.",
  },
  {
    q: "What is the primary benefit of this system?",
    a: "Scaling problem-solving leverage. By delegating repetitive operational drag to a specialized, secure AI agent workforce, humans reclaim the space to think, direct, and solve higher-level business challenges.",
  },
]

export function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <SectionHeading>Questions, answered.</SectionHeading>
        <SectionLead className="mx-auto">
          The point is not more automation. The point is preserving human intent while agents multiply execution.
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
