'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Attorneys() {
  const attorney = {
    name: 'Deka Abdullahi',
    title: 'Managing Partner',
    specialty: 'Commercial Law, Litigation',
    image: '/images/WhatsApp Image 2025-04-09 at 8.48.36 AM.jpeg',
    bio: 'Deka Abdullahi is a seasoned legal professional with extensive experience in commercial law and litigation. She has successfully represented numerous clients in complex legal matters and is known for her strategic approach to legal challenges.',
    education: [
      'LLB (Hons) - University of Nairobi',
      'Postgraduate Diploma in Law - Kenya School of Law',
      'Certified Mediator - Chartered Institute of Arbitrators'
    ],
    experience: [
      'Managing Partner at Deka & Company Advocates',
      'Senior Associate at leading Nairobi law firm',
      'Legal Consultant for various international organizations'
    ],
    contact: {
      email: 'deka@dekaadvocates.com',
      phone: '+254706078008',
      linkedin: 'https://linkedin.com'
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-4 md:pt-6">
      <div className="container-custom">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-primary"
        >
          Our Attorney
        </motion.h1>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[450px]">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover object-[center_20%] lg:object-[center_10%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
              
              <div className="p-8 lg:p-10 text-center relative -mt-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h2 className="text-3xl font-serif font-bold mb-3 text-gray-800">{attorney.name}</h2>
                  <p className="text-primary font-semibold text-xl mb-6">{attorney.title}</p>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">{attorney.bio}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 