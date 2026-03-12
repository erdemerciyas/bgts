"use client"

import { Container } from "@/components/ui/Container"
import { motion } from "framer-motion"
import { Cloud } from "lucide-react"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const PARTNERS = [
    {
        name: "Qlik",
        description: "BGTS, Qlik Yetkili İş Ortağı olarak; kurumsal ölçekte yönetilen analitiği ve güvenilir veri entegrasyonunu destekleyen Qlik platformlarını tasarlar, devreye alır, yönetir ve ölçeklendirir.",
        icon: (
            <svg viewBox="0 0 474.63 480" className="w-10 h-10">
                <path fill="currentColor" opacity="0.9" d="M376.48,419.87l-1.65.57c-10.44-10.88-20.88-21.77-31.32-32.67l.49-1.78,2.59-4.15c81.2-67.94,88.9-189.6,14.19-265.72-74.17-75.56-197.53-70.72-265.81,9.82l-4.2,2.6-2.2,1.59c-10.75-10.66-21.49-21.37-32.22-32.11l.44-1.79C136.63.15,279.79-14.94,377.62,65.24c97.15,79.63,112.89,225.35,30.79,323.12,3.73,1.69,5.39,4.85,7.97,7.45l31.14,31.36,31.51,31.86-62.89.24c-2.32-1.46-3.71-3.5-5.61-5.4l-34.04-34Z" />
                <path fill="currentColor" d="M90.76,128.56l-1.6,4.6c-54.1,70.85-47.5,171.34,14.79,235.04,62.54,63.95,163.34,71.97,235.43,19.3l4.62-1.49,32.48,33.87c-83.26,68.84-205.79,67.59-288.69-.27C-11.48,338.36-23.9,193.33,56.78,96.24l31.55,31.5c.5.5.67,1.1,1.21,1.19.39.06.83-.2,1.21-.37Z" />
            </svg>
        ),
        color: "from-[#3bb64a] to-[#4ece5e]", // Qlik green
    },
    {
        name: "Microsoft",
        description: "Microsoft teknolojileri ile ekiplerinizi daha verimli hale getirin, iş akışlarınızı kolaylaştırın ve BT altyapınızı modernleştirin. Microsoft’un güvenilir iş ortağı olarak, uzman danışmanlarımızla bulut hizmetlerinden siber güvenliğe kadar uçtan uca çözümler sunuyoruz.",
        icon: (
            <svg viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10">
                <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
            </svg>
        ),
        color: "from-[#00a4ef] to-[#00bcf2]", // Microsoft blue
    },
    {
        name: "AWS",
        description: "BGTS'in AWS uzmanlığıyla bulut bilişimin tüm potansiyelinden faydalanın. İş ihtiyaçlarınıza göre uyarlanmış ölçeklenebilir, güvenli ve uygun maliyetli bulut çözümleri sağlıyoruz.",
        icon: <Cloud className="w-10 h-10" />,
        color: "from-[#ff9900] to-[#ffb84d]", // AWS orange
    },
    {
        name: "ServiceNow",
        description: "ServiceNow ile kurumsal iş akışlarını modernize edin ve operasyonel verimliliği artırın. BGTS; BT hizmet yönetimi, iş süreçleri otomasyonu ve güvenlik operasyonlarını geliştirmek için özel ServiceNow çözümleri sunar.",
        icon: (
            <svg viewBox="0 0 487.04 435.03" fill="currentColor" className="w-10 h-10">
                <path d="M257.55,0l35.32,5.1c162.07,33.55,244.35,216.02,161.49,360.4-12.19,21.24-41.56,62.22-65.94,67.88-26.81,6.22-38.47-8.96-59.04-20.57-52.87-29.83-117.94-30.06-170.95-.35-14.74,8.26-26.48,21.15-44.46,22.45-24.42,1.77-40.31-14.59-54.82-31.57-29.53-34.56-48.93-77.35-56.08-122.34L.16,253.7c.36-8.29-.49-16.82,0-25.09C7.4,107.28,108.53,7.09,229.68,0h27.88ZM232.28,123.88c-97.05,7.94-144.09,125.57-82.49,199.97,65.02,78.54,200.79,43.39,214.51-59.57,10.6-79.56-51.58-146.97-132.02-140.39Z" />
            </svg>
        ),
        color: "from-[#81b5a1] to-[#a3c9bc]", // ServiceNow green
    },
    {
        name: "Atlassian",
        description: "Atlassian araçlarıyla ekiplerin iş birliğini artırın, iş akışlarını düzenleyin ve çevik dönüşüm sağlayın. BGTS kurumlara Jira, Confluence, Trello ve Bitbucket gibi Atlassian araçlarını en iyi şekilde uygulamak, özelleştirmek ve optimize etmek için destek verir.",
        icon: (
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-10 h-10">
                <path d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8.1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6.1z" />
            </svg>
        ),
        color: "from-[#0052cc] to-[#2684ff]", // Atlassian blue
    },
    {
        name: "Temenos",
        description: "BGTS olarak, dünyanın lider temel bankacılı platformu Temenos iş birliğiyle finans kuruluşlarının modernleşmesini ve ölçeklenmesini destekliyoruz. Sertifikalı uzmanlarımız kurulum ve entegrasyondan uzun vadeli desteğe kadar, Temenos’un tüm potansiyelinden yararlanmanızı sağlayan uçtan uca hizmetler sunar.",
        icon: (
            <svg viewBox="0 0 300 300" fill="currentColor" className="w-10 h-10">
                <path d="M160.56,3.59c72.16,6.47,129.75,62.48,135.04,136.43.45,6.29.42,13.09-.02,19.53-5.04,72.96-63.06,131.05-136.04,136.03-6.43.44-13.24.49-19.53.03C66.07,290.28,10.03,232.72,3.59,160.56v-21.69C10.38,65.83,65.83,10.37,138.87,3.59h21.69ZM198.14,207.16c-9.17,3.79-17.51,5.44-26.52,3.37-8.46-1.94-15.28-8.64-15.3-17.92l-.16-72.04,44.8-.04-.06-25.85-44.57-.03-.04-36.18-37.47.05-.02,36.08-23.8.15.06,25.78,23.74.1.04,75.84c0,9.64,2.53,18.73,7.9,26.55,15,21.86,49.97,21.18,71.49,11.61l-.08-27.46h0Z" />
            </svg>
        ),
        color: "from-[#002f5d] to-[#0461b7]", // Temenos dark blue
    },
    {
        name: "Xurrent",
        description: "Kurumsal hizmet yönetimini (ESM) Xurrent ile yeniden şekillendirin. BGTS kurumlara BT operasyonlarından müşteri hizmetleri otomasyonu ve iş akışlarına kadar birçok Xurrent çözümünü kusursuz bir şekilde entegre eder.",
        icon: (
            <svg viewBox="0 0 474.63 480" fill="currentColor" className="w-10 h-10">
                <path d="M352.41,477.98c-2.21-2.21-4.98-5.9-3.67-7.57,25.42-32.44,84.21-88.06,116.56-115.78l8.63,1.83c.5,15.67,1.95,112.38-1.77,117.73-2.89,4.15-7.87,3.47-12.21,3.99-27,3.25-79.17,1.51-107.54-.2ZM473.92,356.46l-121.52,121.52c-10.17-.61-14.15-3.13-20.25-4.05l3.59-13.42c17.13-20.59,45.74-49.66,69.32-59.49,1.36-1.34,2.69-2.71,4.05-4.05,10.1-25.92,37.79-52.62,64.81-60.76.51,6.67-.22,13.55,0,20.25ZM461.77,299.75l-2.33,9.47c-23.26,16.63-44.92,36.09-64.97,58.38l-9.66-3.04c-3.85-5.02-8.41-11.38-12.15-16.2l-3.22-8.24,58.3-58.3c3.48-4.66,8.33-3.78,13.78-2.32,16.88,8.58,12.05,7.28,20.25,20.25ZM461.77,299.75c4.51,7.13,5.34,6.92,8.1,16.2,4.52,12.68-58.31,71.37-63.17,70.81-1.94-.22-3.82-1.01-5.69-1.95-5.48-6.88-10.74-13.13-16.2-20.25,27.43-18.2,45.07-54.94,76.96-64.81ZM380.76,401.01c1.96,3.19,2.91,6.63,2.4,10.36-.63,4.59-56.62,58.38-67.21,62.55-15.58-4.44-14.97-8.1-24.3-16.2.4-15.94,41.33-54.89,54.75-52.66.64.11-6.93,8,1.96-4.05,10.69-.55,21.68,0,32.41,0ZM441.52,279.49l-68.86,68.86c-3.95-5.09-8.37-11.34-12.15-16.2l-3.3-9.34c17.58-19.56,36.23-36.7,55.96-51.42,14.6,1.33,15.67,1.66,28.35,8.1ZM405.06,401.01c-24.3,24.09-45.67,51.72-72.91,72.91-4.92-.74-12.15,1.16-16.2,0,13.97-28.82,46.63-46.56,64.81-72.91h24.3ZM473.92,336.2c-21.04,20.54-43.9,40.05-64.81,60.76-7.54-1.07-6.32-9.92-8.1-12.15l68.86-68.86c2.74,9.21,3.24,9.74,4.05,20.25ZM348.35,401.01c9.02,12.7-.11,5.61-4.78,9.23-18.81,14.58-33.21,32.99-51.93,47.48-6.57-5.7-11.38-7.32-16.2-16.2.08-7.01,35.89-44.06,39.74-44.95,3.14-.73,6.33,1.96,8.86,4.45,5.43-1.48,17.25.36,24.3,0ZM324.05,401.01c-11.73,3.2-32.06,37.77-48.61,40.51-3.43-6.3-2.68-10.36-4.05-16.2-1.33-17.8,24.51-47.27,40.51-36.46,2.46,3.07,10.92,5.51,12.15,12.15ZM413.17,271.39c-9.97,24.6-38.45,38.58-52.66,60.76-2.27-2.92-7.75-6.51-12.15-12.15,1.53-17.44,28.82-40.24,44.56-48.61,6.68.27,13.66-.6,20.25,0ZM392.91,271.39c-9.31,19.57-28.17,34.79-44.56,48.61-3.37-4.32-5.54-8.85-8.1-12.15-7.14-14.55,17.51-33.36,32.41-36.46,6.73.03,13.53-.27,20.25,0ZM311.9,388.86c-16.68,7.23-29.52,22.37-40.51,36.46-2.78-11.91-3.34-15.22-4.05-28.35,4-11.81,19.58-30.39,32.41-24.3,4.37,5.54,8.7,11.89,12.15,16.2ZM299.75,372.66c-11.27,7.39-19.01,22.06-32.41,24.3-.51-9.32-.13-19,0-28.35,2.54-15.97,7.94-21.37,16.2-16.2,5.5,6.83,10.75,13.34,16.2,20.25ZM372.66,271.39l-32.41,36.46c-4.08-5.26-8.23-11-12.15-16.2-5.21-10.14,1.54-16.89,20.25-20.25,8.09-.1,16.21-.03,24.3,0ZM348.35,271.39l-20.25,20.25c-3.7-4.91-15.24-10.03-16.2-20.21,12.12-.19,24.34.12,36.45-.04ZM283.54,352.41l-16.2,16.2c.17-12.12-.16-24.34.04-36.45,9.8,2.53,11.56,14.55,16.16,20.25ZM166.08,271.39l-101.27,129.62h87.09c4.25,0,41.07-61.63,54.68-64.81v91.14c0,6.04-14.78,27.02-20.51,32.15-9.58,8.58-34.16,18.48-46.33,18.48H6.08c-.43,0-6.08-5.65-6.08-6.08v-145.82c0-16.33,31.19-54.68,46.58-54.68h119.49ZM206.58,141.77c-12.37-3.93-50.44-64.81-54.68-64.81h-87.09l101.27,129.62H46.58c-17.32,0-46.58-42.05-46.58-58.73V6.08C0,5.65,5.65,0,6.08,0h141.77c19.71,0,58.73,29.78,58.73,50.63v91.14ZM473.92,160c-2.8,13.58-32,46.58-46.58,46.58h-115.44l97.22-129.62h-83.04c-5.58,0-39.07,49.9-47.34,57.98-3.56,3.48-3.34,8.86-11.4,6.83V54.68c0-21.7,41.53-54.68,62.78-54.68h137.72c.43,0,6.08,5.65,6.08,6.08v153.92Z" />
            </svg>
        ),
        color: "from-[#ef3f24] to-[#f57460]", // Xurrent red
    },
    {
        name: "Mendix",
        description: "Mendix’in düşük kodlu platformu ile dijital inovasyonu hızlandırın. Yapay zeka destekli Chatbot’lardan müşteri portallarına kadar birçok özel uygulama geliştirerek, hızlı ve ölçeklenebilir çözümler sunuyoruz.",
        icon: (
            <svg viewBox="0 0 463.68 460" fill="currentColor" className="w-10 h-10">
                <path d="M463.68,69.89v320.25l-2.93,14.07c-6.93,24.79-26.99,44.8-51.48,52.38l-16.07,3.4H70.47c-37.39-3.82-67.62-33.69-70.47-71.41V71.44C2.91,32.97,34.35,2.7,72.61,0l319.04.03c36.66,2.52,69.03,32.85,72.03,69.85ZM71.58,22.46c-26.36,2.8-47.3,24.39-49.32,50.83l-.03,312.85c1.87,27.84,23.9,49.68,51.62,51.63h316.6c27.48-2.34,49.15-23.99,51.01-51.63V73.88c-1.85-27.52-23.64-49.28-51.01-51.62l-318.86.21ZM95.2,308.53l1.24,9.27c8.79-12.34,26.75-15.06,38.65-5.58l6.78,7.44c7.98-15.72,35.26-17.56,46.05-4.01,2.6,3.26,6.2,11.39,6.2,15.44v46.06l20.82-31.84-22.05-36.79h25.66l11.14,22.26,10.81-22.26h26.58l-22.02,36.79,23.88,38.02h-25.66l-13.59-23.5-12.99,23.5h-44.51l-.93-.93v-46.99c0-.62-1.47-4.07-1.96-4.84-3.95-6.31-14.95-5.21-18.96.62-1.8,2.62-3.81,9.8-3.81,12.88v39.26h-22.26v-47.3c0-.43-1.57-4.81-1.95-5.47-3.68-6.36-14.97-5.11-18.97.63-1.68,2.41-3.81,8.82-3.81,11.64v40.5h-22.26v-74.81h17.93Z" />
            </svg>
        ),
        color: "from-[#087ef6] to-[#4fa3ff]", // Mendix blue
    }
]

export default function PartnershipsPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none transform translate-y-1/4" />

                <Container className="relative z-10 text-center">
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight mb-6">
                            Teknoloji Yatırımlarınızdan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Maksimum Faydayı Sağlayın</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            BGTS, kurumsal platform çözümleriyle verimliliği artırır, iş birliğini güçlendirir ve dijital dönüşümü hızlandırır. Microsoft’un güçlü altyapısından AWS’in ölçeklenebilir bulut çözümlerine, ServiceNow’ın operasyonel verimlilik kazandıran otomasyonlarından Atlassian, Xurrent ve Mendix platformlarının sunduğu esneklik ve çevikliğe kadar farklı alanlarda çözümler sağlıyoruz.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* ═══════════ PARTNERS GRID ═══════════ */}
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PARTNERS.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
                            >
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-300`}>
                                    {partner.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{partner.name}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                                    {partner.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}
