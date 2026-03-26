"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VitalsMonitor() {
  const [pulse, setPulse] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(75 + Math.floor(Math.random() * 10));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass p-4 rounded-2xl mt-4">

      <h3 className="text-sm text-gray-500 mb-2">LIVE VITALS</h3>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">{pulse}</p>
          <p className="text-xs text-gray-500">BPM</p>
        </div>

        {/* heartbeat animation */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-red-500 text-3xl"
        >
          ❤️
        </motion.div>
      </div>

      <div className="mt-3 h-10 bg-gray-100 rounded-lg overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="h-full w-1/3 bg-red-400"
        />
      </div>

    </div>
  );
}