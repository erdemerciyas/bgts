import type { Article } from "./articles.tr";

export const ARTICLES_EN: Article[] = [
  {
    id: "kurumlarda-yapay-zeka",
    title: "Who Is Entrusted with the AI Initiative at C-Level in Enterprises?",
    author: "Alper Önsoy",
    excerpt:
      "The question of who should be entrusted with AI at the executive level remains a significant challenge for many large organizations. The imbalance of authority and responsibility among CDOs, CIOs, COOs, and CFOs directly impacts the success of AI projects.",
    coverImage: "/images/articles/kurumlarda-yapay-zeka.jpg",
    date: "2026-06-24",
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
    date: "2026-05-11",
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
    date: "2026-07-02",
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
    date: "2026-07-01",
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
    date: "2026-07-07",
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
    date: "2026-06-02",
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
  {
    id: "yapay-zeka-modelleri-finansal-risk",
    title: "Can AI Models Create Financial Risk?",
    author: "Alper Önsoy",
    excerpt:
      "Although the financial control of AI usage is one of today's most important topics, popular AI models change their behavior and ship model updates without notice or control. Instead of helping, they are becoming a hidden and growing threat to the financial stability of organizations.",
    coverImage: "/images/articles/yapay-zeka-modelleri-finansal-risk/cover.jpeg",
    date: "2026-07-14",
    category: "Artificial Intelligence",
    readTime: 3,
    cardTags: ["AI Governance", "FinOps", "AI"],
    cardQuote: "Can AI Models Create Financial Risk?",
    cardQuoteHighlight: "AI Models",
    cardTheme: "blue",
    body: `## Can AI Models Create Financial Risk?

Although the financial control of AI usage is one of today's most important topics, popular AI models change their behavior and ship model updates without notice or control. Instead of helping, they are becoming a hidden and growing threat to the financial stability of organizations.

In effect, this is a unilateral and unannounced intervention in what is supposed to be a two-sided commercial agreement, and at scale it can seriously shake an organization's budget.

In our conversations with C-level executives at different organizations, we also see that although all of them have taken important steps toward the financial governance of AI, it is unclear how they will control this unilateral change, and they are taking serious hits because of it.

The share of the IT budget allocated to AI averaged 26% in 2025 and is projected to reach 55% by early 2028 (Gartner). With numbers like these, this is no longer a simple "IT matter" — it has become a financial risk at the board level.

### Key Threats:

- Unannounced changes by leading AI model providers create a financial risk that falls within nobody's area of responsibility inside the organization.
- In high-volume AI workflows, even a tiny model update from the vendor can burn through a quarter's budget in a single day (the industry has plenty of examples).
- The traditional cost and ROI calculation used in product management breaks down the moment AI is used inside the product, because of the uncertainty it introduces.
- Contracts with vendors or customers provide no financial protection against these changes; the financial risk remains with the organization that builds a solution or product using the AI model.

### What Should Be Done?

- First of all, managing this risk should not be left to engineering teams or technical staff. A process should be set up and overseen by a senior executive or C-level leader with both technical and financial insight.
- In quarterly board presentations, a summary of the "behavior change risk" of AI models should be added alongside the standard financial metrics.
- Whether financial limits are being exceeded should be tied to "output-based tests." For example, ranges are defined such as "In a customer churn prediction model, the 'churn probability' output must be between 18% and 25%," "In a price optimization model, the ratio of the recommended price to unit cost must stay between X and Y," or "Token consumption or API cost must not exceed a maximum of Z TL per transaction," and each time the process runs, it is checked whether the result falls within that range.
- An automatic budget ceiling kicks in: that workflow can be temporarily stopped or downgraded to a cheaper model, Human in the Loop is triggered, and the board is informed. Together with output-based testing, instead of struggling with "what changed inside the model," we look at "how much harm it does to our business and our wallet." In this way, a change in the model stops being a technical problem and becomes a direct financial risk control. As organizations adopt AI more, predictability and financial control capabilities are becoming one of the key elements of competitive advantage. Companies that cannot manage this issue are expected to fall seriously behind those that can.`,
  },
  {
    id: "yapay-zeka-yoneticileri-ne-nereye",
    title: "AI Is Shifting Managers' Focus from \"What?\" to \"Where To?\"",
    author: "Alper Önsoy",
    excerpt:
      "Recently, a manager friend at one of the large organizations complained: \"Every 30 minutes, someone brings me a solution they built with AI for me to review.\"",
    coverImage: "/images/articles/yapay-zeka-yoneticileri-ne-nereye/cover.jpeg",
    date: "2026-07-30",
    category: "Artificial Intelligence",
    readTime: 3,
    cardTags: ["AI Strategy", "Leadership", "AI Governance"],
    cardQuote: "The role of managers is being reshaped in the age of AI.",
    cardQuoteHighlight: "age of AI",
    cardTheme: "violet",
    body: `## AI Is Shifting Managers' Focus from "What?" to "Where To?"

Recently, a manager friend at one of the large organizations complained: "Every 30 minutes, someone brings me a solution they built with AI for me to review."

AI has multiplied the number of point solutions produced through individual effort so much that this has become a new bottleneck for managers. Everyone is eager, everyone is confident, as if "the key to production" has been handed to each person individually. Between not dampening employees' enthusiasm, acting in line with governance, questioning usefulness, and protecting corporate standards, managers' calendars have suddenly filled up.

The traditional management process was very simple: a manager delegated a task and held a comfortable, controlled meeting the following week about its status.

But AI has turned that calendar upside down. Tasks are now completed so quickly that the speed of the entire process is locked to how fast the manager can give feedback on finished work.

An Atlassian report on this topic states that 87% of employees on production teams think "everyone is in such production mode that teams can't find the energy and time needed to coordinate."

You no longer need to describe how something should be done down to the smallest detail; the value of information is diminishing day by day. But one of the most important things right now is to check "where" your teams are heading with the production speed they have.

With this production speed that AI brings, which fundamental problem are we solving? Which important changes are we causing? How will we measure success?

And one of the most important questions: in a world produced by AI, "who will be responsible for success / failure?"

Keeping teams focused on the big picture is among managers' most important tasks right now; rather than tactical matters, it is crucial to take the wheel and keep the course steady.

According to research by BetterUp, 54% of managers who have received AI training commented that "AI-generated content is very polished but feels far from genuine." Many managers have to guide their employees on "what good content is."

I really like a sentence from Hamed Faquiryan, Executive Director of Quantitative Research at MSCI: "I set a firm rule for my team: they can't share anything AI produced with me until they have read it down to the last detail and put their signature under it. Because instead of assigning that task to them, I could have asked an LLM myself; we must be able to stand behind everything we share."

Managers need broad context, but for the work that matters most they also need depth. Managers who rely too heavily on AI summaries may be falling into a serious trap. I suspect many of you will agree with Dr. Stefanie Tignor, Director of Data Science at Superhuman: "In most contexts I find AI summaries useless. They flatten everything to the same level: low-quality content and high-quality work get summarized in exactly the same way. What comes out is very generic and superficial; it neither makes me act on anything nor adds anything new for me."

Dr. Tignor suggests that instead of asking AI merely to summarize information, we use it to understand which work deserves closer examination. "I built an automated weekly digest system that scans indicators and surfaces links to important projects," she adds, and says, "I have the AI find five distinct, specific, valuable findings that I know I need to dig into."

According to Dr. Tignor, the signals that point to high-impact work are: statistically significant metric movements, projects shared in Slack that receive lots of comments, data points that appear in multiple executive presentations, and work that is discussed at length in meeting notes.

Things will not slow down anytime soon; on the contrary, they will keep accelerating. Those who apply classic management tactics risk dropping out of the game, ineffective in both time and effort.

In this new era, the managers who win will be those who direct and clear the path for the people producing, rather than managing what is produced.`,
  },
  {
    id: "karar-muhendisligi",
    title: "The New Skill of the AI Era: Decision Engineering",
    author: "Ömer Yavuz",
    excerpt:
      "A customer writes: \"My package arrived damaged, I want a refund.\"",
    coverImage: "/images/articles/karar-muhendisligi/cover.png",
    date: "2026-09-24",
    category: "Artificial Intelligence",
    readTime: 7,
    cardTags: ["AI", "Decision Engineering"],
    cardQuote: "The new skill of the AI era: Decision engineering",
    cardQuoteHighlight: "Decision engineering",
    cardTheme: "cyan",
    body: `## The New Skill of the AI Era: Decision Engineering

A customer writes: "My package arrived damaged, I want a refund."

Today's AI assistant answers with a careful, lengthy paragraph. But what the software actually needs is three decisions: Which team should the request go to? What is its priority? Does the refund need to be reviewed?

This difference looks small, but it may change how we work with AI.

### Prompt, context, loop... What comes next?

Over the last three years, we have given an "engineering" name to every stage of working with AI.

First we learned prompt engineering, that is, what we tell the model: assign a role, show examples, ask it to think step by step.

Then we saw that this was not enough, and in 2025 context engineering started to be discussed, that is, what the model sees. Which information we gave it and in what order mattered as much as what we asked.

In June 2026 another step was taken and it was named loop engineering. Once agents could use tools and read their own results, the question shifted from writing a single prompt well to designing the agent's loop: What will steer the agent, who will check its work, when will it retry, when will it stop?

Notice these questions. What should the next step be? Is the job done? Should it try again? Should it go to a human? Each one is a decision. If the loop is the skeleton, the decisions are its joints.

All three skills shared one assumption: a model that generates text would make these decisions, and we would parse that text.

On September 15, 2026, a development shook that assumption.

### An AI that doesn't talk: Jev

Diogo Almeida is a name who worked on the instruction-following research behind ChatGPT at OpenAI. His company, TypeSafe AI, announced its first model after working in stealth mode for about two years: Jev.

Jev does not generate text. The company positions it as a "System One model," inspired by Kahneman's fast, intuitive "System 1" thinking. It has not shared architectural details; TechCrunch wrote that it is suspected there may be an open-weight language model underneath. What is certain is this: you give Jev a situation and predefined questions, and it returns a probability for each option.

Back to the damaged package example: Jev gives the three decisions in a single call, together with how likely each one is. The software moves straight to the next step with these numbers. There is no text to parse or validate. Indeed, one of its first uses is exactly a loop decision: a verifier that checks on every turn whether an agent has really reached its goal.

The company says Jev is 40 to 200 times faster than frontier language models. In an independent test against Claude Haiku 4.5, the measured difference was about 3x in speed and 12x in cost. A big difference, but not two hundred times.

The most interesting data from outside the company came from LangChain. They compared Jev with GPT-5.6 and Claude Sonnet 4.6 as a "judge" scoring an agent's output. They had each of five scenarios scored 100 times. Jev's pass/fail verdict matched the human evaluator on every repetition; for the LLM judges, this rate was 99.8% for GPT-5.6 Terra, 96.4% for Luna, and 80% for Claude Sonnet 4.6. The real difference was in consistency: the fluctuation in Jev's scores was 92 to 913 times lower than that of the LLM judges.

Two notes are in order. The LLMs were run with default temperature settings, which increases their fluctuation. And by LangChain's own warning, this is an early test with a single agent and five scenarios. The most important sentence in their write-up, in my view, is this: a consistent judge can also be consistently wrong. I will come back to this shortly.

### "Isn't this just classification?"

An experienced data scientist would make a fair objection here: we have been classifying requests for years. Since 2019 there have been zero-shot classifiers that need no training; simple models trained on 50-100 labeled examples do most of the job too.

True, both the problem and the family of solutions are old. The zero-shot classifiers of 2019 also took the task at runtime, and so do today's LLMs. What makes Jev different is the combination of three things: the output is not free text but one of the predefined options. Dozens of questions about the same situation are asked in parallel and independently of one another. And combining the answers and making the final decision happens not inside the model but in your code. The last one is the most important: the logic of the decision comes out of the model and becomes something that can be designed, versioned, and tested.

And design work requires someone to do it.

### Decision engineering

I propose calling this work decision engineering.

The term itself is not new; under the name decision intelligence it is used to model organization-level decision processes. What I propose is narrower: the design of individual automated decisions. Treating question design, feature engineering, threshold selection, and handoff to humans not as separate jobs but as a single job. And seeing it as the link that follows prompt, context, and loop engineering.

A decision engineer answers six questions:

- Which decisions need to be made, and into which sub-questions should each be split?
- What are the options for each decision, and is there a "none of the above" option?
- Does the decision change when the order or wording of the options changes?
- How confident does the model need to be?
- How will a human step in for uncertain cases?
- Can the decision be traced, and is it re-validated when the question changes?

These questions are not specific to Jev. You have to answer the same ones when making decisions with an LLM or a classical classifier. What Jev does is make them visible: a model that does not generate text cannot be used without designing the decision.

I took most of the observations below from AgentConn's comprehensive compilation; my contribution is gathering them under the name of a discipline.

A good sign of why this is a separate skill came from an independent phishing test. When Jev was asked a single general question about 2,000 emails, accuracy stayed at 62.6%; Claude Haiku 4.5 scored 81.3%. The test's author then split the decision into five concrete signals and taught how to combine these signals using 1,000 labeled emails; on the remaining 1,000 emails, Jev rose to 95%. In the same setup Haiku scored 93.2%; the difference was not statistically significant. In the same test, merely changing the system prompt moved the LLMs' phishing catch rate between 27% and 96%.

These results were not measured with the same yardstick, the dataset is synthetic, and some setups were built after seeing the data. But the lesson is solid: whichever model you use, the outcome is determined as much by how the decision is built as by the choice of model. And in the same test, a simple rule filter scored 91.8%. Sometimes the best decision engineering is deciding not to use a model at all.

Other observations point in the same direction. Changing the order of the options can noticeably change Jev's probabilities. And on a question with no valid answer, the model still returns one of the options: it cannot invent an undefined answer, but if there is no "none of the above" option, it picks a wrong one.

### As decisions get cheaper: the Jevons effect

In 1865 the English economist William Stanley Jevons noticed something interesting: as steam engines began to use coal more efficiently, Britain's coal consumption did not fall; on the contrary, it rose. When a resource gets cheaper, the areas where we find it worth using it multiply.

It is no coincidence: Jev's name is also a nod to Jevons.

Today many companies use AI only for big and important decisions, because every call has a cost. But when making a decision becomes nearly free, the picture changes. Thousands of small decisions we do not find worth automating today will start to be automated: whether a transaction is fraudulent, which support requests should be escalated, which of tens of thousands of records comply with a policy.

Every one of these decisions has to be designed by somebody.

### When should the machine decide, and when the human?

Jev gives a confidence estimate with every decision. You set the threshold: when confidence is high, the software acts on its own; when it is low, it sends the task to a human. Seventy percent may be enough to file an email into a folder; even 99 percent may be too little to reject a loan application.

LangChain's warning gains importance here: a consistent judge can also be consistently wrong. The precondition for setting a threshold is that the confidence score actually means something. The company says Jev's scores are calibrated but has not published data showing this. The results of independent tests are mixed: in the phishing test, the probabilities came out overconfident for some question types and underconfident for others. In fake job posting detection, the scores turned out honest, but at the 0.9 threshold the model caught only 7 of 53 scams.

That is why a decision engineer's first job is not to choose a threshold but to measure. You run the model alongside the existing process for a while and look at two things: are decisions made with 0.9 confidence really 90 percent correct, and how much of the workload do the decisions that reach this confidence cover? The threshold comes out of this data, not out of a guess.

A decision engineer is the person who determines where the machine stops and hands over to the human.

### It's still early, but the direction is clear...

Jev is still in early access, and the excitement needs to be tempered. The "doesn't hallucinate" claim applies only to the form of the output: Jev cannot invent an undefined option, but it can choose the wrong one among the defined options. The company itself says the speed and cost figures on its homepage are at the upper end of the gains that can be expected in the real world; the tests those figures come from were also prepared by its own team.

So Jev itself may or may not succeed. But the direction it points to is, I think, clear. Prompt engineering taught us what to tell the model, context engineering what to show it, and loop engineering how to design the agent's turns. The next skill is designing which decision, among which options, with what confidence, will be made at each step of that loop. Whichever model makes that decision.

Look at your own workflow: most of the decisions you make, like "where should this go," "is this urgent," "should this be approved," are waiting not for your judgment but for a properly designed system.`,
  },
  {
    id: "bce-yapay-zeka-kodlama-ajanlari",
    title: "Your AI coding agent is spending its budget on searching. We fixed it and open-sourced it.",
    author: "BGTS",
    excerpt:
      "We ran 600 real changes from 12 open-source repos in 6 languages through two AI coding agents: Cursor and OpenCode. Each ran once on its own and once with BGTS Context Engine (BCE) in front of it. The same tasks, the same models.",
    coverImage: "/images/articles/bce-yapay-zeka-kodlama-ajanlari/cover.png",
    date: "2026-10-09",
    category: "Artificial Intelligence",
    readTime: 41,
    cardTags: ["AI Coding", "Context Engineering", "Open Source"],
    cardQuote: "Your AI coding agent is spending its budget on searching.",
    cardQuoteHighlight: "spending its budget on searching",
    cardTheme: "green",
    body: `## Your AI coding agent is spending its budget on searching. We fixed it and open-sourced it.

### The same 600 pull requests. The same models. 64% lower cost on average.

We ran 600 real changes from 12 open-source repos in 6 languages through two AI coding agents: Cursor and OpenCode. Each ran once on its own and once with BGTS Context Engine (BCE) in front of it. The same tasks, the same models.

- Cursor (grok-4.7-high-fast): 60% lower cost, 88% fewer tool calls, 78% fewer tokens, 35% faster.
- OpenCode (GLM 5.3 Flash): 67% lower cost, 90% fewer tool calls, 88% fewer tokens, 37% faster.

Quality did not drop: the rate at which the agents found the files touched by the change (recall) rose from 92.4% to 92.7% on average.

BCE is open source under the MIT license: github.com/bgts-ai-org/bgts-context-engine

### The problem: agents search before they work

Today's coding agents start every task without knowing your repo. They list folders, run grep, open a file, and grep again. Every step is a separate round trip to the model, and every search result is resent on every later turn. That is why the token bill grows faster than the number of steps.

On the same 600 tasks, Cursor on its own made 17.4 tool calls per task; 9.1 of them were searches and 6 were file reads. With BCE, searches per task dropped to 0.06; in 583 of the 600 tasks, no search was performed at all.

### The idea: give the agent the map up front

BCE converts the repo into a code graph once and answers the agent's first question: where is the code this task touches? The answer is a handful of symbols with file and line information. Instead of searching, the agent opens verified locations.

It works in three steps: anchor (seven sources vote on what the task is about), expand, then narrow (graph walk, arithmetic score, top 20 candidates), and an optional rerank (a small decision model filters the files; it can never add any). The details are in the Technical Detail Report below.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image5.png)

How BCE works, end to end.

### Technical Detail Report

### Summary

The most expensive and error-prone step for AI coding agents is not writing code; it is deciding what to read. Today's common answer to this question is to split files into chunks and run a similarity search over embedding vectors. This approach is cheap to set up, but wrong in a specific way: it returns text that resembles the question, not the code that participates in the behavior.

BGTS Context Engine (BCE for short) approaches this problem from a different footing. It indexes repos into a code graph made up of symbols, calls, references, type hierarchies, HTTP routes, and cross-language bridges, and answers a task description by walking this graph. On the retrieval path there is no language model, no clock, and no randomness: the same task text, on the same commit, returns a byte-for-byte identical ranking. Embeddings are used in only one place, to find an entry point when the task text names nothing familiar, and they never directly determine the ranking.

In this article we examine in detail the engine's architecture, the two-pass indexing pipeline, the graph-vector-full-text storage unified on a single PostgreSQL, the seven-source anchor discovery, the versioned scoring formula, the K-monotonic narrowing algorithm, token-budget-aware packing, and the optional probabilistic context selector layer added on top of the ranking. Along the way we also share the project's measurement methodology, ideas that were tried and abandoned, and performance pitfalls encountered in the real world.

### 1. Introduction: The agent's reading problem

Consider an agent working in a repo it does not know. The user writes:

"Fix the login timeout in the meeting webhook."

For the agent to make a change, it first needs to know the answers to these questions: Which function handles the webhook request? Where is the session duration set? Who reads this value, and who writes it? If a change is made, which callers are affected?

All of these questions have a definite answer, and that answer is structural. handleLogin calls refreshSession; refreshSession reads SESSION_TTL; and SESSION_TTL is assigned a value in exactly one place. This is a graph traversal.

When agents do not have this structure, they veer toward one of two paths. Either they wander the repo at length with grep and glob and fill the context window with search output on every turn, or they fetch from a vector database the five files that resemble the word "timeout". The first is expensive; the second is misleading, because five files that mention timeout may not include the one function that sets it and the three callers that will break when it changes.

BCE is a context engine designed to fill this gap. It does not generate code, does not edit code, and is not tied to any particular agent framework. The only thing it does is give a ranked, budgeted, justified, and reproducible answer to the question "what should I read for this task?"

### 2. Why isn't embedding-based RAG enough?

The problem with embedding-based retrieval (Retrieval-Augmented Generation) is not that it is poor quality; it is that it answers the wrong question. Vector similarity answers "how similar is this text to that text?" But in a change task the real question is "which code participates in this behavior?"

This difference has three concrete consequences:

- Structural relationships are lost. A function that assigns a constant's value and a function that only reads that constant in a log message may look similar as text. But the bug is usually where the value is written; the place that reads it is most often just a consequence.
- Tests come to the front. A task description almost always resembles the tests that verify it. The nearest neighbors of the phrase "authorization check and appropriate error responses" are usually ten test functions.
- The answer cannot be held accountable. Vector search cannot explain why it returned a given result. When an agent makes a faulty change, it is impossible to look back at what it was told and why.

On the other hand, a language server knows precise relationships but is limited to the project that is open and does not rank by task. BCE sits between these two worlds: as precise and reproducible as a language server, as repo-wide and cross-language as embedding search.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image6.png)

Embedding RAG, Language server, BGTS Context Engine

### 3. The core principle: The deterministic line

Most of the decisions in BCE's design derive from a single hard boundary: the deterministic line.

Everything that produces the context bundle is deterministic: parsing, graph construction, graph expansion, scoring, narrowing, and packing. When the same commit and the same task go in, the same bytes come out. This is not achieved by merely saying "we don't use a model"; unordered iteration, clock dependence, and nondeterministic resolution of ties are also deliberately excluded. For example:

- Every graph traversal query ends with ORDER BY symbol_id; PostgreSQL otherwise gives no ordering guarantee.
- Scores are rounded to six decimals before sorting, and candidates are sorted by the key (-score, symbol_id). This way ties in score are resolved by symbol ID in the same way every time.
- In expansion, each frontier is processed in order; anchors are given in lexicographic order, and the order in which they were suggested carries no weight.

Everything probabilistic lies outside the line: the agent that consumes the bundle and the embedding provider that optionally suggests anchors. Both can influence which subgraph is examined, but not how that subgraph is ranked and packed.

This constraint has a price, but the gain is greater: the engine becomes debuggable. When an agent makes a bad change, the context it was given can be replayed exactly, the stage that surfaced the wrong symbol can be identified, and that stage can be fixed. With a probabilistic retriever, the same investigation usually ends in a shrug. This is why the audit_log table is meaningful: recording exactly what an agent was told is only valuable if what was told can be reproduced.

There is only one stage that deliberately crosses the line: the context selector, which runs after ranking, is off by default, and is clearly labeled. We will return to it in detail in Section 9.

### 4. Architecture overview

The engine consists of three layers, moving from the exact to the interpretive:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image7.png)

Diagram (4. Architecture overview)

Layer 1 answers questions that have a single right answer: Where is this symbol defined? Who calls it? What does it inherit from? These are graph lookups; they either find the answer or say that they did not.

Layer 2 answers similarity questions: "symbols that resemble this description," "code that resembles this snippet." Hybrid search blends lexical and semantic results at a fixed 0.55 / 0.45 ratio and adds a small structural tiebreaker. This way, a symbol whose name matches exactly is never outranked by something that merely reads as similar.

Layer 3 answers the question an agent actually asks: Given this task, what should I read? The retrieval pipeline runs here, and it is also the only layer that applies per-user repo scoping.

Each layer is a single set of Python functions exposed over two transports. Over REST, POST /v1/get-context-for-task and the MCP tool get_context_for_task call the same function with the same arguments and return the same payload. There is no second implementation that could drift between them.

The source code reflects this separation as well:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image8.png)

Directory, Responsibility

The project comes with roughly 18 thousand lines of Python source, around 350 tests spread across 35 test files, and a separate front-end test suite. It targets Python 3.11+; it is MIT licensed.

### 5. Indexing: From repo to code graph

### 5.1 Two passes

References across files cannot be resolved by looking at a single file. That is why indexing is done in two passes.

The first pass is per file. Tree-sitter parses the source file; a language-specific provider walks the tree and produces File, Symbol, Module, Route, and DesignNote nodes, along with all the edges it can see without leaving the file. References it cannot resolve locally are recorded as "unresolved," together with the file's import and export information. This fragment is written to the graph, and if an embedding provider is configured, symbol texts are vectorized.

The second pass is repo-wide. The linker builds a global (package, name) → symbol_id table from the exports of all fragments and turns unresolved references into cross-file CALLS, REFERENCES, INHERITS, and IMPLEMENTS edges. In doing so it does not guess from names; it follows each file's actual import bindings in order:

- Explicit bindings (from m import x, named JS imports, single-type Java imports),
- Module object bindings (import m, import * as m, Go package imports; a qualified use such as m.f() is resolved within module m),
- The same package scope (a Go directory package, Java/C# packages and namespaces),
- Wildcard imports (from m import *, C# using), last and in module order.

A placeholder node is never produced for a reference that cannot be resolved; the reference is dropped. Then, if present, SCIP output is merged, and finally the cross-language bridge extractor runs.

### 5.2 Graph schema

The graph consists of six node labels and nine edge types:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image9.png)

Edge, Direction, Meaning

Two properties on the edges carry most of the retrieval quality:

- ref_kind: What the reference actually does: define, write, read, or pass. It records not just that a use exists, but what kind of use it is.
- provenance: How the edge was built. scip comes from a real compiler index and is exact; treesitter comes from syntax and is almost always correct; heuristic comes from pattern matching and is a good guess. Scoring gives these different weights, and every response reports this distribution, so you can see how much of an answer rests on guesses.

### 5.3 Language support

Python, JavaScript, and TypeScript come built in; Java, C#, and Go are installed with the langs extra. Optional providers are registered only if their grammars can be imported successfully; a missing grammar is not an error but means "this language is not indexed."

The particular nuances of each language are treated seriously. A few examples:

- In TypeScript, a const definition whose value is an arrow function is indexed as a function; otherwise most modern code would look like a pile of constants. type aliases and enums are symbols too, because a union type such as type WorkspaceStatus = 'SETUP' | 'ACTIVE' | … is where the answer to a status-related task lives.
- In Java, nested types become separate symbols with their own container chains (LocalCache.Segment.lookup). Of Guava's 13 thousand methods, 5,100 were in nested types, and before this change none of them were indexed.
- In C#, declarations in #if / #else regions are indexed. Files the grammar cannot parse (an #if that splits an expression, async used as an identifier, collection expressions...) are repaired byte by byte and re-parsed; the repaired tree is used only if it contains fewer errors, and positions are always read from the original source. In EF Core, the number of files without symbols fell from 64 to 9, and in PowerShell 8,900 new symbols appeared.
- In Go, since there is no inheritance, INHERITS / IMPLEMENTS are not produced; interface satisfaction is structural and not visible in the syntax of either side.

Each symbol carries its full declaration text, capped at 24,000 characters, as search text. This text is not stored as a graph property; it feeds the full-text search document and the chunked embeddings. This way, even a toast message on the sixtieth line of a component can be found by both lexical and semantic search.

Adding a new language requires touching only two files: a provider class derived from LanguageProvider and one line in the registry. The extractor, linker, indexer, and upserter consume the registry abstractly.

### 5.4 HTTP routes, design notes, and cross-language bridges

Route extraction lets a path in a bug report resolve directly to its handler. FastAPI, Flask, Express, NestJS, Spring, ASP.NET, and Gin are recognized. In frameworks where the handler is a named declaration next to the decorator, a ROUTES_TO edge links the route to the handler. This way, an expression such as POST /api/v1/meetings/{id}/webhook reaches the relevant function the moment it appears in the task text.

Design notes: Comments starting with WHY, NOTE, HACK, XXX, TODO, or FIXME become DesignNote nodes and are linked to the nearest symbol with an EXPLAINS edge. The one that really matters among these is WHY:. A comment that explains why the code is the way it is answers the question the graph cannot; carrying it into the context bundle also prevents an agent from "fixing" a deliberate workaround.

Cross-language bridges: React Native and Expo split a single logical call across two languages. JavaScript calls NativeModules.Foo.bar(), while bar is defined in Objective-C, Swift, or Kotlin. No single parser sees both sides, so a hole appears in the call graph exactly where the interesting bugs live. The bridge extractor scans for patterns such as RCT_EXPORT_METHOD, @objc, Expo's Function("name") / AsyncFunction("name") definitions, and event channels, and if both ends already exist as symbols it produces a CALLS edge with provenance: heuristic. Because these are name matches rather than resolution, they get the lowest confidence weight.

### 5.5 Raising certainty with SCIP

If scip-python or scip-typescript is on PATH, the indexer runs them and merges the result. SCIP comes from a real type checker; therefore it resolves what syntax cannot, such as which of nine different process functions in a codebase is actually being called. The effect is two-way: the source of edges the parser had already found is upgraded from treesitter to scip (their score rises), and new edges are added for unambiguous matches the parser never found. SCIP is not a requirement but a quality upgrade.

### 5.6 Symbol identity

A symbol's identity is derived from a BLAKE2b digest of language, package, namespace, kind, name, and signature:

{language}::{package}::{namespace}::{name}#{blake2b-16}

The digest deliberately does not include the file path or the line number. As a result, when a function is moved between files, or the code above it shifts or is reformatted, it keeps the same identity; task history and embeddings remain valid. Because the signature is included in the digest, overloads are told apart. Renaming, on the other hand, produces a new identity; this is the right behavior, because a function whose name has changed is now a different symbol, and silently carrying the old history over to it would be wrong.

The readable prefix helps with debugging; the identity of a member that has a container carries a prefix derivable from its container's identity. The scoring engine uses this property to detect containers whose members are already ranked (Section 7.4).

### 5.7 Incremental re-indexing

Re-indexing is driven by the git diff --name-status output between the last indexed commit and the target. The subgraph and embeddings of each changed file are deleted and rebuilt. Unchanged files are only re-parsed in memory, because the linker needs the global name table in order to re-link edges pointing to changed files. Because edge writes are done with MERGE, they are idempotent; running indexing again on an unchanged file produces no new nodes.

This structure makes it natural to put the bce reindex command in a post-merge hook or a CI step on the default branch. If the index falls behind the working tree, it shows up in every response as commit_mismatch.

The indexer also records the number of commits that touched each file within the last 500 commits (file_churn). This is computed only from the ancestors of the indexed commit; therefore a snapshot taken at a PR's base commit never sees the PR's own commits. This detail is critical so that measurements do not leak the future.

### 6. Storage: One PostgreSQL, one pg_dump

The project's most important operational decision is that everything lives in a single PostgreSQL 16 instance:

- Apache AGE stores the property graph and answers Cypher queries.
- pgvector stores symbol and file embeddings with an HNSW index.
- Plain tables hold repos, tasks, task history, users, scopes, the audit log, and the job queue.
- A generated tsvector column (symbol_fts) provides lexical search; pg_trgm GIN indexes turn substring search within symbol bodies into an index query.

The alternative, a vector database next to a graph database and a PostgreSQL next to them, means three systems to run, three separate backup stories, and no transactional boundary between a symbol and its embedding. In BCE, a single connection answers a Cypher traversal, a vector search, and a SQL join; a single pg_dump captures the entire index.

### 6.1 Design of the full-text document

The weighted document over symbol_fts is one of the quiet heroes of retrieval quality

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image10.png)

Weight, Content

Here the simple configuration was deliberately chosen over english: identifiers are not English words, and stemming getUserById benefits no one. Ranking uses ts_rank with length normalization; this way a 300-line component cannot beat a 3-line helper merely on raw word count.

### 6.2 Chunked embeddings

A symbol longer than one embedding window (2,000 characters, 200 characters of overlap, at most 12 windows) is stored as multiple rows. Each chunk carries the same header (name, kind, path, signature, docstring) and one window of the body. Nearest-neighbor search collapses these rows into a single symbol, at the rank of that symbol's best chunk. Each row records the model that produced it in the form <model>-<dimension>; because vectors from different models are not comparable, this makes it possible to detect a stale index when the provider is changed.

### 6.3 Performance lessons learned at real scale

The project's change history shows that running Apache AGE on large repos is full of instructive pitfalls. Three are particularly noteworthy:

- Unlabeled MATCH. Edge writes matched their endpoints without specifying labels (MATCH (a {gid}), (b {gid})). AGE plans this as an Append over all label tables; on a graph of 20 thousand symbols it cost 30–50 ms per edge (netty: 74 minutes). The fix was to derive endpoint labels from the fragment's own nodes or from the edge type (CALLS is always Symbol → Symbol). The per-edge cost dropped to ~2.4 ms.
- Generic plans. psycopg prepares the statement on the server side after five executions, and PostgreSQL settles on a generic plan based on the row estimates at that moment. This plan was chosen while the graph still contained a hundred nodes and was never re-planned for the rest of the indexing run. Connections now run with plan_cache_mode = force_custom_plan: 6,000 symbols are indexed in 49 seconds instead of 170.
- A merge join that sorts the entire edge table. Because the label tables were filled within a single indexing run, they had no statistics, and AGE's @> operator assumed a fixed selectivity. The planner was doing the edge existence check for every edge with a sorted scan and sort of the entire edge table; on netty this meant 372 GB of temp files. By turning off enable_mergejoin and enable_hashjoin at the session level for the duration of indexing, the check was reduced to a single index query and no temp files were written at all.

There is a similar lesson on the read side: the form WHERE s.symbol_id IN $ids turns into a scan in AGE, while the form UNWIND $ids AS sid MATCH (s:Symbol {symbol_id: sid}) goes to the index for each ID and is roughly ten times faster. Degree and call flags are read with SQL directly from the edge label tables instead of Cypher: from 15–30 seconds down to 20–40 milliseconds for a pool of 400 symbols.

### 7. The retrieval pipeline: From a sentence to a ranked set of symbols

The retrieval pipeline turns a sentence such as "fix the login timeout in the meeting webhook" into a small, ranked set of symbols, each with a justification attached. The ranking is arithmetic over a graph:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image11.png)

Diagram (7. The retrieval pipeline: From a sentence to a ranked set of symbols)

### 7.1 Anchors: Seven independent witnesses

An anchor is a symbol the engine is confident the task is about. Seven sources suggest anchors independently of one another, and each anchor remembers which sources suggested it and how much evidence each brought, as a strength value in the range [0, 1].

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image12.png)

Source, What it looks at, Max strength

The strengths are combined with a noisy-OR:

strength = 1 − ∏ᵢ (1 − sᵢ)

A lexical 0.5 and a semantic 0.6 combine to 0.8; an explicit name gives 1.0 independently of the others; a common term standing alone stays around 0.2. What lifts a symbol to the top is the agreement of the witnesses; a single weak vote can be passed over downstream.

Behind this table is a set of rules distilled from bugs encountered in the field:

An explicit name is only as valuable as it is specific. MongoDbService names one thing. Content or ExternalId, on the other hand, name a dozen unrelated DTO properties. Accepting each as certainty would have meant a dozen full-strength anchors, each expanding its own callers and file. That is why explicit evidence is divided by √match_count, and a name matching more than eight symbols is dropped entirely. A qualified reference such as MongoDbService.CancelAsync is resolved within that type and the bare tail is not suggested separately; the author did not mention the other three CancelAsync methods in the repo.

Which words count? The task text is split with a Unicode-aware word pattern ("toplantı" is one word; İ folds to i) and passed through a stop list made up of English and Turkish function words along with bug-report filler words ("fix", "missing", "check", "proper"...). Beyond that, there is a small Turkish → English generic product glossary: "toplantı" → meeting, "takvim" → calendar, "bildirim" → notification. Inflected forms are recognized with a Turkish suffix-chain check, so words like serial or listener are left untouched. The rationale is simple: a Turkish-speaking team writes the task in Turkish and the identifiers in English. URLs in the task text produce no terms; a PR link no longer adds https github com pull to every task.

The lexical channel measures coverage, not hits per term. A symbol's lexical strength depends on how many of the task's content terms it covers, how rare the term is, and where the term matches: a hit in the exact name counts as 1.0, in name parts 0.9, in container or path words 0.6, and only in the signature, docstring, or body 0.35. This layering became mandatory once all bodies entered the document; otherwise a long component would match half the words of any task somewhere and push aside helpers named with those words.

Names find the thing; usage finds the places that use the thing. A task that says "every place that reads the raw localStorage key" is not about a symbol named localStorage; it is about the thirty components that contain that word in their body, none of which carry its name. The usage source searches the task's own code fragments in symbol bodies with the trigram index; its strength falls with the number of matches:

s(usage) = 0.8 · √(1 − matches / pool)

'token', which appears in 14 symbols, is strong evidence for each of them; projectId, which appears in 267 symbols, is noise and is dropped.

Following a connection through data that the graph cannot see. Instead of treating the callers of the dominant anchors (the five strongest anchors with combined strength ≥ 0.9) as degraded one-hop neighbors, the impact source gives them its own anchor evidence. More interestingly, it also links symbols that have no edge between them: a helper that invalidates the key ['monitoring-executions'] and a hook that registers a query under that key share only a string. Namespaced literals in the dominant anchor's body (those containing a separator, a digit, or a camelCase hump) are searched in other bodies. 'en-US', quoted by forty date formatters, is a convention and suggests nothing; a query key quoted by three registration points suggests each of them.

Tests are not anchors. Symbols in test files are skipped by the lexical, semantic, usage, and impact sources. An important detail: this filter is applied inside the query (AND NOT is_test), not after it. In repos like Guava or EF Core, where 60% of symbols are tests, post-filtering filled the term pool with test methods, never let production symbols into the pool, and made every term look saturated.

### 7.2 Expansion: A fixed-shape walk

From each anchor, a fixed template independent of the task is walked. That the shape does not vary with the task is what makes expansion reproducible.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image13.png)

Direction, Edge, Depth

Going two hops for callers and one hop for callees is deliberate: the code that breaks when you change a function sits above it, and it is usually one level farther away than you expect. What a function calls, on the other hand, is mostly details that can be read from the body you already have. IMPORTS is deliberately not walked here; because it is a file-level edge, it would pull in whole modules rather than important symbols.

Two additional rules keep expansion both high-quality and cheap:

- Only well-evidenced anchors are walked. Expansion is done from anchors with strength ≥ 0.3, and from the strongest 20 of them. Weaker anchors stay in the pool at distance 0 but do not drag in their neighborhoods. This is a budget, not a filter.
- Evidence travels with the walk. Each node records the strength of the best anchor that reached it, multiplied by 0.6 at every hop (source_strength). The neighbor of the model's number one hit carries 0.54, while the neighbor of a disposable 0.2 lexical hit carries 0.12.

Each frontier is a single query; no per-node queries are made. Thanks to this, a long PR description dropped from ~48 seconds to under 2 seconds.

### 7.3 Features

Each node found during expansion becomes a candidate with these features: graph distance, degree, reference kind (define / write / read / pass), edge provenance, whether it is a leaf, the task signal (whether the symbol's name or all of its meaningful parts appear among the task's content words; partial credit for partial matches), anchor strength, arriving evidence strength, symbol kind, whether it is a test, its rank in the embedding model's list, and its file's churn value.

One point deserves underlining here: the embedding model contributes to the score only through its rank, never through a similarity number. A similarity number would let the model re-rank the candidates, and that is the one thing the engine does not hand over.

### 7.4 Scoring: A versioned formula

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image14.png)

Diagram (7.4 Scoring: A versioned formula)

The sub-weights are as follows:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image15.png)

ref_kind, Weight, provenance, Weight, Kind priority, Weight

The weights live in the ScoreWeights data class in src/bce/core/scoring/engine.py and every response is stamped scoring-v4. These are not runtime configuration; they are a versioned constant. Because a context bundle is comparable only with another bundle produced with the same weights. A PR that changes the weights must also change SCORE_WEIGHTS_VERSION and show its effect on bce bench.

Behind every term in the formula is a measured rationale:

- Reference kind is the heaviest term. The place that defines or writes a value is usually where the bug lives; a place that only reads or passes it is more often downstream. Weighting define five times heavier than pass keeps a widely read constant from overshadowing the single function that sets it.
- The unknown can never beat the known. A candidate reached through a CALLS or sibling edge has no reference kind and no edge provenance; it is scored like the weakest known values. The absence of evidence is not rewarded.
- The anchor bonus scales with evidence. The first version gave every anchor a flat +5.0. When tasks written in natural language produced dozens of single-word anchors, this floor split the pool into two separate bands: every anchor above 7.3, every neighbor below 4.9. The result was the highest-degree anchors regardless of evidence, and the functions that actually needed to change ended up between ranks 25 and 478.
- Proximity and reference kind scale with evidence. A define edge coming from a generic name like Content should not be worth the same as a define edge coming from the model's best hit.
- Kind priority points to the point of change. The change a task describes almost always falls into a method or function body; classes, interfaces, and constructors are where that body lives. Without this term, 28% of the returned symbols were containers; on replayed diffs the rate was 10%. In addition, 1.5 points are subtracted from a container that has a member within the top 2N: if one of its members is already ranked, the class repeats the same information and wastes a slot.
- Centrality is log-scaled and saturates at degree 20. A logger or a base class touches everything and explains nothing. The weight is deliberately small (0.6).
- The churn prior separates live code from sediment: diffs land where diffs have landed before.

A sample calculation. Consider a method anchor with strength 0.9, whose name appears in the task, with degree 4, which is the model's number one hit, and whose file was touched by 5 commits in the last window (distance 0; reference kind and edge provenance unknown):

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image16.png)

Term, Calculation, Contribution

A method reached from the same anchor through a define reference, one hop away over a tree-sitter edge, with degree 2 and whose name does not appear in the task, gets about 5.47 (evidence 0.9 · 0.6 = 0.54). The gap is large but not insurmountable: if the neighbor's name appeared in the task, the 2.5-point task signal would comfortably put it ahead of a weak anchor. This is exactly what the formula is designed to do.

### 7.5 Scope filter and narrowing

The scope filter runs after scoring and before narrowing. This order matters: a caller who has access to two of five repos gets their own best eight results, not what is left of the global top eight.

Narrowing builds the answer from two streams, one slot at a time: the embedding model's ranks and the engine's score ranking. The resulting list is K-monotonic: narrow(pool, n) is exactly the first n elements of narrow(pool, n + 1). That is, asking for a longer list never loses a symbol the short list contained, and a K=20 run can be truncated to K=10. Earlier proportional budgets did not have this property; in a 40-PR replay, one PR had dropped from 100% recall at K=10 to 50% at K=20.

Slot i is filled by these rules:

- If it is within the profile's guard ranks, the model's next rank is taken.
- Position one is always the model's number one; the model is the only channel that reads meaning rather than names, and MRR is determined here.
- If the model owns fewer than i · reserve_share of the selections so far, the model's next rank is taken. A candidate that the engine selected but the model also ranked counts toward this share; a selection on which the two channels agree is exactly what the reserve already wants to protect.
- Otherwise the engine's best candidate is taken, but diversity limits apply: ⌈i · 0.6⌉ symbols per file in the first ten slots, and one more for every ten slots after that; ⌈i · 0.3⌉ for members of the same container; ⌈i · 0.2⌉ in total for containers.

That the file limit loosens after ten slots reflects what a long answer is requested for: nobody asks for fifty symbols to read the fourteenth helper in userPreferences.ts; they ask to see every place that touches a localStorage key.

The reserve share and the guard value come from the retrieval profile and are chosen automatically according to the embedding model. The Voyage profile works with a share of 0.5 and a guard of 0. Jina-code, since it spreads its correct hits across ranks 1–15, needs a guard of 10: in the PR replay, recall@20 rose from 35.7% to 38.2%, and on the holdout from 27.8% to 34.9%. A profile change does not alter stored data; it is not a re-index but only a re-run of the query side.

### 7.6 Packing: Detail that gets cheaper with distance

The selected candidates are placed into a default budget of 1,500 tokens (four characters ≈ one token). The level of detail decreases with distance:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image17.png)

Distance, Detail, Content

This is what makes it possible to fit twenty truly relevant symbols into 1,500 tokens, that is, to get a bundle short enough for an agent to carry on every turn. The budget is deliberately kept short, because the agent resends context on every turn: a 4,000-token budget meant carrying ~4 thousand tokens on every turn with no additional gain.

Bodies and docstrings are loaded not during expansion or scoring but only for the selected candidates. If an item does not fit, it is retried at the reference level; if it still does not fit, it is skipped and the walk continues. This way a large function at the top cannot starve everything below it. The response reports the used_tokens, included, and skipped fields; the caller can see the difference between "there was nothing else" and "there was but it did not fit." Each item also carries file_id and line; the agent opens the file directly instead of searching for the symbol.

### 7.7 Coverage and confidence

Every response carries a coverage block. This block exists so that an agent can decide whether to trust the bundle and a human can understand why an answer came out weak: how many sources contributed, how many strong and verified anchors there are, how much of the selection consists of weak single-source anchors or test code, how many candidates are not tied to an anchor, the score gap between first and second, whether a hub symbol leaked in (touches_god_node), and whether the index is behind the requested commit (commit_mismatch).

These are reduced to a single label:

- low: No anchor reaches 0.35 strength and none is verified; or more than half of the selection is weak single-source anchors or tests; or there is a single source and the gap is below 0.5 or more than half of the candidates are orphans.
- high: The first candidate is a trustworthy anchor, at least 60% of the selection is trustworthy anchors or their direct neighbors, at most a quarter is weak anchors, and the first is ahead of the second by at least 0.5.
- medium: Everything else.

low is not a failure. It is the engine saying it found something but could not verify it; this is exactly the moment when an agent should ask a question or widen the task description instead of starting to edit.

A sample response looks like this:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image18.png)

Diagram (7.7 Coverage and confidence)

This response contains three things a vector database cannot give: anchors, which say why the engine looked there and which independent sources agree; coverage, which is a confidence report; and detail_level, which decreases with graph distance.

### 8. The place of embeddings

In BCE, an embedding is a seed, not an answer. It is used only to find an entry point for a task text that the graph does not recognize. Three providers are available:

- hashing (default): Deterministic arithmetic over token digests. Each token is hashed with BLAKE2b; part of the digest determines an index in the vector dimension and one bit determines the sign; the result is normalized to the unit sphere. There is no API key, no network, and it is byte-for-byte identical across machines. Its semantic recall is weaker than a real model, but it lets the engine work out of the box and makes measurements repeatable.
- voyage: Voyage AI's hosted voyage-code-3 / voyage-code-4 models (1,024 dimensions).
- openai: Any server that speaks the OpenAI-compatible /v1/embeddings protocol (vLLM, TEI, Ollama). An open model such as jina-code-embeddings-1.5b runs in-house this way; the instruction prefixes of the jina-code family are added automatically, and vectors wider than requested are truncated with the Matryoshka method and re-normalized.

There is a notable design choice here: when Voyage is selected and no key is given, the engine does not silently fall back to hashing; it raises an explicit configuration error. Because nearest-neighbor search does not filter on the stored model column; an encoder substituted at query time would be compared against Voyage vectors and would return "confident nonsense" instead of an error.

If the embedding service does not respond at query time (10 seconds by default, two attempts), the search tools respond with lexical and structural anchors and show this as reduced confidence in coverage. The agent is not kept waiting past the MCP timeout.

### 9. The context selector: Crossing the line on purpose

### 9.1 The problem

A long answer finds more of what a change touches, but buries it. On 600 merged changes from 12 repos and 6 languages, a K=50 answer found 94.4% of the changed files (91.0% at K=20); however, it spread them across an average of ~20 different files, ~18 of which were noise. The engine's own ranking was right about the first file in 75% of tasks, but the second and third files of a multi-file change could be anywhere within the top 50. Giving the agent all 50 symbols meant spending the very token budget the engine exists to save.

### 9.2 The approach

The context selector runs on the K ranked candidates after narrowing and sends two requests in parallel to a System One decision model:

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image19.png)

Request, Question, Type, Answer

The decision model returns not generated text but a typed answer with a probability for each question; there is nothing to parse and no output tokens to pay for. A fixed policy turns the answers into tiers:

- full: The engine's first file and every file with p ≥ 0.5. Their symbols are packed at normal detail; those scoring below 1 (irrelevant) are dropped, but every file keeps its best symbol.
- stub: Files with p ≥ 0.05, at most 12 files in total. Each becomes a single ~40-token line in the form path - N candidate symbols: a, b, c. The agent knows the file exists and can open it if needed.
- Everything else is discarded.

Full files are laid out in round-robin order: the best symbol of every full file comes before the second symbol of any file. This way a tight budget cuts depth, not files. The cost of the stubs is set aside from the budget before the walk (at most 40%).

### 9.3 Models

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image20.png)

BCE_SELECTOR, Model, Where it runs, File recall @50, Tokens, Latency

Jev is the reference model; the thresholds are fitted to its probabilities. However, the task text and 240-character excerpts of the candidate symbols leave the organization boundary; this is the only place where the engine sends source code to a third party at query time. decider-4b is the closest open-weight alternative to Jev: in exchange for 1.2 points lower recall, nothing leaves the premises and there is no per-query bill.

### 9.4 Measured impact and the selection process

With Jev at K=50 over the 600 tasks: tokens given to the agent fell from 8,310 to 1,714 (−79%), the number of distinct files listed from 20.5 to 10.9 (2.3 full + 8.5 stub), and file recall from 94.4 to 93.4; recall within the top 20 symbols, however, rose from 91.0 to 92.5. The number of tasks where the first file was correct went from 450 to 493, and MRR from 0.826 to 0.858. The selector added ~575 ms to the query, but the whole query still got faster, because fewer bodies were loaded and processed.

The policy was not chosen arbitrarily. By replaying cached K=50 answers offline, the recall of the top five files was compared on a 50-task sample weighted toward heavy, multi-file tasks: engine order 64.7; score-gap heuristic 64.4; Voyage rerank-2.5 64.0 on files, 69.1 on symbols; Jev noul 75.1; Jev score 75.6. The deciding difference was this: cross-encoder scores are not calibrated probabilities, so no single threshold works across tasks. Jev's probabilities are calibrated; this is also what lets a threshold, rather than a fixed N, decide how many files a task gets.

### 9.5 Failure behavior and the limit of determinism

The selector never adds a candidate; it only drops, reduces, and re-ranks among those the engine has ranked. On an error or timeout, the ranked items are packed unchanged and coverage.selector.status becomes "error"; if only the symbol request fails, the files are tiered without symbol pruning ("partial"). In short, the selector is fail-open in every case.

Jev is not bit-level deterministic: sending the same request again shifts the probabilities by ~0.01 on average, 0.14 at most. Across 50 tasks × 3 runs, the first file stayed the same in 96–98% of tasks and the full tier set in ~90%; the stub boundary moved one or two files in 20–40% of tasks, but none of the 29 files that moved was a file the change touched. Recall varied by at most 0.6 points across the three runs. That is why the model is pinned (typesafe/jev-1.13), and BCE_SELECTOR=off or bce context --no-select brings back the byte-for-byte identical bundle.

The confidence label is computed over the ranking before the selector runs; the selector does not change it.

### 10. Integration with agents

### 10.1 The MCP surface

The MCP catalog is deliberately narrower than the REST surface. An agent given dozens of overlapping retrieval tools chooses worse; that is why only eight read-only tools that do not duplicate one another are offered: get_context_for_task, hybrid_search, resolve_symbol, find_references, get_call_graph, expand_blast_radius, get_index_job, list_index_jobs. With BCE_MCP_ALLOW_WRITE=true, two indexing tools (index_repo, reindex_repo) are added; they do not do the work synchronously but leave a job in a queue, because a full indexing takes longer than any agent's tool-call timeout. Queue rows are claimed with FOR UPDATE SKIP LOCKED; so an API server and an MCP server can safely share the same database.

get_context_for_task is the tool an agent should reach for first. The hint fields (explicit_symbols, route_paths, history_file_ids, component_repo_ids) are the highest leverage a caller has: a single known symbol name, or a route path from a stack trace, turns a guess into a certainty and usually raises the reported confidence by one level.

Every tool returns the same envelope: payload is the language-independent contract; message is text written for humans, translated according to the locale (English or Turkish), and should not be parsed.

### 10.2 Rule and hook: What measurement taught

One of the project's most instructive findings is that an MCP server on its own can make an agent worse. In an agent benchmark on 14 tasks in a React/TypeScript codebase, a Cursor agent with access to the server asked the graph late (after a round of grep) or eight times per task, and the answer it got contained no file or line.

Two changes turned the situation around:

- A rule telling the agent: call get_context_for_task as the first thing, treat the file:line entries it returns as verified locations and do not search for them with grep, and do not edit a file just because it was listed.
- Delivering the graph's answer before the agent's first turn.

With both, on the same 14 tasks with the same model and machine: total tokens −20%, grep/glob output −46%, model turns −13%; 73/73 checks passed against the plain agent's 72/73, and 23% fewer lines were changed.

This finding was turned into product behavior. bce cursor-init writes the .cursor/mcp.json file and an alwaysApply rule into the project. bce claude-init writes .mcp.json, a marked section in CLAUDE.md, and a UserPromptSubmit hook that runs the bce precontext command: the hook queries the graph once on every prompt and hands the result to the agent as additionalContext before its first turn. Since Cursor's prompt hook cannot add context, the rule takes on that job there. The hook is also fail-open: an unreachable database means a prompt without context, not a blocked prompt.

### 11. A self-explaining interface

The web interface under /ui ships inside the wheel and requires no separate deployment. It is written in React and TypeScript; it has English and Turkish catalogs. It is not a dashboard. Its second tab replays a real get_context_for_task call, stage by stage, against the real graph via POST /v1/ui/context-trace: anchors lighting up, expansion spreading outward, candidates being scored and cut. When retrieval returns something surprising, watching where it went wrong is much faster than reading scores. Determinism shows up here too: the replayed trace is the same as the answer the agent actually received.

### 12. Measurement methodology

Perhaps the project's most mature side is its approach to measurement. In the README's words: claims about retrieval quality are worthless without knowing which task set they were measured on; that is why what ships is not a scoreboard but the measurement tool itself.

bce bench runs on a case file the user prepares by hand: each case consists of a task text and the symbol_ids believed to answer it. The report gives recall, precision, precision@1, MRR, and median and p95 latency. It includes two pass/fail checks that are more important than the scores: determinism_ok (each case is run repeatedly and must return a byte-for-byte identical order) and rls_ok (a case run with a scoped user must not surface a repo that the user cannot read).

bce bench-prs replays merged pull requests: the task is the PR's title and description, the right answer is the symbols the PR actually changed, and the database indexes the repo at the PR's base commit. The engine is compared against the raw embedding ranking on the same query. For each correct symbol, the channel that brought it in and the stage where it was lost (not_reached, narrowed_out, returned) are tracked. Most importantly, PRs are split into a tuning half and a holdout half; every constant is fitted only on the tuning half and measured once on the holdout. The project says this explicitly: tuning a retrieval engine to the cases you report produces a number that describes only those cases.

This discipline also shows in the list of ideas tried and abandoned in the change history:

- Splitting the task into sentences and merging per-sentence semantic rankings: a single query with the whole text found 89 of 127 expected files in the top 100, while merging found 87 and spoiled the top (semantic hit@1 fell from 19 to 14 out of 30).
- Scaling the word-pair bonus by rarity: no gain anywhere at K=50, random reshuffles in every language at K=20.
- Steeper semantic rank decays (8 / 10 / 15): lowered recall@20 and semantic retention.
- A score-margin gate in narrowing and strong explicit anchors capturing the first slot: the first was ineffective; the second filled the top ranks in long PR descriptions.
- A slot reserve for graph neighbors: since evidence-scaled scoring already lets a real neighbor beat a weak anchor, the reserve only lost recall.

A concrete result of measurement-driven development: in v0.3.0, macro file recall on 30 natural-language tasks in a React/TypeScript front end rose from 82.0 to 99.6. Of the 31 files the old pipeline missed at K=50, 27 had never entered the candidate pool; their evidence was in places nothing indexed: a localStorage.getItem('token') in the middle of a 10 KB panel, the members of a type union, a toast message on the sixtieth line of a page. The fix was not something fitted to these tasks, but making the entire symbol searchable and adding the usage / path / impact sources.

### 13. Security model

BCE is unusually candid about its security boundaries:

- The engine has no authentication of its own and expects a layer in front of it to provide it.
- Per-user repo scoping (the X-BCE-User header and the scopes table) is applied only in Layer 3. Layers 1 and 2, the indexing and job endpoints, and everything under /v1/ui/* serve every indexed repo to anyone who can reach the port.
- X-BCE-User is trusted as is; the layer in front must authenticate the user and overwrite the header.
- Row-level security (RLS) policies are a second line of defense, not the live enforcement path; the application does not set the bce.user_id session variable. The AGE graph is not covered by RLS.
- The MCP stdio server runs with system privileges and can see every repo; a separate process should be run for each trust boundary.
- Indexing means storing source; the database should be treated with the same care as the source it indexes.
- The remote indexing token is injected into the URL for the duration of a single git call, then origin is reset; the token is never written to .git/config and is masked from error messages.
- Logs are masked on fields such as token, password, secret, api_key; however, the DEBUG level writes request and response bodies, which for this engine means source code. In production, stay at INFO.

### 14. Setup and operations

A typical setup consists of four steps:

- PostgreSQL 16 with Apache AGE + pgvector in a single database docker compose -f deploy/docker-compose.yml up -d
- Install and apply migrations pip install bgts-context-engine cp .env.example .env bce migrate
- Index a repo bce index --repo /path/to/your/repo --name my-service
- Ask bce context --task "fix the login timeout in the meeting webhook"

After that, bce serve serves the REST API (/docs) and the web interface (/ui); bce serve-mcp is the stdio MCP server that the editor launches itself. The prebuilt image builds Apache AGE on top of pgvector/pgvector:pg16, because there is no general image containing both. Since AGE is not available on most managed PostgreSQL services (RDS, Cloud SQL), in practice you need to host the database yourself.

Three of the operations notes stand out: increasing shared_buffers on large repos (so that HNSW inserts do not evict graph index pages; 2 GB or a quarter of machine memory), indexing large repos one at a time, and not touching the container with docker exec during indexing. The last one is an interesting trap: in a Compose setup, PostgreSQL is the container's process number 1; a helper process that is orphaned and exits with an unexpected code is reaped by the postmaster as a "crashed server process," all backends are killed, and a single-transaction indexing run that has been going for hours is rolled back.

### 15. Limitations and roadmap

The project also lists its own limits openly:

- Scope checking does not yet exist on every layer; Layers 1 and 2 are not filtered. Until this is closed, the API should sit behind a proxy.
- There is no streamable HTTP transport for MCP; today the server runs alongside the agent over stdio. A remote transport will let a single index serve the whole team.
- More languages: the most requested are Rust, Kotlin, and PHP. Although the bridge extractor recognizes the Objective-C, Swift, and Kotlin sides, since there is no provider for those languages, native declarations become symbols only if a provider is added.
- Broader SCIP ingestion: today SCIP is run only for Python and TypeScript.
- A published measurement set: an open task set over open repos will make results comparable across projects.
- The selector thresholds are fitted on Jev; re-fitting for the decider models has not yet been done, and there is no repeat-run (determinism) test for the deciders.

### 16. Conclusion

The core claim of BGTS Context Engine is simple but powerful: the context a coding agent needs is a question of code structure, not text similarity, and this question has a precise answer. The project builds this claim on three principles:

- Determinism is the product itself. The same task, the same commit, the same ranking. This makes the engine debuggable, auditable, and measurable. The contribution guide says so from the start: a change that causes the same task to return different results is not merged without an explicit opt-in flag.
- Every answer explains itself. Which sources agree, where each edge came from, what the confidence is, and whether the index is up to date are part of every response.
- Probability stays outside the line and clearly marked. The embedding only provides ranks; the decision model only cuts among ranked candidates, never adds, falls back to the ranking on error, and reports itself.

What is technically remarkable is that these principles do not stay abstract: each is backed by a measurement, a holdout set, and often an alternative that was tried and abandoned. While the architecture that unifies graph, vector, and full-text search inside a single PostgreSQL minimizes the operational burden, the patient resolution of planner pitfalls encountered at real scale shows that the system is ready for production.

As agents work in larger and less familiar codebases, the question "what should I read?" will become as important as "what should I write?" BCE approaches this question not with a guess but with an answer that can be walked over a graph, replayed, and challenged.

### How we measured

Every task is a change the project actually merged. The agent is given the developer's sentence and asked to find which files the change was made in. The agent works in a copy with its history removed, so it cannot find the answer with git log.

Every task ran twice on each agent: once with the agent on its own, and once asking BCE over MCP at the very start. After BCE's answer, the agent continued using its normal tools.

### Setup

- Tasks: 600 merged changes from 12 open-source repos in 6 languages, 50 per repo Python: flask, requests JavaScript: express, axios TypeScript: nest, vite Java: guava, netty C#: efcore, PowerShell Go: gin, prometheus
- Agents and models: Cursor CLI with grok-4.7-high-fast; OpenCode with GLM 5.3 Flash (OpenRouter)
- Steps: tool calls made by the agent
- Tokens: all tokens, including cached input
- Cost: with the same price card for both agents (OpenRouter GLM 5.3 Flash), with the cache read discount applied
- Time: time to finish the task (wall clock)
- Quality (recall): the rate at which the files touched by the change were found in the agent's answer

### Results

Average per task, agent on its own → with BCE:

- Tokens: Cursor 264K → 59K (−78%), OpenCode 196K → 24K (−88%)
- Tool calls: Cursor 17.4 → 2.0 (−88%), OpenCode 11.3 → 1.1 (−90%)
- Searches and file reads: Cursor 9.1 searches and 6 reads → 0.06 searches and 0 reads; OpenCode 7.0 searches and 4.3 reads → 0.1 searches and 0.02 reads. Tasks with no searches at all: 583 of 600 for Cursor, 570 of 597 for OpenCode
- Model turns: Cursor 9.1 → 3.0 (−67%), OpenCode 8.3 → 2.1 (−75%)
- Time: Cursor 65 s → 42 s (−35%), OpenCode 132 s → 83 s (−37%, adjusted; see notes)
- Cost: Cursor −60%, OpenCode −67%
- Quality: recall for Cursor 95.6% → 92.9%, for OpenCode 89.2% → 92.5%; the average of the two agents 92.4% → 92.7%

### Where do the tokens drop from?

Most of the drop comes from cache reads. When the agent is on its own, it rereads a context that grows on every turn; with BCE the job finishes in 2–3 turns.

- Cache reads: Cursor −86%, OpenCode −97%
- Uncached input: Cursor −46%, OpenCode −47%
- Output (including reasoning): Cursor −34%, OpenCode −50%

This is also why cost drops less than tokens: most of the tokens that dropped are cheap cache reads. In the standalone run, cache reads make up about 40% of the bill.

### Where does the gain grow?

- As the task gets harder: the token reduction is 71% / 68% on easy tasks, 76% / 87% on medium tasks, 83% / 93% on hard tasks (Cursor / OpenCode).
- As the agent on its own spends more tokens: the gain is biggest on the most expensive repos. 86% / 90% on guava, 85% / 94% on efcore; 58% / 68% on gin, the cheapest repo.
- In every language: across all 6 languages the reduction is 70–83% for Cursor and 80–92% for OpenCode.

![](/images/articles/bce-yapay-zeka-kodlama-ajanlari/image21.png)

Token reduction by repo, difficulty, and language.

### Notes

- The OpenCode time is adjusted. During the BCE runs, the machine's memory had filled up (16 GB, 99%). The opening of the MCP server and the waiting of the BCE call were brought back to healthy values; in the raw measurement, OpenCode with BCE is 16% slower. Cursor times are as measured.
- OpenCode completed 597 of 600 tasks with BCE. The two runs were compared over the 597 tasks that both completed.
- The Cursor cost is the tokens measured by Cursor, calculated with the same price card; it is not Cursor's own bill.

### Try it

BCE runs on your own machine, with a single PostgreSQL database and, by default, without an API key:

docker compose -f deploy/docker-compose.yml up -d

# PostgreSQL 16 + Apache AGE + pgvector

pip install "bgts-context-engine[mcp]"

bce migrate

bce index --repo /path/to/your/repo --name my-service

bce context --task "fix the login timeout in the meeting webhook"

Then connect your agent. Cursor or Claude Code is set up with a single command; VS Code, OpenCode, and other MCP clients run bce serve-mcp:

bce cursor-init --repo-id my-service # Cursor

bce claude-init --repo-id my-service # Claude Code

Three ways to contribute:

- Star the repo and try BCE on a repo you know well.
- Measure it yourself. Run your agent on your own tasks with and without BCE, and tell us what you see.
- Add a language. Python, JavaScript, TypeScript, Java, C#, and Go are ready; the most requested are Rust, Kotlin, and PHP.

Want BCE on your own infrastructure, tuned to your repos?

Write to bg-ai@bgts.com.

### github.com/bgts-ai-org/bgts-context-engine

### Sources and further reading

- README (Turkish) and README (English)
- Architecture: the deterministic line, three layers, indexing
- Retrieval: anchors, expansion, every scoring weight, confidence
- Selector models: Jev, decider-2b, and decider-4b
- Data model: node labels, edge types, tables, symbol identity
- MCP and API: every tool and endpoint, the CLI
- Languages: what the parsers extract and adding a new language
- Deployment: configuration, jobs, backup, measurement
- Changelog: every release with its measured rationale
- Security policy
- Project site: bgts-ai-org.github.io/bce-microsite
- Source code: github.com/bgts-ai-org/bgts-context-engine`,
  },
  {
    id: "yapay-zeka-maliyetleri-nasil-optimize-edilir",
    title: "How to Optimize AI Costs",
    author: "Alper Önsoy",
    excerpt:
      "As one of the pioneering organizations in AI, while a significant group inside the company focuses on technology and solutions, a considerable group also focuses on AI governance, which is one of our important consulting areas as well.",
    coverImage: "/images/articles/yapay-zeka-maliyetleri-nasil-optimize-edilir/cover.jpeg",
    date: "2026-10-20",
    category: "Artificial Intelligence",
    readTime: 3,
    cardTags: ["AI Cost Engineering", "AI Governance"],
    cardQuote: "How to Optimize AI Costs",
    cardQuoteHighlight: "AI Costs",
    cardTheme: "orange",
    body: `## How to Optimize AI Costs

As one of the pioneering organizations in AI, while a significant group inside the company focuses on technology and solutions, a considerable group also focuses on AI governance, which is one of our important consulting areas as well.

Governance has many areas, of course, but "cost optimization" is one of the most important topics. We focus heavily on it; in the consulting services we provide, especially to our large customers in the finance and defense sectors, AI cost management engineering is always one of the most popular topics.

A recent article Gartner shared on this subject, titled "AI Inference Cost Reduction Ladder," caught my attention. It treats the cost management process in the steps "Rent > Trim > Route > Engineer > Adopt > Distill > Own," summarizing the cost assessment at each step and the criteria for moving to the next one.

According to Gartner, in the right scenarios the last three steps can deliver savings in the remaining inference cost of 25–50% (Adopt), 80–97% (Distill), and 70–90% (Own).

According to this model, the first four steps, such as token/context optimization, routing, caching, batching, and model selection, must be exhausted first; only after that does one move on to the Adopt > Distill > Own stages.

The really interesting break is at the "Distill" layer: moving the most heavily used agentic tasks to small, domain-specific models trained on outputs taken from a frontier model. Gartner states that this can deliver an 80–97% cost reduction for specific tasks.

But not every organization needs to develop its own model; it emphasizes a "buy first, fine-tune" approach, that is, starting with an existing specialized model + LoRA/QLoRA, and going to distillation from scratch only if the data/workflow is truly different.

Rung 7 is more a volume decision than a technology decision: self-hosting makes sense only if there is consistently high traffic, a stable workload, and sufficient MLOps capability. One of the important thresholds Gartner gives is that below 500M tokens per month, or if the workload mix keeps changing, self-hosting may destroy value.

At the end of the article, the KPIs that organizations are advised to track from a cost perspective are also summarized; I'm sharing them in case you want to draw on them when building your own KPIs:

Leading Indicators — To be tracked monthly

- Cost per completed task, by feature
- Blended cost per 1 million tokens ($)
- Share of tokens used on frontier-level models (target: decreasing)
- Tokens per task
- Cache Hit Rate
- Evaluation Pass Rate (the share of items that successfully pass evaluation at each stage of the loop)

Lagging Indicators — To be tracked quarterly

- AI COGS as a percentage of revenue (the share of AI-driven cost of goods/services in total revenue)
- Gross margin by feature
- Payback Period per cost reduction initiative

![](/images/articles/yapay-zeka-maliyetleri-nasil-optimize-edilir/image23.jpeg)`,
  },
];
