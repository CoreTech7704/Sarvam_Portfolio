export default function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-linear-to-br from-[#0a0f1e] via-[#0d1424] to-[#0a0f1e] -z-10" />

      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}