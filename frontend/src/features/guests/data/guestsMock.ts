export type GuestStatus = 'Potwierdzony' | 'Oczekuje' | 'Odrzucony'

export type Guest = {
  id: string
  name: string
  email: string
  status: GuestStatus
  table: string
  allergy: string
  declineReason?: string
  guestCode?: string
}

export const initialGuests: Guest[] = [
  { id: 'jan', name: 'Gość demo 1', email: 'guest-1@example.com', status: 'Potwierdzony', table: '1', allergy: 'Brak' },
  { id: 'maria', name: 'Gość demo 2', email: 'guest-2@example.com', status: 'Potwierdzony', table: '1', allergy: 'Orzechy' },
  { id: 'piotr', name: 'Gość demo 3', email: 'guest-3@example.com', status: 'Oczekuje', table: '2', allergy: 'Brak' },
  { id: 'anna', name: 'Gość demo 4', email: 'guest-4@example.com', status: 'Potwierdzony', table: '2', allergy: 'Laktoza' },
  { id: 'tomasz', name: 'Gość demo 5', email: 'guest-5@example.com', status: 'Odrzucony', table: '-', allergy: 'Brak' },
  { id: 'katarzyna', name: 'Gość demo 6', email: 'guest-6@example.com', status: 'Potwierdzony', table: '3', allergy: 'Gluten' },
  { id: 'marek', name: 'Gość demo 7', email: 'guest-7@example.com', status: 'Oczekuje', table: '3', allergy: 'Brak' },
  { id: 'ewa', name: 'Gość demo 8', email: 'guest-8@example.com', status: 'Potwierdzony', table: '4', allergy: 'Owoce morza' },
  { id: 'michal', name: 'Gość demo 9', email: 'guest-9@example.com', status: 'Potwierdzony', table: '4', allergy: 'Brak' },
  { id: 'joanna', name: 'Gość demo 10', email: 'guest-10@example.com', status: 'Oczekuje', table: '5', allergy: 'Brak' },
  { id: 'krzysztof', name: 'Gość demo 11', email: 'guest-11@example.com', status: 'Potwierdzony', table: '5', allergy: 'Soja' },
  { id: 'magdalena', name: 'Gość demo 12', email: 'guest-12@example.com', status: 'Potwierdzony', table: '6', allergy: 'Brak' },
]
