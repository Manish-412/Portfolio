# Premium Developer Portfolio

Modern, production-ready portfolio for AI/ML, full-stack, and research engineering. Built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, and Resend.

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- Lucide Icons
- Resend API (contact form)
- Optional Supabase integration

## Dependencies

- next, react, react-dom
- tailwindcss, tw-animate-css, class-variance-authority
- framer-motion, lucide-react
- react-hook-form, zod, @hookform/resolvers
- shadcn/ui, radix-ui
- resend

## Local Setup (Fedora Linux)

```bash
sudo dnf install -y nodejs
npm install
npm run dev
```

Open http://localhost:3000


## Resend Setup Guide

1. Create a Resend account and verify your domain.
2. Generate an API key.
3. Add `RESEND_API_KEY` to .env.local.
4. Set `CONTACT_EMAIL` to your inbox address.
5. Optionally set `RESEND_FROM_EMAIL` to a verified sender, for example `Portfolio <hello@yourdomain.com>`. If omitted, the app uses Resend's test sender.
5. Test with the contact form.

## Customization

- Update your name, links, and content in `lib/data.ts`.
- Replace `your-github` in the GitHub stats section.
- Swap the placeholder resume PDF in `public/`.

## Optional Supabase Setup

1. Create a Supabase project.
2. Add a `portfolio_messages` table.
3. Add keys to `.env.local`:

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

4. Update `app/api/contact/route.ts` if you want to persist submissions.

## Deployment (Vercel)

1. Push the repo to GitHub.
2. Import to Vercel.
3. Add environment variables in Vercel settings.
4. Deploy.

## VS Code Recommendations

- Tailwind CSS IntelliSense
- ESLint
- Prettier
- GitHub Copilot

## GitHub Copilot Workflow

- Prompt for a design goal before generating UI.
- Ask Copilot to update sections incrementally.
- Use the preview to validate animations and layout.

## Scripts

- `npm run dev` - local dev
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - lint
