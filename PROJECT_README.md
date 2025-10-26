# Nexus Medical Centre Website

A modern, responsive website for Nexus Medical Centre built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
dr_sidra_nexus/
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx     # Reusable button component
│   │   └── Section.tsx    # Section container and header components
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header with mobile menu
│   │   └── Footer.tsx     # Site footer with contact info
│   └── sections/
│       ├── Hero.tsx       # Hero section with tagline
│       ├── Services.tsx   # Services showcase
│       ├── About.tsx      # About Dr. Sidra section
│       ├── WhyChooseUs.tsx    # Feature highlights
│       └── CallToAction.tsx   # CTA section
└── Context/
    └── nexus-medical-centre-context.md  # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: `#5DBDC4` (Teal) - Used for CTAs and accents
- **Dark**: `#2C3E50` - Text and dark backgrounds
- **Gray**: `#5A5A5A` - Secondary text
- **White**: Background and light sections

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font-semibold, large sizes
- **Body**: Regular weight, comfortable line-height

## 🧩 Component Architecture

### UI Components (`components/ui/`)
Reusable, presentational components:
- **Button**: Configurable button with variants (primary, outline, dark)
- **Section**: Container with consistent padding and max-width
- **SectionHeader**: Centered title and subtitle for sections

### Layout Components (`components/layout/`)
Site-wide navigation and structure:
- **Header**: Sticky navigation with mobile menu, responsive
- **Footer**: Contact information, hours, quick links

### Section Components (`components/sections/`)
Page-specific content sections:
- **Hero**: Full-screen hero with background image
- **Services**: Three service cards (VR Therapy, Aesthetics, Circumcision)
- **About**: Dr. Sidra Malik introduction with image
- **WhyChooseUs**: Three feature cards highlighting benefits
- **CallToAction**: Conversion-focused section with booking CTA

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Key Pages

### Home Page (`app/page.tsx`)
The main landing page composed of:
1. Hero - Welcome message with tagline
2. Services - Three main service offerings
3. About - Dr. Sidra's bio and approach
4. Why Choose Us - Key differentiators
5. Call to Action - Booking encouragement

### Future Pages
- `/nexus-therapy` - VR therapy details
- `/newborn-circumcision` - Circumcision services
- `/about` - Full about page
- `/contact` - Contact form and information

## 🎯 Business Information

**Nexus Medical Centre**
- **Doctor**: Dr. Sidra Malik (MBBS, BSc Hons, CFPC)
- **Address**: 9249 Kennedy Road, Unit 204, Unionville, ON, L3R 3Y5
- **Phone**: (365) 694-5255
- **Fax**: (365) 694-5256
- **Email**: info@nexusmedcentre.com

**Hours**:
- Monday - Friday: 10:00 AM - 3:00 PM
- Saturday - Sunday: Closed

## 🛠️ Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile menu for navigation on small screens
- Flexible grid layouts

## ♿ Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios

## 🔧 Configuration

### Tailwind CSS
Custom colors and configuration in `tailwind.config.ts` (if needed)

### Environment Variables
Create `.env.local` for:
- Booking system integration
- Analytics tracking
- Contact form endpoints

## 📈 SEO Optimization

- Metadata configured in `app/layout.tsx`
- Semantic HTML structure
- Target keywords integrated
- Open Graph tags (can be added)

## 🚧 Development Roadmap

### Phase 1 ✅
- [x] Component structure
- [x] Home page layout
- [x] Responsive design
- [x] Navigation system

### Phase 2 (Next)
- [ ] Service detail pages
- [ ] Contact form
- [ ] Booking integration
- [ ] About page

### Phase 3
- [ ] Blog functionality
- [ ] Patient testimonials
- [ ] FAQ section
- [ ] Google Maps integration

## 📝 Content Management

Content is currently hardcoded. Future options:
- Headless CMS (Sanity, Contentful)
- Markdown files
- Database integration

## 🤝 Contributing

This is a private project for Nexus Medical Centre.

## 📄 License

Proprietary - © 2024 Nexus Medical Centre

---

**Built with ❤️ for Dr. Sidra Malik**
