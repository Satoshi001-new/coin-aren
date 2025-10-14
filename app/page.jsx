"use client";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🏠 Zillax Main Page</h1>
      <p style={{ fontSize: "1.2rem" }}>Routing is now correct ⚡</p>
    </main>
  );
}
