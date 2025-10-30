import React from 'react'
import { Container, Typography, Button, Section } from '@/components/ui'
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@biztrack.ng',
      link: 'mailto:hello@biztrack.ng',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 (0) 800 000 0000',
      link: 'tel:+2348000000000',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Lagos, Nigeria',
      link: '#',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      content: 'Available 24/7',
      link: '#',
    },
  ]

  return (
    <Section className='py-16 md:py-24 bg-muted/40'>
      <Container>
        {/* Header */}
        <div className='text-center mb-16'>
          <Typography variant='h2' className='mb-4'>
            Get in Touch
          </Typography>
          <Typography variant='lead' className='max-w-2xl mx-auto text-gray-600'>
            Have questions about Biztrack? We're here to help. Reach out to our team anytime.
          </Typography>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Info */}
          <div>
            <Typography variant='h3' className='mb-6'>
              Contact Information
            </Typography>
            <Typography variant='body' className='text-gray-600 mb-8'>
              Whether you're starting a new business or looking to scale your operations, our team is ready to support you every step of the way.
            </Typography>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.link}
                    className='flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-200 group'
                  >
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200'>
                      <IconComponent className='h-6 w-6 text-primary group-hover:text-white' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-1'>{info.title}</h4>
                      <p className='text-gray-600'>{info.content}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Proof */}
            <div className='mt-12 p-6 bg-white rounded-xl border border-gray-200'>
              <Typography variant='body' className='text-gray-700 mb-4'>
                <strong>Quick Response Time:</strong> We typically respond within 2 hours during business hours.
              </Typography>
              <Typography variant='small' className='text-gray-500'>
                Mon - Fri: 9:00 AM - 6:00 PM WAT
              </Typography>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <Typography variant='h3' className='mb-6'>
              Send us a Message
            </Typography>
            
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number (Optional)
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='+234 (0) 800 000 0000'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='Tell us how we can help...'
                />
              </div>

              <Button type='submit' variant='primary' size='lg' className='w-full'>
                <Send className='mr-2 h-5 w-5' />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ContactSection