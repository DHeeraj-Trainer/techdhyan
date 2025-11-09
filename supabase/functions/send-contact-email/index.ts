import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, course, message }: ContactFormData = await req.json();

    console.log("Sending contact form email for:", name);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
          ${course ? `<p style="margin: 10px 0;"><strong>Interested Course:</strong> ${course}</p>` : ''}
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #d97706;">
          <h3 style="color: #1e3a8a; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #374151;">${message}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Tech Dhyan Learnings contact form</p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Tech Dhyan Learnings <onboarding@resend.dev>",
      to: ["booragadadheeraj@gmail.com", "navyakanchi9491@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
