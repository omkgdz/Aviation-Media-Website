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
