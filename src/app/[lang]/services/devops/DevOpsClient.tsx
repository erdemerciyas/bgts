"use client"

import ContentSection from "@/components/ui/ContentSection"
import TechStackGrid from "@/components/ui/TechStackGrid"
import MetricCard from "@/components/ui/MetricCard"
import {
    GitBranch,
    Box,
    Settings,
    Lock,
    Zap,
    Server,
    Cpu,
    Code2,
    ShieldCheck,
    PlayCircle,
} from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

type DevOpsContent = {
    metrics: {
        deployment: { title: string; unit: string; desc: string }
        uptime: { title: string; unit: string; desc: string }
        recovery: { title: string; unit: string; desc: string }
        pipeline: { title: string; unit: string; desc: string }
    }
    cicd: {
        title: string
        p1: string
        p2: string
        advantagesTitle: string
        advantages: string[]
        imageTitle: string
        imageSubtitle: string
    }
    kubernetes: {
        title: string
        p1: string
        p2: string
        cards: { title: string; desc: string }[]
        imageTitle: string
        imageSubtitle: string
    }
    techStack: {
        title: string
        categories: {
            cicd: string
            orchestration: string
            automation: string
            security: string
        }
    }
    process: {
        title: string
        subtitle: string
        steps: { title: string; desc: string }[]
    }
}

export default function DevOpsClient({
    content,
    lang,
}: {
    content: DevOpsContent
    lang: string
}) {
    const { metrics, cicd, kubernetes, techStack, process } = content
    const conjunction = lang === "en" ? "and" : "ve"

    return (
        <div className="bg-white min-h-screen">
            <Section className="pb-0 pt-20">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        <MetricCard
                            title={metrics.deployment.title}
                            value="95"
                            unit={metrics.deployment.unit}
                            icon={Zap}
                            trend="up"
                            trendValue="+40%"
                            description={metrics.deployment.desc}
                            color="indigo"
                            delay={0}
                        />
                        <MetricCard
                            title={metrics.uptime.title}
                            value="99.9"
                            unit={metrics.uptime.unit}
                            icon={ShieldCheck}
                            trend="up"
                            trendValue="+2%"
                            description={metrics.uptime.desc}
                            color="blue"
                            delay={0.1}
                        />
                        <MetricCard
                            title={metrics.recovery.title}
                            value="5"
                            unit={metrics.recovery.unit}
                            icon={Box}
                            trend="down"
                            trendValue="-60%"
                            description={metrics.recovery.desc}
                            color="indigo"
                            delay={0.2}
                        />
                        <MetricCard
                            title={metrics.pipeline.title}
                            value="98"
                            unit={metrics.pipeline.unit}
                            icon={PlayCircle}
                            trend="up"
                            trendValue="+15%"
                            description={metrics.pipeline.desc}
                            color="slate"
                            delay={0.3}
                        />
                    </div>
                </Container>
            </Section>

            <ContentSection
                title={cicd.title}
                content={
                    <div className="space-y-6">
                        <strong className="text-indigo-700">
                            Jenkins, GitLab, Azure DevOps {conjunction} ArgoCD
                        </strong>{" "}
                        {cicd.p1}
                        <Text variant="large">
                            <strong className="text-indigo-700">Ansible {conjunction} Helm</strong> {cicd.p2}
                        </Text>
                        <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                            <Heading variant="h4" className="font-bold text-slate-900 mb-4">
                                {cicd.advantagesTitle}
                            </Heading>
                            <div className="grid md:grid-cols-2 gap-4">
                                {cicd.advantages.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                                        <Text variant="small" className="text-slate-700">
                                            {item}
                                        </Text>
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
                                <Heading variant="h3" className="text-3xl font-bold mb-2 text-white">
                                    {cicd.imageTitle}
                                </Heading>
                                <Text className="text-indigo-200">{cicd.imageSubtitle}</Text>
                            </div>
                        </div>
                    </div>
                }
            />

            <ContentSection
                reverse
                title={kubernetes.title}
                content={
                    <div className="space-y-6">
                        <Text variant="large">
                            <strong className="text-indigo-700">Kubernetes</strong> {kubernetes.p1}
                        </Text>
                        <Text variant="large">{kubernetes.p2}</Text>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                <Box className="w-12 h-12 text-blue-600 mb-4" />
                                <Heading variant="h4" className="font-bold text-slate-900 mb-2">
                                    {kubernetes.cards[0].title}
                                </Heading>
                                <Text variant="small" className="text-slate-600">
                                    {kubernetes.cards[0].desc}
                                </Text>
                            </div>
                            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                <Server className="w-12 h-12 text-indigo-600 mb-4" />
                                <Heading variant="h4" className="font-bold text-slate-900 mb-2">
                                    {kubernetes.cards[1].title}
                                </Heading>
                                <Text variant="small" className="text-slate-600">
                                    {kubernetes.cards[1].desc}
                                </Text>
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
                                <Heading variant="h3" className="text-3xl font-bold mb-2 text-white">
                                    {kubernetes.imageTitle}
                                </Heading>
                                <Text className="text-indigo-200">{kubernetes.imageSubtitle}</Text>
                            </div>
                        </div>
                    </div>
                }
            />

            <Section>
                <Container>
                    <div className="mb-24">
                        <Heading variant="h2" className="text-center mb-12">
                            {techStack.title}
                        </Heading>
                        <TechStackGrid
                            items={[
                                { name: "Jenkins", category: techStack.categories.cicd, icon: Code2 },
                                { name: "GitLab", category: techStack.categories.cicd, icon: GitBranch },
                                { name: "Azure DevOps", category: techStack.categories.cicd, icon: Zap },
                                { name: "ArgoCD", category: techStack.categories.cicd, icon: Box },
                                { name: "Kubernetes", category: techStack.categories.orchestration, icon: Server },
                                { name: "Docker", category: techStack.categories.orchestration, icon: Box },
                                { name: "OpenShift", category: techStack.categories.orchestration, icon: Cpu },
                                { name: "Helm", category: techStack.categories.orchestration, icon: Settings },
                                { name: "Ansible", category: techStack.categories.automation, icon: Zap },
                                { name: "Terraform", category: techStack.categories.automation, icon: Settings },
                                { name: "Puppet", category: techStack.categories.automation, icon: Code2 },
                                { name: "Vault", category: techStack.categories.security, icon: Lock },
                                { name: "SonarQube", category: techStack.categories.security, icon: ShieldCheck },
                                { name: "ZAP", category: techStack.categories.security, icon: ShieldCheck },
                            ]}
                            color="indigo"
                            delay={0}
                        />
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-3xl p-16">
                        <div className="text-center mb-12">
                            <Heading variant="h2" className="text-slate-900 mb-4">
                                {process.title}
                            </Heading>
                            <Text variant="lead" className="text-slate-600 max-w-2xl mx-auto">
                                {process.subtitle}
                            </Text>
                        </div>
                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                { icon: Code2, ...process.steps[0] },
                                { icon: GitBranch, ...process.steps[1] },
                                { icon: PlayCircle, ...process.steps[2] },
                                { icon: Zap, ...process.steps[3] },
                                { icon: Server, ...process.steps[4] },
                            ].map((step, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-indigo-200 hover:bg-indigo-700 transition-colors">
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">
                                        {step.title}
                                    </Heading>
                                    <Text variant="small" className="text-slate-600">
                                        {step.desc}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
