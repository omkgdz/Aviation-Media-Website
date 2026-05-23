# AnDing Spotting - Aviation Media Website PRD

## 1. Product Overview

AnDing Spotting is an aviation media group website showcasing aviation photography, airshow coverage, and spotting reviews. The platform serves as a portfolio and news hub for aviation enthusiasts and photography experts.

- **Core Purpose**: Display high-quality aviation photography, share airshow experiences, and provide spotting reviews
- **Target Users**: Aviation enthusiasts, plane spotters, photography lovers, aviation industry professionals
- **Market Value**: Professional platform for aviation media content with strong visual identity

## 2. Core Features

### 2.1 User Roles
| Role | Registration | Core Permissions |
|------|--------------|------------------|
| Visitor | None required | Browse all public content |
| Admin | Authentication | Manage gallery, reports, and reviews |

### 2.2 Feature Module
1. **Home Page**: Hero section with rotating aircraft photos, member introduction with social links, featured content
2. **Photo Gallery**: Filterable aircraft photo collection with categories
3. **Airshow & Open Day Reports**: Event coverage with detailed narratives and photos
4. **Spotting Log**: Airport-based spotting logs with observations, aircraft movements, and statistics
5. **Navigation**: Multi-page structure with consistent header and footer

### Member Social Links
| Platform | Purpose | Icon |
|----------|---------|------|
| Instagram | Personal portfolio showcase | Camera icon |
| JetPhotos | Aviation photography platform | Airplane icon |

## 3. Core Process

### User Journey
```
Visitor → Home Page → Browse Gallery/Reports/Reviews → View Details → Return Home
```

### Content Structure Flow
```
Home Page
├── Navigation Bar
├── Hero Section (featured aircraft photo)
├── Team Members Section
├── Featured Content Preview
└── Footer

Gallery Page
├── Category Filters
├── Photo Grid
└── Lightbox Viewer

Reports Page
├── Report Cards (airshows/open days)
└── Individual Report Detail View

Reviews Page
├── Review Articles List
└── Individual Review Detail View
```

## 4. User Interface Design

### 4.1 Design Style

**Aesthetic Direction**: Modern Aviation Industrial - combining sleek aviation aesthetics with professional media presentation

**Color Palette**:
- Primary: Deep Navy (#0f172a)
- Secondary: Sky Blue (#0ea5e9)
- Accent: Sunset Orange (#f97316)
- Background: Dark Slate (#1e293b)
- Text: Pure White (#ffffff)
- Muted: Slate Gray (#64748b)

**Typography**:
- Headlines: "Outfit" - Bold, modern, aviation-inspired
- Body: "Inter" - Clean, professional readability
- Accent: "JetBrains Mono" - Technical, equipment details

**Layout**: Card-based grid system with generous spacing, full-width hero sections, responsive masonry for gallery

**Icon Style**: Lucide React icons - minimal, clean line icons

### 4.2 Page Design Overview

#### Home Page
| Module | Style | Colors | Animation |
|--------|-------|--------|-----------|
| Navigation | Fixed, transparent → solid | Navy to transparent | Scroll-triggered background change |
| Hero | Full viewport, random photos | Gradient overlay on photo | Auto-rotating images (8s interval), fade transitions |
| Members | Grid cards with social links | White text on dark cards | Staggered fade-in, social icons on hover |
| Featured | 3-column grid | Photo + overlay gradient | Hover scale effect |
| Footer | Minimal, links | Dark background | - |

#### Gallery Page
| Module | Style | Colors | Animation |
|--------|-------|--------|-----------|
| Filters | Horizontal pill buttons | Blue accent on active | Smooth transition |
| Photo Grid | Masonry layout, responsive | Hover overlay with airplane icon | Scale on hover, fade overlay |
| Lightbox | Full screen, dark overlay | Centered photo with navigation | Fade backdrop, slide transitions |

#### Reports Page
| Module | Style | Colors | Animation |
|--------|-------|--------|-----------|
| Report Cards | Large image + title overlay | Gradient text on photo | Hover lift effect |
| Detail View | Magazine-style layout | White text, generous whitespace | Scroll-triggered reveals |

#### Spotting Log Page
| Module | Style | Colors | Animation |
|--------|-------|--------|-----------|
| Log Entries | Airport-organized cards | Card with airport codes, dates | Hover lift effect |
| Detail View | Timeline layout | White text, airport data | Scroll-triggered reveals |
| Statistics | Stats dashboard per airport | Accent color for numbers | Count-up animation |

**Spotting Log Categories**:
- Airport-based spotting sessions
- Aircraft movement observations
- Registration/callsign tracking
- Weather conditions
- Session statistics (aircraft count, unique types)

### 4.3 Responsiveness
- Desktop-first approach (1920px design base)
- Tablet adaptation (768px breakpoint)
- Mobile optimization (375px breakpoint)
- Touch-friendly interactions on mobile

### 4.4 Visual Effects
- Subtle grain texture overlay on dark sections
- Gradient meshes for hero backgrounds
- Glass-morphism effects for cards on dark backgrounds
- Smooth scroll behavior throughout
- Parallax scrolling on hero sections

## 5. Technical Constraints

### Performance
- Lazy loading for gallery images
- Optimized image formats (WebP)
- Smooth 60fps animations
- Total bundle size < 500KB (excluding images)

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Color contrast ratio 4.5:1 minimum
