-- Adaugă exemple de lucrări reale ale lui Bogdan Hojbota
-- Acestea sunt bazate pe informații din articole și CV-ul artistului

-- Folosim "narrative" în loc de "description" și eliminăm referința la tabelul "categories"
INSERT INTO artworks (title, narrative, year, materials, category, image_url, featured) VALUES
(
  'Bust Profesor Petre Ionescu Muscel',
  'Portret sculptat ce captează esența personalității academice. Tehnica de modelare în metal demonstrează măiestria artistului în redarea trăsăturilor umane prin materiale industriale.',
  2006,
  'Bronz patinat',
  'Portret Monumental',
  '/placeholder.svg?height=1000&width=800',
  false
),
(
  'Compozitie Abstractă - Artele Focului',
  'Lucrare premiată la Bienala Artelor Focului, care explorează tehnicile tradiționale de forjare în context contemporan. Formele organice sunt modelate prin căldură și presiune, păstrând amprentele procesului de creație.',
  2001,
  'Fier forjat, Oțel',
  'Sculptura de Cameră',
  '/placeholder.svg?height=1000&width=800',
  true
);
