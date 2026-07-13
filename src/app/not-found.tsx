import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0f1e] px-6">
      <div className="max-w-xl text-center">

        <h1 className="text-8xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-3xl text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400">
          Looks like this page doesn&apos;t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex mt-10 px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-105 transition"
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}