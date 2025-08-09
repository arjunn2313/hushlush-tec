 "use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="position-fixed top-0 start-0 pe-none"
      style={{ zIndex: 9999 }}
      animate={{ x: mousePos.x - 25, y: mousePos.y - 25 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src="/assets/logo/logo.png"
        alt="Custom Cursor"
        width={50}
        height={50}
        priority
      />
    </motion.div>
  );
}
