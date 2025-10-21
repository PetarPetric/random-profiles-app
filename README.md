# Random Profiles Catalog App

A modern Nuxt 4 application that displays randomly generated person profiles with its own REST API. Built with TypeScript, Tailwind CSS, and Faker.js for generating realistic profile data.

## Features

- **Random Profile Generation**: Uses Faker.js to generate realistic person profiles with 13+ attributes
- **REST API**: Built-in server layer with endpoints for fetching profiles
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript support with Zod validation
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Loading States**: Smooth loading indicators and error handling
- **Avatar Integration**: TestingBot Avatar Generator for profile images

## Tech Stack

- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS
- **Data Generation**: Faker.js
- **Validation**: Zod
- **Language**: TypeScript
- **Images**: Nuxt Image (with TestingBot Avatar API)

## Project Structure

```
app/
├── components/          # Reusable Vue components
│   ├── ProfileCard.vue
│   ├── ProfileDetailView.vue
│   ├── LoadingSpinner.vue
│   └── ErrorMessage.vue
├── composables/         # Vue composables
│   └── useProfilesApi.ts
├── layouts/            # Layout components
│   └── default.vue
├── pages/              # File-based routing
│   ├── index.vue       # Home page
│   ├── search.vue      # Browse profiles
│   └── profiles/
│       └── [id].vue    # Profile details
└── app.vue             # Main app component

server/
├── api/                # API routes
│   └── profiles/
│       ├── index.ts    # GET /api/profiles
│       └── [id].get.ts # GET /api/profiles/:id
└── utils/
    └── profileGenerator.ts

shared/
└── types/
    └── profile.ts      # Zod schemas and TypeScript types
```

## API Endpoints

### GET /api/profiles
Returns a list of randomly generated profiles.

**Query Parameters:**
- `count` (optional): Number of profiles to generate (1-100, default: 6)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "avatarUrl": "https://api.testingbot.com/...",
      "phone": "+1-555-0123",
      "username": "johndoe",
      "birthDate": "1990-01-01",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zipCode": "10001",
        "country": "United States"
      },
      "jobTitle": "Software Engineer",
      "company": "Tech Corp",
      "bio": "Passionate developer...",
      "website": "https://johndoe.com"
    }
  ],
  "count": 6
}
```

### GET /api/profiles/:id
Returns detailed information for a single profile.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "John Doe",
    // ... all profile attributes
  }
}
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Pages

### Home Page (`/`)
- Displays 6 randomly generated profiles in a responsive grid
- Hero section with call-to-action
- SEO optimized with meta tags

### Search Page (`/search`)
- Shows exactly 10 randomly generated profiles
- Refresh button to load new profiles
- Responsive grid layout

### Profile Details (`/profiles/:id`)
- Full profile information with all 13+ attributes
- Contact information with clickable links
- Address section with formatted display
- Dynamic SEO meta based on profile data

## Components

### ProfileCard
Reusable card component for displaying profile previews in galleries.

### ProfileDetailView
Comprehensive view component for displaying full profile information.

### LoadingSpinner
Accessible loading indicator with ARIA labels.

### ErrorMessage
Error state component with retry functionality.

## Accessibility Features

- ARIA labels and roles
- Semantic HTML structure
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast color scheme

## SEO Features

- Dynamic meta tags
- Open Graph support
- Twitter Card integration
- Structured data
- Canonical URLs

## Contributing

This project was built as a demonstration of modern web development practices using AI-assisted development tools. Most of the UI related code was generated using AI tools and assistants as part of the project requirements.

## License

This project is for demonstration purposes only.