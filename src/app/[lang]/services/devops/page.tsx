import { localizedPathForLang } from '@/lib/routes'
import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"
import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import TechStackGrid from "@/components/ui/TechStackGrid"
import MetricCard from "@/components/ui/MetricCard"
import { GitBranch, Box, Settings, Lock, Zap, Server, Cpu, Code2, ShieldCheck, PlayCircle } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import { ServiceStructuredData } from "@/components/seo/StructuredData"

export default async function DevOpsPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dict = await getDictionary(lang);
    const devops = dict.services.devops;

    return (
        <>
            <ServiceStructuredData
                name={devops.hero.title}
                description={devops.hero.subtitle}
                url={localizedPathForLang(lang, '/services/devops')}
            />
            <div className="bg-white min-h-screen">

                <Hero
                    title={devops.hero.title}
                    subtitle={devops.hero.subtitle}
                    className="bg-indigo-900"
                    backgroundImage="/images/headers/devops-ve-altyapi-hizmetleri.jpg"
                />

                {/* Key Metrics */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                            <MetricCard
                                title={devops.metrics.deployment.title}
                                value="95"
                                unit={devops.metrics.deployment.unit}
                                icon={Zap}
                                trend="up"
                                trendValue="+40%"
                                description={devops.metrics.deployment.desc}
                                color="indigo"
                                delay={0}
                            />
                            <MetricCard
                                title={devops.metrics.uptime.title}
                                value="99.9"
                                unit={devops.metrics.uptime.unit}
                                icon={ShieldCheck}
                                trend="up"
                                trendValue="+2%"
                                description={devops.metrics.uptime.desc}
                                color="blue"
                                delay={0.1}
                            />
                            <MetricCard
                                title={devops.metrics.recovery.title}
                                value="5"
                                unit={devops.metrics.recovery.unit}
                                icon={Box}
                                trend="down"
                                trendValue="-60%"
                                description={devops.metrics.recovery.desc}
                                color="indigo"
                                delay={0.2}
                            />
                            <MetricCard
                                title={devops.metrics.pipeline.title}
                                value="98"
                                unit={devops.metrics.pipeline.unit}
                                icon={PlayCircle}
                                trend="up"
                                trendValue="+15%"
                                description={devops.metrics.pipeline.desc}
                                color="slate"
                                delay={0.3}
                            />
                        </div>
                    </Container>
                </Section>

                {/* CI/CD & Automation Section */}
                <ContentSection
                    title={devops.cicd.title}
                    content={
                        <div className="space-y-6">
                            <strong className="text-indigo-700">Jenkins, GitLab, Azure DevOps {lang === "en" ? "and" : "ve"} ArgoCD</strong> {devops.cicd.p1}
                            <Text variant="large">
                                <strong className="text-indigo-700">Ansible {lang === "en" ? "and" : "ve"} Helm</strong> {devops.cicd.p2}
                            </Text>
                            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                <Heading variant="h4" className="font-bold text-slate-900 mb-4">{devops.cicd.advantagesTitle}</Heading>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {devops.cicd.advantages.map((item: string, i: number) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                            <Text variant="small" className="text-slate-700">{item}</Text>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80"
                                alt="CI/CD Pipeline"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <GitBranch className="w-24 h-24 mx-auto mb-6" />
                                    <Heading variant="h3" className="text-3xl font-bold mb-2 text-white">{devops.cicd.imageTitle}</Heading>
                                    <Text className="text-indigo-200">{devops.cicd.imageSubtitle}</Text>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Kubernetes & Cloud-Native Section */}
                <ContentSection
                    reverse
                    title={devops.kubernetes.title}
                    content={
                        <div className="space-y-6">
                            <Text variant="large">
                                <strong className="text-indigo-700">Kubernetes</strong> {devops.kubernetes.p1}
                            </Text>
                            <Text variant="large">
                                {devops.kubernetes.p2}
                            </Text>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                    <Box className="w-12 h-12 text-blue-600 mb-4" />
                                    <Heading variant="h4" className="font-bold text-slate-900 mb-2">{devops.kubernetes.cards[0].title}</Heading>
                                    <Text variant="small" className="text-slate-600">{devops.kubernetes.cards[0].desc}</Text>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                    <Server className="w-12 h-12 text-indigo-600 mb-4" />
                                    <Heading variant="h4" className="font-bold text-slate-900 mb-2">{devops.kubernetes.cards[1].title}</Heading>
                                    <Text variant="small" className="text-slate-600">{devops.kubernetes.cards[1].desc}</Text>
                                </div>
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                                alt="Kubernetes Cluster"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <Cpu className="w-24 h-24 mx-auto mb-6" />
                                    <Heading variant="h3" className="text-3xl font-bold mb-2 text-white">{devops.kubernetes.imageTitle}</Heading>
                                    <Text className="text-indigo-200">{devops.kubernetes.imageSubtitle}</Text>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Technology Stack & Process Flow */}
                <Section>
                    <Container>
                        <div className="mb-24">
                            <Heading variant="h2" className="text-center mb-12">{devops.techStack.title}</Heading>
                            <TechStackGrid
                                items={[
                                    { name: "Jenkins", category: devops.techStack.categories.cicd, icon: Code2 },
                                    { name: "GitLab", category: devops.techStack.categories.cicd, icon: GitBranch },
                                    { name: "Azure DevOps", category: devops.techStack.categories.cicd, icon: Zap },
                                    { name: "ArgoCD", category: devops.techStack.categories.cicd, icon: Box },

                                    { name: "Kubernetes", category: devops.techStack.categories.orchestration, icon: Server },
                                    { name: "Docker", category: devops.techStack.categories.orchestration, icon: Box },
                                    { name: "OpenShift", category: devops.techStack.categories.orchestration, icon: Cpu },
                                    { name: "Helm", category: devops.techStack.categories.orchestration, icon: Settings },

                                    { name: "Ansible", category: devops.techStack.categories.automation, icon: Zap },
                                    { name: "Terraform", category: devops.techStack.categories.automation, icon: Settings },
                                    { name: "Puppet", category: devops.techStack.categories.automation, icon: Code2 },

                                    { name: "Vault", category: devops.techStack.categories.security, icon: Lock },
                                    { name: "SonarQube", category: devops.techStack.categories.security, icon: ShieldCheck },
                                    { name: "ZAP", category: devops.techStack.categories.security, icon: ShieldCheck },
                                ]}
                                color="indigo"
                                delay={0}
                            />
                        </div>

                        {/* Process Flow */}
                        <div className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-3xl p-16">
                            <div className="text-center mb-12">
                                <Heading variant="h2" className="text-slate-900 mb-4">
                                    {devops.process.title}
                                </Heading>
                                <Text variant="lead" className="text-slate-600 max-w-2xl mx-auto">
                                    {devops.process.subtitle}
                                </Text>
                            </div>
                            <div className="grid md:grid-cols-5 gap-6">
                                {[
                                    { icon: Code2, ...devops.process.steps[0] },
                                    { icon: GitBranch, ...devops.process.steps[1] },
                                    { icon: PlayCircle, ...devops.process.steps[2] },
                                    { icon: Zap, ...devops.process.steps[3] },
                                    { icon: Server, ...devops.process.steps[4] }
                                ].map((step: any, i: number) => (
                                    <div key={i} className="text-center">
                                        <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-indigo-200 hover:bg-indigo-700 transition-colors">
                                            <step.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <Heading variant="h4" className="text-slate-900 mb-2">{step.title}</Heading>
                                        <Text variant="small" className="text-slate-600">{step.desc}</Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>
        </>
    )
}

