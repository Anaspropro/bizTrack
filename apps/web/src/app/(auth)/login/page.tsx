'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { Container } from '@/components/ui'
import { Zap, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', formData)
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-secondary to-white flex items-center justify-center p-4'>
      <Container className='max-w-md w-full'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <Link href='/' className='inline-flex items-center gap-2 mb-4 group'>
            <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-200'>
              <Zap className='h-7 w-7 text-white' />
            </div>
            <span className='text-2xl font-bold text-gray-900'>Biztrack</span>
          </Link>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
          <p className='text-gray-600'>Sign in to manage your business</p>
        </div>

        {/* Login Form */}
        <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-200'>
          <form onSubmit={handleSubmit} className='space-y-6'>
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className='flex items-center justify-between'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className='rounded border-gray-300 text-primary focus:ring-primary'
                />
                <span className='ml-2 text-sm text-gray-600'>Remember me</span>
              </label>
              <Link href='/forgot-password' className='text-sm text-primary hover:underline'>
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button type='submit' variant='primary' size='lg' className='w-full'>
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className='mt-6 flex items-center gap-4'>
            <div className='flex-1 border-t border-gray-200'></div>
            <span className='text-sm text-gray-500'>or</span>
            <div className='flex-1 border-t border-gray-200'></div>
          </div>

          {/* Sign Up Link */}
          <div className='mt-6 text-center'>
            <p className='text-sm text-gray-600'>
              Don't have an account?{' '}
              <Link href='/register' className='text-primary font-semibold hover:underline'>
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Demo Account Info */}
        <div className='mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200'>
          <p className='text-sm text-blue-800 text-center'>
            💡 Demo: Try with email <strong>demo@biztrack.ng</strong> / password <strong>demo123</strong>
          </p>
        </div>
      </Container>
    </div>
  )
}
