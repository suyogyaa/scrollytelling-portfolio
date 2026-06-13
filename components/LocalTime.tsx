"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [mounted, setMounted] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setMounted(true);
    const updateDateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true }));
      setDateStr(now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }));
    };

    updateDateTime(); // Set immediately on mount
    const interval = setInterval(updateDateTime, 1000); // Update every second to catch minute rollovers precisely

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Avoid Next.js hydration mismatch errors

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none bg-white/[0.03] backdrop-blur-md border border-white/[0.08] px-4 py-2.5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-end transition-all">
      <div className="text-white/90 text-sm font-medium tracking-tight font-mono">{timeStr}</div>
      <div className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">{dateStr}</div>
    </div>
  );
}
