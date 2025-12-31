"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import { GitBranch, Box, Settings, Lock } from "lucide-react"

export default function DevOpsPage() {
    return (
        <>
            <Hero
                title="DevOps & SRE"
                subtitle="Otomatik boru hatları ve bulut tabanlı güvenilirlik ile dijital dönüşümü hızlandırın."
                badge="Teknoloji Servisleri"
                className="bg-indigo-50"
            />

            <ContentSection
                title="CI/CD & Otomasyon"
                badge="Hız"
                content={
                    <div className="space-y-4">
                        <p>
                            **Jenkins, GitLab, Azure DevOps ve ArgoCD** üzerinde uçtan uca pipeline'lar tasarlıyor ve yönetiyoruz. Otomatik test ve sürüm yönetimi, manuel hata risklerini en aza indirirken teslimat döngülerini hızlandırır.
                        </p>
                        <p>
                            **Ansible ve Helm** kullanarak altyapıyı kod olarak (IaC) yönetiyor, tutarlı ve denetlenebilir ortamlar sağlıyoruz.
                        </p>
                    </div>
                }
                image={
                    <div className="bg-indigo-600 text-white p-10 h-full flex items-center justify-center rounded-2xl">
                        <GitBranch className="w-32 h-32 opacity-80" />
                    </div>
                }
            />

            <ContentSection
                reverse
                title="Kubernetes & Cloud-Native"
                badge="Ölçek"
                content={
                    <div className="space-y-4">
                        <p>
                            **Kubernetes** ekosisteminde kapsamlı deneyim. Küme kurulumundan ArgoCD ile GitOps tabanlı dağıtımlara kadar. Otomatik ölçeklendirme için HPA, trafik kontrolü için service mesh ve kapsamlı felaket kurtarma planlaması uyguluyoruz.
                        </p>
                        <p>
                            Mikroservis dönüşümü ve bulut tabanlı (cloud-native) projeleri planlamadan üretime kadar destekliyoruz.
                        </p>
                    </div>
                }
                image={
                    <div className="bg-blue-600 text-white p-10 h-full flex items-center justify-center rounded-2xl">
                        <Box className="w-32 h-32 opacity-80" />
                    </div>
                }
            />

            <div className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-12 font-heading text-slate-900">Teknoloji Yığını</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="p-6 bg-white border border-slate-100 shadow-lg rounded-xl text-center">
                        <Settings className="w-10 h-10 mx-auto text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2 text-slate-900">Otomasyon</h4>
                        <p className="text-sm text-slate-500">Ansible, Terraform, Helm</p>
                    </div>
                    <div className="p-6 bg-white border border-slate-100 shadow-lg rounded-xl text-center">
                        <GitBranch className="w-10 h-10 mx-auto text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2 text-slate-900">CI/CD</h4>
                        <p className="text-sm text-slate-500">Jenkins, GitLab, ArgoCD</p>
                    </div>
                    <div className="p-6 bg-white border border-slate-100 shadow-lg rounded-xl text-center">
                        <Box className="w-10 h-10 mx-auto text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2 text-slate-900">Orkestrasyon</h4>
                        <p className="text-sm text-slate-500">Kubernetes, Docker, OpenShift</p>
                    </div>
                    <div className="p-6 bg-white border border-slate-100 shadow-lg rounded-xl text-center">
                        <Lock className="w-10 h-10 mx-auto text-slate-400 mb-4" />
                        <h4 className="font-bold text-lg mb-2 text-slate-900">Güvenlik</h4>
                        <p className="text-sm text-slate-500">Vault, SonarQube, ZAP</p>
                    </div>
                </div>
            </div>
        </>
    )
}
