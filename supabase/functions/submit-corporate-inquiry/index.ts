import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CorporateInquiryData {
  companyName: string;
  industry?: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  employees: string;
  program?: string;
  requirements: string;
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

const validateCorporateData = (data: CorporateInquiryData): string | null => {
  if (!data.companyName || data.companyName.trim().length < 2 || data.companyName.length > 100) {
    return "Invalid company name";
  }
  if (data.industry && data.industry.length > 100) {
    return "Industry description too long";
  }
  if (!data.contactName || data.contactName.trim().length < 2 || data.contactName.length > 100) {
    return "Invalid contact name";
  }
  if (!data.designation || data.designation.trim().length < 2 || data.designation.length > 100) {
    return "Invalid designation";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 255) {
    return "Invalid email address";
  }
  if (!data.phone || !/^\+?[1-9]\d{1,14}$/.test(data.phone)) {
    return "Invalid phone number";
  }
  if (!data.employees || !/^\d+$/.test(data.employees) || parseInt(data.employees) < 1) {
    return "Invalid number of employees";
  }
  if (data.program && data.program.length > 100) {
    return "Program name too long";
  }
  if (!data.requirements || data.requirements.trim().length < 20 || data.requirements.length > 1000) {
    return "Requirements must be between 20 and 1000 characters";
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

    const data: CorporateInquiryData = await req.json();
    
    const validationError = validateCorporateData(data);
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
      company_name: escapeHtml(data.companyName.trim()),
      industry: data.industry ? escapeHtml(data.industry.trim()) : null,
      contact_name: escapeHtml(data.contactName.trim()),
      designation: escapeHtml(data.designation.trim()),
      email: escapeHtml(data.email.trim().toLowerCase()),
      phone: escapeHtml(data.phone.trim()),
      employees: parseInt(data.employees),
      program: data.program ? escapeHtml(data.program.trim()) : null,
      requirements: escapeHtml(data.requirements.trim()),
    };

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: insertError } = await supabaseClient
      .from('corporate_inquiries')
      .insert([sanitizedData]);

    if (insertError) {
      console.error('Database error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to submit inquiry. Please try again.' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Corporate inquiry submitted successfully for:', sanitizedData.company_name);

    return new Response(
      JSON.stringify({ success: true, message: 'Inquiry submitted successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in submit-corporate-inquiry function:', error);
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
