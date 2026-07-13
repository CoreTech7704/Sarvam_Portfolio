import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-[#0a0f1e]">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0f1e] via-[#0d1424] to-[#0a0f1e]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Loader */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/30">
          <span className="text-white text-2xl font-semibold">SP</span>
        </div>

        {/* Spinner */}
        <LoaderCircle className="w-7 h-7 text-blue-400 animate-spin" />

        {/* Text */}
        <p className="text-sm tracking-widest uppercase text-gray-400">
          Loading Portfolio...
        </p>
      </div>
    </main>
  );
}