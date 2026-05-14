# Naval's Portfolio 🚀

Yo! Welcome to my portfolio. This is where I showcase everything I'm working on - data analytics projects, publications, and cool stuff I build.

**[Check it out live →](https://portfoliomy-portfolio-2024.vercel.app)**

## What you'll find here

- 📊 **Data Analytics Projects** - Real projects where I turned raw data into insights
- 📰 **Research & Publications** - Papers on AI, 6G, and smart grids
- 🎨 **Interactive Portfolio** - Smooth animations, dark mode, works everywhere
- 💬 **Contact Section** - Hit me up directly through the site

## Stack I used

```
Next.js 15 + TypeScript + Tailwind CSS
Motion.js for animations + Resend for emails
Deployed on Vercel (auto-deploys when I push)
```

## Run it locally

```bash
# Clone
git clone https://github.com/sharmakishornaval786-cyber/portfolio.git
cd portfolio

# Install
npm install

# Set env (make .env.local)
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Start
npm run dev

# Go to http://localhost:3000
```

## Want to customize?

**Edit these files:**

| What | Where |
|------|-------|
| My projects, skills, bio | `lib/portfolio-data.ts` |
| Colors & theme | `tailwind.config.ts` |
| Site title/meta | `app/layout.tsx` |
| Social links | `app/components/Footer.tsx` |

**Add project example:**
```typescript
// In lib/portfolio-data.ts
{
  id: "your-id",
  title: "Cool Project",
  description: "What it does",
  image: "/images/pic.jpg",
  tech: ["React", "Python", "etc"],
  github: "link",
  live: "link"
}
```

## Email setup (for contact form)

1. Go to [resend.com](https://resend.com) → Sign up free
2. Get API key
3. Add to `.env.local` as `RESEND_API_KEY`
4. Update email in `app/api/contact/route.ts`
5. Done! Contact form works now

## Deploy it (Vercel rocks for this)

```bash
# Just push to GitHub
git push

# Vercel auto-deploys
# Your changes go live in ~1 min
```

Or manually:
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repo → add env vars → deploy
4. Done!

## File structure

```
portfolio/
├── app/
│   ├── components/     ← Buttons, cards, header, footer
│   ├── sections/       ← About, projects, contact pages
│   ├── api/            ← Contact form backend
│   └── globals.css     ← Global styles
├── lib/
│   └── portfolio-data.ts  ← All my content (edit this!)
├── public/
│   └── images/         ← My project images
└── tailwind.config.ts  ← Colors & animations
```

## Quick commands

```bash
npm run dev      # Local dev (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Check code quality
```

## Made with

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind** - Styling (way faster)
- **Motion** - Smooth animations on scroll
- **Resend** - Email delivery
- **Vercel** - Hosting (crazy fast)

## Browser support

Works on:
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile ✅

---

**Made by:** Naval Kishor Sharma
**Live at:** https://portfoliomy-portfolio-2024.vercel.app
**GitHub:** https://github.com/sharmakishornaval786-cyber/portfolio

Questions? Open an issue on GitHub or hit the contact form on the site!

