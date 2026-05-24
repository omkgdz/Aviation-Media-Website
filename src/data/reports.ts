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
        registration: 'M52-xx',
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
        registration: 'M45-xx',
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
        registration: 'M45-xx',
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
        registration: 'N/A',
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
        registration: 'N/A',
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
        title: 'Air Display',
        aircraft: 'Multiple Aircraft',
        registration: 'N/A',
        airline: 'Various',
        category: 'military',
        date: '2025-05-20',
        location: 'Langkawi International Airport',
        airport: 'WMKL'
      },
      {
        id: 'langkawi-2025-7',
        url: '/images/reports/langkawi2025/542c9e4a04aed64ec02e2ef172ef8055.jpg',
        thumbnail: '/images/reports/langkawi2025/542c9e4a04aed64ec02e2ef172ef8055.jpg',
        title: 'Aerial Display',
        aircraft: 'Aircraft Display',
        registration: 'N/A',
        airline: 'Various',
        category: 'military',
        date: '2025-05-20',
        location: 'Langkawi International Airport',
        airport: 'WMKL'
      },
      {
        id: 'langkawi-2025-8',
        url: '/images/reports/langkawi2025/86725cdc0e9fa00f1451d38630b1c1e4.jpg',
        thumbnail: '/images/reports/langkawi2025/86725cdc0e9fa00f1451d38630b1c1e4.jpg',
        title: 'Static Display',
        aircraft: 'Various Aircraft',
        registration: 'N/A',
        airline: 'Various',
        category: 'military',
        date: '2025-05-20',
        location: 'Langkawi International Airport',
        airport: 'WMKL'
      }
    ]
  },
  {
    id: 'airshow-2024',
    title: 'China International Aviation & Aerospace Exhibition 2024',
    subtitle: 'Zhuhai Airshow Coverage - Day 1 Highlights',
    coverImage: '/images/reports/airshow2024-cover.jpg',
    date: '2024-11-12',
    location: 'Zhuhai, Guangdong',
    airport: 'ZGYN',
    content: `The 2024 China International Aviation & Aerospace Exhibition in Zhuhai was nothing short of spectacular. Our team had the privilege of capturing the inaugural performances and静态展示.

From the latest military aircraft to cutting-edge commercial jets, this year's airshow showcased China's rapid advancement in aviation technology. The aerobatic teams delivered breathtaking performances against the clear autumn sky.

Key highlights included the debut flight of the new generation stealth fighter, impressive formation flying by the八一 aerobatic team, and the unveiling of the COMAC C919 to international audiences.

Our photographers worked tirelessly to capture every angle, from dramatic takeoff sequences to detailed shots of aircraft skin textures and markings. The variety of aircraft on display, from vintage warbirds to modern commercial giants, provided endless opportunities for stunning imagery.

The scale of this event continues to grow, with increased international participation and innovative aerospace technologies on display. We look forward to bringing you more coverage from Day 2 and beyond.`,
    gallery: []
  },
  {
    id: 'singapore-airshow-2024',
    title: 'Singapore Airshow 2024',
    subtitle: 'Asia\'s Premier Aviation Event',
    coverImage: '/images/reports/singapore2024-cover.jpg',
    date: '2024-02-20',
    location: 'Singapore Changi Exhibition Centre',
    airport: 'WSSS',
    content: `Singapore Airshow 2024 once again proved why it remains Asia's most important aviation gathering. The event featured major announcements, spectacular flying displays, and unprecedented access to both military and commercial aircraft.

Our team arrived early to capture the sunrise over the exhibition center, setting up at strategic locations around the airfield. The morning fog cleared just in time for the opening flying display, revealing a perfect blue sky for photography.

Highlights included the A350 demonstration flight, the Lockheed Martin showcase of F-35 variants, and Boeing's presence with their latest commercial offerings. The Republic of Singapore Air Force delivered an impressive aerial display with their F-16C/Ds and AH-64D Apache helicopters.

Behind the scenes, we were granted rare access to several aircraft hangars, capturing detailed shots of military aircraft up close. The opportunity to photograph the intricate details of fighter aircraft cockpits and engine nacelles was invaluable.

The business aviation segment was particularly vibrant, with numerous regional operators showcasing their latest aircraft. Corporate jets from Gulfstream, Bombardier, and Dassault drew significant attention from attendees.`,
    gallery: []
  },
  {
    id: 'beijing-open-day-2023',
    title: 'Beijing Capital Airport Open Day 2023',
    subtitle: 'Behind the Scenes at China\'s Busiest Hub',
    coverImage: '/images/reports/beijing2023-cover.jpg',
    date: '2023-10-15',
    location: 'Beijing Capital International Airport',
    airport: 'ZBAA',
    content: `The annual Beijing Capital Airport Open Day provided a unique opportunity for aviation enthusiasts and photographers to experience China's largest international gateway like never before.

This year's event featured expanded access to normally restricted areas, including the cargo terminal, maintenance hangars, and air traffic control tower. Our team was granted permission to photograph from the airside observation deck during active operations.

The highlight of the day was undoubtedly the exclusive aircraft viewing session, where attendees could walk up to parked aircraft and capture close-up shots of various airline fleets. The variety included aircraft from Air China, China Eastern, China Southern, and numerous international carriers.

We documented the complete operation cycle, from early morning pushback and departure sequences to late evening arrivals under the airport's powerful lighting system. The transition from day to night operations provided dramatic photographic opportunities.

The event also featured presentations from aviation professionals, including pilots, air traffic controllers, and aircraft engineers, offering insights into the complex operations that keep Beijing Capital running smoothly 24/7.`,
    gallery: []
  },
  {
    id: 'paris-airshow-2023',
    title: 'Paris Air Show 2023',
    subtitle: 'Le Bourget\'s Centennial Celebration',
    coverImage: '/images/reports/paris2023-cover.jpg',
    date: '2023-06-19',
    location: 'Paris-Le Bourget Airport',
    airport: 'LFPB',
    content: `The Paris Air Show 2023 marked a historic centennial celebration at Le Bourget, and our team was there to capture every moment of this legendary aviation event.

As one of the oldest and most prestigious aerospace exhibitions in the world, the Paris Air Show delivered an impressive showcase of technological innovation and aviation excellence. The 100th anniversary was commemorated with special displays featuring historic aircraft alongside modern marvels.

Flying displays were spectacular, with the Patrouille de France delivering a stunning performance in theirRafale jets, painting the sky with tricolor smoke trails. Airbus and Boeing demonstration teams showcased their latest commercial aircraft with precision flying.

We were granted exceptional access to the static display area, photographing aircraft from over 2,300 exhibitors representing 48 countries. The diversity of aircraft on display, from ultralights to massive cargo aircraft, demonstrated the breadth of modern aviation.

Night flights and evening entertainment added a new dimension to this year's show, with dramatic aerial displays against the evening sky creating unforgettable photographic opportunities.`,
    gallery: []
  }
]
