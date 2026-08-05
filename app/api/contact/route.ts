import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const formattedLog = `
========== NEW CONTACT FORM SUBMISSION ==========
Time: ${timestamp}
Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget}
Message:
${message}
=================================================
    `;

    console.log(formattedLog);

    // Resend Email API Integration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'kumarashutosh0219@gmail.com';

    if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [recipientEmail],
            replyTo: email,
            subject: `New Thumbnail Inquiry from ${name} (${projectType})`,
            html: `
              <div style="font-family: Arial, sans-serif; color: #111827; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
                <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Project Brief Received</h2>
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Client Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-top: 15px;">
                  <strong style="display: block; margin-bottom: 5px;">Video Brief / Message:</strong>
                  <p style="white-space: pre-wrap; margin: 0;">${message}</p>
                </div>
                <p style="font-size: 12px; color: #6b7280; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 10px;">
                  Sent from Ashutosh Portfolio Website at ${timestamp}
                </p>
              </div>
            `,
          }),
        });

        const resData = await res.json();
        if (!res.ok) {
          console.error('Resend API Error Response:', resData);
        } else {
          console.log('Resend Email sent successfully:', resData);
        }
      } catch (err) {
        console.error('Resend API Exception:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message received and email dispatched successfully!',
      timestamp,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing message.' },
      { status: 500 }
    );
  }
}
