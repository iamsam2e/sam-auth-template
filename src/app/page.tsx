import Link from "next/link";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
           <header className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold">NextJS Auth Template</h1>
        <Nav />
      </header>
      <main className="flex-grow p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About This Template</h2>
          <p>
            This app uses Prisma, NextAuth and Tailwind to provide a robust
            authentication system with a clean, responsive design.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>User authentication with NextAuth</li>
            <li>Database integration with Prisma</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>TypeScript support</li>
          </ul>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
          <p>
            To use this template, clone the repository and follow the setup
            instructions in the README file.
          </p>
        </section>
      </main>
    </div>
  );
}
