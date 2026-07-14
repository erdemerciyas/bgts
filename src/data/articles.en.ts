import type { Article } from "./articles.tr";

export const ARTICLES_EN: Article[] = [
  {
    id: "kurumlarda-yapay-zeka",
    title: "Who Is Entrusted with the AI Initiative at C-Level in Enterprises?",
    author: "Alper Önsoy",
    excerpt:
      "The question of who should be entrusted with AI at the executive level remains a significant challenge for many large organizations. The imbalance of authority and responsibility among CDOs, CIOs, COOs, and CFOs directly impacts the success of AI projects.",
    coverImage: "/images/articles/kurumlarda-yapay-zeka.jpg",
    date: "2026-03-18",
    category: "Artificial Intelligence",
    readTime: 4,
    cardTags: ["AI Governance", "C-Suite", "AI Roles"],
    cardQuote: "Who Should Be Entrusted with the AI Initiative in Enterprises?",
    cardQuoteHighlight: "AI Initiative",
    cardTheme: "blue",
    body: `## Who Is Entrusted with the AI Initiative at C-Level in Enterprises?

The question of who should be entrusted with AI at the executive level — one of the most strategic and challenging topics in enterprises — has been a significant concern for many large organizations from day one.

> "When we look at many large organizations, we see that the AI initiative, initially entrusted to CDOs in the early days, was transferred to CIOs when technical challenges could not be overcome, to COOs when AI became a 'non-value-producing technical toy' and business value needed to be maximized, and most recently to CFOs when cost and governance issues emerged."

### The Difficult Position of CDOs

In next-generation management organizations, CDOs are responsible for the digital transformation of institutions — seemingly the perfect fit for AI initiatives. However, the primary problem with this model is the imbalance between "responsibility and authority." CDOs, who generally do not house large engineering and business units within their organizations, find themselves in a weak position in the power struggle with more established CIOs over "infrastructure/security" and with process-owning COOs over "who will control the process."

CDOs who own the AI vision in companies are not adequately supported by CIOs/COOs in most organizations and cannot manage the process end-to-end. As a result, AI projects under CDOs that lack architectural and technological support from the CIO and are not pulled forward by the COO risk remaining as mere slide presentations that never reach the field.

### The CIO Perspective: A Technology-Focused Approach

CIOs generally view AI as a "technology layer" focused on infrastructure, integration, and cybersecurity. The biggest operational challenge for CIOs, who need to be strict about SLA and IT processes, is their inability to allow the **fail fast** approach that AI specialists in other teams require.

Another problem is that they tend to focus too much on technology and often miss the cost and governance aspects. Yet another risk in this area is that the resulting AI technology solution lacks "business value." Most organizations are at a point where they have a working AI technology, but they don't know how to sell it, price it, or convert it into value. Many organizations with AI tied to the CIO struggle with this challenge.

### The COO Perspective: A Business-Focused Approach

COOs in the business layer are positioned as the point where AI is integrated into operations. However, unable to get the answer to "in which area of my business and how should I use AI?" from CIOs who lack a "business perspective," COOs often move forward with fast, small solutions that bypass corporate structures but have poorly planned costs and governance.

The "keep the business running" reflex inherent in the COO's DNA can lead to serious data leaks or technical debt.

### The Shift to CFOs

Recently, we see AI initiatives being tied to CFOs in many large global organizations. The primary reason for this is reported to be AI's two most risky areas: **"cost"** and **"governance."**

After major technology companies announced their retreat on AI costs, many organizations admitted they were in the same position. Governance will become an even more critical topic after the EU AI Act comes into effect in August.

While the "governance" aspect of AI was initially addressed by CDOs (as it should be) and secondarily by CIOs, over time the perspective has shifted toward risk, audit, and compliance. The increasing prominence of fraud, corruption, and criminal risk management in the AI space has also contributed to the shift of governance from CDOs/CIOs to CFOs.

The risks of assigning both cost and governance to CFOs include technical governance, legal ownership, ensuring the model is "fed with clean data," and CFOs — coming from an audit role model — restricting the playground that AI needs, potentially leaving the organization behind in the race.

### Conclusion: An Autonomous AI Board

Perhaps the solution is not to entrust the organization to a single power, but to design an **autonomous AI board** fed by the CDO's vision, the CIO's technology, and the CFO's risk filter.`,
  },
  {
    id: "llm-lerden-dslm-lere-donusum",
    title: "From LLMs to DSLMs: The Rise of Domain-Specific Language Models",
    author: "Alper Önsoy",
    excerpt:
      "AI is evolving from LLMs with the most data to domain-specific language models (DSLMs). The transition from costly and unregulated LLMs to SLMs offered in AI marketplaces provides cost and efficiency advantages for organizations.",
    coverImage: "/images/articles/llm-lerden-dslm-lere-donusum.jpg",
    date: "2026-03-08",
    category: "Artificial Intelligence",
    readTime: 3,
    cardTags: ["AI Insight"],
    cardQuote: "DSLM and SLM architectures lay the foundation for a new era in artificial intelligence.",
    cardQuoteHighlight: "artificial intelligence",
    cardTheme: "green",
    body: `## The Transition from Costly and Unregulated LLMs to DSLMs

AI is evolving from "LLMs that have access to the most data and provide information on many topics" toward domain-specific language models (DSLMs). Regulations expected to come into effect in August will begin to enforce this, and it is predicted that by the end of 2027, **50% of models will be domain-specific** (currently this figure is 1%).

### Advantages of DSLM Models

In an analysis published this week by sector analyst Errol Rasit, whose insights I enjoy, and in a subsequent video conference, the topic of how organizations adopting DSLM models can maximize the value from their proprietary data and sectoral insights through **high accuracy, enhanced reliability, and cost advantages** was evaluated in depth.

It is noted that Small Language Model (SLM) architectures equipped with sectoral knowledge provide **up to 90% lower costs** and significant energy savings compared to general models.

### AI Marketplaces

As businesses increasingly chain multiple specialized models together, AI Marketplaces will gain critical importance. These platforms will serve as central hubs for procuring audited specialized models and datasets, reducing costs, increasing efficiency, and paving the way for DSLM-focused innovation.

In other words, marketplaces will sell not only agents as expected but also specific datasets. For example, if you are opening a diet center, you could purchase a ready-made package with an agentic solution in front and a domain-specific SLM behind it.

### BGTS's Pioneering Experience

As a pioneering example, we currently use our own local **"Operational Excellence SLM"** — consolidated from all our MSP customers and cleansed of proprietary data — in 90% of our AIOps solutions for the customers we provide MSP services to. This way, the organizations we serve can confidently benefit from our AIOps solutions within our MSP framework.`,
  },
  {
    id: "pazarlamanin-yeni-musterisi-yapay-zeka-ajanalari",
    title: "Marketing's New Customer: AI Agents",
    author: "Alper Önsoy",
    excerpt:
      "Protocols enabling AI agents to shop among themselves are evolving every day. Brands that fail to adapt risk losing their connection with customers and becoming mere back-end warehouses where only large AI models place orders.",
    coverImage: "/images/articles/pazarlamanin-yeni-musterisi-yapay-zeka-ajanlari.jpg",
    date: "2026-03-25",
    category: "Artificial Intelligence",
    readTime: 3,
    cardTags: ["Agentic Commerce"],
    cardQuote: "Marketing's New Customer: AI Agents",
    cardQuoteHighlight: "AI Agents",
    cardTheme: "orange",
    body: `## Marketing's New Customer: AI Agents

Combining an article by Kartik Hosanagar from Harvard Business Review with a conversation we had with the CEO of one of Turkey's leading e-commerce organizations, some small but highly impactful insights emerged in my mind.

### Walmart and AI Agent Commerce

Walmart currently appears to be the leader in selling its products through popular AI models, and they are even designing the business model with OpenAI and Google. **ACP and UCP protocols**, which enable AI agents to shop among themselves, are evolving every day.

Brands that fail to adapt risk losing their connection with customers and becoming mere back-end warehouses where only large AI models place orders.

### Redefining Marketing

The rules of what we call "marketing" are being rewritten from scratch. For example, marketing tactics like the 19.99 pricing that creates a sense of urgency — tactics we've used for decades — or neuromarketing games will mean nothing to an artificial neural network (ANN).

> "When a decision-making AI agent is involved, no human will ever see that carefully crafted product page, customer reviews, or trust badges." — Kartik Hosanagar

### The Single Chat Screen Future

Gartner published an article long ago stating that "AI will end the front-end; all individual and enterprise applications will have a chat screen as their front-end." You won't have hundreds of apps on your phone — there will be a single chat screen. You won't have enterprise applications at work — there will be a single chat screen.

This reality will also apply to e-commerce. Over time, the interfaces you currently use to place orders will disappear, replaced by your AI agent.

### A Question Worth Considering

In short, AI in e-commerce is not just a new sales channel — it's a systemic transformation as significant as how Netflix redesigned the entertainment industry.

When I put all this together, one question comes to mind: **Have you ever thought about how the AI model on your phone — which you use every day and which perhaps knows you best, your weaknesses, interests, fears, and health status — could manipulate you when it becomes a "salesperson"?**`,
  },
  {
    id: "ai-governance-101",
    title: "AI Governance 101",
    author: "Erdoğan Bilici",
    excerpt:
      "A comprehensive guide covering the fundamental principles of AI governance, regulatory requirements, and the creation of corporate AI policies. The roadmap organizations should follow in light of the EU AI Act and global governance standards.",
    coverImage: "/images/articles/ai-governance-101.jpg",
    date: "2026-03-22",
    category: "Governance",
    readTime: 5,
    cardTags: ["AI Governance", "Regulation"],
    cardQuote: "AI governance is the fundamental framework for sustainable use.",
    cardQuoteHighlight: "AI governance",
    cardTheme: "violet",
    body: `## AI Governance 101

### Risk, Transparency, and the Balance of Responsibility

Artificial intelligence is no longer solely the domain of technical teams or innovation units. As AI becomes part of everyday work life in the corporate world, the need for it to be controlled and audited by a governing authority has become essential. Today, while businesses use AI for productivity gains, customer experience, decision support mechanisms, and new business models, they also face challenges around trust, accountability, data quality, ethical principles, and regulatory compliance. At this point, AI governance is not just a control mechanism — it becomes the fundamental framework for sustainable and trustworthy use.

### Why Is AI Governance Important?

AI systems differ from classical software in that they learn from data, produce variable outcomes depending on context, and can sometimes make decisions that are difficult to explain. Therefore, the need for governance is not merely a technical requirement. Questions such as what data a model was trained on, how fair its outputs are, what risk level it is assessed at, and how human oversight is positioned have moved to the center of every organization's agenda that uses AI. Especially in high-impact use scenarios, a lack of governance can lead to both reputational damage and legal consequences.

### Core Principles of a Strong AI Governance Approach

- **Transparency:** The purpose for which an AI system is used, how it works, and how its outputs should be interpreted should be as open as possible.
- **Accountability:** Clear roles and responsibilities within the organization should be defined for outcomes arising from AI systems.
- **Human oversight:** In critical decision areas, final evaluation should not be left entirely to automation.
- **Fairness and prevention of discrimination:** Training data and model outputs should be regularly reviewed against bias risks.
- **Privacy and data governance:** The quality, source, access rights, and regulatory compliance of data used should be managed together.
- **Security and resilience:** Models must be protected against misuse, manipulation, and unexpected error scenarios.

### How Are Regulations Shaping This Field?

Globally, AI governance is evolving from ethical principles into a field supported by concrete legislation and standards.

**The European Union's AI Act approach** classifies AI applications by risk level, imposing stricter obligations in high-risk use areas. Expected to be enacted in 2026, this approach makes transparency, record-keeping, human oversight, risk management, and conformity processes part of corporate responsibility.

**ISO 42001**, published in 2023, is the first international standard for AI management systems. Inspired by the ISO 27001 information security management standard, it defines what organizations must do for AI governance and enables them to demonstrate compliance through certification.

### Where Should Organizations Start with AI Governance?

- Create an inventory of AI applications
- Include each use scenario in risk analysis based on its impact and criticality
- Regularly test data quality, model performance, and potential biases
- Establish governance committees involving legal, information security, data management, and business units
- Provide AI literacy and responsible use training to employees
- Define human approval and appeal mechanisms in critical decision processes

### Conclusion

In the coming period, the key differentiator for organizations seeking to generate value from AI will not be simply using more advanced models. The real competitive advantage will come from managing these technologies within a reliable, explainable, traceable, and responsible framework. AI governance should therefore be viewed not as an obstacle, but as a strategic management layer that sustains innovation and builds long-term value and trust. When properly designed, it both facilitates regulatory compliance and builds trust among employees, customers, and stakeholders.`,
  },
  {
    id: "akilli-otomasyon",
    title: "How Smart Automation Liberates the Technical Team",
    author: "Sinan Demirci",
    excerpt:
      "In the managed services ecosystem, AI tools exist not to replace the technical team but to free them from the shackles of routine. Automation of repetitive requests, focus on analytical tasks, and 24/7 uninterrupted customer experience.",
    coverImage: "/images/articles/akilli-otomasyon.png",
    date: "2025-02-05",
    category: "Automation",
    readTime: 4,
    cardTags: ["AIOps", "Automation"],
    cardQuote: "AI tools free the technical team from the shackles of routine.",
    cardQuoteHighlight: "AI tools",
    cardTheme: "rose",
    body: `## How Smart Automation Liberates the Technical Team

In the managed services ecosystem, the most critical front where customer satisfaction is won or lost is typically the call center and "First Contact Resolution" (FCR) teams. Today, many organizations fall into the misconception of viewing AI as a cost-cutting tool or an alternative to human resources. However, the real formula for success is based on a very different vision: **AI tools exist not to replace the technical team, but to free them from the shackles of routine.**

Let's examine how an AI-powered operation creates a multiplier effect on overall service quality under three main headings.

### 1. Eliminating Repetitive Requests: Automating "Tasks"

The biggest energy thieves at IT service desks are high-volume but low-complexity standard tasks such as password resets, simple folder authorizations, or VPN connection issues. At this point, the introduction of smart voice and text bots creates an operational revolution.

Stanford University's leading AI researcher Andrew Ng's key finding on this topic serves as a compass for technology leaders:

> "AI doesn't automate professions, it automates the repetitive tasks within those professions."

When you free FCR teams from performing the same password reset hundreds of times a day, you take the first step toward unlocking their true potential.

### 2. Focusing on Analytical Tasks: The Real Human Value-Add

What does a technical team do once the routine workload is lifted? This is where the magic begins. Specialists no longer bogged down by simple requests find the opportunity to focus on more complex infrastructure issues, root cause analyses (RCA), and permanent system improvements.

MIT's world-renowned economist and author Daron Acemoğlu emphasizes the importance of **"empowering technologies"** in his research on technology's impact on working life. According to Acemoğlu, technology should not merely substitute human labor; instead, it should enable workers to take on more complex, analytical, and higher-value new tasks.

In managed services, smart automation creates exactly this "empowering" effect. Technical teams stop firefighting and transform into strategists who design architectural improvements to prevent fires from starting again.

### 3. Service Beyond Time: 24/7 Uninterrupted Customer Experience

An AI-powered operation takes the flexibility provided to customers beyond standard business hours or limited shift plans.

- **Instant Response:** When users report a problem, wait times drop to seconds.
- **Continuous Resolution:** Standard requests (e.g., unlocking a locked account) are resolved instantly, whether it's midnight or a weekend.
- **Proactive Communication:** In the event of a potential regional outage, AI bots instantly inform users, preventing call storms.

### Traditional vs. Smart Operations Comparison

The table below clearly shows how the vision change is reflected in operational outputs:

| Metric / Feature | Traditional FCR Approach | Smart Automation (AI) Supported Approach |
|---|---|---|
| Capacity & Duration | Business hours or limited shifts | 24/7 uninterrupted and instant intervention |
| Employee Focus | Repetitive tasks (password, authorization, etc.) | Root cause analysis and permanent system improvements |
| Customer Experience | Waiting in queue and delayed solutions | Zero wait time with instant self-service |
| Service Provider Role | Reactive support activated during crisis | Strategic partner predicting and optimizing risk |`,
  },
  {
    id: "malicious-server-cagi",
    title: "From Computer Viruses to the Malicious MCP Server Era",
    author: "Sinan Demirci",
    excerpt:
      "The evolution of cybersecurity threats from computer viruses in the 1990s to attacks targeting AI agents in the 2020s. Malicious MCP Servers emerge as next-generation attack surfaces that manipulate AI agents' decision-making mechanisms.",
    coverImage: "/images/articles/malicious-server-cagi.jpg",
    date: "2026-03-12",
    category: "Security",
    readTime: 3,
    cardTags: ["Cybersecurity", "AI Agents"],
    cardQuote: "Attackers now target AI agents, not applications.",
    cardQuoteHighlight: "AI agents",
    cardTheme: "cyan",
    body: `## From Computer Viruses to the "Malicious MCP Server" Era

Cybersecurity threats have undergone a serious evolution over the decades:

- **1990s:** Computer viruses infected files.
- **2000s:** Network-spreading worms arrived.
- **2010s:** Ransomware locked down organizations.
- **2020s:** Attackers began targeting not applications but **AI agents**.

One of the new risk areas: **Malicious MCP (Model Context Protocol) Servers.**

### Why Are MCP Servers Targeted?

Today, many AI agent systems connect to tools, APIs, databases, and operational systems via MCP. This turns MCP servers into a new attack surface, similar to the "macro viruses" or "malicious browser extensions" of the past.

### How Did the Evolution Happen?

In the past, the attacker's goal was:
- Corrupt the file
- Take over the system
- Spread within the network

Today, the goal is:
- Manipulate the AI agent's decision-making mechanism
- Perform context poisoning
- Generate fake tool responses
- Exfiltrate sensitive data through prompt chains
- Direct the agent to take wrong actions

In other words, the attack is no longer just on the "operating system" but on the **"decision-making model."**

### Why Is It Critical?

A malicious MCP server can:
- Return fake incident data
- Mislead operations teams
- Cause the agent to perform privilege escalation
- Generate responses carrying prompt injection
- Disguise as a trusted tool and leak data

This is exactly the AI-age equivalent of the impact created by malicious DLLs, trojan browser plugins, and fake package repositories in the past.

### What Will We See in the Coming Period?

The following structures will likely become standard:

- **Trusted MCP Registry** structures
- **MCP signing / certificate** mechanisms
- **Tool sandboxing**
- **Zero Trust AI Agent** architectures
- **Runtime policy enforcement**
- **Agent behavior auditing**

Because the question is no longer: "Is this code secure?" The question now is: **"Which source does this AI agent trust?"**`,
  },
  {
    id: "sla",
    title: "Beyond SLA Numbers: Delivering Value-Added Services to Customers",
    author: "Sinan Demirci",
    excerpt:
      "Having green SLA success rates is not enough for an IT service to be considered successful. We explore data analytics, automation, and gamification strategies to transform from a reactive supplier to a proactive business partner.",
    coverImage: "/images/articles/sla.png",
    date: "2025-02-15",
    category: "Infrastructure",
    readTime: 3,
    cardTags: ["MSP", "Customer Success"],
    cardQuote: "True success goes beyond standard contract terms.",
    cardQuoteHighlight: "True success",
    cardTheme: "blue",
    body: `## Beyond SLA Numbers: Delivering "Value-Added" Services to Customers

Is it enough for an IT service to be considered successful if only the Service Level Agreement (SLA) success rates are green and incident-to-request ratios are at target levels? Most of the time, no.

Our experience in Customer Success Management has shown us that true success comes from going beyond standard contract terms and producing "value-added" work that directly contributes to the customer's business goals.

So, where should we focus to transform from a reactive supplier to a proactive business partner and create this added value in managed services?

### 1. Turning Data into Strategic Advice

We need to go beyond standard metrics that only report the past. For example, deep-dive analyses using the "assignment group" field in data analysis allow us to identify bottlenecks. Similarly, by performing location-based workload analyses, we can predict which regions will see increased call volumes and shape resource planning accordingly.

**Converting data into action is the greatest added value that can be offered to a customer.**

### 2. Breaking the Routine with Automation and AI (and Exceeding Expectations)

We should not view AI and automation merely as cost-reduction tools. When we integrate these technologies into IT support operations, we are actually liberating our most valuable resource: our people.

Let me illustrate with a current example: In one of our projects with an existing 5x8 desktop support agreement, we are deploying an **AI-powered password reset call center bot** to take the user experience to the next level. This significantly reduces the time the FCR (First Contact Resolution) team spends on routine password resets.

More importantly, we are providing our customer with a **24/7 uninterrupted password reset system** that goes far beyond the contract scope. When repetitive simple requests are automated, the technical team finds the opportunity to focus on much more complex and analytical tasks.

### 3. Increasing Dynamism with Gamification

At the heart of service quality lie highly motivated teams. Including gamification mechanics in support operations both nurtures intrinsic motivation and makes achieving operational goals more enjoyable and sustainable.

Let's not forget: **a motivated technical team is the most important carrier of value delivered to the customer.**

### Conclusion

In summary, the CSM role goes far beyond firefighting — it is the **art of creating strategic value at the customer's table** by managing technology, data, and human resources in harmony.`,
  },
];
