import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, inquiryType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Date incomplete. Vă rugăm să completați numele, emailul și mesajul." },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    // If RESEND_API_KEY is not configured yet (e.g. initial dev setup), log and return success mock
    if (!apiKey) {
      console.warn(
        "RESEND_API_KEY environment variable is not set. Simulating email send:",
        { name, email, inquiryType, message },
      )
      return NextResponse.json({
        success: true,
        mock: true,
        message: "Formular trimis cu succes (mod dezvoltare). Setați RESEND_API_KEY pentru trimitere reală.",
      })
    }

    const resend = new Resend(apiKey)
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@bogdanhojbota.ro"
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Website Bogdan Hojbotă <onboarding@resend.dev>"

    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [receiverEmail],
      replyTo: email,
      subject: `[Website Comision] ${inquiryType} — ${name}`,
      text: `Solicitare nouă de pe site-ul de portofoliu:\n\nNume: ${name}\nEmail: ${email}\nTip Solicitare: ${inquiryType}\n\nMesaj:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #b45309; border-bottom: 2px solid #b45309; padding-bottom: 8px;">Solicitare Nouă de Comision</h2>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Tip Solicitare:</strong> ${inquiryType}</p>
          <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #b45309;">
            <strong style="display: block; margin-bottom: 8px;">Mesaj:</strong>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message || "Eroare la trimiterea mailului" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error("Contact API Exception:", err)
    const errorMessage = err instanceof Error ? err.message : "A apărut o eroare neașteptată"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
