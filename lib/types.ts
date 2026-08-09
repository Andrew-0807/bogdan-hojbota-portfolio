export interface Artwork {
  id: string
  title: string
  year: number
  materials: string
  narrative: string | null
  category: string
  dimensions: string | null
  image_url: string
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  type: "solo_exhibition" | "group_show" | "public_commission" | "symposium"
  description: string | null
  location: string | null
  start_date: string
  end_date: string | null
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface CVEntry {
  id: string
  category: "publication" | "course" | "lecture"
  title: string
  description: string | null
  institution: string | null
  year: number | null
  url: string | null
  created_at: string
  updated_at: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  inquiry_type: "commission" | "speaking" | "general"
  message: string
  phone: string | null
  status: "new" | "reviewed" | "responded"
  created_at: string
}

export interface Profile {
  id: string
  email: string
  is_admin: boolean
  created_at: string
}
