import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email no es válido" },
        { status: 400 },
      );
    }

    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!makeWebhookUrl) {
      console.error("MAKE_WEBHOOK_URL environment variable is not set");
      return NextResponse.json(
        { error: "El servicio de contacto no está configurado" },
        { status: 500 },
      );
    }

    const response = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        source: "Portfolio - Formulario de contacto",
      }),
    });

    if (!response.ok) {
      console.error(`Make webhook error: ${response.status}`);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intentá más tarde." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
