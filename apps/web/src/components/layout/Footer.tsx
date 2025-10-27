import React from 'react'
import { Container, Typography } from '@/components/ui'
import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Zap 
} from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Demo', href: '/demo' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/biztrackng', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/biztrackng', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/biztrackng', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/biztrackng', label: 'LinkedIn' },
  ]

  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* Main Footer */}
      <Container className='py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center gap-2 mb-4 group'>
              <Image 
                src='/logo.png'
                alt='biztrack'
                width={100}
                height={100}
              />
            </Link>
            
            <Typography variant='body' className='text-secondary mb-6 max-w-sm'>
              Empowering Nigerian SMEs with modern, accessible business management tools. 
              Manage sales, inventory, and customers from anywhere, even offline.
            </Typography>

            {/* Social Links */}
            <div className='flex gap-3'>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-primary transition-colors duration-200'
                  >
                    <IconComponent className='h-5 w-5 text-gray-400 hover:text-white' />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <Typography variant='h6' className='text-white mb-4'>
              Product
            </Typography>
            <ul className='space-y-3'>
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <Typography variant='h6' className='text-white mb-4'>
              Company
            </Typography>
            <ul className='space-y-3'>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <Typography variant='h6' className='text-white mb-4'>
              Resources
            </Typography>
            <ul className='space-y-3'>
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex items-center gap-3'>
            <Mail className='h-5 w-5 text-primary' />
            <div>
              <Typography variant='small' className='text-gray-500'>Email</Typography>
              <a href='mailto:hello@biztrack.ng' className='text-gray-400 hover:text-primary transition-colors duration-200'>
                hello@biztrack.ng
              </a>
            </div>
          </div>
          
          <div className='flex items-center gap-3'>
            <Phone className='h-5 w-5 text-primary' />
            <div>
              <Typography variant='small' className='text-gray-500'>Phone</Typography>
              <a href='tel:+2348000000000' className='text-gray-400 hover:text-primary transition-colors duration-200'>
                +234 (0) 800 000 0000
              </a>
            </div>
          </div>
          
          <div className='flex items-center gap-3'>
            <MapPin className='h-5 w-5 text-primary' />
            <div>
              <Typography variant='small' className='text-gray-500'>Location</Typography>
              <span className='text-gray-400'>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800 bg-gray-950'>
        <Container className='py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <Typography variant='small' className='text-gray-500 text-center md:text-left'>
              © {currentYear} Biztrack. All rights reserved.
            </Typography>

            <div className='flex flex-wrap gap-6 justify-center md:justify-end'>
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className='text-gray-500 hover:text-primary transition-colors duration-200 text-sm'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer