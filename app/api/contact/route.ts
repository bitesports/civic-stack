import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // Examples: SendGrid, Resend, Mailgun, etc.
    // For now, we'll just log and return success

    console.log("Contact form submission:", {
      name,
      email,
      organization,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@civicstack.io',
    //   to: 'team@civicstack.io',
    //   subject: `New inquiry from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
    //          <p><strong>Message:</strong> ${message}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

