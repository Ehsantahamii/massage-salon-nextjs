"use client"

import dynamic from 'next/dynamic'

// import Loader from "@/components/module/loader/Loader";
const Loader = dynamic(() => import('@/components/module/loader/Loader'), { ssr: false })
export default function Loading() {
    return <Loader />
}