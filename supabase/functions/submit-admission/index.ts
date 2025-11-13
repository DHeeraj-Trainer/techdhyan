import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AdmissionData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  experience?: string;
  message: string;
}

// Rate limiting map
const rateLimitMap = new Map<string, number[]>();

const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const hourAgo = now - (60 * 60 * 1000);
  
  const timestamps = rateLimitMap.get(identifier) || [];
  const recentRequests = timestamps.filter(t => t > hourAgo);
  
  if (recentRequests.length >= 2) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);
  return true;
};

const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const validateAdmissionData = (data: AdmissionData): string | null => {
  if (!data.firstName || data.firstName.trim().length < 2 || data.firstName.length > 50) {
    return "Invalid first name";
  }
  if (!data.lastName || data.lastName.trim().length < 2 || data.lastName.length > 50) {
    return "Invalid last name";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 255) {
    return "Invalid email address";
  }
  if (!data.phone || !/^\+?[1-9]\d{1,14}$/.test(data.phone)) {
    return "Invalid phone number";
  }
  if (!data.course || data.course.length < 1) {
    return "Please select a course";
  }
  if (!data.qualification || data.qualification.trim().length < 2 || data.qualification.length > 100) {
    return "Invalid qualification";
  }
  if (data.experience && data.experience.length > 100) {
    return "Experience description too long";
  }
  if (!data.message || data.message.trim().length < 20 || data.message.length > 1000) {
    return "Message must be between 20 and 1000 characters";
  }
  return null;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    
    if (!checkRateLimit(clientIp)) {
      console.log('Rate limit exceeded for IP:', clientIp);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const data: AdmissionData = await req.json();
    
    const validationError = validateAdmissionData(data);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const sanitizedData = {
      first_name: escapeHtml(data.firstName.trim()),
      last_name: escapeHtml(data.lastName.trim()),
      email: escapeHtml(data.email.trim().toLowerCase()),
      phone: escapeHtml(data.phone.trim()),
      course: escapeHtml(data.course),
      qualification: escapeHtml(data.qualification.trim()),
      experience: data.experience ? escapeHtml(data.experience.trim()) : null,
      message: escapeHtml(data.message.trim()),
    };

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: insertError } = await supabaseClient
      .from('admissions')
      .insert([sanitizedData]);

    if (insertError) {
      console.error('Database error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to submit application. Please try again.' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Admission application submitted successfully for:', sanitizedData.email);

    return new Response(
      JSON.stringify({ success: true, message: 'Application submitted successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in submit-admission function:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);
