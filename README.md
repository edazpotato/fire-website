# Fire Website

Source Code of [Fire Website](https://fire.gaminggeek.dev)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

1. [NodeJS](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
2. [Yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management for JavaScript.

### Installing

1. Clone this repository

```bash
git clone https://github.com/FireDiscordBot/website.git fire-website
cd fire-website
```

2. Install dependencies with Yarn

```bash
yarn
```

3. Rename the file `default.env.development.local` to `.env.development.local` and add your tokens

```
NEXT_PUBLIC_DISCORD_CLIENT_ID=XXX
DISCORD_CLIENT_SECRET=XXX
NEXT_PUBLIC_STRIPE_API_PUBLIC_KEY=XXX
STRIPE_API_SECRET_KEY=XXX
JWT_SECRET=XXX
JWT_SIGNING_KEY=XXX
JWT_ENCRYPTION_KEY=XXX
```

- `NEXT_PUBLIC_DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` are available at
  the [Discord Developer Portal](https://discord.com/developers/)
- `NEXT_PUBLIC_STRIPE_API_PUBLIC_KEY` and `STRIPE_API_SECRET_KEY` are available at
  the [Stripe Dashboard](https://dashboard.stripe.com/dashboard)
- JWT secrets can be generated with the NPM package [node-jose-tools](https://www.npmjs.com/package/node-jose-tools)
  using the following commands:
    - `JWT_SECRET`: `openssl rand -base64 64`
    - `JWT_SIGNING_KEY`: `jose newkey -s 256 -t oct -a HS512`
    - `JWT_ENCRYPTION_KEY`: `jose newkey -s 256 -t oct -a A256GCM -u enc`

4. Run the development server with Yarn

```bash
yarn dev
```

## Built With

- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Material-UI](https://material-ui.com/) - React components for faster and easier web development.
- [Stripe](https://stripe.com/) - Payments infrastructure for the internet
