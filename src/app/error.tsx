"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0f1e] px-6">
      <div className="max-w-xl text-center">

        <h1 className="text-7xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-5 text-gray-400">
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={reset}
          className="mt-8 px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}