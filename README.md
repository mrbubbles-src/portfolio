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

app/
├── actions/
│   └── send-mails.ts
├── api/
│   └── og/route.tsx
├── cv/page.tsx
├── datenschutz/page.tsx
├── impressum/page.tsx
├── layout.tsx
├── loading.tsx
├── not-found.tsx
├── manifest.json
components/
├── layout/
│   ├── About.tsx
│   ├── CV.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectImage.tsx
│   └── StackGrid.tsx
├── ui/
│   ├── badge.tsx
│   ├── button.tsx
│   ├── dropdown-menu.tsx
│   ├── form.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── navigation-menu.tsx
│   ├── sonner.tsx
│   ├── textarea.tsx
│   └── theme-toggle.tsx
context/
└── theme-provider.tsx
data/
├── projects.ts
└── stack.ts
lib/
└── utils.ts
public/
├── blur/
└── screenshots/
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
