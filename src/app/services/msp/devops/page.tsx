"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Code2, GitBranch, Infinity, CheckCircle2, Shield, Rocket, Server, BarChart2 } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/AccordionComponent"

export default function DevopsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Kurumsal DevOps Platformu"
                subtitle="Analizden canlı ortama, stratejik planlamadan 7/24 yönetime uzanan uçtan uca mimari dönüşüm."

                className="bg-violet-900"
                backgroundImage="/images/headers/msp/DevOps-Altyapi.png"
            />

            {/* Hizmet Kapsamı */}
            <Section className="py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                Kapsamlı DevOps Hizmetleri
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-6">
                                Yazılım geliştirme süreçlerinizi otomatize ediyor, güvenliği en baştan entegre ediyoruz (DevSecOps).
                                Modern teknolojilerle pazara çıkış sürenizi kısaltıyoruz.
                            </Text>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                                        <GitBranch className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h4" className="text-slate-900 mb-2">CI/CD Planlama</Heading>
                                        <Text className="text-slate-600 text-sm">Release süreçlerinin standardizasyonu. Developer'dan Production ortamına tam otomatik pipeline.</Text>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                                        <Server className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h4" className="text-slate-900 mb-2">Platform Yönetimi</Heading>
                                        <Text className="text-slate-600 text-sm">Kubernetes (K8s), OpenShift ve konteyner platformlarının kurulumu, bakımı ve yönetimi.</Text>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                                        <Shield className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h4" className="text-slate-900 mb-2">DevSecOps</Heading>
                                        <Text className="text-slate-600 text-sm">Statik kod analizi (SonarQube) ve konteyner güvenlik taramaları (Trivy, Anchore) pipeline'a entegre.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                            <Heading variant="h3" className="text-slate-900 mb-8 border-b border-slate-200 pb-4">Teknoloji Yığınımız</Heading>
                            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                                <div>
                                    <div className="text-violet-600 font-bold mb-2 flex items-center gap-2"><GitBranch className="w-4 h-4" /> CI/CD & Source</div>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>Azure DevOps, Jenkins</li>
                                        <li>GitLab, GitHub Actions</li>
                                        <li>Bitbucket</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-violet-600 font-bold mb-2 flex items-center gap-2"><Infinity className="w-4 h-4" /> Container & K8s</div>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>Kubernetes, OpenShift</li>
                                        <li>Rancher, Docker</li>
                                        <li>Velero (Backup)</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-violet-600 font-bold mb-2 flex items-center gap-2"><Shield className="w-4 h-4" /> Security & Quality</div>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>SonarQube, Fortify</li>
                                        <li>Trivy, Anchore</li>
                                        <li>OWASP ZAP</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-violet-600 font-bold mb-2 flex items-center gap-2"><Code2 className="w-4 h-4" /> Test & Automation</div>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>Selenium, JMeter</li>
                                        <li>Terraform, Ansible</li>
                                        <li>PowerShell</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Müşteri Mimarileri & DR */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-slate-900 mb-4">Mimari Dönüşüm & DR</Heading>
                        <Text className="text-slate-600">Sadece kodunuzu değil, tüm altyapınızı modernleştiriyoruz.</Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-violet-500">
                            <Heading variant="h4" className="text-slate-900 mb-4">Merkezi Küme Yönetimi</Heading>
                            <Text className="text-slate-600 text-sm mb-4">
                                Rancher ile çoklu cluster yönetimi, Vault ile şifre güvenliği ve ELK Stack ile tam log görünürlüğü.
                            </Text>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-violet-500">
                            <Heading variant="h4" className="text-slate-900 mb-4">Disaster Recovery (DR)</Heading>
                            <Text className="text-slate-600 text-sm mb-4">
                                Aktif-Pasif veya Aktif-Aktif yedeklilik. Site replikasyonu ve Velero ile Kubernetes kaynaklarının yedeklenmesi.
                            </Text>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-violet-500">
                            <Heading variant="h4" className="text-slate-900 mb-4">Otomatik Failover</Heading>
                            <Text className="text-slate-600 text-sm mb-4">
                                Kesinti anında trafiğin otomatik olarak yedek sisteme yönlendirilmesi ve iş sürekliliği garantisi.
                            </Text>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Hizmet Paketleri */}
            <Section className="py-20">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Hizmet Paketleri</Heading>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Startup */}
                        <div className="border border-slate-200 rounded-3xl p-8 hover:border-violet-500 transition-colors">
                            <Heading variant="h3" className="text-slate-900 mb-2">Startup</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Başlangıç seviyesi otomasyon.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> CI/CD Kurulumu</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Dockerize İşlemleri</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Temel İzleme & Doküman</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Pipeline Dashboard</div>
                            </div>
                        </div>

                        {/* Scale-Up */}
                        <div className="border-2 border-violet-500 rounded-3xl p-8 relative shadow-xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-bold">Tercih Edilen</div>
                            <Heading variant="h3" className="text-slate-900 mb-2">Scale-Up</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Büyüyen ekipler için.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Gelişmiş CI/CD & Test</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> K8s Cluster İzleme</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Log Yönetimi (ELK)</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> 7/24 Aktif NOC</div>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="border border-slate-200 rounded-3xl p-8 hover:border-violet-500 transition-colors">
                            <Heading variant="h3" className="text-slate-900 mb-2">Enterprise</Heading>
                            <Text className="text-slate-600 text-sm mb-6">Tam kapsamlı DevOps kültürü.</Text>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> 7/24 NOC & SRE Ekibi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Multi-Cloud Stratejisi</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> DevSecOps Entegrasyonu</div>
                                <div className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Felaket Kurtarma (DR)</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="py-20 bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Sıkça Sorulan Sorular</Heading>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Kubernetes Monitoring neleri kapsar?</AccordionTrigger>
                                <AccordionContent>
                                    Cluster, Node ve Pod seviyesindeki tüm kritik metriklerin (CPU, Memory, Network) Prometheus ve Grafana ile anlık izlenmesini ve raporlanmasını kapsar.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Pipeline Dashboard nedir?</AccordionTrigger>
                                <AccordionContent>
                                    Yazılım dağıtım süreçlerinizi görselleştiren, deploy başarı/hata oranlarını ve sürelerini gösteren, darboğazları tespit etmenizi sağlayan yönetim ekranıdır.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>7/24 Destek nasıl çalışır?</AccordionTrigger>
                                <AccordionContent>
                                    Enterprise paketinde, dedike NOC/SRE ekiplerimiz sistemlerinizi 7/24 izler. Bir alarm oluştuğunda playbook'lara uygun olarak anında müdahale eder ve sorunu çözer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
