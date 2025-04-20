import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create a reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deka@dekaadvocates.com',
    pass: process.env.EMAIL_PASS,
  },
  pool: true, // Enable connection pooling
  maxConnections: 5, // Maximum number of connections in the pool
  maxMessages: 100, // Maximum number of messages per connection
  rateDelta: 1000, // Time interval in ms for rate limiting
  rateLimit: 5, // Maximum number of messages per rateDelta
  tls: {
    rejectUnauthorized: false
  }
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { to, subject, text } = body

    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'deka@dekaadvocates.com',
      to,
      subject,
      text,
      priority: 'high' // Set email priority to high
    })

    return NextResponse.json({ 
      success: true,
      messageId: info.messageId 
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 