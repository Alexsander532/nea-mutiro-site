"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
};

const variants = {
  primary: "bg-brown text-white shadow-lg shadow-brown/20 hover:bg-brown/90",
  outline: "border-2 border-green text-green hover:bg-green/5",
  ghost: "text-brown hover:bg-brown/10",
};

const sizes = {
  sm: "px-6 py-2.5 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link
        className={`inline-flex items-center gap-3 rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
        {icon && (
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
}
