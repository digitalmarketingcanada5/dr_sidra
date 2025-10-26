# Component Architecture Guide

## Overview
This document provides a detailed breakdown of the component structure for the Nexus Medical Centre website. The architecture follows best practices with separation of concerns, reusability, and maintainability.

---

## Component Hierarchy

```
App (page.tsx)
├── Header (layout)
├── Main
│   ├── Hero (section)
│   ├── Services (section)
│   ├── About (section)
│   ├── WhyChooseUs (section)
│   └── CallToAction (section)
└── Footer (layout)
```

---

## Component Categories

### 1. UI Components (`components/ui/`)

#### **Button.tsx**
**Purpose**: Reusable button component with multiple variants

**Props**:
- `href` (string, required): Link destination
- `children` (ReactNode, required): Button content
- `variant` ('primary' | 'outline' | 'dark', optional): Visual style
- `className` (string, optional): Additional CSS classes
- `external` (boolean, optional): Opens link in new tab

**Variants**:
- **primary**: Teal background (#5DBDC4) - Main CTAs
- **outline**: Teal border - Secondary actions
- **dark**: Dark background (#2C3E50) - Alternative style

**Usage**:
```tsx
<Button href="/contact" variant="primary">
  Book Appointment
</Button>
```

---

#### **Section.tsx**
**Purpose**: Container component for page sections with consistent spacing

**Props**:
- `children` (ReactNode, required): Section content
- `className` (string, optional): Additional CSS classes
- `id` (string, optional): Section ID for anchor links
- `style` (CSSProperties, optional): Inline styles

**Features**:
- Consistent vertical padding (py-16 md:py-24)
- Max-width constraint (max-w-6xl)
- Horizontal padding for mobile

**Usage**:
```tsx
<Section className="bg-white" id="services">
  {/* Content */}
</Section>
```

---

#### **SectionHeader.tsx**
**Purpose**: Centered title and subtitle for sections

**Props**:
- `title` (string | ReactNode, required): Section heading
- `subtitle` (string | ReactNode, optional): Supporting text

**Usage**:
```tsx
<SectionHeader 
  title="Our Services"
  subtitle="Experience healthcare reimagined..."
/>
```

---

### 2. Layout Components (`components/layout/`)

#### **Header.tsx**
**Purpose**: Main navigation with responsive mobile menu

**Features**:
- Sticky/fixed positioning
- Desktop horizontal menu
- Mobile hamburger menu with slide-in drawer
- Call-to-action buttons
- Transparent overlay on hero

**Navigation Items**:
- Home
- Nexus Therapy
- Medical Aesthetics (external link)
- Newborn Circumcision
- About
- Contact

**State Management**:
- Uses `useState` for mobile menu toggle
- Client component ('use client')

**Responsive Behavior**:
- Mobile: Hamburger menu (< lg)
- Desktop: Horizontal navigation (≥ lg)

**Usage**: Auto-included in layout, no props needed

---

#### **Footer.tsx**
**Purpose**: Site footer with contact information and links

**Sections**:
1. **Logo & Tagline**: Brand identity
2. **Hours**: Business operating hours
3. **Quick Links**: Site navigation
4. **Contact Info**: Phone, email, address

**Features**:
- 4-column grid on desktop
- Stacked layout on mobile
- Icon integration (Lucide React)
- Copyright year dynamic

**Usage**: Auto-included in layout, no props needed

---

### 3. Section Components (`components/sections/`)

#### **Hero.tsx**
**Purpose**: Full-screen hero section with tagline and CTAs

**Features**:
- Full viewport height (h-screen)
- Background image with overlay
- Gradient overlay for text readability
- Two-button CTA layout

**Content**:
- Main headline: "Your Wellness, Perfected by Innovation"
- Descriptive paragraph
- Primary CTA: Book Appointment
- Secondary CTA: Learn More

**Styling**:
- Background image via inline style
- Text shadow for readability
- Responsive text sizes

---

#### **Services.tsx**
**Purpose**: Showcase three main services with cards

**Services Displayed**:
1. **Virtual Reality Exposure Therapy**
   - Icon: Brain
   - Link: `/nexus-therapy`
   
2. **Medical Aesthetics**
   - Icon: Sparkles
   - Link: External (thedermclinic.ca)
   
3. **Newborn Circumcision**
   - Icon: Heart
   - Link: `/newborn-circumcision`

**Features**:
- 3-column grid (responsive)
- Hover effects (scale, shadow)
- Image backgrounds
- Icon integration

**Card Structure**:
- Image with gradient overlay
- Icon badge
- Title + tagline
- Description text

---

#### **About.tsx**
**Purpose**: Introduction to Dr. Sidra Malik

**Layout**:
- Two-column grid
- Image on left
- Text content on right

**Content**:
- Professional photo
- Credentials (MBBS, BSc Hons, CFPC)
- Biography paragraphs
- Clinical philosophy
- CTA to full about page

**Features**:
- Image shadow effect
- Responsive stacking (mobile)
- Typography hierarchy

---

#### **WhyChooseUs.tsx**
**Purpose**: Highlight three key differentiators

**Features Highlighted**:
1. **Innovative Technology**
   - Icon: Lightbulb
   - VR therapy and advanced tools
   
2. **Personalized Care**
   - Icon: Target
   - Data-informed strategies
   
3. **Compassionate Excellence**
   - Icon: Zap
   - Medical precision + genuine care

**Styling**:
- Dark background (#2C3E50)
- White text
- Glass-morphism cards
- Hover effects

**Layout**:
- 3-column grid
- Centered section header
- Icon + Title + Description

---

#### **CallToAction.tsx**
**Purpose**: Conversion-focused section with booking encouragement

**Features**:
- Full-width background image
- Dark overlay for contrast
- Two-button layout
- Centered content

**CTAs**:
1. Primary: "Book Your Appointment" → /contact
2. Secondary: "Call (365) 694-5255" → tel: link

**Background**: Healthcare-related image with gradient overlay

---

## Design Patterns Used

### 1. **Composition Pattern**
- Small, focused components
- Composed into larger sections
- Easier testing and maintenance

### 2. **Props Pattern**
- TypeScript interfaces for type safety
- Optional props with defaults
- Flexible component API

### 3. **Client vs Server Components**
- Header: Client (interactive state)
- Most others: Server (static content)
- Optimal performance

### 4. **Responsive Design**
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Grid layouts adapt to screen size

---

## Styling Conventions

### Color Palette
- **Primary**: `#5DBDC4` (Teal)
- **Dark**: `#2C3E50` (Navy)
- **Text**: `#5A5A5A` (Gray)
- **Background**: `white` and `gray-50`

### Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid gaps: `gap-8` to `gap-16`

### Typography
- Headings: `font-semibold`, large sizes
- Body: Regular weight
- Line heights: `leading-relaxed`

### Transitions
- Duration: `duration-300`
- Hover states on interactive elements
- Smooth color/transform changes

---

## State Management

### Current State
- Local state only (useState in Header)
- No global state management needed yet

### Future Considerations
- Form state (React Hook Form)
- Booking system integration
- User preferences (theme, language)

---

## Accessibility Features

- Semantic HTML tags
- ARIA labels on buttons
- Keyboard navigation
- Sufficient color contrast
- Alt text on images
- Focus indicators

---

## Performance Optimizations

- Server components by default
- Client components only when needed
- Image optimization (Next.js Image)
- CSS-in-JS avoided (Tailwind only)
- Minimal JavaScript bundle

---

## Testing Strategy

### Unit Tests (Future)
- Button variants render correctly
- Section layouts maintain structure
- Props validation

### Integration Tests (Future)
- Navigation works across pages
- Mobile menu opens/closes
- CTAs link to correct pages

### E2E Tests (Future)
- Full user journeys
- Form submissions
- Booking flow

---

## Maintenance Guide

### Adding New Sections
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to sections index.ts
4. Update this document

### Modifying Existing Components
1. Check TypeScript interfaces
2. Update props if needed
3. Test responsive behavior
4. Verify accessibility

### Styling Changes
1. Use existing Tailwind classes
2. Maintain color palette
3. Keep spacing consistent
4. Test all breakpoints

---

## Common Tasks

### Change Primary Color
1. Update hex values in Button.tsx
2. Update in Services icons
3. Update in WhyChooseUs
4. Update hover states

### Add New Service
1. Edit services array in Services.tsx
2. Add icon from lucide-react
3. Create new service page
4. Update navigation

### Update Contact Info
1. Edit Footer.tsx contact section
2. Update Header phone link
3. Update metadata in layout.tsx

---

## File Structure Best Practices

```
components/
├── ui/              # Reusable UI primitives
├── layout/          # Site structure
├── sections/        # Page-specific sections
└── [future]
    ├── forms/       # Form components
    └── cards/       # Card variations
```

---

## Future Enhancements

### Planned Components
- [ ] ContactForm.tsx
- [ ] TestimonialCard.tsx
- [ ] ServiceDetail.tsx
- [ ] BlogCard.tsx
- [ ] FAQAccordion.tsx

### Planned Features
- [ ] Dark mode toggle
- [ ] Language switcher
- [ ] Animations (Framer Motion)
- [ ] Loading states
- [ ] Error boundaries

---

**Last Updated**: October 2024  
**Version**: 1.0  
**Maintainer**: Development Team
