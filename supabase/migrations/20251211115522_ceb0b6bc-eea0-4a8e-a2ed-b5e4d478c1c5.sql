-- Insert admin role for existing user
INSERT INTO public.user_roles (user_id, role)
VALUES ('dc420221-ffa2-474d-9b55-cc9494bf189e', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;