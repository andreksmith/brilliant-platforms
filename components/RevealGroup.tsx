'use client'

import { useReveal } from '@/hooks/useReveal'

interface RevealGroupProps {
  children: React.ReactNode
  className?: string
}

export default function RevealGroup({ children, className = '' }: RevealGroupProps) {
  const { ref, isRevealed } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal-stagger ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
