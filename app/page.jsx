export default function Page() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🏠 Zillax Main Page</h1>
      <p>Routing is now correct ⚡</p>
      <p style={{ color: "gray", marginTop: "20px" }}>
        Welcome to the Zillax Telegram Mini App. Connected and live.
      </p>
      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          borderRadius: "10px",
          background: "#0088cc",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => alert("Mini App interface loading...")}
      >
        🚀 Launch Zillax
      </button>
    </main>
  );
}
