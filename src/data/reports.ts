import { Photo } from './photos'

export interface Report {
  id: string
  title: string
  subtitle: string
  coverImage: string
  date: string
  location: string
  airport?: string
  content: string
  gallery: Photo[]
  authors?: string[]
}

export const reports: Report[] = [
  {
    id: 'riat-2024',
    title: 'Royal International Air Tattoo 2024',
    subtitle: 'RIAT 2024 - The World\'s Largest Military Airshow',
    coverImage: '/images/reports/riat24/A7-MAB.jpg',
    date: '2024-07-19',
    location: 'Fairford, UK',
    airport: 'EGVA',
    authors: ['Runfeng Jiang', 'Boyuan Zhang'],
    content: `The Royal International Air Tattoo (RIAT) 2024 at RAF Fairford brought together the world's finest military aviation in one spectacular event. Our team was on hand to capture the best of what the world's largest military airshow has to offer.

RAF Fairford, located in the Cotswolds, provides the perfect venue for this massive gathering of aviation enthusiasts from around the globe. With over 300 aircraft from 40+ countries on display and in the air, RIAT 2024 was truly a showcase of international cooperation and aviation excellence.

The flying display was nothing short of spectacular, with demonstration teams and solo displays from air forces across Europe, the Middle East, and beyond. From fast jets to large transports and helicopters, every type of military aircraft was represented.

Special highlights from RIAT 2024 included:
- The impressive display by the Qatar Emiri Air Force F-15QA
- The stunning performance of the Royal Moroccan Air Force F-16C/D
- The RAF's own Typhoon display with special markings
- International participants from across Europe and beyond

RIAT 2024 continues its tradition as the world's premier military airshow, bringing together air forces, industry, and enthusiasts in celebration of flight.`,
    gallery: [
      {
        id: 'riat-2024-1',
        url: '/images/reports/riat24/A7-MAB.jpg',
        thumbnail: '/images/reports/riat24/A7-MAB.jpg',
        title: 'Qatar Emiri Air Force F-15QA',
        aircraft: 'Boeing F-15QA Eagle',
        registration: 'QA538',
        airline: 'Qatar Emiri Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-2',
        url: '/images/reports/riat24/08-8018MoroccoF16.jpg',
        thumbnail: '/images/reports/riat24/08-8018MoroccoF16.jpg',
        title: 'Royal Moroccan Air Force F-16',
        aircraft: 'Lockheed Martin F-16C/D Fighting Falcon',
        registration: '08-8018',
        airline: 'Royal Moroccan Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-3',
        url: '/images/reports/riat24/31+06.jpg',
        thumbnail: '/images/reports/riat24/31+06.jpg',
        title: 'German Air Force Aircraft',
        aircraft: 'Various German Air Force',
        registration: '31+06',
        airline: 'German Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-4',
        url: '/images/reports/riat24/64-148141RC135USAF.jpg',
        thumbnail: '/images/reports/riat24/64-148141RC135USAF.jpg',
        title: 'USAF RC-135 Rivet Joint',
        aircraft: 'Boeing RC-135 Rivet Joint',
        registration: '64-14814',
        airline: 'United States Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-5',
        url: '/images/reports/riat24/86-0031.jpg',
        thumbnail: '/images/reports/riat24/86-0031.jpg',
        title: 'USAF B-52 Stratofortress',
        aircraft: 'Boeing B-52 Stratofortress',
        registration: '86-0031',
        airline: 'United States Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-6',
        url: '/images/reports/riat24/01522.jpg',
        thumbnail: '/images/reports/riat24/01522.jpg',
        title: 'Military Aircraft Display',
        aircraft: 'Various Military Aircraft',
        registration: '01-522',
        airline: 'Various',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-7',
        url: '/images/reports/riat24/LX-N90456.jpg',
        thumbnail: '/images/reports/riat24/LX-N90456.jpg',
        title: 'Luxembourg Military Transport',
        aircraft: 'Airbus A400M Atlas',
        registration: 'LX-N90456',
        airline: 'Luxembourg Armed Forces',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-8',
        url: '/images/reports/riat24/QA538Qatar F15.jpg',
        thumbnail: '/images/reports/riat24/QA538Qatar F15.jpg',
        title: 'Qatar F-15QA at RIAT 2024',
        aircraft: 'Boeing F-15QA Eagle',
        registration: 'QA538',
        airline: 'Qatar Emiri Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-9',
        url: '/images/reports/riat24/ZG913.jpg',
        thumbnail: '/images/reports/riat24/ZG913.jpg',
        title: 'RAF Aircraft',
        aircraft: 'RAF Military Aircraft',
        registration: 'ZG913',
        airline: 'Royal Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-10',
        url: '/images/reports/riat24/ZM712.jpg',
        thumbnail: '/images/reports/riat24/ZM712.jpg',
        title: 'RAF P-8 Poseidon',
        aircraft: 'Boeing P-8 Poseidon',
        registration: 'ZM712',
        airline: 'Royal Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      },
      {
        id: 'riat-2024-11',
        url: '/images/reports/riat24/ZZ666.jpg',
        thumbnail: '/images/reports/riat24/ZZ666.jpg',
        title: 'RAF Chinook',
        aircraft: 'Boeing Chinook',
        registration: 'ZZ666',
        airline: 'Royal Air Force',
        category: 'military',
        date: '2024-07-19',
        location: 'RAF Fairford',
        airport: 'EGVA'
      }
    ]
  },
  {
    id: 'langkawi-2025',
    title: 'Langkawi International Maritime and Aerospace Exhibition 2025',
    subtitle: 'LIMA 2025 - Southeast Asia\'s Premier Defence and Aerospace Showcase',
    coverImage: '/images/reports/langkawi2025/MalaysiaSU30specialliv.jpg',
    date: '2025-05-20',
    location: 'Langkawi, Malaysia',
    airport: 'WMKL',
    authors: ['Runfeng Jiang', 'Boyuan Zhang'],
    content: `Langkawi International Maritime and Aerospace Exhibition (LIMA) 2025 once again delivered an extraordinary showcase of aviation excellence in the tropical paradise of Malaysia. Our team traveled to the scenic island of Langkawi to capture one of Southeast Asia's most prestigious aerospace and defense exhibitions.

Held at the Langkawi International Airport, LIMA 2025 featured an impressive array of military and commercial aircraft from across the globe. The event brought together air forces and aerospace companies from over 40 countries, presenting the latest in aviation technology and defense capabilities.

The Royal Malaysian Air Force (RMAF) took center stage with their impressive fleet, including spectacular demonstrations by F/A-18D Hornets and Su-30MKM Flankers. The special livery on the Malaysian Su-30MKM was a particular highlight, drawing crowds and photographers alike.

Aerial displays were breathtaking, featuring precision aerobatics, high-speed passes, and dramatic flare deployments against the backdrop of the Andaman Sea. The golden hour lighting during sunset displays provided particularly spectacular photographic opportunities.

The static display area offered unprecedented access to military aircraft, allowing our photographers to capture detailed close-up shots. From fighter jets to transport aircraft and helicopters, the variety of equipment on display was impressive.

Special highlights included:
- The Royal Malaysian Air Force F/A-18D Hornet display with dramatic flare deployments
- The special livery Su-30MKM Flanker
- International participation from various air forces
- Maritime exhibition showcasing naval vessels alongside aircraft

LIMA 2025 continues to solidify its reputation as a must-attend event for aviation enthusiasts, defense professionals, and photographers. The combination of world-class aircraft, professional demonstrations, and the stunning island location creates an unforgettable experience.`,
    gallery: [
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
  }
]
