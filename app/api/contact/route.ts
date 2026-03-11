import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validators'
import { rateLimit } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

const NOTIFY_EMAIL = 'andre@brilliantplatforms.com'
const FROM_EMAIL = 'Brilliant Platforms <hello@brilliantplatforms.com>'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

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

    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `Contact: ${name}`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 4px; font-size: 18px; font-weight: 500; color: #111;">New contact form submission</h2>
            <p style="margin: 0; font-size: 13px; color: #6b7280;">brilliantplatforms.com</p>
          </div>
          <table style="width: 100%; font-size: 14px; color: #374151;">
            <tr>
              <td style="padding: 6px 0; color: #9ca3af; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #9ca3af; vertical-align: top;">Email</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #9ca3af; vertical-align: top;">Message</td>
              <td style="padding: 6px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    })

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
