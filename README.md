# My Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Motion animations. Featuring dark mode support, project showcase, and email contact integration.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Smooth Animations**: Beautiful scroll animations with Motion for React
- **Project Showcase**: Grid layout with individual project detail pages
- **Contact Form**: Fully functional contact form with Resend email integration
- **SEO Optimized**: Metadata, Open Graph tags, and structured data
- **Performance**: Optimized images, code splitting, and fast load times
- **TypeScript**: Full type safety throughout the application

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

To get a Resend API key:
1. Visit [Resend](https://resend.com)
2. Sign up for a free account
3. Go to API Keys and create a new key
4. Copy the key to your `.env.local` file

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── SkillBadge.tsx
│   ├── sections/            # Page sections/routes
│   │   ├── about/
│   │   ├── projects/
│   │   ├── projects/[id]/   # Dynamic project detail page
│   │   └── contact/
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── lib/
│   └── portfolio-data.ts    # Portfolio content and data
├── public/
│   └── images/              # Image assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies

```

## 🎯 Customization

### Update Your Information

Edit `lib/portfolio-data.ts` to add your:
- Projects with descriptions, tech stack, and links
- Skills and categories
- Bio and introduction

### Personalize the Site

1. **Update metadata** in `app/layout.tsx`
2. **Change colors** in `tailwind.config.ts`
3. **Modify content** in individual page files
4. **Update social links** in `app/components/Footer.tsx`

### Add Your Projects

Add projects to the `PROJECTS` array in `lib/portfolio-data.ts`:

```typescript
{
  id: "7",
  title: "Your Project Title",
  description: "Short description",
  longDescription: "Detailed description",
  image: "/images/your-project.jpg",
  tech: ["React", "Node.js", "PostgreSQL"],
  github: "https://github.com/yourname/yourproject",
  live: "https://yourproject.com",
  features: ["Feature 1", "Feature 2"],
  role: "Full Stack Developer",
  duration: "3 months",
}
```

## 📧 Email Configuration

The contact form uses Resend for email delivery:

1. **Get API Key**: Sign up at [Resend](https://resend.com) and get your free API key
2. **Update Email**: Change the recipient email in `app/api/contact/route.ts`:
   ```typescript
   to: "your-email@example.com", // Update this
   ```
3. **Test**: Use the contact form on your site to test email sending

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `NEXT_PUBLIC_SITE_URL`: Your site URL
5. Click "Deploy"

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean
- etc.

## 🛠 Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion for React](https://motion.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Email**: [Resend](https://resend.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚦 Performance

The site is optimized for performance:
- Lighthouse scores: 90+ on desktop and mobile
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS optimization with Tailwind CSS

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🎉 Next Steps

1. ✅ Replace placeholder content with your actual projects and information
2. ✅ Add your own images to `/public/images/`
3. ✅ Set up Resend API key for contact form
4. ✅ Customize colors and theme in `tailwind.config.ts`
5. ✅ Deploy to Vercel or your preferred hosting
6. ✅ Set up a custom domain (optional)

Happy coding! 🚀
