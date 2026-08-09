-- Add 'symposium' to the events type constraint
ALTER TABLE public.events DROP CONSTRAINT IF EXISTS events_type_check;

ALTER TABLE public.events 
ADD CONSTRAINT events_type_check 
CHECK (type IN ('solo_exhibition', 'group_show', 'public_commission', 'symposium'));
