# 🎉 Elegant Wedding Invitation Platform - Comprehensive Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation & Setup](#installation--setup)
5. [Project Structure](#project-structure)
6. [Core Components](#core-components)
7. [Customization Guide](#customization-guide)
8. [Configuration Files](#configuration-files)
9. [Advanced Features](#advanced-features)
10. [Development Workflow](#development-workflow)
11. [Testing](#testing)
12. [Deployment](#deployment)
13. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Elegant Wedding Invitation** is a sophisticated, interactive digital invitation platform built with React and TypeScript. It showcases a modern approach to wedding invitations by combining elegant design with immersive user experience elements.

### Key Highlights
- **Interactive Envelope UI**: Video-based envelope animation that reveals the invitation
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Multi-Event Timeline**: Displays complex wedding schedules with theme-based styling
- **Dynamic Guest Personalization**: URL parameters enable personalized invitations for each guest
- **Ambient Visual Effects**: Theme-based animated backgrounds (Marigolds, Diya lights, etc.)
- **Audio Integration**: Background music with mute controls
- **Smooth Animations**: Framer Motion-powered transitions and effects

---

## Features

### 1. **Envelope Animation System**
- Interactive video playback on envelope opening
- Automatic timeout triggering after 10 seconds without interaction
- Fallback image display while video loads
- Smooth zoom-in transition when closing envelope

**Location**: [src/components/Envelope.tsx](src/components/Envelope.tsx)

**Key Features**:
- Video preloading with muted autoplay fallback
- Click-to-play interaction with audio sync
- Mute button integrated into the envelope interface
- 15-second automatic redirect to invitation card

### 2. **Interactive Invitation Card**
- Hero section with customizable logo and couple names
- Family blessing section with religious headers
- Dynamic guest name personalization via URL parameters
- Auto-scrolling on page load with smooth easing
- Responsive typography (mobile to desktop)

**Location**: [src/components/InvitationCard.tsx](src/components/InvitationCard.tsx)

**Key Features**:
- Guest details extraction from URL query parameters
- Animated scroll-to-action indicator
- Paper texture background effects
- Responsive footer with logo display
- Theme change handlers for dynamic backgrounds

### 3. **Event Timeline Component**
- Multi-event scheduling with times and venues
- Event-specific theme changes (Mayra, Bhakti, Wedding, Reception)
- Location mapping integration (Google Maps)
- Guest count personalization per event type
- Icon representations for each event type

**Location**: [src/components/EventTimeline.tsx](src/components/EventTimeline.tsx)

**Events Included**:
1. **Mandap Muhurat** (9:00 AM, March 8)
2. **Mameru** (10:30 AM, March 8)
3. **Haldi** (11:30 AM, March 8)
4. **Bhakti Sandhya** (7:30 PM, March 8)
5. **Jaan Aagman** (2:00 PM, March 10)
6. **Hast Melap** (4:05 PM, March 10)
7. **Reception** (6:30 PM onwards, March 10)

### 4. **Ambient Background System**
Multiple theme-based visual effects triggered by scroll position:

**Location**: [src/components/AmbientBackground.tsx](src/components/AmbientBackground.tsx)

**Themes**:

#### a) **Default Theme**
- Gradient background with subtle animations
- No particle effects (clean baseline)

#### b) **Mayra Theme** (Mandap/Mameru/Haldi Events)
- Floating marigold petals
- 25 particles with random rotation and drift
- Smooth downward animation with lateral movement
- Brightness and opacity effects

#### c) **Bhakti Theme** (Devotional Events)
- Rising diya (lamp) lights
- Purple gradient overlay
- 25 animated lights with glow effects
- Pulsing opacity and scale variations
- Enhanced mystical atmosphere

#### d) **Wedding Theme** (Marriage Ceremony)
- Cascading rose petals
- Red and pink color palette
- Romantic particle effects
- Gentle falling motion

#### e) **Reception Theme** (Celebration)
- Confetti effects
- Multi-colored particle burst
- Celebratory mood with faster animations

### 5. **Audio System**
- Background music integration (MP3 from Vercel Blob Storage)
- Global mute/unmute control
- Audio state synchronization across components
- Volume control set to 0.3 (30%)
- Autoplay triggered on user interaction

**Features**:
- Two independent audio elements (Envelope + Card)
- Cross-component audio state sharing via props
- Graceful autoplay fallback handling
- Browser autoplay policy compliance

### 6. **URL Parameter System for Guest Personalization**

The application accepts the following query parameters:

```
https://yoursite.com/?name=Guest_Name&guests=2&event=wedding&guests_mayra=2&guests_bhakti=1&guests_wedding=2&guests_reception=2
```

**Parameters**:
- `name`: Guest's name (use underscores for spaces, converted to spaces in display)
- `guests`: Default guest count (fallback for all events)
- `event`: Specific event filter (e.g., "wedding", "mayra", "reception", "bhakti")
- `guests_mayra`: Specific count for Mayra events (Mandap, Mameru, Haldi)
- `guests_bhakti`: Specific count for Bhakti Sandhya
- `guests_wedding`: Specific count for Wedding ceremony (Jaan Aagman, Hast Melap)
- `guests_reception`: Specific count for Reception

**Example Usage**:
```
?name=John_Doe&guests=2&guests_wedding=2&guests_reception=2
```

### 7. **Responsive Navigation**
- Mobile-first design approach
- Breakpoints: Mobile (default), Tablet (md), Desktop (lg, xl)
- Responsive typography scaling
- Touch-friendly interactive elements
- Optimized spacing for various screen sizes

### 8. **Toast Notifications**
- Integrated Sonner toast notifications
- Shadcn/ui Toast component
- Ready for success/error/warning messages

**Location**: 
- [src/components/ui/toast.tsx](src/components/ui/toast.tsx)
- [src/components/ui/sonner.tsx](src/components/ui/sonner.tsx)

---

## Tech Stack

### Frontend Framework
- **React 18.3.1**: UI library for building components
- **TypeScript 5.8.3**: Type safety and better development experience
- **Vite 5.4.19**: Fast build tool and development server
- **React Router DOM 6.30.1**: Client-side routing

### UI & Animation
- **Framer Motion 11.18.2**: Animation library for smooth transitions
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Tailwind CSS Animate 1.0.7**: Animation utilities for Tailwind
- **Shadcn/ui**: Accessible, beautiful component library
- **Radix UI**: Headless UI component library (25+ components)

### Form & Validation
- **React Hook Form 7.61.1**: Efficient form state management
- **Zod 3.25.76**: TypeScript-first schema validation
- **@hookform/resolvers 3.10.0**: Integration between Hook Form and Zod

### State Management & Data
- **TanStack React Query 5.83.0**: Server state management
- **next-themes 0.3.0**: Theme provider for dark mode support

### Icons & Media
- **Lucide React 0.462.0**: Beautiful icon library
- **react-day-picker 8.10.1**: Date picker component
- **input-otp 1.4.2**: OTP input component
- **Recharts 2.15.4**: Charting library

### UI Components
- **Embla Carousel React 8.6.0**: Carousel/slider component
- **Vaul 0.9.9**: Drawer component
- **cmdk 1.1.1**: Command/search component
- **Sonner 1.7.4**: Toast notifications
- **react-resizable-panels 2.1.9**: Resizable panel layouts

### Utilities
- **date-fns 3.6.0**: Date manipulation library
- **clsx 2.1.1**: Conditional classname utility
- **tailwind-merge 2.6.0**: Merging Tailwind CSS classes
- **class-variance-authority 0.7.1**: Type-safe variant management

### Development Tools
- **ESLint 9.32.0**: Code linting
- **Vitest 3.2.4**: Unit testing framework
- **@testing-library/react 16.0.0**: React component testing
- **@testing-library/jest-dom 6.6.0**: Testing DOM utilities
- **TypeScript ESLint 8.38.0**: TypeScript linting
- **Lovable Tagger 1.1.13**: Component metadata tagging

### Build & Config
- **autoprefixer 10.4.21**: CSS vendor prefixing
- **postcss 8.5.6**: CSS transformation tool
- **bun**: Package manager (instead of npm)

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher) or Bun
- npm/yarn or Bun package manager
- Git for version control

### Step 1: Clone the Repository
```bash
git clone <YOUR_GIT_URL>
cd elegant-invite
```

### Step 2: Install Dependencies
```bash
# Using npm
npm install

# OR using Bun (recommended for this project)
bun install
```

### Step 3: Start Development Server
```bash
npm run dev
# OR
bun run dev
```

The application will be available at `http://localhost:8080`

### Step 4: Build for Production
```bash
npm run build
# OR
bun run build
```

Output files will be in the `dist/` directory.

### Step 5: Preview Production Build
```bash
npm run preview
# OR
bun run preview
```

### Additional Commands
```bash
# Linting with ESLint
npm run lint

# Run tests
npm run test

# Watch mode for tests
npm run test:watch

# Development build with logging
npm run build:dev
```

---

## Project Structure

### Directory Hierarchy

```
elegant-invite/
├── public/                          # Static assets
│   ├── hero-background.jpg         # Hero section background image
│   ├── logo_sj.png                 # Wedding couple logo
│   ├── marigold.png                # Mayra theme petal effect
│   ├── madamandup.png              # Mandap event image
│   ├── mameru.jpg                  # Mameru event image
│   ├── haldi.jpg                   # Haldi event image
│   ├── bhakti.jpg                  # Bhakti Sandhya event image
│   ├── baaraat.jpg                 # Jaan Aagman event image
│   ├── wedding.jpg                 # Hast Melap event image
│   └── reception.jpg               # Reception event image
│
├── src/
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   ├── vite-env.d.ts               # Vite environment type definitions
│   ├── App.css                     # Global app styles
│   ├── index.css                   # Global index styles
│   │
│   ├── components/                 # Reusable components
│   │   ├── Envelope.tsx            # Email envelope animation component
│   │   ├── InvitationCard.tsx      # Main invitation display component
│   │   ├── EventTimeline.tsx       # Event schedule timeline component
│   │   ├── AmbientBackground.tsx   # Theme-based animated backgrounds
│   │   ├── NavLink.tsx             # Navigation link component
│   │   └── ui/                     # Shadcn UI components (25+ pre-built)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx           # Toast notifications
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notification hook
│   │
│   ├── lib/                        # Utility functions
│   │   └── utils.ts                # Common utility functions
│   │
│   ├── pages/                      # Page components
│   │   ├── Index.tsx               # Home page (main invitation view)
│   │   └── NotFound.tsx            # 404 page
│   │
│   └── test/                       # Test files
│       ├── example.test.ts         # Example test
│       └── setup.ts                # Test setup configuration
│
├── Configuration Files
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   ├── vite.config.ts              # Vite build configuration
│   ├── vitest.config.ts            # Vitest testing configuration
│   ├── tsconfig.json               # TypeScript configuration
│   ├── tsconfig.app.json           # App-specific TypeScript config
│   ├── tsconfig.node.json          # Node-specific TypeScript config
│   ├── eslint.config.js            # ESLint configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── components.json             # Component registry
│   └── package.json                # Project dependencies
│
├── Root Files
│   ├── .gitignore                  # Git ignore rules
│   ├── index.html                  # HTML entry point
│   ├── bun.lockb                   # Bun lock file (dependency versions)
│   ├── README.md                   # Original README
│   └── README_COMPREHENSIVE.md     # This file!
```

---

## Core Components

### 1. **App.tsx** - Root Component

```typescript
// Purpose: Set up providers and routing
// Responsibilities:
// - Configure React Query client
// - Provide Tooltip context
// - Set up Toast notifications
// - Define application routes
```

**Key Setup**:
- QueryClientProvider for server state
- TooltipProvider for hover information
- Sonner and custom Toaster for notifications
- BrowserRouter for client-side navigation

### 2. **pages/Index.tsx** - Home Page

```typescript
// State Management:
// - showEnvelope: boolean - Controls envelope visibility
// - isMuted: boolean - Audio mute state
// - audioRef: React.RefObject<HTMLAudioElement>

// Key Effects:
// - Audio mute state synchronization
// - Component lifecycle management
```

**Features**:
- Manages envelope and invitation card visibility
- Controls audio playback globally
- Coordinates between Envelope and InvitationCard components
- Implements AnimatePresence for smooth transitions

**Flow**:
1. User sees Envelope component
2. User clicks or waits 15 seconds
3. Envelope closes with zoom animation
4. InvitationCard fades in
5. Background music starts playing

### 3. **components/Envelope.tsx** - Interactive Envelope

**Props**:
```typescript
interface EnvelopeProps {
  onOpen: () => void;           // Callback when envelope is opened
  isMuted?: boolean;            // Audio mute state
  onMuteChange?: (muted: boolean) => void;  // Mute state updater
  audioRef?: React.RefObject<HTMLAudioElement>;  // Audio element reference
}
```

**State**:
- `videoReady`: Tracks if video has started playing
- `hasClicked`: Tracks if user has interacted

**Timers**:
- 10 seconds: Trigger autoplay (if no user click)
- 15 seconds: Force redirect to invitation card

**Interactions**:
- Click anywhere to play video
- Mute button (bottom-right corner)
- Video autoplay on timeout
- Audio playback on click

**Styling**:
- Full-screen overlay (z-50)
- Smooth opacity transition
- Mute button with Framer Motion hover effects

### 4. **components/InvitationCard.tsx** - Main Invitation

**Props**:
```typescript
interface InvitationCardProps {
  isVisible: boolean;
  isMuted?: boolean;
  onMuteChange?: (muted: boolean) => void;
  audioRef?: React.RefObject<HTMLAudioElement>;
}
```

**State Management**:
```typescript
guestDetails = {
  name: string;           // Guest name from URL
  guests: string;         // Default guest count
  event: string;          // Specific event filter
  guestsMayra: string;    // Mayra events count
  guestsBhakti: string;   // Bhakti event count
  guestsWedding: string;  // Wedding events count
  guestsReception: string; // Reception count
};
```

**Key Features**:

#### URL Parameter Parsing
```typescript
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  // Extracts all guest details from URL
  // Converts underscores to spaces in names
}, []);
```

#### Auto-Scroll Animation
```typescript
useEffect(() => {
  // Triggered 5 seconds after card becomes visible
  // Scrolls 30% down viewport in 2.5 seconds
  // Uses cubic ease-in-out for smooth motion
  // Respects user scroll (doesn't override if already scrolled)
}, [isVisible]);
```

#### Theme Handling
```typescript
// Detects scroll position and changes ambient background
// Triggers theme transitions for different event sections
onScroll={(e) => {
  if (scrollTop < 500) setCurrentTheme('default');
}}
```

**Sections**:
1. **Hero Section**: Logo and couple names
2. **Family Blessing**: Religious text and invitation message
3. **Timeline Section**: Event schedule and details
4. **Additional Details**: Gift message and sign-off
5. **Footer**: Logo and names

### 5. **components/EventTimeline.tsx** - Event Schedule

**Props**:
```typescript
interface EventTimelineProps {
  filteredEventName?: string;  // Filter for specific events
  guestCounts?: {
    global: string;            // Fallback count
    mayra: string;             // Mandap/Mameru/Haldi
    bhakti: string;            // Bhakti Sandhya
    wedding: string;           // Jaan Aagman/Hast Melap
    reception: string;         // Reception
  };
  onThemeChange: (theme: ThemeType) => void;  // Update ambient background
}
```

**Event Structure**:
```typescript
interface TimelineEvent {
  id: number;
  title: string;         // Event name
  time: string;          // Event time
  date: string;          // Event date
  description: string;   // Event details
  icon: React.ReactNode; // SVG icon
  venue?: string;        // Event location
  style?: 'horizontal' | 'vertical';  // Layout style
  image?: string;        // Event photo
  mapsUrl?: string;      // Google Maps link
}
```

**Event Filtering Logic**:
- Searches for keywords in event titles
- Supports multiple filter keywords per event type
- Examples: "wedding", "lagan", "shaadi" all trigger wedding events

**Theme Mapping**:
- Mandap/Mameru → 'mayra' theme
- Bhakti Sandhya → 'bhakti' theme
- Jaan Aagman/Hast Melap → 'wedding' theme
- Reception → 'reception' theme

**Display Variations**:
- Horizontal layout for earlier events (morning events)
- Vertical layout for evening/main events
- Event images with animations
- Click-to-open venue maps

### 6. **components/AmbientBackground.tsx** - Animated Backgrounds

**Type Definition**:
```typescript
type ThemeType = 'default' | 'mayra' | 'bhakti' | 'wedding' | 'reception';
```

**Theme Details**:

#### Default Theme
- Gradient background
- Minimal animation
- Clean, elegant appearance

#### Mayra Theme (Wedding Preparations)
```typescript
// 25 floating marigold petals
// Animation: Downward motion with rotation and drift
// Duration: 5-10 seconds per petal
// Effects: Opacity changes, slight horizontal movement
// Spacing: Random starting positions
```

#### Bhakti Theme (Devotional)
```typescript
// 25 rising diya lights
// Color: Amber/golden with glow shadow
// Animation: Upward motion with opacity fade
// Gradient overlay: Purple-tinted
// Effects: Scale pulsing, lateral drift
// Symbolism: Spiritual atmosphere
```

#### Wedding Theme (Marriage)
```typescript
// Rose petal cascade
// Color palette: Red and pink tones
// Animation: Falling motion with gentle swaying
// Effects: Scale and opacity variations
// Mood: Romantic and celebratory
```

#### Reception Theme (Celebration)
```typescript
// Confetti burst effect
// Colors: Multi-colored particles
// Animation: Rapid falling with rotation
// Effects: Bounce and scatter movements
// Mood: Festive and joyful
```

**Implementation**:
```typescript
<motion.img
  src="/marigold.png"
  animate={{
    y: ["0vh", "105vh"],          // Fall from top to bottom
    rotate: [start, start + 360], // Full rotation
    x: [0, drift]                 // Lateral movement
  }}
  transition={{
    duration: duration,
    repeat: Infinity,
    ease: "linear",
    delay: delay
  }}
/>
```

---

## Customization Guide

### 1. **Change Wedding Couple Names**

**File**: [src/components/InvitationCard.tsx](src/components/InvitationCard.tsx#L129-L148)

```typescript
// Current: Saloni & Jay
// Change these sections:

<span className="text-6xl md:text-8xl lg:text-[9rem]">
  YOUR_NAME_HERE
</span>

<h2 className="font-imperial text-7xl md:text-7xl text-gold">
  BRIDE_NAME_HERE
</h2>

<h2 className="font-imperial text-7xl md:text-7xl text-gold">
  GROOM_NAME_HERE
</h2>
```

### 2. **Update Event Schedule**

**File**: [src/components/EventTimeline.tsx](src/components/EventTimeline.tsx#L12-L126)

**Add New Event**:
```typescript
const events: TimelineEvent[] = [
  // ... existing events
  {
    id: 8,
    title: "Your Event Name",
    time: "HH:MM AM/PM",
    date: "Day, Date Month",
    description: "Event description",
    venue: "Location details",
    image: "/event-image.jpg",
    mapsUrl: "https://maps.google.com/?q=location",
    icon: <YourIcon />,
    style: "vertical"
  }
];
```

### 3. **Customize Colors and Fonts**

**File**: [tailwind.config.ts](tailwind.config.ts)

**Update Font Families**:
```typescript
fontFamily: {
  display: ["Your Font Name", "serif"],
  elegant: ["Script Font", "cursive"],
  body: ["Body Font", "serif"],
  imperial: ["Imperial Font", "cursive"],
}
```

**Update Custom Colors**:
```typescript
colors: {
  gold: "#D4AF37",           // Accent color
  sage: "#9CAF88",          // Secondary color
  cream: {
    light: "#FDFBF7",       // Background
    dark: "#F5E6D3"         // Variant
  }
}
```

### 4. **Modify Audio**

**File**: [src/pages/Index.tsx](src/pages/Index.tsx#L5)

```typescript
const backgroundAudio = "https://your-audio-url.mp3";
```

**File**: [src/components/Envelope.tsx](src/components/Envelope.tsx#L7)

```typescript
const envelopeVideo = "https://your-video-url.mp4";
const envelopeImage = "https://your-image-url.png";
```

### 5. **Update Images and Logos**

Place images in `public/` directory:
- `hero-background.jpg`: Main background
- `logo_sj.png`: Wedding logo
- `marigold.png`: Mayra theme petals
- Event images: `mandamandup.png`, `mameru.jpg`, etc.

### 6. **Change Theme Colors**

**For Mayra Theme** (Marigold effect):
```typescript
// src/components/AmbientBackground.tsx - Update marigold.png
// Or change opacity: 0.9 to different value
style={{ opacity: 0.8 }}
```

**For Bhakti Theme** (Diya lights):
```typescript
// src/components/AmbientBackground.tsx - Update colors
className="absolute rounded-full bg-amber-200"
boxShadow: "0 0 15px 2px rgba(251, 191, 36, 0.6)"
```

### 7. **Modify Guest Details Display**

**File**: [src/components/InvitationCard.tsx](src/components/InvitationCard.tsx#L81-L93)

```typescript
const getMainGuestText = (count: string) => {
  if (!count) return null;
  const c = count.toLowerCase();
  if (c === 'family') return <span className="...">Custom Text</span>;
  // Add more conditions for different guest count formats
};
```

### 8. **Update Religious/Cultural Text**

**File**: [src/components/InvitationCard.tsx](src/components/InvitationCard.tsx#L233)

```typescript
<motion.p className="font-display font-bold text-sage-dark/80 text-xs md:text-sm tracking-widest mb-8 leading-loose uppercase">
  || Shree Ganeshay Namah || {/* Update text here */}
</motion.p>
```

### 9. **Change Family Names**

**File**: [src/components/InvitationCard.tsx](src/components/InvitationCard.tsx#L240-L290)

Update all family member names in the invitation text section.

### 10. **Customize Scroll Behavior**

**File**: [src/components/InvitationCard.tsx](src/components/InvitationCard.tsx#L47-L75)

```typescript
// Auto-scroll delay (currently 5000ms = 5 seconds)
const timer = setTimeout(() => { ... }, 5000);

// Scroll distance (currently 30% down viewport)
const target = window.innerHeight * 0.3;

// Animation duration (currently 2500ms = 2.5 seconds)
const duration = 2500;

// Easing function: cubic ease-in-out
const ease = progress < 0.5 ? 4 * progress * progress * progress : ...;
```

---

## Configuration Files

### 1. **tailwind.config.ts** - Styling Configuration

**Custom Theme Colors**:
```typescript
sage: "#9CAF88"           // Primary green
gold: "#D4AF37"          // Accent gold
cream: {
  light: "#FDFBF7",      // Light background
  dark: "#F5E6D3"        // Darker shade
}
red-700: "#B91C1C"       // Gold accent red
```

**Custom Fonts**:
```typescript
display: "Cinzel"                    // Headers
elegant: "Pinyon Script"             // Decorative
body: "Cormorant Garamond"          // Body text
italianno: "Italianno"              // Script style
imperial: "Imperial Script"         // Large decorative
```

**Extended Utilities**:
- Animation classes
- Custom spacing
- Border radius
- Box shadows

### 2. **vite.config.ts** - Build Configuration

```typescript
// Server settings
port: 8080                          // Development server port
hmr: { overlay: false }            // Disable error overlay

// Plugins
react()                            // React Fast Refresh
componentTagger()                  // Lovable component metadata

// Aliases
"@": "./src"                       // Path alias for imports
```

**Usage in Code**:
```typescript
// Instead of:
import Component from '../../../components/Envelope';

// Use:
import Component from '@/components/Envelope';
```

### 3. **vitest.config.ts** - Testing Configuration

```typescript
// JSDOM environment for DOM testing
environment: "jsdom"

// Test coverage
coverage: { ... }

// Include/exclude patterns
include: ["src/**/*.test.ts"]
```

### 4. **tsconfig.json** - TypeScript Configuration

**Key Settings**:
```typescript
target: "ES2020"                   // Modern JavaScript
useDefineForClassFields: true      // Class field support
lib: ["ES2020", "DOM", "DOM.Iterable"]
jsx: "react-jsx"                   // React 18 JSX
moduleResolution: "bundler"        // Module resolution

// Path aliases
paths: {
  "@/*": ["./src/*"]
}
```

### 5. **eslint.config.js** - Code Quality

**Configured For**:
- TypeScript linting
- React best practices
- React Hooks rules
- React Refresh compatibility

**Run Linter**:
```bash
npm run lint
```

### 6. **postcss.config.js** - CSS Processing

**Plugins**:
- `tailwindcss`: Tailwind CSS processing
- `autoprefixer`: Vendor prefixes for browser compatibility

### 7. **components.json** - Component Registry

Shadcn/ui component configuration for CLI tools.

---

## Advanced Features

### 1. **Video Preloading Strategy**

The Envelope component implements a smart video loading approach:

```typescript
// Fallback image shown while video loads
<AnimatePresence>
  {!videoReady && (
    <motion.div className="absolute inset-0 z-10">
      <img src={envelopeImage} alt="Loading..." />
    </motion.div>
  )}
</AnimatePresence>

// Video triggers 'onPlaying' when it starts
onPlaying={handleVideoPlaying}
```

### 2. **Scroll-Based Theme Transitions**

InvitationCard detects scroll position and changes themes:

```typescript
onScroll={(e) => {
  const target = e.target as HTMLElement;
  if (target.scrollTop < 500) {
    if (currentTheme !== 'default') setCurrentTheme('default');
  }
}}
```

This triggers different ambient backgrounds based on scroll depth.

### 3. **Event Filtering Algorithm**

EventTimeline uses keyword matching for event filtering:

```typescript
const isWedding = searchStr.includes("wedding") || 
                  searchStr.includes("lagan") || 
                  searchStr.includes("shaadi");

// Similar patterns for other event types
// Matches event titles against filter patterns
```

### 4. **Responsive Typography System**

Uses Tailwind breakpoints for size scaling:

```typescript
className="text-6xl md:text-8xl lg:text-[9rem]"
// Starts at 6xl, scales to 8xl on tablet, 9rem on desktop
```

### 5. **Particle Animation Engine**

AmbientBackground creates dynamic particle effects:

```typescript
{petals.map((petal) => (
  <motion.img
    animate={{
      y: ["0vh", "105vh"],              // Vertical motion
      rotate: [start, start + 360],    // Rotation
      x: [0, Math.random() * 60 - 30]  // Horizontal drift
    }}
    transition={{
      duration: petal.duration,         // 5-10 seconds
      repeat: Infinity,
      delay: petal.delay
    }}
  />
))}
```

### 6. **Audio State Synchronization**

Audio state is managed at the Index.tsx level and passed down:

```typescript
const [isMuted, setIsMuted] = useState(false);

// Pass to both components
<Envelope 
  isMuted={isMuted} 
  onMuteChange={setIsMuted} 
  audioRef={audioRef}
/>

<InvitationCard 
  isMuted={isMuted} 
  onMuteChange={setIsMuted} 
  audioRef={audioRef}
/>
```

### 7. **Framer Motion Animation Patterns**

**Initial + Animate Pattern**:
```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1, delay: 1.2 }}
>
```

**WhileInView Pattern** (scroll-triggered):
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

**Animate Pattern** (continuous):
```typescript
animate={{ 
  opacity: [0.6, 1, 0.6],
  y: [0, 10, 0]
}}
transition={{ 
  duration: 5, 
  repeat: Infinity 
}}
```

---

## Development Workflow

### 1. **Setting Up Local Development**

```bash
# Clone repository
git clone <url>
cd elegant-invite

# Install dependencies
bun install

# Start dev server with hot reload
bun run dev
```

The application automatically reloads when files are changed.

### 2. **File Structure for New Features**

**Component Creation**:
```
src/components/
├── MyNewComponent.tsx      # Component logic
├── MyNewComponent.module.css # Scoped styles (optional)
└── index.ts               # Export (optional)
```

**Page Creation**:
```
src/pages/
└── MyNewPage.tsx          # Full page component
```

Then update `App.tsx` with new route:
```typescript
<Route path="/my-page" element={<MyNewPage />} />
```

### 3. **TypeScript Best Practices**

**Define Component Props**:
```typescript
interface MyComponentProps {
  title: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClose, children }) => {
  // Component implementation
};
```

**Type State Variables**:
```typescript
const [count, setCount] = useState<number>(0);
const [data, setData] = useState<DataType | null>(null);
```

### 4. **Testing Files**

**Creating Tests**:
```typescript
// src/test/my-component.test.ts
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeDefined();
  });
});
```

**Run Tests**:
```bash
npm run test          # Run once
npm run test:watch    # Watch mode
```

### 5. **Code Organization Tips**

- **Keep components small**: Each component should have a single responsibility
- **Use TypeScript**: Define interfaces for all props
- **Avoid prop drilling**: Use context or state management for deep props
- **Style consistently**: Use Tailwind classes, avoid inline styles
- **Comment complex logic**: Explain why, not what
- **Name descriptively**: Use clear, descriptive names for variables and functions

### 6. **Git Workflow**

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Add my feature"

# Push to remote
git push origin feature/my-feature

# Create pull request on GitHub
```

---

## Testing

### 1. **Unit Testing Setup**

Vitest is configured with JSDOM environment for DOM testing:

```typescript
// vitest.config.ts
{
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"]
  }
}
```

### 2. **Test File Structure**

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Component Name', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interactions', () => {
    // Another test
  });
});
```

### 3. **Testing React Components**

```typescript
import MyComponent from '@/components/MyComponent';

it('renders with props', () => {
  render(<MyComponent title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeDefined();
});

it('handles click events', () => {
  const handleClick = vitest.fn();
  render(<MyComponent onClick={handleClick} />);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

### 4. **Common Testing Patterns**

**Testing Forms**:
```typescript
it('submits form data', async () => {
  render(<MyForm />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  // Assert results
});
```

**Testing Async Operations**:
```typescript
it('loads data asynchronously', async () => {
  render(<DataComponent />);
  expect(screen.getByText(/loading/i)).toBeDefined();
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeDefined();
  });
});
```

---

## Deployment

### 1. **Production Build**

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### 2. **Deployment Platforms**

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
# Configure in package.json
"homepage": "https://username.github.io/repo-name"

# Deploy script
npm run build
# Commit dist/ to gh-pages branch
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### 3. **Environment Variables**

Create `.env.local`:
```
VITE_API_URL=https://api.example.com
VITE_AUDIO_URL=https://audio.example.com/music.mp3
```

Use in code:
```typescript
const audioUrl = import.meta.env.VITE_AUDIO_URL;
```

### 4. **Performance Optimization**

**Image Optimization**:
- Use WebP format when possible
- Compress images (use tools like TinyPNG)
- Use responsive images with `<picture>` or `srcset`

**Code Splitting**:
- Vite automatically splits code by route
- Lazy load heavy components:
```typescript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

**Bundle Analysis**:
```bash
npm install -D rollup-plugin-visualizer
# Add to vite.config.ts to analyze bundle size
```

### 5. **SEO and Meta Tags**

Update `index.html`:
```html
<title>Saloni & Jay's Wedding</title>
<meta name="description" content="You're invited to celebrate the wedding of...">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
```

---

## Troubleshooting

### 1. **Video Not Playing**

**Issue**: Envelope video doesn't play

**Solutions**:
- Check video format (MP4 recommended)
- Ensure video is hosted on CORS-enabled server
- Check browser console for errors
- Verify `envelopeVideo` URL is correct

```typescript
// Add error handling
onError={(e) => {
  console.error('Video error:', e);
  setVideoReady(true); // Show fallback
}}
```

### 2. **Audio Not Working**

**Issue**: Background music doesn't play

**Solutions**:
- Check audio file format (MP3 recommended)
- Verify `backgroundAudio` URL
- Check browser autoplay policy (requires user interaction)
- Ensure audio element is not muted in HTML

```typescript
// Force unmute on interaction
handleClick={() => {
  if (audioRef.current) {
    audioRef.current.muted = false;
    audioRef.current.play();
  }
}}
```

### 3. **Animations Stuttering**

**Issue**: Framer Motion animations lag

**Solutions**:
- Reduce number of animated elements
- Use `will-change` CSS for heavy animations
- Profile in browser DevTools
- Consider using GPU acceleration:

```typescript
style={{
  transform: "translateZ(0)", // Force GPU
  willChange: "transform"
}}
```

### 4. **Mobile Responsiveness Issues**

**Issue**: Layout breaks on mobile

**Solutions**:
- Test on real devices (not just DevTools)
- Check viewport meta tag in `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
- Use Tailwind responsive classes
- Test breakpoints: sm (640px), md (768px), lg (1024px)

### 5. **URL Parameter Not Working**

**Issue**: Guest details don't appear

**Solutions**:
- Check URL format: `?name=John_Doe&guests=2`
- Use underscores for spaces (converted to spaces in code)
- Check browser console for errors
- Verify parameter names match code:
  - `name`
  - `guests`
  - `event`
  - `guests_mayra`
  - `guests_bhakti`
  - `guests_wedding`
  - `guests_reception`

### 6. **Build Errors**

**Issue**: `npm run build` fails

**Solutions**:
- Clear node_modules: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npx tsc --noEmit`
- Check for unused variables: `npm run lint`
- Clear Vite cache: `rm -rf dist .vite`

### 7. **Theme Not Changing**

**Issue**: Ambient background doesn't change

**Solutions**:
- Verify `onThemeChange` callback is working
- Check scroll event listener
- Ensure EventTimeline passes correct theme
- Debug with console logs:

```typescript
onThemeChange={(theme) => {
  console.log('Theme changed to:', theme);
  setCurrentTheme(theme);
}}
```

### 8. **Performance Issues**

**Issue**: App loads slowly or feels sluggish

**Solutions**:
- Use Lighthouse in DevTools for audit
- Optimize images (use WebP, compress)
- Lazy load components
- Check network requests for large files
- Profile JavaScript execution

**Check Bundle Size**:
```bash
npm install -D @vite/plugin-visualizer
# Then analyze the dist folder
```

### 9. **Styling Not Applied**

**Issue**: Tailwind classes don't work

**Solutions**:
- Ensure class names are in `content` array of `tailwind.config.ts`
- Don't use dynamic class names (Tailwind can't find them):
```typescript
// ❌ Wrong
const className = `text-${color}-500`;

// ✅ Right
const className = color === 'red' ? 'text-red-500' : 'text-blue-500';
```
- Clear Tailwind cache: `rm -rf node_modules/.vite`

### 10. **TypeScript Errors**

**Issue**: Type checking fails

**Solutions**:
- Check type definitions match reality
- Use `unknown` before narrowing types
- Enable strict mode in `tsconfig.json`:

```typescript
"strict": true,
"strictNullChecks": true,
"strictFunctionTypes": true
```

---

## Additional Resources

### Documentation Links
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Vite Documentation](https://vitejs.dev)

### Useful Tools
- [Color Palette Generator](https://coolors.co)
- [Font Pairing Guide](https://www.fontpairings.com)
- [SVG Icon Library](https://heroicons.com)
- [CSS Animation Tool](https://www.animista.net)
- [Performance Checker](https://web.dev/measure)

### Community & Support
- GitHub Issues for bug reports
- Discussions for feature requests
- Stack Overflow for quick questions

---

## Version History

- **v0.0.0** - Initial project setup with Vite, React, TypeScript
- Core components implemented (Envelope, InvitationCard, EventTimeline)
- Full animation system with Framer Motion
- Shadcn/ui component library integrated
- Responsive design with Tailwind CSS
- Audio and video integration
- Testing setup with Vitest

---

## License

This project is private and created for personal use. All rights reserved.

---

## Credits

Created with:
- **Vite**: Fast build tool
- **React**: UI library
- **Tailwind CSS**: Styling framework
- **Framer Motion**: Animation library
- **Shadcn/ui**: Component library
- **Lovable**: Development platform

---

## Contact & Support

For questions or customization requests, please contact the project maintainers.

---

**Last Updated**: February 22, 2026
**Project Status**: Active Development
**Maintainers**: Wedding Coordination Team

