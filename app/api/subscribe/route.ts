import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { emailSchema } from '@/lib/validators'
import { rateLimit } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

const NOTIFY_EMAIL = 'andre@brilliantplatforms.com'
const FROM_EMAIL = 'Brilliant Platforms <hello@brilliantplatforms.com>'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  if (!rateLimit(ip, 5, 60000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    const validation = emailSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      )
    }

    const { email } = validation.data

    // Add to Resend audience (contacts list)
    try {
      await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID || '',
      })
    } catch (e) {
      // Audience may not be set up yet — continue with notification
      console.log('Audience add skipped:', e)
    }

    // Notify you of new subscriber
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject: `New subscriber: ${email}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 4px; font-size: 18px; font-weight: 500; color: #111;">New subscriber</h2>
            <p style="margin: 0; font-size: 13px; color: #6b7280;">brilliantplatforms.com</p>
          </div>
          <p style="font-size: 14px; color: #374151;">
            <a href="mailto:${email}" style="color: #3b82f6;">${email}</a> subscribed to updates.
          </p>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
