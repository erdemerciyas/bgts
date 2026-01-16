"use client"

import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Text } from "@/components/ui/Typography"
import { HOME_CONTENT } from "@/content/home"

export function LogoWall() {
    const { title, logos } = HOME_CONTENT.socialProof;

    return (
        <div className="w-full bg-[#020617] border-t border-white/10 h-14 flex items-center relative z-20 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

            <div className="flex w-full">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="flex items-center gap-3 mx-6 md:mx-8 group cursor-default">
                            <span className="text-[10px] text-blue-500/50 group-hover:text-blue-400 transition-colors">
                                ✦
                            </span>
                            <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors tracking-widest uppercase font-heading whitespace-nowrap">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap items-center h-full">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`${logo.name}-duplicate-${index}`} className="flex items-center gap-3 mx-6 md:mx-8 group cursor-default">
                            <span className="text-[10px] text-blue-500/50 group-hover:text-blue-400 transition-colors">
                                ✦
                            </span>
                            <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors tracking-widest uppercase font-heading whitespace-nowrap">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

