import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, budget, message } = await req.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
to: ['arizonaprimepc@gmail.com'], // 👈 CHANGE THIS
      subject: "New Build Request - AZPrimePC",
      html: `
        <h2>New Build Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ error });
  }
}