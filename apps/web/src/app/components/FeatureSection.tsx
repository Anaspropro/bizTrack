import React from 'react'
import { Container, Typography } from '@/components/ui'
import { 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Wifi, 
  Smartphone,
  Lock,
  TrendingUp 
} from 'lucide-react'

const FeatureSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Sales Management',
      description: 'Record sales, generate invoices, and track customer purchases with ease. Automate calculations and reduce errors.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Package,
      title: 'Inventory Tracking',
      description: 'Monitor stock levels in real-time, set low-stock alerts, and manage multiple product categories efficiently.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Customer Database',
      description: 'Build and maintain a comprehensive customer database with purchase history and contact information.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Visualize sales trends, revenue insights, and inventory performance with interactive charts and reports.',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Wifi,
      title: 'Offline-First',
      description: 'Works seamlessly in low-connectivity areas. Sync data automatically when connection is restored.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for mobile devices. Manage your business on-the-go from any smartphone or tablet.',
      gradient: 'from-teal-500 to-green-600'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Your data is encrypted and stored securely. Role-based access control for staff management.',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: TrendingUp,
      title: 'Growth Insights',
      description: 'Get actionable insights to identify best-selling products, peak sales periods, and growth opportunities.',
      gradient: 'from-yellow-500 to-orange-600'
    },
  ]

  return (
    <section className='py-16 md:py-24 bg-white'>
      <Container>
        {/* Header */}
        <div className='text-center mb-16'>
          <Typography variant='h2' className='mb-4'>
            Everything You Need to Run Your Business
          </Typography>
          <Typography variant='lead' className='max-w-2xl mx-auto text-gray-600'>
            Comprehensive tools designed specifically for Nigerian SMEs to streamline operations and boost productivity.
          </Typography>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className='group relative bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300'
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className='h-7 w-7 text-white' />
                </div>

                {/* Content */}
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className='absolute inset-0 rounded-xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className='mt-16 text-center'>
          <Typography variant='body' className='text-gray-600 mb-6'>
            Ready to transform your business operations?
          </Typography>
          <a 
            href='/register' 
            className='inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200'
          >
            Start Free Trial
          </a>
        </div>
      </Container>
    </section>
  )
}

export default FeatureSection