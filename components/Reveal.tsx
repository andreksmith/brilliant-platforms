'use client'

import { useReveal } from '@/hooks/useReveal'

interface RevealProps {
  children: React.ReactNode
  className?: string
}

export default function Reveal({ children, className = '' }: RevealProps) {
  const { ref, isRevealed } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
