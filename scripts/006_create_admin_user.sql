-- Script pentru a seta un utilizator existent ca admin
-- 
-- INSTRUCȚIUNI:
-- 1. Înregistrează-te la /auth/login cu email-ul dorit
-- 2. După ce te înregistrezi, găsește ID-ul utilizatorului în tabela auth.users
-- 3. Rulează această comandă înlocuind 'your-email@example.com' cu email-ul tău:

UPDATE profiles 
SET is_admin = true 
WHERE id = (
  SELECT id FROM auth.users 
  WHERE email = 'your-email@example.com'
);

-- Verifică că utilizatorul este acum admin
SELECT 
  u.email, 
  p.is_admin,
  p.created_at
FROM profiles p
JOIN auth.users u ON p.id = u.id
WHERE u.email = 'your-email@example.com';
