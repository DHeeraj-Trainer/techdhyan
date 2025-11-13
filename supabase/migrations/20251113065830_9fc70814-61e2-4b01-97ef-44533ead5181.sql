-- Create admissions table
CREATE TABLE public.admissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create corporate_inquiries table
CREATE TABLE public.corporate_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  industry TEXT,
  contact_name TEXT NOT NULL,
  designation TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  employees INTEGER NOT NULL,
  program TEXT,
  requirements TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.corporate_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (these are public forms)
CREATE POLICY "Anyone can insert admissions"
ON public.admissions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can insert corporate inquiries"
ON public.corporate_inquiries
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_admissions_updated_at
BEFORE UPDATE ON public.admissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_corporate_inquiries_updated_at
BEFORE UPDATE ON public.corporate_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();