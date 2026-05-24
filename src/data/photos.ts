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
  },
  {
    id: '1',
    url: '/images/gallery/aircraft1.jpg',
    thumbnail: '/images/gallery/thumb/aircraft1.jpg',
    title: 'Boeing 787 Dreamliner',
    aircraft: 'Boeing 787-9',
    registration: 'B-2088',
    airline: 'Air China',
    category: 'commercial',
    date: '2024-03-15',
    location: 'Beijing Capital International Airport',
    airport: 'ZBAA'
  },
  {
    id: '2',
    url: '/images/gallery/aircraft2.jpg',
    thumbnail: '/images/gallery/thumb/aircraft2.jpg',
    title: 'Airbus A350 XWB',
    aircraft: 'Airbus A350-900',
    registration: 'B-308M',
    airline: 'China Eastern',
    category: 'commercial',
    date: '2024-03-10',
    location: 'Shanghai Pudong International Airport',
    airport: 'ZSPD'
  },
  {
    id: '3',
    url: '/images/gallery/aircraft3.jpg',
    thumbnail: '/images/gallery/thumb/aircraft3.jpg',
    title: 'F-15 Eagle',
    aircraft: 'McDonnell Douglas F-15E',
    registration: 'FAF123',
    airline: 'French Air Force',
    category: 'military',
    date: '2024-02-20',
    location: 'Orange Air Base',
    airport: 'LFMO'
  },
  {
    id: '4',
    url: '/images/gallery/aircraft4.jpg',
    thumbnail: '/images/gallery/thumb/aircraft4.jpg',
    title: 'Cessna 172 Skyhawk',
    aircraft: 'Cessna 172S',
    registration: 'N1234X',
    airline: 'Private',
    category: 'general',
    date: '2024-02-15',
    location: 'Van Nuys Airport',
    airport: 'KVNY'
  },
  {
    id: '5',
    url: '/images/gallery/aircraft5.jpg',
    thumbnail: '/images/gallery/thumb/aircraft5.jpg',
    title: 'Eurocopter AS350',
    aircraft: 'Airbus H125',
    registration: 'N450SH',
    airline: 'Shell Oil',
    category: 'helicopter',
    date: '2024-01-28',
    location: 'Gulf of Mexico',
    airport: 'Offshore'
  },
  {
    id: '6',
    url: '/images/gallery/aircraft6.jpg',
    thumbnail: '/images/gallery/thumb/aircraft6.jpg',
    title: 'Boeing 777-300ER',
    aircraft: 'Boeing 777-300ER',
    registration: 'B-KPQ',
    airline: 'Cathay Pacific',
    category: 'commercial',
    date: '2024-01-20',
    location: 'Hong Kong International Airport',
    airport: 'VHHH'
  },
  {
    id: '7',
    url: '/images/gallery/aircraft7.jpg',
    thumbnail: '/images/gallery/thumb/aircraft7.jpg',
    title: 'Sukhoi Su-35',
    aircraft: 'Sukhoi Su-35S',
    registration: 'RF-92254',
    airline: 'Russian Air Force',
    category: 'military',
    date: '2023-12-10',
    location: 'Krasnodar Air Base',
    airport: 'URKK'
  },
  {
    id: '8',
    url: '/images/gallery/aircraft8.jpg',
    thumbnail: '/images/gallery/thumb/aircraft8.jpg',
    title: 'Airbus A320neo',
    aircraft: 'Airbus A320-251N',
    registration: 'B-304Z',
    airline: 'Sichuan Airlines',
    category: 'commercial',
    date: '2024-04-05',
    location: 'Chengdu Shuangliu International Airport',
    airport: 'ZUUU'
  }
]
