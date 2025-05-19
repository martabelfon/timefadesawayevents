import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.es',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: process.env.IONOS_EMAIL!,
      pass: process.env.IONOS_PASSWORD!,
    },
  });

  const mailOptions = {
    from: process.env.IONOS_EMAIL,
    to: process.env.IONOS_EMAIL,
    subject: `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Correo: ${email}
      Mensaje: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
