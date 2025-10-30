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
    <Section padding='xl' className=''>
      <div className='grid grid-cols-2'>
        {/* Content Section */}
        <div className='max-w-4xl mx-auto mb-12 relative col-span-1' data-aos="fade-left">
          {/* Title */}
          <Typography 
            variant='h1' 
            className='text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6'
          >
            Manage Your Business{' '}
            <span className='text-primary'>Easily</span>{' '}
            From Anywhere
          </Typography>

          {/* Supporting Description */}
          <Typography 
            variant='lead' 
            className='text-lg md:text-xl mb-8 max-w-3xl mx-auto'
          >
            Empowering small and medium-sized businesses in Nigeria to digitize operations, track sales, manage inventory, and grow with confidence — even in low-connectivity environments.
          </Typography>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link href='/register' className='w-full sm:w-auto'>
              <Button size='lg' variant='primary' className='bg-primary py-3 px-5 rounded-4xl text-white w-full'>
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Image
            src=''
            alt='hero'
            width={100}
            height={100}
          />
        </div>          
      </div>
    </Section>
  )
}

export default HeroSection