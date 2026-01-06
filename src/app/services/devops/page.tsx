"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import TechStackGrid from "@/components/ui/TechStackGrid"
import MetricCard from "@/components/ui/MetricCard"
import { GitBranch, Box, Settings, Lock, Zap, Server, Cpu, Code2, ShieldCheck, PlayCircle } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function DevOpsPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Hizmetler", href: "/services", icon: Server },
                        { label: "DevOps & SRE", href: "/services/devops", icon: Zap }
                    ]}
                />

                <Hero
                    title="DevOps & SRE"
                    subtitle="Otomatik boru hatları ve bulut tabanlı güvenilirlik ile dijital dönüşümü hızlandırın."
                    badge="Teknoloji Servisleri"
                    className="bg-indigo-900"
                    backgroundImage="https://images.unsplash.com/photo-1667372393119-c85c020799a3?auto=format&fit=crop&q=80"
                />

                {/* Key Metrics */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                            <MetricCard
                                title="Deployment Hızı"
                                value="95%"
                                unit="daha hızlı"
                                icon={Zap}
                                trend="up"
                                trendValue="+40%"
                                description="Otomatik CI/CD ile"
                                color="indigo"
                                delay={0}
                            />
                            <MetricCard
                                title="Uptime"
                                value="99.9"
                                unit="%"
                                icon={ShieldCheck}
                                trend="up"
                                trendValue="+2%"
                                description="Kesintisiz operasyon"
                                color="blue"
                                delay={0.1}
                            />
                            <MetricCard
                                title="Recovery Time"
                                value="5"
                                unit="dakika"
                                icon={Box}
                                trend="down"
                                trendValue="-60%"
                                description="Otomatik recovery"
                                color="indigo"
                                delay={0.2}
                            />
                            <MetricCard
                                title="Pipeline Success"
                                value="98"
                                unit="%"
                                icon={PlayCircle}
                                trend="up"
                                trendValue="+15%"
                                description="Automated testing"
                                color="slate"
                                delay={0.3}
                            />
                        </div>
                    </Container>
                </Section>

                {/* CI/CD & Automation Section */}
                <ContentSection
                    title="CI/CD & Otomasyon"
                    badge="Hız"
                    content={
                        <div className="space-y-6">
                            <strong className="text-indigo-700">Jenkins, GitLab, Azure DevOps ve ArgoCD</strong> üzerinde uçtan uca pipeline&apos;lar tasarlıyor ve yönetiyoruz. Otomatik test ve sürüm yönetimi, manuel hata risklerini en aza indirirken teslimat döngülerini hızlandırır.
                            <Text variant="large">
                                <strong className="text-indigo-700">Ansible ve Helm</strong> kullanarak altyapıyı kod olarak (IaC) yönetiyor, tutarlı ve denetlenebilir ortamlar sağlıyoruz.
                            </Text>
                            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                <Heading variant="h4" className="font-bold text-slate-900 mb-4">Pipeline Avantajları</Heading>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Otomatik test ve deploy",
                                        "Rollback yeteneği",
                                        "Sürüm yönetimi",
                                        "Code review otomasyonu"
                                    ].map((item, i) => (
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
                                    <Heading variant="h3" className="text-3xl font-bold mb-2 text-white">CI/CD Pipeline</Heading>
                                    <Text className="text-indigo-200">Otomatik ve Güvenilir</Text>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Kubernetes & Cloud-Native Section */}
                <ContentSection
                    reverse
                    title="Kubernetes & Cloud-Native"
                    badge="Ölçek"
                    content={
                        <div className="space-y-6">
                            <Text variant="large">
                                <strong className="text-indigo-700">Kubernetes</strong> ekosisteminde kapsamlı deneyim. Küme kurulumundan ArgoCD ile GitOps tabanlı dağıtımlara kadar. Otomatik ölçeklendirme için HPA, trafik kontrolü için service mesh ve kapsamlı felaket kurtarma planlaması uyguluyoruz.
                            </Text>
                            <Text variant="large">
                                Mikroservis dönüşümü ve bulut tabanlı (cloud-native) projeleri planlamadan üretime kadar destekliyoruz.
                            </Text>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                    <Box className="w-12 h-12 text-blue-600 mb-4" />
                                    <Heading variant="h4" className="font-bold text-slate-900 mb-2">Kubernetes Orkestrasyonu</Heading>
                                    <Text variant="small" className="text-slate-600">Otomatik ölçeklendirme, self-healing ve rolling updates</Text>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                    <Server className="w-12 h-12 text-indigo-600 mb-4" />
                                    <Heading variant="h4" className="font-bold text-slate-900 mb-2">GitOps</Heading>
                                    <Text variant="small" className="text-slate-600">Git tabanlı deployment ve configuration management</Text>
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
                                    <Heading variant="h3" className="text-3xl font-bold mb-2 text-white">Cloud-Native</Heading>
                                    <Text className="text-indigo-200">Ölçeklenebilir & Esnek</Text>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Technology Stack & Process Flow */}
                <Section>
                    <Container>
                        <div className="mb-24">
                            <Heading variant="h2" className="text-center mb-12">Teknoloji Yığını</Heading>
                            <TechStackGrid
                                items={[
                                    // CI/CD
                                    { name: "Jenkins", category: "CI/CD", icon: Code2 },
                                    { name: "GitLab", category: "CI/CD", icon: GitBranch },
                                    { name: "Azure DevOps", category: "CI/CD", icon: Zap },
                                    { name: "ArgoCD", category: "CI/CD", icon: Box },

                                    // Orchestration
                                    { name: "Kubernetes", category: "Orkestrasyon", icon: Server },
                                    { name: "Docker", category: "Orkestrasyon", icon: Box },
                                    { name: "OpenShift", category: "Orkestrasyon", icon: Cpu },
                                    { name: "Helm", category: "Orkestrasyon", icon: Settings },

                                    // Automation
                                    { name: "Ansible", category: "Otomasyon", icon: Zap },
                                    { name: "Terraform", category: "Otomasyon", icon: Settings },
                                    { name: "Puppet", category: "Otomasyon", icon: Code2 },

                                    // Security
                                    { name: "Vault", category: "Güvenlik", icon: Lock },
                                    { name: "SonarQube", category: "Güvenlik", icon: ShieldCheck },
                                    { name: "ZAP", category: "Güvenlik", icon: ShieldCheck },
                                ]}
                                color="indigo"
                                delay={0}
                            />
                        </div>

                        {/* Process Flow */}
                        <div className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-3xl p-16">
                            <div className="text-center mb-12">
                                <Heading variant="h2" className="text-slate-900 mb-4">
                                    DevOps Sürecimiz
                                </Heading>
                                <Text variant="lead" className="text-slate-600 max-w-2xl mx-auto">
                                    Planla → Kodla → Test et → Dağıt → İzle
                                </Text>
                            </div>
                            <div className="grid md:grid-cols-5 gap-6">
                                {[
                                    { icon: Code2, title: "Planla", desc: "İhtiyaç analizi" },
                                    { icon: GitBranch, title: "Kodla", desc: "Version control" },
                                    { icon: PlayCircle, title: "Test et", desc: "Automated testing" },
                                    { icon: Zap, title: "Dağıt", desc: "CI/CD pipeline" },
                                    { icon: Server, title: "İzle", desc: "Monitoring & alerts" }
                                ].map((step, i) => (
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
