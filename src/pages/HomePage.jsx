'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaBalanceScale, FaGavel, FaHandshake, FaBuilding, FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLandmark, FaGlobe, FaPassport, FaHome } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function HomePage() {
  const practiceAreas = [
    {
      title: 'Commercial Law',
      description: 'Expert legal advice for businesses and commercial transactions',
      icon: <FaLandmark className="w-8 h-8" />,
    },
    {
      title: 'General Practice Law',
      description: 'Comprehensive legal services for all your needs',
      icon: <FaBalanceScale className="w-8 h-8" />,
    },
    {
      title: 'Litigation',
      description: 'Strong representation in court proceedings',
      icon: <FaGavel className="w-8 h-8" />,
    },
    {
      title: 'Immigration Law',
      description: 'Expert guidance through immigration processes',
      icon: <FaPassport className="w-8 h-8" />,
    },
    {
      title: 'Real Estate Developments Law',
      description: 'Specialized legal services for property and development',
      icon: <FaHome className="w-8 h-8" />,
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Logo - Now visible on all devices */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute -top-4 right-0 z-20 w-32 h-32 lg:w-48 lg:h-48 p-2"
        >
          <Image
            src="/images/Deka_and_Company_Advocates_Logo_page-0001-removebg-preview.png"
            alt="Deka & Company Advocates Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </motion.div>
      </section>
    </main>
  )
} 