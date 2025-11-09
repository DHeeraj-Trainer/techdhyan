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

// Simple in-memory rate limiting (max 3 requests per hour per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }
  
  if (record.count >= 3) {
    return false;
  }
  
  record.count++;
  return true;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function validateContactData(data: ContactFormData): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    return { valid: false, error: "Name must be 2-100 characters" };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email) || data.email.length > 255) {
    return { valid: false, error: "Invalid email address" };
  }
  
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    return { valid: false, error: "Invalid phone number format" };
  }
  
  if (data.course && data.course.length > 100) {
    return { valid: false, error: "Course name too long" };
  }
  
  if (!data.message || data.message.trim().length < 10 || data.message.length > 1000) {
    return { valid: false, error: "Message must be 10-1000 characters" };
  }
  
  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (!checkRateLimit(ip)) {
      console.log("Rate limit exceeded for IP:", ip);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, course, message }: ContactFormData = await req.json();

    // Validate input
    const validation = validateContactData({ name, email, phone, course, message });
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Processing contact form submission");

    // Sanitize all user inputs before inserting into HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeCourse = course ? escapeHtml(course.trim()) : '';
    const safeMessage = escapeHtml(message.trim());

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${safePhone}</p>
          ${safeCourse ? `<p style="margin: 10px 0;"><strong>Interested Course:</strong> ${safeCourse}</p>` : ''}
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #d97706;">
          <h3 style="color: #1e3a8a; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #374151;">${safeMessage}</p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Tech Dhyan Learnings contact form</p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Tech Dhyan Learnings <onboarding@resend.dev>",
      to: ["booragadadheeraj@gmail.com", "navyakanchi9491@gmail.com", "dheerajbooragadda@gmail.com"],
      subject: `New Contact Form Submission from ${safeName}`,
      html: emailHtml,
      replyTo: email,
    });

    console.log("Email sent successfully", { success: true });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email", { type: error.name });
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
