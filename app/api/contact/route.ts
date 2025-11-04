import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validators'
import { rateLimit } from '@/lib/utils'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  // Simple rate limiting
  if (!rateLimit(ip, 3, 60000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const validation = contactFormSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, message } = validation.data

    // Log the contact form submission
    console.log('📬 Contact form submission:')
    console.log(`  Name: ${name}`)
    console.log(`  Email: ${email}`)
    console.log(`  Message: ${message}`)

    // Here you would normally send an email or save to a database
    // For now, we just log it

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
