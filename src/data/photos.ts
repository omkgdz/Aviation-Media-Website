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
