import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed w-2.5 h-2.5 bg-[#333333] rounded-full z-[10001] pointer-events-none"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />
      <motion.div
        className="cursor-outline fixed w-10 h-10 border border-[#333333] rounded-full z-[10000] pointer-events-none bg-transparent opacity-70"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-15px',
          y: '-15px',
        }}
      />
    </>
  );
}
