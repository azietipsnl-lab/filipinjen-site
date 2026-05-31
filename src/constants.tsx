import { 
  Palmtree, 
  MapPin, 
  Calendar, 
  Users, 
  Info, 
  Compass, 
  Sun, 
  Umbrella,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

export interface Tour {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  tags: string[];
  itinerary: { day: string; title: string; activities: string[] }[];
  inclusions: string[];
  travelTips: string[];
}

export const TOURS: Tour[] = [
  {
    id: 'el-nido-expedition',
    title: 'El Nido Island Hopping',
    location: 'Palawan',
    price: 350,
    duration: '4 Days, 3 Nights',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=1000',
    description: 'Explore the breathtaking lagoons, hidden beaches, and towering limestone cliffs of El Nido. Includes Tours A and C.',
    tags: ['Luxury', 'Nature', 'Water Activities'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in El Nido', activities: ['Transfer to hotel', 'Sunset at Las Cabanas beach', 'Welcome dinner'] },
      { day: 'Day 2', title: 'Big Lagoon & Secret Lagoon', activities: ['Kayaking in Big Lagoon', 'Snorkeling at Shimizu Island', 'Lunch on the beach'] },
      { day: 'Day 3', title: 'Hidden Beach & Helicopter Island', activities: ['Explore Hidden Beach', 'Snorkeling at Helicopter Island', 'Matinloc Shrine visit'] },
      { day: 'Day 4', title: 'Departure', activities: ['Leisure morning', 'Souvenir shopping', 'Transfer to airport'] }
    ],
    inclusions: ['Airport Transfers', 'Luxury Accommodation', 'Private Boat Tours', 'Licensed Guide', 'Daily Breakfast & Lunch'],
    travelTips: ['Bring a waterproof dry bag', 'Use reef-safe sunscreen', 'Rental kayaks are available at Big Lagoon']
  },
  {
    id: 'siargao-surf-retreat',
    title: 'Siargao Surf & Chill',
    location: 'Surigao del Norte',
    price: 420,
    duration: '5 Days, 4 Nights',
    image: 'https://images.unsplash.com/photo-1542362567-b03361a37c3a?auto=format&fit=crop&q=80&w=1000',
    description: 'Catch the famous Cloud 9 waves, visit Sugba Lagoon, and enjoy island hopping to Guyam, Daku, and Naked Island.',
    tags: ['Adventure', 'Surfing', 'Island Life'],
    itinerary: [
      { day: 'Day 1', title: 'Surfer Vibes Arrival', activities: ['Check-in at General Luna', 'Surf lesson at Jacking Horse', 'Bar hopping'] },
      { day: 'Day 2', title: 'Sugba Lagoon & Magpupungko', activities: ['Cliff jumping at Sugba Lagoon', 'Tidal pools at Magpupungko', 'Coconut road drive'] },
      { day: 'Day 3', title: 'Three Island Hopping', activities: ['Guyam Island picnic', 'Daku Island surfing', 'Naked Island swimming'] },
      { day: 'Day 4', title: 'Cloud 9 & North Exploring', activities: ['Sunrise surf at Cloud 9', 'Visit Pacifico Beach', 'Taktak Falls'] },
      { day: 'Day 5', title: 'Chill & Fly', activities: ['Yoga session', 'Smoothie bowl breakfast', 'Transfer to airport'] }
    ],
    inclusions: ['Boutique Resort Stay', 'Surf Lessons with Pro', 'Motorbike Rental', 'Island Hopping Tour', 'Photography Service'],
    travelTips: ['Rent a motorbike to explore the island', 'Visit Shaka for the best smoothie bowls', 'Best surf season is Sep-Nov']
  },
  {
    id: 'cebu-bohol-adventure',
    title: 'Cebu & Bohol Wonders',
    location: 'Central Visayas',
    price: 550,
    duration: '6 Days, 5 Nights',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=1000',
    description: 'Swim with whale sharks in Oslob, hike the Chocolate Hills, and meet the Philippine Tarsier in Bohol.',
    tags: ['Culture', 'Wildlife', 'Multi-City'],
    itinerary: [
      { day: 'Day 1', title: 'Cebu City Heritage', activities: ['Magellan\'s Cross', 'Fort San Pedro', 'Cebu Lechon dinner'] },
      { day: 'Day 2', title: 'Whale Sharks & Canyoning', activities: ['Oslob Whale Shark swim', 'Kawasan Falls Canyoning', 'Transfer to Moalboal'] },
      { day: 'Day 3', title: 'Sardine Run', activities: ['Snorkeling with millions of sardines', 'Turtle watching', 'Transfer to Bohol via ferry'] },
      { day: 'Day 4', title: 'Bohol Countryside', activities: ['Chocolate Hills', 'Tarsier Sanctuary', 'Loboc River Cruise lunch'] },
      { day: 'Day 5', title: 'Panglao Island Day', activities: ['Hinagdanan Cave', 'Alona Beach relaxation', 'Bohol Bee Farm visit'] },
      { day: 'Day 6', title: 'Farewell', activities: ['Breakfast with view', 'Panglao souvenir shopping', 'Transfer to Tagbilaran airport'] }
    ],
    inclusions: ['Inter-island Ferry Tickets', 'All Entry Fees', 'Private Air-conditioned Van', 'Eco-friendly Guided Tours', '4-star Hotels'],
    travelTips: ['Start the whale shark tour as early as 5 AM', 'Don\'t touch the tarsiers', 'Try the local Peanut Kisses in Bohol']
  }
];

export const TIPS = [
  {
    icon: <Sun className="w-5 h-5" />,
    title: "When to Visit",
    description: "The best time is during the dry season (December - May). Summer is March to May."
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Currency & Payments",
    description: "Philippine Peso (PHP) is the currency. Carry cash for remote islands and local markets."
  },
  {
    icon: <Info className="w-5 h-5" />,
    title: "Connectivity",
    description: "Get a local SIM (Globe or Smart) at the airport for better island connectivity."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Safety & Health",
    description: "Drink bottled water and use high SPF sunscreen. The tropical sun is extremely intense!"
  },
  {
    icon: <Umbrella className="w-5 h-5" />,
    title: "What to Pack",
    description: "Dry bags are essential. Bring lightweight, breathable clothing and sturdy aqua shoes."
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Getting Around",
    description: "Domestic flights and ferries are the main way to travel between islands. Book in advance!"
  }
];
