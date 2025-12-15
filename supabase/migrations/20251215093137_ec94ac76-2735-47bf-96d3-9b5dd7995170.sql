-- Fix security issue: Restrict leads table access to admins only

-- Drop overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can read leads" ON public.leads;

-- Drop overly permissive UPDATE policy  
DROP POLICY IF EXISTS "Authenticated users can update leads" ON public.leads;

-- Create new admin-only SELECT policy
CREATE POLICY "Admins can read leads" ON public.leads
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Create new admin-only UPDATE policy
CREATE POLICY "Admins can update leads" ON public.leads
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add DELETE policy (missing) - restrict to admins only
CREATE POLICY "Admins can delete leads" ON public.leads
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));