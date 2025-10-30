'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { Container } from '@/components/ui'
import { Zap, Mail, Lock, Eye, EyeOff, User, Building2, Phone } from 'lucide-react'
import { useState } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Register:', formData)
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-secondary to-white flex items-center justify-center p-4 py-12'>
      <Container className='max-w-lg w-full'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <Link href='/' className='inline-flex items-center gap-2 mb-4 group'>
            <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-200'>
              <Zap className='h-7 w-7 text-white' />
            </div>
            <span className='text-2xl font-bold text-gray-900'>Biztrack</span>
          </Link>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Get Started Free</h1>
          <p className='text-gray-600'>Create your account and start managing your business</p>
        </div>

        {/* Register Form */}
        <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200'>
          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Full Name */}
            <div>
              <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name
              </label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type='text'
                  id='fullName'
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='John Doe'
                  required
                />
              </div>
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor='businessName' className='block text-sm font-medium text-gray-700 mb-2'>
                Business Name
              </label>
              <div className='relative'>
                <Building2 className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type='text'
                  id='businessName'
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='My Business'
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type='email'
                  id='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='you@example.com'
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                Phone Number
              </label>
              <div className='relative'>
                <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type='tel'
                  id='phone'
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='+234 (0) 800 000 0000'
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='••••••••'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
              <p className='mt-1 text-xs text-gray-500'>At least 8 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-2'>
                Confirm Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200'
                  placeholder='••••••••'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  {showConfirmPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className='flex items-start'>
              <input
                type='checkbox'
                id='agreeToTerms'
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className='mt-1 rounded border-gray-300 text-primary focus:ring-primary'
                required
              />
              <label htmlFor='agreeToTerms' className='ml-2 text-sm text-gray-600'>
                I agree to the{' '}
                <Link href='/terms' className='text-primary hover:underline'>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href='/privacy' className='text-primary hover:underline'>
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button type='submit' variant='primary' size='lg' className='w-full mt-2'>
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className='mt-6 flex items-center gap-4'>
            <div className='flex-1 border-t border-gray-200'></div>
            <span className='text-sm text-gray-500'>or</span>
            <div className='flex-1 border-t border-gray-200'></div>
          </div>

          {/* Sign In Link */}
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Already have an account?{' '}
              <Link href='/login' className='text-primary font-semibold hover:underline'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
