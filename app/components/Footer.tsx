'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      text: '+254706078008',
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: 'deka@dekaadvocates.com',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      text: 'Head office\nAtis suites, 3rd floor room 300\nGeneral waruingi street,\nNairobi kenya',
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      text: 'Monday to saturday 9am-5pm',
    },
  ]

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Practice Areas', href: '/practice-areas' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Practice Areas',
      links: [
        { name: 'Commercial Law', href: '/practice-areas' },
        { name: 'General Practice Law', href: '/practice-areas' },
        { name: 'Litigation', href: '/practice-areas' },
        { name: 'Immigration Law', href: '/practice-areas' },
        { name: 'Real Estate Developments Law', href: '/practice-areas' },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 