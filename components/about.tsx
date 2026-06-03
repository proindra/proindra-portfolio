"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-6">
  <p className="mb-3">
    I’m a passionate <span className="font-bold">full-stack developer</span> with experience building responsive, scalable applications using modern web frameworks.
  </p>

  <p className="mb-3">
    My core tech stack includes <span className="font-bold">Next.js, TypeScript, Tailwind CSS,</span> and <span className="font-bold">Node.js</span>. I enjoy creating clean UI experiences and solving real-world problems through code.
  </p>

  <p>
    Beyond development, I focus on continuous learning, better engineering practices, and delivering polished, production-ready projects.
  </p>
</div>










    </motion.section>
  );
}
