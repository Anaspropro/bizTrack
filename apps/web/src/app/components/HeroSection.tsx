import React from 'react'
import { Container, Typography, Button, Section } from '@/components/ui'
import Link from 'next/link'
import { Play, TrendingUp, Shield, Wifi, BarChart3 } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const features = [
    { icon: BarChart3, title: 'Sales Tracking', description: 'Record and track sales effortlessly' },
    { icon: TrendingUp, title: 'Inventory Management', description: 'Monitor stock levels in real-time' },
    { icon: Wifi, title: 'Offline-First', description: 'Works without internet connectivity' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Built for Nigerian SMEs' },
  ]

  return (
    <Section padding='md' className='bg-secondary/40'>
      <Container>
        <div className='grid grid-cols-3'>
          {/* Content Section */}
          <div className='max-w-4xl mx-auto mb-12 relative col-span-2' data-aos="fade-left">
            {/* Badge */}
            {/* <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
              <span className='text-primary font-semibold text-sm'>Made for Nigerian SMEs</span>
            </div> */}

            {/* Title */}
            <Typography 
              variant='h1' 
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'
            >
              Manage Your Business{' '}
              <span className='text-primary'>Easily</span>{' '}
              From Anywhere
            </Typography>

            {/* Supporting Description */}
            <Typography 
              variant='lead' 
              className='text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto'
            >
              Empowering small and medium-sized businesses in Nigeria to digitize operations, track sales, manage inventory, and grow with confidence — even in low-connectivity environments.
            </Typography>

            {/* Call-to-Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-16'>
              <Link href='/register' className='w-full sm:w-auto'>
                <Button size='lg' variant='primary' className='bg-primary py-3 px-5 rounded-4xl text-white w-full'>
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>

          {/* focal point */}
          <div className='col-span-1 rounded-lg bg-primaary shadow-xl'>
            <Image 
              src='/logo.png'
              alt='Image'
              width={100}
              height={100}
              className='w-full '
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-primary/20'
              >
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <IconComponent className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                <p className='text-gray-600 text-sm'>{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className='mt-16 text-center'>
          <Typography variant='small' className='text-gray-500 mb-4'>
            Trusted by businesses across Nigeria
          </Typography>
          <div className='flex flex-wrap justify-center items-center gap-8 opacity-40'>
            <div className='text-2xl font-bold text-gray-400'>Business 1</div>
            <div className='text-2xl font-bold text-gray-400'>Business 2</div>
            <div className='text-2xl font-bold text-gray-400'>Business 3</div>
            <div className='text-2xl font-bold text-gray-400'>Business 4</div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default HeroSection