import React from 'react'
import { Container, Typography } from '@/components/ui'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Chidi Okafor',
      role: 'Owner, Chidi Fashion Store',
      location: 'Lagos',
      image: '/testimonials/chidi.jpg',
      rating: 5,
      text: 'Biztrack has transformed how I manage my fashion store. I can now track inventory and sales in real-time, even when internet is slow. The mobile-first design means I can manage everything from my phone.',
    },
    {
      name: 'Amina Hassan',
      role: 'Manager, Amina Provisions',
      location: 'Kano',
      image: '/testimonials/amina.jpg',
      rating: 5,
      text: 'The offline feature is a game-changer for our business in Kano. We can still record sales and manage inventory when the network is down. The analytics dashboard helped us identify our best-selling products.',
    },
    {
      name: 'Emeka Nwosu',
      role: 'Owner, Emeka Electronics',
      location: 'Abuja',
      image: '/testimonials/emeka.jpg',
      rating: 5,
      text: 'We have three stores in Abuja, and Biztrack makes it easy to manage all of them from one platform. The staff management feature helps us control access and track who made what sales.',
    },
    {
      name: 'Fatima Ibrahim',
      role: 'Manager, Fatima Pharmacy',
      location: 'Kaduna',
      image: '/testimonials/fatima.jpg',
      rating: 5,
      text: 'Switching from manual bookkeeping to Biztrack saved us hours every week. The customer database helps us track repeat customers and their purchase history. Highly recommended!',
    },
  ]

  return (
    <section className='py-16 md:py-24 bg-white'>
      <Container>
        {/* Header */}
        <div className='text-center mb-16'>
          <Typography variant='h2' className='mb-4'>
            Loved by Nigerian Businesses
          </Typography>
          <Typography variant='lead' className='max-w-2xl mx-auto text-gray-600'>
            See what business owners across Nigeria are saying about Biztrack
          </Typography>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative'
            >
              {/* Quote Icon */}
              <div className='absolute top-6 right-6 opacity-10'>
                <Quote className='h-16 w-16 text-primary' />
              </div>

              {/* Stars */}
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='h-5 w-5 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className='text-gray-700 mb-6 leading-relaxed relative z-10'>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-linear-to-br from-primary to-emerald-600 flex items-center justify-center text-white font-semibold'>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>
                    {testimonial.name}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {testimonial.role}
                  </div>
                  <div className='text-xs text-gray-500 mt-1'>
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='text-4xl font-bold text-primary mb-2'>500+</div>
            <div className='text-gray-600 text-sm'>Active Businesses</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-primary mb-2'>98%</div>
            <div className='text-gray-600 text-sm'>Satisfaction Rate</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-primary mb-2'>24/7</div>
            <div className='text-gray-600 text-sm'>Support Available</div>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-primary mb-2'>50+</div>
            <div className='text-gray-600 text-sm'>Cities Covered</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection