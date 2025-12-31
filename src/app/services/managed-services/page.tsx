import { Metadata } from 'next'
import ManagedServicesContent from './ManagedServicesContent'

export const metadata: Metadata = {
    title: 'Yönetilen Hizmetler | BGTS',
    description: 'Operasyonel mükemmellik ve SRE güvenilirliği ile kritik altyapı yönetimi. 7/24 destek, AIOps izleme ve platform yönetimi hizmetleri.',
    openGraph: {
        title: 'Yönetilen Hizmetler - BGTS Teknoloji',
        description: 'Operasyonel mükemmellik ve SRE güvenilirliği ile kritik altyapı yönetimi.',
    },
}

export default function ManagedServicesPage() {
    return <ManagedServicesContent />
}
