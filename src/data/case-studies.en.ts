export interface CaseStudy {
    id: string;
    title: string;
    requirement: string;
    solution: string;
    projectType?: string;
    sector?: string;
    technologies?: string[];
    category?: "yazilim" | "altyapi" | "yonetilen-hizmet" | "egitim";
}

export const CASE_STUDIES_EN: CaseStudy[] = [
    {
        id: "case-study-16",
        title: "Loan Payment Plan Service Transformation",
        requirement: "The Payment Plan General Service, used in banking applications and running on a mainframe environment, needed to be migrated to an open system architecture. It aimed to analyze the current dependencies of the BILCODEP payment plan service and make it compatible with open systems in terms of performance and sustainability.",
        solution: "All dependencies used by the BILCODEP payment plan service were analyzed in detail. DB2 database calls with gRPC and MFDC service integrations were re-developed in the Channel and business layers in accordance with the open system architecture. The service was stripped from mainframe dependencies and moved to a modern and scalable architecture.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "DB2", "MFDC Services", "Mainframe Transformation", "Microservices"]
    },
    {
        id: "case-study-17",
        title: "Tax & Invoice Services Project",
        requirement: "The invoice and tax payment screens located in the Bank's Mobile and Internet Branches needed to be redesigned with current technologies by reducing the existing mainframe dependencies. It aimed to strengthen the infrastructure, increase sustainability, and transform it into a technically more manageable structure.",
        solution: "Invoice and tax payment screens were redesigned to reduce mainframe dependencies and developed with modern technologies. Payment processes were presented to Digital Branch users in a technically more manageable, scalable, and powerful structure.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Mainframe Transformation", "RESTful API", "Oracle DB"]
    },
    {
        id: "case-study-18",
        title: "E-Invoice Integration Project",
        requirement: "There was a need to receive the e-invoices issued to the bank via the intermediary company, integrate them into internal systems, manage the approval processes, transfer them to relevant modules, and track them end-to-end. It aimed to run these processes in compliance with EFA screens and architecture.",
        solution: "An integration that ensures e-invoices forwarded via the intermediary company are taken into internal systems was developed. The approval processes of e-invoices, their transfer to other modules, and traceability were designed and implemented in accordance with EFA screens and structure. Thus, e-invoice processes gained a centralized, traceable, and manageable structure.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "EFA Screens", "E-Invoice API", "Spring Boot", "Oracle DB"]
    },
    {
        id: "case-study-13",
        title: "SwapAgent Functionality Enhancement",
        requirement: "Advanced functions needed to be developed for the SwapAgent platform. It was expected to provide robust and scalable solutions in a dynamic financial environment.",
        solution: "Java expertise was utilized to smoothly develop and integrate new features. Close collaboration was made with the SwapAgent team to understand and meet special requirements. Scalability and performance of the platform were ensured.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "Spring Boot", "Microservices", "RESTful API", "Docker", "Oracle DB"]
    },
    {
        id: "case-study-14",
        title: "Reinsurance Digital Transformation Project",
        requirement: "Analyzing reinsurance modules, migrating tables to an open system, preparing automations in screens and batches, and rewriting them on a digital transformation-oriented platform. Transformation of 19 screens is underway. In this context, in addition to 19 screens, 8 batches and 13 tables are migrated to an open system.",
        solution: "Screens and batches were moved to the new platform, a transformation project from Mainframe to open systems was executed. Monitoring alarms were set for critical points. Reports were generated using ODI. A team of 10 people: 1 Data Developer, 1 Architect, 2 Business Analysts, 3 Fullstack (Java) Developers, 1 Test Specialist, 1 PM, 1 Dev Team Lead.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "Platform", "Mainframe Transformation", "Oracle Data Integrator (ODI)", "Spring Batch", "Oracle DB", "Monitoring"]
    },
    {
        id: "case-study-15",
        title: "Non-Life Insurance Products & Digital Transformation",
        requirement: "In Non-Life Elementary insurance products, it was necessary to transform the digital channel sales screens working with Eureko insurance and the bank, and the agency screens used by insurance agencies with new technologies.",
        solution: "Two different structures were developed to keep customer information separate. An asynchronous working structure with Eureko insurance was created. A project with dense integration points, including integrations with mobile, web, and credit products, was carried out. 2 Fullstack (Java) Developers and 2 Business Analysts.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "Platform", "Spring Boot", "Angular", "RESTful API", "Asynchronous Messaging", "Oracle DB"]
    },
    {
        id: "case-study-1",
        title: "Office Reservation and Planning Solution",
        requirement: "The Bank sought to enable employees to plan their work within the hybrid working layout applied as one day a week from office location.",
        solution: "An office reservation and planning web application was developed for hybrid workers to track and manage their remote work plans.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["ASP.NET", "ASP.NET Web API", "ASP.NET WebForms", "C#", "JavaScript", "Backbone.js", "SQL Server"]
    },
    {
        id: "case-study-2",
        title: "CV Parsing & LinkedIn Integration",
        requirement: "It was requested to upload candidate resumes to the system over Kariyer.net and LinkedIn platforms, extract applicant information from these resumes, and populate relevant fields on a generated form.",
        solution: "In line with the client request, by establishing an appropriate team to work compatibly with current technologies; LinkedIn integration, Kariyer.net CV Parsing process, and Autofill efforts were completed.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["ASP.NET", "C#", "LinkedIn API", "Kariyer.net API", "SQL Server"]
    },
    {
        id: "case-study-3",
        title: "Life Insurance and Provision Reserve Applications",
        requirement: "There was a need to automate daily calculation and comparison processes, improve procedures, and thus rewrite them in an application environment.",
        solution: "By resolving needs that the insurance reserve calculation application could not fulfill, the application was renewed. Daily provision calculation results were tracked in a database and frozen at module month ends. An application that calculates and lists online reserves per policy was developed.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Oracle DB", "Spring Boot", "Microservices"]
    },
    {
        id: "case-study-4",
        title: "Individual Pension Plans Project",
        requirement: "It was required to renew functionally and revamp visually the Individual Pension System plan screens designed to serve end-users. In addition, their transformation was needed.",
        solution: "Efforts necessary for improvement analysis on all screens and design blueprints were provided by the client's IT department. A team consisting of 4 Software developers and 2 analysts, alongside experienced resources from previous life insurance project, was assembled.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Framework", "Oracle DB"]
    },
    {
        id: "case-study-5",
        title: "Field Sales Mobile Application",
        requirement: "The bank needed a mobile application allowing field sales and client management teams to follow customer data.",
        solution: "With a mobile application developed by our 5-person team, employees were enabled to see both current and prospective customers via map across regions they visited and thereby plan meetings accordingly. In addition, they were permitted to reach out and scrutinize customer details regarding overall past bank records.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["React Native", "ASP.NET Web API", "C#", "SQL Server", "Google Maps API", "RESTful API"]
    },
    {
        id: "case-study-6",
        title: "Senetör - Rehinmen Platform",
        requirement: "The bank asked for a project letting them singly or collectively add/edit/delete notes and vehicle pledge transactions belonging to their customers, ensuring this information feeds into state-owned services.",
        solution: "An application was developed that can enter bulk promissory notes, update information, create vehicle pledge, pre-pledge, and deed of consent, instantly transmitting these transactions to Risk Center, Notary Unions Services, and Central Invoice Registry Systems belonging to the state. Furthermore, the bank's entire bill and pledge operations procedures were automated.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["ASP.NET", "C#", "SQL Server", "Web Services", "Risk Merkezi API", "Noterler Birliği API", "MKFS Entegrasyonu"]
    },
    {
        id: "case-study-7",
        title: "Contract and Approval Portal",
        requirement: "There was a demand to rewrite processes serving on a Web platform over to a SharePoint environment.",
        solution: "Ethics Line, Contract, and Chance Approval modules used in the client's web environment were relocated to the SharePoint platform by a 5-person team.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Microsoft SharePoint", "SharePoint Framework (SPFx)", "TypeScript", "Power Automate", "Microsoft 365"]
    },
    {
        id: "case-study-8",
        title: "Career Portal Transformation",
        requirement: "There was a need to revamp the existing portal where bank employees govern and track their distinct career trajectories via extra useful functionality.",
        solution: "Consultancy services were procured by bringing 4 of our resources from the Software Products group. The career portal was modernized by migrating toward a digital transformation platform.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "Platform", "Spring Boot", "Angular", "Oracle DB", "RESTful API"]
    },
    {
        id: "case-study-9",
        title: "HR Applications Budget Module",
        requirement: "Under the scope of a budget module targeted to be developed by the Enterprise Apps squad, an application passing internal staff and team budgeting to autonomous standards was required, empowering HR toward staff budgeting based upon project allocations.",
        solution: "For the project, a team formed out of 1 tech lead, 2 Java Software developers, and 1 analyst hailing from the software commodities division acts collaboratively mapping alongside bank cohorts. Project and team-based budgeting networks were successfully commissioned.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "Spring Boot", "Oracle DB", "RESTful API", "Angular"]
    },
    {
        id: "case-study-10",
        title: "Portfolio Management Transformation",
        requirement: "This critical application wielded by the treasury division mainly is composed of funding module dashboards wherein during daylight, trading managers' transactions are supervised leading up to end-of-day closures. A technology migration parallel to workflow advancements was scoped.",
        solution: "2 out of 4 teams totaling 13 personnel were sourced from Senior Analysts and Java software developers endowed with domain footprint exposure. While modeling an architecture fueling out of mobile streams inside current infrastructures, efforts concentrate towards refining process journeys, optimizing stock exchange assimilation aside fund trace movements viewing.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Oracle DB", "Borsa Entegrasyonu", "Microservices"]
    },
    {
        id: "case-study-11",
        title: "Takasnet Digital Transformation",
        requirement: "Clearing & Settlement mechanism acts tracking provisioning operations tied exclusively inside merchants affiliated with clearing banking cohorts holding card credentials spanning Turkey. The existing application unified inside the bank was instructed for modernization beneath Digital Transformations umbrellas.",
        solution: "We reinforce the modernization initiatives leaning over our 6-person hybrid crew framework. Clearance routines coupled alongside provision steps migrated onto digitally aware grids stepping up application trust bar charts plus horizontal scalability structures.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Oracle DB", "Takasnet API"]
    },
    {
        id: "case-study-12",
        title: ".NET Consultancy & Module Development",
        requirement: "Governed explicitly per requests surfacing via bank affiliate branches, overhauls coupled against ongoing revamps atop existing .NET rooted structures were signaled out. Furthermore, erecting exactly two newly envisioned modules solving Human Resource gaps laid bare.",
        solution: "Necessary enhancements covering existing apps deployed internally were enacted. In service of Human Resources, CV submission parallel to request/grievance hubs birthed directly ascending live spheres. After integrating adjunct development layers, subsequent support/maintenance contours persevere enduringly.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: [".NET", "ASP.NET MVC", "C#", "Entity Framework", "SQL Server", "Angular"]
    },
    {
        id: "case-study-19",
        title: "Direct Debit System (DTS) Project",
        requirement: "A need emerged regarding digitalizing severely critical alongside heavy volumetric financial operational lines executed revolving inside Direct Collections alongside Vendor Finance structures aligned fitting modern-era banking templates. Escalating legacy skeletons conforming resilient, elastic scaling and lasting architecture formed central requirements.",
        solution: "DTS plus TFS processes got digitally revised accommodating modernistic banking architectural blueprints. Via enforced transformation lines bridging robust architectures accommodating highly-dense monetary actions, structures hoisting banking operational metrics and customer journeys elevated live statuses.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Oracle DB", "Microservices", "High-Availability"]
    },
    {
        id: "case-study-20",
        title: "Super Banker — Central Search & Dashboard Project",
        requirement: "Distributing searching capabilities mapping clientele plus endpoints via splintered structures dragged operational proficiency dropping customer gratification barometers inversely. Besides tackling central configurable environments addressing dynamic roles catering user distinct dash profiles demanded central resolution layers.",
        solution: "An adaptive searching engine coalesced resolving client/endpoint lookups centralized underneath single search infrastructures dynamically routing query dimensions (TCKN, VKN, etc.) surfaced. Aligning alongside sub-rule / role-based dashboard template matrix rules modeled exclusively via backend schemas served tailored configurable splash screens mirroring accurate personnel authority maps.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Spring Boot", "Elasticsearch", "Role-Based Access Control", "Angular"]
    },
    {
        id: "case-study-21",
        title: "Branch Withdrawal / Deposit & Gold Purchasing Project",
        requirement: "Commanding oversight driving branch & ATM dispensing/deposit events merged atop branch native operations covering scrap gold trade-ins coupled gift coupons onto cohesive single screens targeting modernized user interface experiences aligned microservice schemas.",
        solution: "Mobilizing a devoted cell grouping roughly 4 analysts, 2 automation QA's and 8 software developers steered project starts. Initial legacy Cobol dismantling operations uncovered existing flows enabling new ToBe mockups solidifying GT microservice paths. Java 17, Spring Boot, Oracle, RabbitMQ coupled React surfaced backend & frontal scopes strictly tracked over Bitbucket, Jenkins, OpenShift, Kibana & Dynatrace gauges.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java 17", "Spring Boot", "React", "gRPC", "Oracle DB", "RabbitMQ", "Jenkins", "OpenShift", "Kibana", "Dynatrace", "Cobol Reverse"]
    },
    {
        id: "case-study-22",
        title: "IVR (Interactive Voice Response) Modernization Project",
        requirement: "Modern infrastructural pivoting emerged addressing rising call volume interactions matching evolving corporate prerequisites encasing active IVR systems currently maintained inside banking bounds. Upgradable paths forging elastic, scalable setups streamlining operational capacities alongside lifting user encounter scores commanded objectives.",
        solution: "Moving IVR environments scaling onto modern schematics witnessed process reiterations. Scalable blueprints integrated alongside flexible calling pipelines mapped developmental lines. Accompanied via holistic transformation lines targeting caller gratification scopes, corporate operational capacities merged lasting system persistence elevations.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "IVR Platform", "VoIP", "Spring Boot", "Microservices"]
    },
    {
        id: "case-study-23",
        title: "KGF (Credit Fund) Integration Project",
        requirement: "Cumbersome manual interventions tracking lending protocols spanning collaterals currently steered over fragile scattered networks ignited massive operational burdens cascading onto delays, error surfaces & restrictive trace chains. Setting integrated, automated uniform pipelines linking KGF structures matching banking interfaces signaled sheer urgencies.",
        solution: "Synchronized automations tracking bank application channels interacting atop KGF layers manifested efficiently closing previously manual notification gaps automatedly. Deploying squads composed 5 Developers, 1 BA, 1 Team Lead. Closing February 2026 spanning 6-month dev cycles appended successive month maintenances.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "KGF API Entegrasyonu", "Spring Boot", "Test Otomasyonu", "Oracle DB"]
    },
    {
        id: "case-study-24",
        title: "Accounting Module Project",
        requirement: "Satisfying accountancy dimensions surrounding bank subsidiaries ordered sweeping application creation demands covering intricate Postings, booking formations coupled test handling management routines wrapping critical phases. Overhauled account transaction ledgers transitioning atop platforms shaped current efforts.",
        solution: "Initiated steered underneath Finance Applications units concentrating over Artica fronts via microservice arrays guided developmental scopes. Transcribed Posting methodologies and account tracking boards materialized strictly aboard fresh platforms.",
        projectType: "Turnkey Project",
        sector: "Finance Sector",
        category: "yazilim",
        technologies: ["Java", "gRPC", "Platform", "Microservices", "Spring Boot", "Oracle DB"]
    },
    {
        id: "case-study-25",
        title: "OS Management and Monitoring",
        requirement: "The bank ordered administrative oversight spanning operating systems, databases, Linux/Unix channels alongside Middleware layers.",
        solution: "Wielding bounded SLA margins tracing explicit resolve parameters handled strictly by our 8-person crew commands operative tiers encapsulating Middleware, operating systems, Linux strings & database realms via yearly contracts.",
        projectType: "Managed Service",
        sector: "Finance Sector",
        category: "yonetilen-hizmet",
        technologies: ["Linux / Unix", "Windows Server", "Middleware Yönetimi", "Oracle DB Yönetimi", "SIT", "SLA Takibi", "Monitoring"]
    },
    {
        id: "case-study-26",
        title: "Device and Client Management (15,000 Devices)",
        requirement: "An internal demand tracking differing client devices aligned disparate OS architectures fueled bank tracking necessities.",
        solution: "Steering roughly 15,000 individual devices materialized via allocated 7-person capacity. Broken down featuring 2 mobile, 2 MacOS & 3 Windows endpoint governing resources mapping explicit roles.",
        projectType: "Managed Service",
        sector: "Finance Sector",
        category: "yonetilen-hizmet",
        technologies: ["Microsoft Intune", "JAMF (MacOS)", "MDM", "SIT", "Windows Device Management", "iOS / Android Yönetimi"]
    },
    {
        id: "case-study-27",
        title: "Datacenter Relocation Planning",
        requirement: "Moving explicit datacenter environments commanding scheduled migrations encapsulated direct project consultancy allocations traversing banking perimeters.",
        solution: "An 11-person crew executed project milestones directly integrating amidst banking staff channels. Both logistical footprint alignments alongside logical migration pathways encountered exhaustive management loops securely landing targeted premises.",
        projectType: "Managed Service",
        sector: "Finance Sector",
        category: "altyapi",
        technologies: ["Veri Merkezi Yönetimi", "Network Mimarisi", "ITIL", "Proje Yönetimi", "Disaster Recovery"]
    },
    {
        id: "case-study-28",
        title: "Windows Server 2012 ➜ 2019 Migration",
        requirement: "Lifting applications currently hosted natively upon Windows Server 2012 endpoints porting over modern Windows Server 2019 nodes required live execution guarantees.",
        solution: "Totaling upwards of 565 migration server nodes encountering Windows Server 2012 parameters met complete Windows Server 2019 ascensions. Achieved under aggressive 10-month timelines via a 3-person staff block, extending phase-2 continuity via bi-annual managed service contracts.",
        projectType: "Managed Service",
        sector: "Finance Sector",
        category: "altyapi",
        technologies: ["Windows Server 2019", "PowerShell", "SCCM", "Migration Tools", "Active Directory", "Hyper-V"]
    },
    {
        id: "case-study-29",
        title: "Windows Server 2016 ➜ 2019 Migration",
        requirement: "Lifting applications currently hosted natively upon Windows Server 2016 endpoints porting over modern Windows Server 2019 nodes required live execution guarantees.",
        solution: "Ignited precisely around Jan-2024 via 3-person formations charting exact completion loops expected traversing 24 explicit months conforming managed service paradigms.",
        projectType: "Managed Service",
        sector: "Finance Sector",
        category: "altyapi",
        technologies: ["Windows Server 2019", "PowerShell", "SCCM", "Migration Tools", "Active Directory"]
    },
    {
        id: "case-study-30",
        title: "4me ITSM Platform",
        requirement: "Deploying fully ITIL4 compliant applications tracing complete service/procedural lifecycles resonated requests. Furthering chatbot assisted endpoints enabling self-service loops mirroring automated integration steps formed baseline bounds.",
        solution: "Harnessing 4me centralizing lifecycle routines under unified application fronts captured stakeholder/team convergences. Labor expenditures dipped radically while automation hoisted standard service qualities. Trackable KPI metrics introduced quantified scorecards evaluating performance standards accurately.",
        projectType: "Managed Service",
        sector: "Finance Sector",
        category: "yonetilen-hizmet",
        technologies: ["4me ITSM", "ITIL 4", "Chatbot Entegrasyonu", "Process Automation", "KPI Dashboard", "API Entegrasyonu"]
    },
    {
        id: "case-study-31",
        title: "DevOps & CI/CD Streamlined Operations",
        requirement: "Effective DevOps methodologies elevating deployment architectures alongside operational phases signaled dire necessities securing mission-critical banking tasks ensuring peak availabilities mapping elite uptimes.",
        solution: "Rolling elite DevOps Best Practices surfaced tackling massive automation lines reducing operational drags directly. Employing Continual integration / Continual Deployment (CI/CD) pipelines realized high-availability frontiers paired solid platform escalations.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "altyapi",
        technologies: ["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "OpenShift", "Terraform", "Ansible"]
    },
    {
        id: "case-study-32",
        title: "SwapAgent Application Support and Monitoring",
        requirement: "Establishing rigorous SwapAgent application availabilities tracking exact 7/24 coverage models demanded dependable channels prioritizing rapid identification & dispute resolutions neutralizing downtime durations drastically.",
        solution: "Instituted pervasive application support modules synced robust observer layers. Yielding real-time monitoring instruments proactive threat hunting realized instant resolution lines mapping extreme infrastructure persistency closing out downtime parameters extensively.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "altyapi",
        technologies: ["Prometheus", "Grafana", "ELK Stack", "PagerDuty", "Dynatrace", "Real-Time Monitoring"]
    },
    {
        id: "case-study-slide34-a",
        title: "Future Core Banking — Data & Digital Skills Development Program",
        requirement: "Aimed spreading digital awareness amongst bank personnel detached naturally from technical branches required deep structural upskilling spanning domains encompassing Data Analysis, SQL, Risk management, Qliksense, Agile pipelines coupled Machined Learning tiers.",
        solution: "Modeling exact training outlines reflecting branch/target matrix parameters sourced custom training modules culminating scheduling roadmaps mapped explicitly with internal tech cores. Endowing ~350 personnel stretched across 2-year Microsoft central platforms charted profound staff career leaps.",
        projectType: "Education & Growth",
        sector: "Finance Sector",
        category: "egitim",
        technologies: ["Microsoft Azure", "Qliksense", "SQL", "Machine Learning", "Agile/Scrum", "Proje Yönetimi"]
    },
    {
        id: "case-study-slide35",
        title: "Banker to Developer — Software Career Transition Program",
        requirement: "Organizing dedicated upskilling platforms via Academy affiliations coupled Microsoft partnered frameworks addressed branch staff desiring transition pivots crossing toward software development branches. Narrowed precisely 20 standout entries amidst 250 test completions spanning nationwide scopes targeting non-technical spheres initially.",
        solution: "Concluding program stretches placed passing participants directly aboard valid Intertech open developer ranks. Realizing extensive TBB affiliated Microsoft partnered engagements provided explicit foundational frameworks converting willing branch associates onto permanent developer career trajectories successfully.",
        projectType: "Education & Growth",
        sector: "Finance Sector",
        category: "egitim",
        technologies: ["Microsoft Azure", ".NET", "C#", "SQL", "Yazılım Geliştirme Temelleri"]
    },
    {
        id: "case-study-slide36-a",
        title: "DevOps Development Program for Bankers",
        requirement: "Catalyzing fundamental DevOps principles bridging IT cognizant personnel rooted within banking branches pursuing exact DevOps career targets ordered precise alignment curriculums ensuring awareness/practical jumps.",
        solution: "Orchestrated across consecutive 3-yearly plans charting steady upskills involving core teachings mapping Azure, GIT, Docker/Container formats alongside PowerShell, Linux environments extending into Python mastery bounds.",
        projectType: "Education & Growth",
        sector: "Finance Sector",
        category: "egitim",
        technologies: ["Microsoft Azure", "Git", "Docker", "PowerShell", "Linux", "Python"]
    },
    {
        id: "case-study-slide36-b",
        title: "IT Young Talents — On-The-Job Specialty Training",
        requirement: "Mandated directly via Insurance client HR hierarchies orchestrating onboarding paths welcoming fresh grads demanded technical readiness crash-courses concluding pre-work lines equipping immediate deployment impacts.",
        solution: "Mapping 3 consecutive yearly cycles forged robust DevOps + Business Analyst cohorts acting synchronously. Serving encompassing domain specialization training streams fortified raw graduates preparing them securely meeting strict live operational duties optimally.",
        projectType: "Education & Growth",
        sector: "Finance Sector",
        category: "egitim",
        technologies: ["DevOps", "İş Analizi", "Azure", "Agile/Scrum"]
    },
    {
        id: "case-study-33",
        title: "Data-Driven Insights & Reporting",
        requirement: "Amplifying data-driven executive verdicts manifested robust comprehensive analytical instruments rendering accurate financial scorecards matched tight timelines effectively.",
        solution: "Carving distinct personalized reporting blueprints modeled exclusively mapping SwapAgent prerequisites yielded precise up-to-date accurate ledger validations. Empowered wholly bridging intelligent analytical engines propelled overarching banking architectures natively.",
        projectType: "Time & Material",
        sector: "Finance Sector",
        category: "altyapi",
        technologies: ["Java", "Crystal Reports", "Oracle Business Intelligence", "SQL", "REST API", "Data Warehouse"]
    }
];
