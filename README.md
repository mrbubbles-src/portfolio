# 💻 mrbubbles-src Portfolio

This is my personal developer portfolio, built with **Next.js 15**, **App Router**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, and **react-hook-form**.

It showcases projects, skill stacks, contact capabilities, and SEO-ready pages with modern UI components and email delivery via Resend.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Forms**: `react-hook-form` with shadcn form integration
- **Email**: [Resend](https://resend.com) API with autoresponder
- **Hosting**: [Vercel](https://vercel.com)
- **SEO**: Dynamic metadata, Open Graph images via `@vercel/og`
- **Assets**: Favicon, social previews, and dark/light mode branding

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

Then open http://localhost:3000 in your browser.

```

---

## 📁 Project Structure

```
app/                      # Next.js App Router directory
├── actions/              # Server Actions (e.g. sendMail)
├── api/                  # API routes (e.g. OpenGraph image)
├── cv/                   # CV route (/cv) + Download
├── datenschutz/          # Datenschutz page
├── impressum/            # Impressum page
├── layout.tsx            # Root layout with ThemeProvider
├── loading.tsx           # Global custom loading UI
├── not-found.tsx         # Custom 404 page
├── page.tsx              # Root page (/)
├── globals.css           # Tailwind base styles and resets

components/               # UI & layout components
├── layout/               # Structured page sections
│   ├── about/            # About me card
│   ├── contact/          # Contact form + UI logic
│   ├── curriculum-vitae/ # CV display
│   ├── navbar/           # Navbar section
│   ├── footer/           # Footer section
│   ├── projects/         # Project cards, grids, images
│   └── stack/            # Tech stack display
├── ui/                   # Reusable base components (shadcn/ui)

context/                  # Theme context provider
data/                     # Project + stack config data
lib/                      # Utility functions

public/                   # Static assets (images, icons, etc.)
```

---

🌐 Live Demo

Visit the portfolio live at: https://mrbubbles-src.dev

---

✨ Features

• One-pager responsive layout

• CV viewer + download

• Custom shadcn cards

• Themed components with light/dark mode

• Auto email reply system

⸻

📄 License

MIT © mrbubbles-src
