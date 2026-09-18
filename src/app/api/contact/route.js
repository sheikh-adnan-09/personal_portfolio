const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, company } = body ?? {};

    // Honeypot field
    if (company) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are all required." },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return Response.json(
        { error: "Message is too long (max 5000 characters)." },
        { status: 400 },
      );
    }

    // Instead of sending email, just log it
    console.log("Contact form submission:", { name, email, message });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, email, message, company } = body ?? {};

//     // Honeypot field: real users never fill this hidden input, bots often do.
//     // Pretend success so bots don't learn it was rejected.
//     if (company) {
//       return Response.json({ success: true });
//     }

//     if (!name || !email || !message) {
//       return Response.json(
//         { error: "Name, email, and message are all required." },
//         { status: 400 },
//       );
//     }

//     if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
//       return Response.json(
//         { error: "Please enter a valid email address." },
//         { status: 400 },
//       );
//     }

//     if (message.length > 5000) {
//       return Response.json(
//         { error: "Message is too long (max 5000 characters)." },
//         { status: 400 },
//       );
//     }

//     if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
//       console.error("Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
//       return Response.json(
//         { error: "Contact form is not configured yet." },
//         { status: 500 },
//       );
//     }

//     const { error } = await resend.emails.send({
//       // Use your own verified domain in production instead of onboarding@resend.dev
//       from: "Portfolio Contact <onboarding@resend.dev>",
//       to: process.env.CONTACT_EMAIL,
//       replyTo: email,
//       subject: `New message from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return Response.json(
//         { error: "Failed to send message. Please try again later." },
//         { status: 502 },
//       );
//     }

//     return Response.json({ success: true });
//   } catch (err) {
//     console.error("Contact form error:", err);
//     return Response.json(
//       { error: "Something went wrong. Please try again later." },
//       { status: 500 },
//     );
//   }
// }
