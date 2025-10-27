'use client'
import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  UserPlus,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

type PlanType = 'starter' | 'professional' | 'enterprise'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [plan] = useState<PlanType>('professional') // This would come from user context

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
    { icon: ShoppingCart, label: 'Sales', href: '/dashboard/sales' },
    { icon: Package, label: 'Inventory', href: '/dashboard/inventory' },
    { icon: Users, label: 'Customers', href: '/dashboard/customers' },
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics', proOnly: true },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ]

  const stats = [
    { label: 'Total Revenue', value: '₦245,000', change: '+12.5%', trend: 'up', icon: DollarSign },
    { label: 'Total Sales', value: '1,234', change: '+8.2%', trend: 'up', icon: ShoppingCart },
    { label: 'Products', value: '892', change: '+15', trend: 'up', icon: Package },
    { label: 'Customers', value: '1,456', change: '+24', trend: 'up', icon: Users },
  ]

  const recentActivity = [
    { type: 'sale', message: 'New sale: ₦15,000', time: '2 minutes ago', icon: CheckCircle },
    { type: 'alert', message: 'Low stock: Product A', time: '1 hour ago', icon: AlertCircle },
    { type: 'customer', message: 'New customer registered', time: '3 hours ago', icon: UserPlus },
  ]

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200 sticky top-0 z-40'>
        <div className='px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className='lg:hidden p-2 rounded-lg hover:bg-gray-100'
              >
                {sidebarOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              </button>
              <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
            </div>
            <div className='flex items-center gap-4'>
              {/* Search */}
              <div className='hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg'>
                <Search className='h-5 w-5 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-transparent border-none outline-none text-sm w-40'
                />
              </div>
              
              {/* Notifications */}
              <button className='relative p-2 rounded-lg hover:bg-gray-100'>
                <Bell className='h-6 w-6 text-gray-600' />
                <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
              </button>
              
              {/* User */}
              <div className='flex items-center gap-3 pl-3 border-l border-gray-200'>
                <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold'>
                  JD
                </div>
                <span className='hidden md:block text-sm font-medium text-gray-700'>John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='flex'>
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className='flex flex-col h-full pt-20 lg:pt-4'>
            <nav className='flex-1 px-4 space-y-2'>
              {sidebarItems.map((item, index) => {
                const Icon = item.icon
                const isProFeature = item.proOnly && plan === 'starter'
                
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    } ${isProFeature ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Icon className='h-5 w-5' />
                    <span>{item.label}</span>
                    {isProFeature && (
                      <span className='ml-auto text-xs bg-primary text-white px-2 py-0.5 rounded-full'>
                        Pro
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>
            
            <div className='p-4 border-t border-gray-200'>
              <button className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full'>
                <LogOut className='h-5 w-5' />
                <span>Sign Out</span>
              </button>
              
              {/* Plan Badge */}
              <div className='mt-4 p-3 bg-primary/10 rounded-lg'>
                <p className='text-xs text-gray-600 mb-1'>Current Plan</p>
                <p className='font-semibold text-primary capitalize'>{plan}</p>
                {plan !== 'enterprise' && (
                  <button className='mt-2 text-xs text-primary hover:underline'>
                    Upgrade
                  </button>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-4 sm:p-6 lg:p-8'>
          {/* Stats Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                      <Icon className='h-6 w-6 text-primary' />
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? (
                        <TrendingUp className='h-4 w-4' />
                      ) : (
                        <TrendingDown className='h-4 w-4' />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>{stat.value}</p>
                    <p className='text-sm text-gray-500 mt-1'>{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Chart Area */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
            <div className='lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-900 mb-4'>Sales Overview</h2>
              <div className='h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'>
                <p className='text-gray-500'>Chart would go here</p>
              </div>
            </div>
            
            <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-900 mb-4'>Recent Activity</h2>
              <div className='space-y-4'>
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <div key={index} className='flex items-start gap-3'>
                      <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0'>
                        <Icon className='h-4 w-4 text-gray-600' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-sm text-gray-900'>{activity.message}</p>
                        <p className='text-xs text-gray-500 mt-1'>{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
            <h2 className='text-lg font-semibold text-gray-900 mb-4'>Quick Actions</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <button className='flex flex-col items-center justify-center p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors'>
                <ShoppingCart className='h-8 w-8 text-gray-400 mb-2' />
                <span className='text-sm font-medium text-gray-700'>New Sale</span>
              </button>
              <button className='flex flex-col items-center justify-center p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors'>
                <Package className='h-8 w-8 text-gray-400 mb-2' />
                <span className='text-sm font-medium text-gray-700'>Add Product</span>
              </button>
              <button className='flex flex-col items-center justify-center p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors'>
                <UserPlus className='h-8 w-8 text-gray-400 mb-2' />
                <span className='text-sm font-medium text-gray-700'>Add Customer</span>
              </button>
              <button className='flex flex-col items-center justify-center p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors'>
                <BarChart3 className='h-8 w-8 text-gray-400 mb-2' />
                <span className='text-sm font-medium text-gray-700'>View Report</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
