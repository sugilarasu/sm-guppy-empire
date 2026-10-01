# SM Guppy Empire

React + Vite + Tailwind starter for the SM Guppy Empire guppy-farm storefront.

## Run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Demo admin

`/admin`

Demo credentials:
- Username: `admin`
- Password: `admin123`

**Important:** this is a frontend demo authentication flow using sessionStorage. Before public production use, replace it with Firebase/Supabase/server authentication and server-side authorization. Never put real admin credentials in frontend code.

## Included

- Responsive aquarium-inspired storefront
- Product search and category filtering
- Product details modal
- Cart with quantity controls
- WhatsApp order generation
- Customer checkout
- PIN-based delivery-area lookup
- Delivery charge and free-delivery calculation
- Admin product management
- Admin delivery-area management
- Admin business settings
- LocalStorage persistence
- SEO meta tags
- Mobile navigation

## Production backend

Recommended next step:
- Firebase Auth or Supabase Auth
- Firestore/Postgres for products, orders, customers, reviews, gallery, settings and deliveryAreas
- Storage for images
- Security rules / server-side authorization
- Server-side order creation and validation
- Rate limiting and audit logging

The current frontend deliberately keeps product/settings/delivery data in localStorage so it runs immediately without a backend.
