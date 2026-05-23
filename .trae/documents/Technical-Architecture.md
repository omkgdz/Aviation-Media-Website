# AnDing Spotting - Technical Architecture Document

## 1. Architecture Design

```
┌─────────────────────────────────────────┐
│           Frontend (React + Vite)        │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐  │
│  │ Pages   │ │Components│ │  Store   │  │
│  │ Home    │ │ Gallery  │ │ Zustand  │  │
│  │ Gallery │ │ Cards    │ │          │  │
│  │ Reports │ │ Navbar   │ │          │  │
│  │ Reviews │ │ Footer   │ │          │  │
│  └─────────┘ └─────────┘ └──────────┘  │
└─────────────────────────────────────────┘
```

## 2. Technology Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3
- **State Management**: Zustand
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Package Manager**: npm (based on macOS environment)

## 3. Route Definitions

| Route | Page Component | Description |
|-------|----------------|-------------|
| `/` | HomePage | Main landing page with hero, team, featured content |
| `/gallery` | GalleryPage | Photo gallery with filtering and lightbox |
| `/reports` | ReportsPage | Airshow and open day reports listing |
| `/reports/:id` | ReportDetail | Individual report detail view |
| `/spotting-log` | SpottingLogPage | Airport-based spotting logs |
| `/spotting-log/:id` | SpottingLogDetail | Individual spotting session detail |

## 4. Component Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Main navigation
│   ├── Footer.tsx          # Footer with links
│   ├── HeroSection.tsx     # Hero with auto-rotating photos
│   ├── MemberCard.tsx      # Team member card with social links
│   ├── PhotoCard.tsx       # Gallery photo card
│   ├── PhotoGrid.tsx       # Masonry photo grid
│   ├── Lightbox.tsx        # Image lightbox viewer
│   ├── ReportCard.tsx      # Report preview card
│   ├── SpottingLogCard.tsx # Spotting log entry card
│   ├── ObservationTable.tsx # Aircraft observation table
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── GalleryPage.tsx
│   ├── ReportsPage.tsx
│   ├── ReportDetailPage.tsx
│   ├── SpottingLogPage.tsx
│   └── SpottingLogDetailPage.tsx
├── data/
│   ├── members.ts          # Team member data with social links
│   ├── photos.ts           # Gallery photos
│   ├── reports.ts          # Airshow reports
│   └── spottingLogs.ts     # Airport-based spotting logs
├── store/
│   └── useGalleryStore.ts  # Zustand store for gallery state
├── App.tsx
└── main.tsx
```

## 5. Data Models

### Team Member
```typescript
interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  instagram?: string;      // Instagram profile URL
  jetphotos?: string;      // JetPhotos profile URL
}
```

### Photo
```typescript
interface Photo {
  id: string;
  url: string;
  thumbnail: string;       // Optimized thumbnail version
  title: string;
  aircraft: string;        // Aircraft type/model
  registration: string;    // Tail number
  airline: string;         // Airline/operator
  category: 'commercial' | 'military' | 'general' | 'helicopter';
  date: string;
  location: string;
  airport: string;          // Airport code (ICAO/IATA)
}
```

### Report
```typescript
interface Report {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  date: string;
  location: string;
  airport?: string;        // Airport code if applicable
  content: string;
  gallery: Photo[];
}
```

### Spotting Log Entry
```typescript
interface SpottingLog {
  id: string;
  title: string;
  airport: string;          // Airport code (ICAO)
  airportName: string;      // Full airport name
  date: string;
  weather: {
    condition: string;     // Sunny, Cloudy, Rainy, etc.
    wind: string;          // Wind direction and speed
    visibility: string;    // Visibility conditions
  };
  duration: string;        // Session duration
  totalAircraft: number;   // Total aircraft observed
  uniqueTypes: number;     // Number of unique aircraft types
  highlights: string[];    // Notable sightings
  observations: Observation[];
  photos: Photo[];        // Photos taken during session
}

interface Observation {
  time: string;            // Time of observation
  aircraft: string;        // Aircraft type
  registration: string;    // Tail number
  airline: string;        // Airline/operator
  origin: string;         // Origin airport
  destination: string;    // Destination airport
  notes?: string;         // Additional notes
}
```

## 6. Key Technical Decisions

### State Management
- **Zustand** for gallery filter state (selected category, lightbox state)
- **React Router** for page navigation
- **Local component state** for UI interactions

### Performance Optimizations
- Image lazy loading with native `loading="lazy"`
- CSS-based animations for smooth 60fps
- Optimized Tailwind purge for minimal CSS bundle
- React.memo for expensive components
- Hero carousel with preloading next image
- Thumbnail generation for gallery performance

### Hero Carousel Implementation
```typescript
// Auto-rotating hero images
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, 8000); // 8 second rotation

  return () => clearInterval(interval);
}, [heroImages.length]);
```

### Member Social Links Implementation
```typescript
// Social link icons with hover effects
<div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
  {member.instagram && (
    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
      <InstagramIcon className="hover:text-pink-500" />
    </a>
  )}
  {member.jetphotos && (
    <a href={member.jetphotos} target="_blank" rel="noopener noreferrer">
      <PlaneIcon className="hover:text-blue-500" />
    </a>
  )}
</div>
```

### Responsive Strategy
- Tailwind breakpoint system: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Mobile-first media queries
- Fluid typography using clamp()

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for lightbox
