<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

# Portfolio Website Development

## Project Overview
Modern, responsive Next.js portfolio with dark mode, animations, and email contact integration.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Motion for React (animations)
- React Hook Form
- Resend (email)

## Key Features
✅ Responsive design (mobile-first)
✅ Dark/light mode toggle
✅ Smooth animations on scroll
✅ Project showcase with detail pages
✅ Contact form with email integration
✅ SEO optimized
✅ Performance optimized

## Development Commands
```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Important Files
- `lib/portfolio-data.ts` - All content (projects, skills, bio)
- `tailwind.config.ts` - Theme colors and animations
- `app/api/contact/route.ts` - Contact form email endpoint
- `.env.local` - Environment variables (API keys)

## Customization Checklist
- [ ] Update `PROJECTS` array in `lib/portfolio-data.ts`
- [ ] Update `SKILLS` and `BIO` in `lib/portfolio-data.ts`
- [ ] Add images to `public/images/`
- [ ] Update metadata in `app/layout.tsx`
- [ ] Set up Resend API key in `.env.local`
- [ ] Update email recipient in `app/api/contact/route.ts`
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update social links in `app/components/Footer.tsx`

## File Structure
```
app/
├── components/          # Reusable components
├── sections/           # Pages (about, projects, contact)
├── api/contact/        # Email API endpoint
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles

lib/
└── portfolio-data.ts   # All portfolio content

public/
└── images/             # Portfolio images
```

## Next Actions
1. Install dependencies: `npm install` (when Node.js available)
2. Customize `lib/portfolio-data.ts` with your projects
3. Add your images to `public/images/`
4. Get Resend API key and add to `.env.local`
5. Run `npm run dev` to start development
