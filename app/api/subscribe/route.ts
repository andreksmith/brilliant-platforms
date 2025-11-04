import { NextResponse } from 'next/server'
import { emailSchema } from '@/lib/validators'
import { rateLimit } from '@/lib/utils'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), '.data')
const SUBSCRIBERS_FILE = join(DATA_DIR, 'subscribers.json')

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  // Simple rate limiting
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

    // Ensure .data directory exists
    try {
      await mkdir(DATA_DIR, { recursive: true })
    } catch (e) {
      // Directory already exists
    }

    // Read existing subscribers
    let subscribers: { email: string; subscribedAt: string }[] = []
    try {
      const data = await readFile(SUBSCRIBERS_FILE, 'utf-8')
      subscribers = JSON.parse(data)
    } catch (e) {
      // File doesn't exist yet
    }

    // Check if already subscribed
    if (subscribers.some((sub) => sub.email === email)) {
      return NextResponse.json(
        { message: 'Already subscribed' },
        { status: 200 }
      )
    }

    // Add new subscriber
    subscribers.push({
      email,
      subscribedAt: new Date().toISOString(),
    })

    // Write back to file
    await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))

    console.log(`✓ New subscriber: ${email}`)

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
