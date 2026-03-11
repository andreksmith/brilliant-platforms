'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
} & (
  | {
      href: string
      onClick?: never
      type?: never
      disabled?: never
    }
  | {
      href?: never
      onClick?: () => void
      type?: 'button' | 'submit'
      disabled?: boolean
    }
)

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97]'

  const variants = {
    primary:
      'bg-accent text-white hover:bg-[#2563EB] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(59,130,246,0.15)] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2),0_0_0_1px_rgba(59,130,246,0.25)]',
    secondary:
      'bg-transparent border border-off-white/15 text-off-white hover:bg-off-white/5 hover:border-off-white/25',
  }

  const classes = cn(baseStyles, variants[variant], className)

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
