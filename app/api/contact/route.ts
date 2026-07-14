import { NextResponse } from "next/server"

export const runtime = "edge"

export async function POST(request: Request) {
  try {
    const { name, email, company, drag, message } = await request.json()

    // 1. Basic Server-side Validation
    if (!name || !email || !company || !drag || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const results: { discord?: boolean; resend?: boolean } = {}

    // 2. Discord Webhook Notification
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (discordWebhookUrl) {
      try {
        const embed = {
          title: "New Client Inquiry 📨",
          color: 0x18181b, // Sleek dark zinc color
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Organization", value: company, inline: true },
            { name: "Team Size", value: drag, inline: true },
            { name: "Problem & Intent", value: message },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Niyatna Operations Center",
          },
        }

        const discordRes = await fetch(discordWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ embeds: [embed] }),
        })

        results.discord = discordRes.ok
      } catch (err) {
        console.error("Failed to send Discord notification:", err)
        results.discord = false
      }
    } else {
      console.warn("DISCORD_WEBHOOK_URL env variable is missing.")
    }

    // 3. Resend Email Notification
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Niyatna Contact <hello@niyatna.com>",
            to: ["hello@niyatna.com"],
            subject: `New Inquiry from ${name} (${company})`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; line-height: 1.6;">
                <h2 style="font-size: 20px; font-weight: 600; border-bottom: 1px solid #e4e4e7; padding-bottom: 12px; margin-bottom: 24px;">
                  New Client Inquiry
                </h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Organization:</strong> ${company}</p>
                <p><strong>Team Size:</strong> ${drag}</p>
                <div style="margin-top: 24px; padding: 16px; background-color: #f4f4f5; border-radius: 8px;">
                  <strong style="display: block; margin-bottom: 8px;">Problem & Intent:</strong>
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 32px 0 16px 0;" />
                <span style="font-size: 11px; color: #71717a;">Sent via Niyatna Contact form.</span>
              </div>
            `,
          }),
        })

        results.resend = resendRes.ok
      } catch (err) {
        console.error("Failed to send Resend email:", err)
        results.resend = false
      }
    } else {
      console.warn("RESEND_API_KEY env variable is missing.")
    }

    // If both integrations are not configured locally yet, we still return success to keep user experience smooth
    return NextResponse.json({ success: true, integrations: results })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again later." },
      { status: 500 }
    )
  }
}
