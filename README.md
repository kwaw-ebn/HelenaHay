# HelenaHay

Phase 1 starter for Ghana retail and personal sourcing from China. The homepage offers WhatsApp inquiries for stock and sourcing, explains the video inspection process, and displays both contact numbers.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build. To deploy this starter, import the repository in Vercel and select the Next.js preset.

## Project structure

- `app/layout.tsx` defines site metadata and the shared HTML layout.
- `app/page.tsx` implements the public homepage.
- `app/globals.css` defines Tailwind and the responsive brand styles.
- `.env.example` names the Supabase connection settings for the next phase. The homepage runs without them.

## Application architecture

Next.js App Router serves the storefront. Server Actions and Route Handlers will validate requests and call Supabase using the authenticated user session where applicable. Supabase Postgres will store application records, Auth will identify administrators, and Storage will hold public catalog media and private inspection files. The planned inspection flow checks access before generating short-lived media URLs and records approval against the exact item and quote shown.

### Planned database relationships

| Area | Relationships |
| --- | --- |
| Access | Auth users have profiles. Role assignments link profiles to roles and permissions. |
| Catalog | Categories group products. Products have variants and media. Inventory belongs to variants. |
| Commerce | Carts have cart items referencing variants. Orders have order items with quantity and price snapshots. Shipment updates belong to orders. |
| Sourcing | Trips group sourcing requests. Requests have quotes and inspection videos. Approvals reference the quote and inspection reviewed. |
| Site operations | Testimonials, contact inquiries, settings, and audit logs have separate tables and policies. |

Copy `.env.example` to `.env.local` when implementing the Supabase connection. Use the project URL and publishable key. Keep privileged credentials server-side.

## Remaining implementation

Supabase migrations and policies, catalog and inventory, dynamic trip announcements, sourcing submission, cart and order persistence, tracking, admin access, private videos, approvals, and release testing are pending. Confirm actual inventory, imagery, trip dates, payment and delivery terms before enabling orders.
