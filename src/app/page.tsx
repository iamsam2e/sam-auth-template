// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">NextJS Auth Template</h1>
      <h3 className="text-5xl font-sans mb-6">
        This app uses Prisma, NextAuth and Tailwind
      </h3>
      <div className="space-y-4">
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
        <Link
          href="/auth/register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
