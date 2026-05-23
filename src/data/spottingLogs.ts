import { Photo } from './photos'

export interface Observation {
  time: string
  aircraft: string
  registration: string
  airline: string
  origin: string
  destination: string
  notes?: string
}

export interface Weather {
  condition: string
  wind: string
  visibility: string
}

export interface SpottingLog {
  id: string
  title: string
  airport: string
  airportName: string
  date: string
  weather: Weather
  duration: string
  totalAircraft: number
  uniqueTypes: number
  highlights: string[]
  observations: Observation[]
  photos: Photo[]
}

export const spottingLogs: SpottingLog[] = [
  {
    id: 'zbjj-2024-04-12',
    title: 'Beijing Capital Morning Session',
    airport: 'ZBAA',
    airportName: 'Beijing Capital International Airport',
    date: '2024-04-12',
    weather: {
      condition: 'Clear',
      wind: 'NW 8-12 mph',
      visibility: '10+ km'
    },
    duration: '6:00 AM - 11:30 AM',
    totalAircraft: 127,
    uniqueTypes: 34,
    highlights: [
      'First A350-1000 sighting for the season',
      'Rare Airbus A340-600 operations',
      'Multiple military transport flights',
      'Morning fog delayed several departures'
    ],
    observations: [
      {
        time: '06:15',
        aircraft: 'Boeing 777-300ER',
        registration: 'B-KPO',
        airline: 'Cathay Pacific',
        origin: 'VHHH',
        destination: 'ZBAA',
        notes: 'Arrival from Hong Kong'
      },
      {
        time: '06:32',
        aircraft: 'Airbus A380-800',
        registration: 'B-8001',
        airline: 'Air China',
        origin: 'ZBAA',
        destination: 'KJFK',
        notes: 'Historic aircraft, scheduled cargo flight'
      },
      {
        time: '07:05',
        aircraft: 'Boeing 787-9',
        registration: 'B-2088',
        airline: 'Air China',
        origin: 'ZBAA',
        destination: 'VHHH',
        notes: 'Morning service to Hong Kong'
      },
      {
        time: '07:45',
        aircraft: 'Airbus A350-1000',
        registration: 'B-10XG',
        airline: 'Air China',
        origin: 'ZBAA',
        destination: 'LFPG',
        notes: 'First A350-1000 observation this year'
      },
      {
        time: '08:20',
        aircraft: 'Boeing 737 MAX 8',
        registration: 'B-2078',
        airline: 'China Eastern',
        origin: 'ZSPD',
        destination: 'ZBAA',
        notes: 'New delivered aircraft, winglets visible'
      }
    ],
    photos: []
  },
  {
    id: 'zspd-2024-03-28',
    title: 'Shanghai Pudong Afternoon Session',
    airport: 'ZSPD',
    airportName: 'Shanghai Pudong International Airport',
    date: '2024-03-28',
    weather: {
      condition: 'Partly Cloudy',
      wind: 'SE 5-8 mph',
      visibility: '8 km'
    },
    duration: '2:00 PM - 7:00 PM',
    totalAircraft: 98,
    uniqueTypes: 28,
    highlights: [
      'Multiple international carriers in operation',
      'Emirates A380 operations resumed',
      'Qantas 787-9 special livery',
      'Good sunset photography conditions'
    ],
    observations: [
      {
        time: '14:30',
        aircraft: 'Airbus A380-800',
        registration: 'A6-EUV',
        airline: 'Emirates',
        origin: 'OMDB',
        destination: 'ZSPD',
        notes: 'A380 service resumed after suspension'
      },
      {
        time: '15:15',
        aircraft: 'Boeing 787-9',
        registration: 'VH-ZND',
        airline: 'Qantas',
        origin: 'YSSY',
        destination: 'ZSPD',
        notes: 'Indigenous Livery, special anniversary涂装'
      },
      {
        time: '16:45',
        aircraft: 'Airbus A350-900',
        registration: 'B-308M',
        airline: 'China Eastern',
        origin: 'ZSPD',
        destination: 'LFPG',
        notes: 'Shanghai-Paris service'
      },
      {
        time: '18:30',
        aircraft: 'Boeing 777-200LR',
        registration: 'N728LR',
        airline: 'United Airlines',
        origin: 'ZSPD',
        destination: 'KLAX',
        notes: 'Transpacific departure'
      }
    ],
    photos: []
  },
  {
    id: 'zgsz-2024-03-05',
    title: 'Shenzhen Airport Evening Session',
    airport: 'ZGSZ',
    airportName: 'Shenzhen Bao\'an International Airport',
    date: '2024-03-05',
    weather: {
      condition: 'Clear',
      wind: 'E 4-6 mph',
      visibility: '10+ km'
    },
    duration: '4:00 PM - 8:30 PM',
    totalAircraft: 76,
    uniqueTypes: 22,
    highlights: [
      'Excellent sunset conditions',
      'Multiple new airline routes observed',
      'Vintage Boeing 767 still in service',
      'Air show rehearsal spotted'
    ],
    observations: [
      {
        time: '16:45',
        aircraft: 'Boeing 767-300ER',
        registration: 'B-2493',
        airline: 'China Southern',
        origin: 'ZGSZ',
        destination: 'LFPG',
        notes: 'Classic aircraft, rare sight now'
      },
      {
        time: '17:30',
        aircraft: 'Airbus A321XLR',
        registration: 'B-32AM',
        airline: 'Shenzhen Airlines',
        origin: 'ZGSZ',
        destination: 'ZYHB',
        notes: 'New variant operation'
      },
      {
        time: '18:15',
        aircraft: 'Boeing 737-800',
        registration: 'B-1516',
        airline: 'Shenzhen Airlines',
        origin: 'ZBAA',
        destination: 'ZGSZ',
        notes: 'Evening arrival'
      }
    ],
    photos: []
  },
  {
    id: 'zuvip-2024-02-18',
    title: 'Chengdu Day Trip',
    airport: 'ZUUU',
    airportName: 'Chengdu Shuangliu International Airport',
    date: '2024-02-18',
    weather: {
      condition: 'Hazy',
      wind: 'Calm',
      visibility: '5 km'
    },
    duration: '9:00 AM - 3:00 PM',
    totalAircraft: 64,
    uniqueTypes: 19,
    highlights: [
      'Tibet Airlines new routes',
      'Military aviation activity',
      'Panda liveries observed',
      'Challenging visibility conditions'
    ],
    observations: [
      {
        time: '09:30',
        aircraft: 'Airbus A319-115',
        registration: 'B-6428',
        airline: 'Tibet Airlines',
        origin: 'ZUUU',
        destination: 'ZUUU',
        notes: 'High altitude operations specialist'
      },
      {
        time: '10:45',
        aircraft: 'Comac ARJ21-700',
        registration: 'B-0991',
        airline: 'Chengdu Airlines',
        origin: 'ZUUU',
        destination: 'ZJSY',
        notes: 'Chinese regional jet'
      },
      {
        time: '11:30',
        aircraft: 'Sichuan Airlines A330-300',
        registration: 'B-304Z',
        airline: 'Sichuan Airlines',
        origin: 'ZUUU',
        destination: 'ZSPD',
        notes: 'Panda livery aircraft'
      }
    ],
    photos: []
  }
]
