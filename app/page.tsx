'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaBalanceScale, FaGavel, FaHandshake, FaBuilding, FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLandmark, FaGlobe, FaPassport, FaHome } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
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
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Mobile and iPad View */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
          <div className="relative w-full h-full">
            <div className="absolute inset-0 animate-fade">
              <Image
                src="/images/WhatsApp Image 2025-04-09 at 8.48.36 AM.jpeg"
                alt="Legal consultation"
                fill
                className="object-cover md:object-[center_30%]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex absolute inset-0 z-0">
          {/* Left side - Image */}
          <div className="w-1/2 relative">
            <Image
              src="/images/WhatsApp Image 2025-04-09 at 8.48.36 AM.jpeg"
              alt="Legal consultation"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
          
          {/* Right side - Content */}
          <div className="w-1/2 bg-primary relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
            
            {/* Logo removed from here since it's now at the top level */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 text-white text-left ml-0 mt-8 w-full max-w-xl"
            >
              <motion.h1 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-serif font-bold mb-4 leading-tight"
              >
                Expert Legal Services
              </motion.h1>
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl mb-6"
              >
                Providing exceptional legal representation with integrity and excellence
              </motion.p>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col gap-4 mb-8"
              >
                <div className="flex items-center gap-3 text-white/90">
                  <FaMapMarkerAlt className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-semibold">Head office</p>
                    <p>Atis suites, 3rd floor room 300</p>
                    <p>General waruingi street, Nairobi kenya</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <FaPhone className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-semibold">Call us now</p>
                    <p>+254706078008</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <FaEnvelope className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-semibold">Email us</p>
                    <p>deka@dekaadvocates.com</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-start items-start"
              >
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 bg-white text-primary rounded-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Schedule a Consultation
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  href="/practice-areas" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Content */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:hidden container-custom relative z-20 text-[#E5B45C] text-center px-4 pt-32"
        >
          <motion.h1 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-4 leading-tight text-[#FFD700] drop-shadow-lg"
          >
            Expert Legal Services
          </motion.h1>
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg mb-6 max-w-2xl mx-auto text-[#E5B45C] drop-shadow-lg"
          >
            Providing exceptional legal representation with integrity and excellence
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col gap-4 mb-8"
          >
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="w-5 h-5 text-[#FFD700]" />
              <div className="text-[#E5B45C] drop-shadow-lg">
                <p className="font-semibold text-[#FFD700]">Head office</p>
                <p>Atis suites, 3rd floor room 300</p>
                <p>General waruingi street, Nairobi kenya</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="w-5 h-5 text-[#FFD700]" />
              <div className="text-[#E5B45C] drop-shadow-lg">
                <p className="font-semibold text-[#FFD700]">Call us now</p>
                <p>+254706078008</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-[#FFD700] w-5 h-5" />
              <p className="text-[#E5B45C]">deka@dekaadvocates.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-white text-primary rounded-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link 
              href="/practice-areas" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-center mb-16"
          >
            Our Practice Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-4"
              >
                7+
              </motion.div>
              <div className="text-xl">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-4"
              >
                1000+
              </motion.div>
              <div className="text-xl">Cases Handled</div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-4"
              >
                98%
              </motion.div>
              <div className="text-xl">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 