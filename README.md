# Cool Books – Simple Invoicing

Mobile-first invoicing built for sole traders. This repo uses Next.js (App Router), TypeScript, Tailwind CSS, and Prisma + Postgres.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a local `.env`:
   ```bash
   cp .env.example .env
   ```
3. Run migrations and seed data:
   ```bash
   npm run prisma:migrate
   npm run prisma:seed
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Architecture

The UI is built with modular screens for Clients, Services, Bookings, and Invoices so Quotes and Expenses can be added later without refactors.

- `app/(dashboard)` contains the user-facing screens.
- `components` contains shared layout UI.
- `prisma` contains the database schema and seed data.

## Notes

- The booking calendar is optimized for touch.
- Invoice layouts include toggleable fields and PDF export entry points.
