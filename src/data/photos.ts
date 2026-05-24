export interface Photo {
  id: string
  url: string
  thumbnail: string
  title: string
  aircraft: string
  registration: string
  airline: string
  category: 'commercial' | 'military' | 'general' | 'helicopter'
  date: string
  location: string
  airport: string
}

export const photos: Photo[] = [
  {
    id: 'langkawi-2025-1',
    url: '/images/reports/langkawi2025/MalaysiaSU30specialliv.jpg',
    thumbnail: '/images/reports/langkawi2025/MalaysiaSU30specialliv.jpg',
    title: 'RMAF Su-30MKM Special Livery',
    aircraft: 'Sukhoi Su-30MKM',
    registration: 'M52-16',
    airline: 'Royal Malaysian Air Force',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-2',
    url: '/images/reports/langkawi2025/Malaysia F18Flare.jpg',
    thumbnail: '/images/reports/langkawi2025/Malaysia F18Flare.jpg',
    title: 'F/A-18D Hornet Flare Deployment',
    aircraft: 'McDonnell Douglas F/A-18D Hornet',
    registration: 'M45-07',
    airline: 'Royal Malaysian Air Force',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-3',
    url: '/images/reports/langkawi2025/Malaysia F18taxi.jpg',
    thumbnail: '/images/reports/langkawi2025/Malaysia F18taxi.jpg',
    title: 'F/A-18D Hornet Taxiing',
    aircraft: 'McDonnell Douglas F/A-18D Hornet',
    registration: 'M45-07',
    airline: 'Royal Malaysian Air Force',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-4',
    url: '/images/reports/langkawi2025/Canadap3.jpg',
    thumbnail: '/images/reports/langkawi2025/Canadap3.jpg',
    title: 'CP-140 Aurora',
    aircraft: 'Lockheed CP-140 Aurora',
    registration: '140108',
    airline: 'Royal Canadian Air Force',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-5',
    url: '/images/reports/langkawi2025/usac2.jpg',
    thumbnail: '/images/reports/langkawi2025/usac2.jpg',
    title: 'C-2 Greyhound',
    aircraft: 'Northrop Grumman C-2 Greyhound',
    registration: '162149',
    airline: 'United States Navy',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-6',
    url: '/images/reports/langkawi2025/431852014eb4ebc4e02c617ce87e6d13.jpg',
    thumbnail: '/images/reports/langkawi2025/431852014eb4ebc4e02c617ce87e6d13.jpg',
    title: 'Russian Knights Su-35',
    aircraft: 'Sukhoi Su-35',
    registration: 'RF-95906',
    airline: 'Russian Air Force',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-7',
    url: '/images/reports/langkawi2025/542c9e4a04aed64ec02e2ef172ef8055.jpg',
    thumbnail: '/images/reports/langkawi2025/542c9e4a04aed64ec02e2ef172ef8055.jpg',
    title: 'Singapore Air Force F-50',
    aircraft: 'Fokker 50 MPA',
    registration: '712',
    airline: 'Republic of Singapore Air Force',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  },
  {
    id: 'langkawi-2025-8',
    url: '/images/reports/langkawi2025/86725cdc0e9fa00f1451d38630b1c1e4.jpg',
    thumbnail: '/images/reports/langkawi2025/86725cdc0e9fa00f1451d38630b1c1e4.jpg',
    title: 'US Navy F/A-18 Hornet',
    aircraft: 'McDonnell Douglas F/A-18 Hornet',
    registration: '168867',
    airline: 'United States Navy',
    category: 'military',
    date: '2025-05-20',
    location: 'Langkawi International Airport',
    airport: 'WMKL'
  }
]
