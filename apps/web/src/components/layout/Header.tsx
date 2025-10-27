'use client'
import React, { useState } from 'react'
import { routes } from '@/config/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Typography, Button } from '../ui'


interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={cn('bg-white border-b-2 border-secondary shadow-sm sticky top-0 z-50', className)}>
      {/* Mobile  Menu */}
      {isMobileMenuOpen && (
        <div 
          className='fixed inset-0 bg-background/50 backdrop-blur-sm z-50'
          onClick={closeMobileMenu}
          aria-hidden='true'
          role='presentation'
        />
      )}

      <Container className='relative z-44 py-4'>
        <div className='flex items-center justify-between'>
          <Link href={routes.home.href} className='flex items-center gap-2'>
            <Image src='/logo.png' alt='logo' width={100} height={100} />
          </Link>
          <nav className='flex items-center gap-2'>
            <Link href={routes.home.href}>Home</Link>
            {/* <Link href={routes.about.href}>About</Link>
            <Link href={routes.contact.href}>Contact</Link> */}
          </nav>
          <div className='flex items-center gap-2'>
            <Button variant='primary' size='sm'>
              <Link href={routes.login.href}>Login</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header