const countries = [
  // Asia (already included from previous example)
  { name: 'Japan', value: 'JP', cities: ['Tokyo', 'Kyoto', 'Osaka'] },
  {
    name: 'China',
    value: 'CN',
    cities: ['Beijing', 'Shanghai', 'Hong Kong'],
  },
  { name: 'South Korea', value: 'KR', cities: ['Seoul', 'Busan', 'Incheon'] },
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai', 'Chennai'] },
  {
    name: 'Indonesia',
    value: 'ID',
    cities: ['Jakarta', 'Surabaya', 'Bandung'],
  },
  {
    name: 'Vietnam',
    value: 'VN',
    cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
  },
  {
    name: 'Thailand',
    value: 'TH',
    cities: ['Bangkok', 'Chiang Mai', 'Phuket'],
  },
  {
    name: 'Philippines',
    value: 'PH',
    cities: ['Manila', 'Cebu City', 'Davao City'],
  },
  {
    name: 'Malaysia',
    value: 'MY',
    cities: ['Kuala Lumpur', 'Penang', 'George Town'],
  },
  { name: 'Singapore', value: 'SG', cities: ['Singapore'] }, // City-state
  {
    name: 'Kazakhstan',
    value: 'KZ',
    cities: ['Nur-Sultan', 'Almaty', 'Shymkent'],
  },
  { name: 'Sri Lanka', value: 'LK', cities: ['Colombo', 'Kandy', 'Galle'] },
  {
    name: 'Nepal',
    value: 'NP',
    cities: ['Kathmandu', 'Pokhara', 'Bhaktapur'],
  },
  {
    name: 'Bangladesh',
    value: 'BG',
    cities: ['Dhaka', 'Chittagong', 'Sylhet'],
  },
  {
    name: 'Pakistan',
    value: 'PK',
    cities: ['Islamabad', 'Lahore', 'Karachi'],
  },
  { name: 'Iran', value: 'IR', cities: ['Tehran', 'Mashhad', 'Isfahan'] },
  {
    name: 'Myanmar (Burma)',
    value: 'MM',
    cities: ['Naypyidaw', 'Yangon', 'Mandalay'],
  },
  {
    name: 'Uzbekistan',
    value: 'UZ',
    cities: ['Tashkent', 'Samarkand', 'Bukhara'],
  },
  {
    name: 'Saudi Arabia',
    value: 'SA',
    cities: ['Riyadh', 'Jeddah', 'Mecca'],
  },
  { name: 'Israel', value: 'IL', cities: ['Jerusalem', 'Tel Aviv', 'Haifa'] },

  // Europe
  { name: 'France', value: 'FR', cities: ['Paris', 'Lyon', 'Marseille'] },
  { name: 'Germany', value: 'DE', cities: ['Berlin', 'Munich', 'Hamburg'] },
  { name: 'Italy', value: 'IT', cities: ['Rome', 'Milan', 'Venice'] },
  { name: 'Spain', value: 'ES', cities: ['Madrid', 'Barcelona', 'Valencia'] },
  {
    name: 'United Kingdom',
    value: 'GB',
    cities: ['London', 'Birmingham', 'Manchester'],
  },
  {
    name: 'Russia',
    value: 'RU',
    cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk'],
  },
  {
    name: 'Greece',
    value: 'GR',
    cities: ['Athens', 'Thessaloniki', 'Heraklion'],
  },
  {
    name: 'Netherlands',
    value: 'NL',
    cities: ['Amsterdam', 'Rotterdam', 'The Hague'],
  },
  {
    name: 'Switzerland',
    value: 'CH',
    cities: ['Zurich', 'Geneva', 'Lucerne'],
  },
  { name: 'Poland', value: 'PL', cities: ['Warsaw', 'Krakow', 'Wrocław'] },

  // Africa
  {
    name: 'South Africa',
    value: 'ZA',
    cities: ['Cape Town', 'Johannesburg', 'Durban'],
  },
  { name: 'Egypt', value: 'EG', cities: ['Cairo', 'Alexandria', 'Luxor'] },
  { name: 'Morocco', value: 'MA', cities: ['Marrakech', 'Rabat', 'Fes'] },
  { name: 'Kenya', value: 'KE', cities: ['Nairobi', 'Mombasa', 'Kisumu'] },
  {
    name: 'Ethiopia',
    value: 'ET',
    cities: ['Addis Ababa', 'Gondar', 'Bahir Dar'],
  },

  // North America
  {
    name: 'United States',
    value: 'US',
    cities: ['New York City', 'Los Angeles', 'Chicago'],
  },
  {
    name: 'Canada',
    value: 'CA',
    cities: ['Toronto', 'Montreal', 'Vancouver'],
  },
  {
    name: 'Mexico',
    value: 'MX',
    cities: ['Mexico City', 'Cancun', 'Guadalajara'],
  },

  // South America
  {
    name: 'Brazil',
    value: 'BR',
    cities: ['Brasilia', 'Rio de Janeiro', 'São Paulo'],
  },
  {
    name: 'Argentina',
    value: 'AR',
    cities: ['Buenos Aires', 'Córdoba', 'Mendoza'],
  },
  { name: 'Colombia', value: 'CO', cities: ['Bogotá', 'Medellín', 'Cali'] },
  { name: 'Peru', value: 'PE', cities: ['Lima', 'Cusco', 'Arequipa'] },
  {
    name: 'Chile',
    value: 'CL',
    cities: ['Santiago', 'Valparaíso', 'Viña del Mar'],
  },
];

export {countries};
