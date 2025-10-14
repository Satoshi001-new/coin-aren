"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function TestPage() {
  const [message, setMessage] = useState("Connecting to Supabase...");

  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.from("test_table").select("*").limit(1);
        if (error) throw error;
        setMessage("✅ Supabase connected successfully!");
      } catch (err) {
        setMessage("❌ Connection failed: " + err.message);
      }
    }

    checkConnection();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-xl">
      <h1>{message}</h1>
      <p className="text-gray-400 mt-4">If you see this, routing is working correctly.</p>
    </main>
  );
}
