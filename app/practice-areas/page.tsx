'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBalanceScale, FaGavel, FaHandshake, FaBuilding, FaArrowRight, FaLandmark, FaGlobe, FaPassport, FaHome } from 'react-icons/fa'

const practiceAreas = [
  {
    title: 'Commercial Law',
    description: 'Expert legal advice for businesses and commercial transactions',
    icon: <FaLandmark className="w-8 h-8" />,
    image: '/images/commerc.png',
    details: [
      'Business formation and structuring',
      'Contract drafting and review',
      'Mergers and acquisitions',
      'Corporate governance',
      'Compliance and regulatory matters'
    ]
  },
  {
    title: 'General Practice Law',
    description: 'Comprehensive legal services for all your needs',
    icon: <FaBalanceScale className="w-8 h-8" />,
    image: '/images/commercial.png',
    details: [
      'Legal consultations',
      'Document preparation',
      'Legal research',
      'General legal advice',
      'Case management'
    ]
  },
  {
    title: 'Litigation',
    description: 'Strong representation in court proceedings',
    icon: <FaGavel className="w-8 h-8" />,
    image: '/images/general.png',
    details: [
      'Civil litigation',
      'Commercial disputes',
      'Employment litigation',
      'Insurance defense',
      'Appellate practice'
    ]
  },
  {
    title: 'Immigration Law',
    description: 'Expert guidance through immigration processes',
    icon: <FaPassport className="w-8 h-8" />,
    image: '/images/immig.png',
    details: [
      'Visa applications',
      'Work permits',
      'Citizenship applications',
      'Immigration appeals',
      'Family reunification'
    ]
  },
  {
    title: 'Real Estate Developments Law',
    description: 'Specialized legal services for property and development',
    icon: <FaHome className="w-8 h-8" />,
    image: '/images/real.png',
    details: [
      'Property transactions',
      'Land use planning',
      'Development agreements',
      'Property disputes',
      'Title verification'
    ]
  }
]

export default function PracticeAreas() {
  return (
    <main className="overflow-hidden">
      {/* Header Section */}
      <header className="relative bg-primary text-white h-[300px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/practice.png"
            alt="Practice Areas Background"
            fill
            className="object-cover object-left"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Practice Areas
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Comprehensive legal services tailored to meet your specific needs
            </p>
          </motion.div>
        </div>
      </header>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${area.title === 'Immigration Law' ? 'object-[center_30%]' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="text-primary mb-2">{area.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                    <p className="text-white/90">{area.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <FaArrowRight className="text-primary text-sm" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Schedule a Consultation
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Contact us today for a consultation and let us help you with your legal needs
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Us Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 