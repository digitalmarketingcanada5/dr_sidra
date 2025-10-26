# 🚀 Quick Reference Cheat Sheet

## Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Package Management
npm install              # Install dependencies
npm install [package]    # Add new package
npm update              # Update packages
```

---

## Component Quick Reference

### Import Paths
```tsx
// UI Components
import { Button, Section, SectionHeader } from '@/components/ui';

// Layout Components  
import { Header, Footer } from '@/components/layout';

// Section Components
import { Hero, Services, About } from '@/components/sections';
```

### Button Usage
```tsx
// Primary button
<Button href="/contact" variant="primary">Book Now</Button>

// Outline button
<Button href="/about" variant="outline">Learn More</Button>

// Dark button
<Button href="/services" variant="dark">View Services</Button>

// External link
<Button href="https://external.com" external>Visit Site</Button>
```

### Section Usage
```tsx
// Basic section
<Section className="bg-white">
  <SectionHeader title="Title" subtitle="Subtitle" />
  {/* Content */}
</Section>

// Section with ID (for anchor links)
<Section id="services" className="bg-gray-50">
  {/* Content */}
</Section>

// Section with background image
<Section 
  className="text-white"
  style={{ backgroundImage: "url('image.jpg')" }}
>
  {/* Content */}
</Section>
```

---

## File Structure Map

```
dr_sidra_nexus/
├── 📱 app/
│   ├── page.tsx          → Home page
│   ├── layout.tsx        → Root layout + metadata
│   └── globals.css       → Global styles
│
├── 🧩 components/
│   ├── ui/              → Reusable UI
│   │   ├── Button.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── layout/          → Site structure
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── sections/        → Page sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── WhyChooseUs.tsx
│       ├── CallToAction.tsx
│       └── index.ts
│
├── 📄 Documentation/
│   ├── PROJECT_README.md
│   ├── COMPONENT_GUIDE.md
│   ├── SUMMARY.md
│   └── QUICK_REFERENCE.md (this file)
│
└── 📝 Context/
    └── nexus-medical-centre-context.md
```

---

## Color Palette

```tsx
// Primary Colors
#5DBDC4  // Teal - CTAs, links, accents
#2C3E50  // Navy - Text, dark backgrounds
#5A5A5A  // Gray - Secondary text

// Background Colors
#FFFFFF  // White
#F9FAFB  // gray-50 (light sections)

// Usage in Tailwind
className="bg-[#5DBDC4]"       // Teal background
className="text-[#2C3E50]"     // Navy text
className="border-[#5DBDC4]"   // Teal border
```

---

## Responsive Breakpoints

```tsx
// Mobile First Approach
className="text-base"           // Base (all sizes)
className="sm:text-lg"          // Small ≥ 640px
className="md:text-xl"          // Medium ≥ 768px
className="lg:text-2xl"         // Large ≥ 1024px

// Common Patterns
className="grid md:grid-cols-2 lg:grid-cols-3"
className="px-4 sm:px-6 lg:px-8"
className="text-2xl md:text-4xl lg:text-5xl"
```

---

## Tailwind Utility Patterns

### Layout
```tsx
className="max-w-6xl mx-auto"           // Centered container
className="grid md:grid-cols-2 gap-8"   // 2-column grid
className="flex items-center justify-between"
```

### Spacing
```tsx
className="py-16 md:py-24"    // Vertical padding (sections)
className="px-4 sm:px-6"      // Horizontal padding
className="space-y-4"         // Vertical spacing between children
className="gap-8"             // Grid/flex gap
```

### Typography
```tsx
className="text-4xl md:text-5xl font-semibold"
className="text-lg leading-relaxed"
className="font-medium tracking-tight"
```

### Colors & Effects
```tsx
className="bg-white text-[#2C3E50]"
className="hover:bg-[#5DBDC4] transition-colors duration-300"
className="shadow-lg hover:shadow-xl"
className="rounded-lg overflow-hidden"
```

---

## Content Updates

### Update Contact Info
**File**: `components/layout/Footer.tsx`
```tsx
// Line ~40-60: Contact section
<a href="tel:365-694-5255">...</a>
<a href="mailto:info@nexusmedcentre.com">...</a>
```

### Update Services
**File**: `components/sections/Services.tsx`
```tsx
// Line 8-38: services array
const services = [
  {
    title: 'Service Name',
    tagline: 'Tagline here',
    description: 'Description...',
    // ...
  },
];
```

### Update Hero Text
**File**: `components/sections/Hero.tsx`
```tsx
// Line 9-25: Hero content
<h1>Your Headline</h1>
<p>Your description...</p>
```

### Update Navigation
**File**: `components/layout/Header.tsx`
```tsx
// Line 7-14: navItems array
const navItems = [
  { name: 'Home', href: '/' },
  // Add/edit items...
];
```

---

## Icon Usage (Lucide React)

```tsx
// Import icons
import { Brain, Heart, Sparkles, Phone, Mail } from 'lucide-react';

// Use in component
<Brain size={24} className="text-[#5DBDC4]" />
<Phone size={18} className="mr-2" />
```

**Common Icons**:
- Brain, Heart, Sparkles (services)
- Phone, Mail, MapPin (contact)
- Menu, X (navigation)
- Lightbulb, Target, Zap (features)

**Icon Library**: https://lucide.dev

---

## TypeScript Interface Pattern

```tsx
// Define props interface
interface ComponentProps {
  title: string;              // Required
  subtitle?: string;          // Optional
  items: Array<string>;       // Array
  onClick: () => void;        // Function
  variant?: 'primary' | 'secondary';  // Union type
}

// Use in component
export const Component: React.FC<ComponentProps> = ({ 
  title, 
  subtitle,
  items,
  onClick,
  variant = 'primary' // Default value
}) => {
  return <div>{title}</div>;
};
```

---

## Adding a New Page

```bash
# 1. Create page file
touch app/new-page/page.tsx

# 2. Add content
cat > app/new-page/page.tsx << 'EOF'
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NewPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>New Page</h1>
      </main>
      <Footer />
    </div>
  );
}
EOF

# 3. Add to navigation (components/layout/Header.tsx)
# Update navItems array
```

---

## Git Workflow

```bash
# Initialize (if not done)
git init
git add .
git commit -m "Initial commit: Component refactoring"

# Daily workflow
git status                    # Check changes
git add .                     # Stage all changes
git commit -m "Description"   # Commit with message
git push origin main          # Push to remote

# Branch workflow
git checkout -b feature-name  # Create feature branch
# Make changes...
git commit -m "Feature done"
git checkout main
git merge feature-name
```

---

## Environment Variables

Create `.env.local`:
```bash
# API Keys
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
NEXT_PUBLIC_ANALYTICS_ID=your_id

# Contact Form
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/your_form

# Booking System
NEXT_PUBLIC_BOOKING_URL=https://booking.system.com
```

Use in code:
```tsx
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
```

---

## Debugging Tips

### Check TypeScript Errors
```bash
npx tsc --noEmit
```

### Check Component Rendering
```tsx
console.log('Component rendered', { props });
```

### React DevTools
- Install extension in browser
- Inspect component tree
- Check props and state

### Network Tab
- Check failed requests
- Verify API calls
- Check loaded resources

---

## Performance Optimization

```tsx
// Use next/image for images
import Image from 'next/image';
<Image src="/photo.jpg" alt="Photo" width={500} height={300} />

// Lazy load components
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('./HeavyComponent'));

// Prefetch links
import Link from 'next/link';
<Link href="/page" prefetch>Link</Link>
```

---

## Common Tailwind Classes

```tsx
// Spacing
p-4, py-8, px-4, m-4, space-y-4, gap-8

// Layout
flex, grid, items-center, justify-between, max-w-6xl

// Text
text-lg, font-semibold, leading-relaxed, tracking-tight

// Colors
bg-white, text-gray-600, border-gray-200

// Effects
shadow-lg, rounded-lg, transition-all, duration-300

// Responsive
md:grid-cols-2, lg:text-4xl, hidden lg:block

// Hover
hover:bg-blue-600, hover:scale-105
```

---

## Contact Information Quick Copy

```
Nexus Medical Centre
Dr. Sidra Malik, MBBS, BSc Hons, CFPC

📍 9249 Kennedy Road, Unit 204
   Unionville, ON, L3R 3Y5

📞 (365) 694-5255
📠 (365) 694-5256
📧 info@nexusmedcentre.com

⏰ Mon-Fri: 10:00 AM - 3:00 PM
   Sat-Sun: Closed
```

---

## Useful VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Error Translator
- Auto Rename Tag
- Path Intellisense

---

## Keyboard Shortcuts (VS Code)

```
Cmd/Ctrl + P       → Quick file open
Cmd/Ctrl + Shift + F → Search in files
Cmd/Ctrl + /       → Toggle comment
Cmd/Ctrl + D       → Select next occurrence
Option/Alt + ↑/↓   → Move line up/down
Cmd/Ctrl + `       → Toggle terminal
```

---

## Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Lucide Icons**: https://lucide.dev
- **React**: https://react.dev

---

**Print this page for quick reference! 📄**
