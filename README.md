# NextJS Auth Template

A robust authentication template built with Next.js, featuring React Server Components, NextAuth, PostgreSQL database integration, and Tailwind CSS for styling.

## Features

- Next.js App Router
- React Server Components
- NextAuth for authentication
- PostgreSQL database integration with Prisma ORM
- Tailwind CSS for responsive design
- TypeScript support
- User registration and sign-in functionality

## Getting Started

1. Clone the repository:
`git clone https://github.com/yourusername/nextjs-auth-template.git cd nextjs-auth-template` 

2. Install dependencies:
`npm install`

3. Set up your environment variables:
- Copy `.env.example` to `.env.local`
- Update the variables with your database and NextAuth configuration

4. Set up the database:
`npx prisma generate npx prisma db push`

I have setup some sample schema in the prisma folder and you're welcome to use this as an example or just remove it entirely

5. Run the development server:

`npm run dev` 


6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development Notes

- The project uses Railway for PostgreSQL hosting. Make sure to update the DATABASE_URL in your .env file with the correct credentials.
- bcryptjs is used for password hashing. Ensure you have @types/bcryptjs installed for TypeScript support.
- The main page layout is componentized with a separate Nav component for better organisation.
- Styled modules are used for component-specific styling, allowing for better CSS isolation.

## Deployment

Built with test deployment on Railway but you can use Netlify or Vercel if you wish - I used Railway's DB config tool and it worked out of the box.
