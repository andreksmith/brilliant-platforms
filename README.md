# Brilliant Platforms

A minimal, cinematic website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Zod** for form validation
- Email subscription with file-based storage
- Contact form with rate limiting
- Responsive design with dark theme
- SEO optimized with metadata
- Optional Plausible Analytics integration

## Getting Started

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

## Project Structure

```
brilliant-platforms/
├── app/
│   ├── (legal)/          # Privacy and Terms pages
│   ├── api/              # API routes (subscribe, contact)
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── not-found.tsx     # 404 page
├── components/           # React components
├── lib/                  # Utilities and validators
└── public/               # Static assets
```

## Environment Variables

Create a `.env.local` file for optional configurations:

```bash
# Optional: Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

## Email Subscriptions

Email subscriptions are stored in `.data/subscribers.json` (gitignored). For production, consider integrating with a proper email service provider.

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
