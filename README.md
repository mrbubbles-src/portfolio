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

```text
app/                      # Next.js App Router
├─ globals.css            # Tailwind base styles
├─ [lang]/                # Locale segment (de/en)
│  ├─ layout.tsx          # ThemeProvider, Navbar, Footer
│  ├─ loading.tsx         # Locale loading
│  ├─ not-found.tsx       # Locale 404
│  ├─ page.tsx            # /[lang] (landing)
│  ├─ cv/                 # /[lang]/cv (CV viewer)
│  │  └─ page.tsx
│  ├─ datenschutz/        # /[lang]/datenschutz (privacy)
│  │  └─ page.tsx
│  ├─ impressum/          # /[lang]/impressum (legal notice)
│  │  └─ page.tsx
│  └─ [...not-found]/     # Catch‑all → notFound()
│     └─ page.tsx
├─ actions/               # Server actions (e.g. sendMail)
├─ api/
   └─ og/route.tsx        # Dynamic OpenGraph image
components/               # Reusable Components
├─ layout/                # Page sections
│  ├─ about/
│  ├─ contact/
│  ├─ footer/
│  ├─ navbar/
│  ├─ projects/
│  └─ stack/
├─ ui/                    # shadcn base components
├─ context/               # Theme context
├─ data/                  # Project + tech data
├─ dictionaries/          # i18n JSON (en.json, de.json)
├─ lib/                   # Utility helpers
└─ public/                # Static assets (images, icons, PDFs etc.)
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
