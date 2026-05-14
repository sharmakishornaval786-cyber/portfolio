# My Portfolio 🎯

Yo! This is my personal portfolio website where I showcase my projects, skills, and publications. Built with Next.js and Tailwind CSS with smooth animations and dark mode support.

## What's in here? 

- **Responsive & Works Everywhere** - Looks good on phone, tablet, desktop - khi bhi karo
- **Dark Mode** - Eyes ke liye behtar, raat ko use karo
- **Cool Animations** - Scroll karo aur dekho fancy effects
- **Projects Section** - Meri saari projects showcase
- **Contact Form** - Direct message bhej sakte ho
- **Fast & Optimized** - Quick loading, proper images

## Quick Start

### Need to have
- Node.js 18+
- npm ya yarn

### Setup karo

1. **Clone karo:**
```bash
git clone https://github.com/sharmakishornaval786-cyber/portfolio.git
cd portfolio
```

2. **Dependencies install karo:**
```bash
npm install
```

3. **Environment variables set karo (.env.local mein):**
```
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Resend API key ke liye:
- Go to [Resend.com](https://resend.com)
- Signup karo (free)
- API Keys section mein new key generate karo
- Copy paste `.env.local` mein

### Development mein chalao

```bash
npm run dev
```

Fir [http://localhost:3000](http://localhost:3000) pe jaao

### Production ke liye build karo

```bash
npm run build
npm start
```

## Folder Structure

```
portfolio/
├── app/
│   ├── components/     # Reusable components
│   ├── sections/       # Pages (about, projects, contact)
│   ├── api/            # Backend endpoints
│   └── globals.css     # Styles
├── lib/
│   └── portfolio-data.ts    # All my content
├── public/
│   └── images/         # Photos
└── tailwind.config.ts  # Theme colors
```

## Customize Karo

### Apni Info Add Karo

`lib/portfolio-data.ts` mein:
- Projects add karo with description, tech stack, links
- Skills aur categories likho
- Apne baare mein bio likho

### Site Ko Personalize Karo

1. Title/description change: `app/layout.tsx`
2. Colors: `tailwind.config.ts` 
3. Content: Individual pages mein
4. Social links: `app/components/Footer.tsx`

### Projects Add Karo

`lib/portfolio-data.ts` mein `PROJECTS` array mein add karo:

```typescript
{
  id: "7",
  title: "Your Project",
  description: "Ek line description",
  longDescription: "Details",
  image: "/images/project.jpg",
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourname/project",
  live: "https://project.com",
}
```

## Email Setup

Contact form ke liye Resend use kar rahe hain:

1. Signup karo [Resend](https://resend.com) mein
2. API key copy karo aur `.env.local` mein paste karo
3. `app/api/contact/route.ts` mein apna email update karo
4. Test karo contact form se

## Deploy Karo

### Vercel mein (Best option)

1. Push GitHub pe
2. [Vercel](https://vercel.com) pe jaao
3. New Project → import repo
4. Environment variables add karo
5. Deploy button click

Done! Website live ho jayegi automatically.

### Technologies

- Next.js 15
- TypeScript  
- Tailwind CSS
- Motion.js (animations)
- Resend (emails)

## Todo ✅

- [ ] Apne projects add karo
- [ ] Images add karo `/public/images/` mein
- [ ] Resend API key setup karo
- [ ] Colors customize karo
- [ ] Deploy karo
- [ ] Custom domain lagao (optional)

That's it! Maza karo building! 🎉
