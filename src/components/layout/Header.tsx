"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/50 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-border/30 bg-cream/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/logo_neaMutiro.png"
              alt="NEA-Mutiró"
              width={96}
              height={96}
              className="h-16 w-auto"
              quality={100}
              priority
            />
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-semibold tracking-wide"
              >
                <span className={active ? "text-brown" : "text-text-muted hover:text-brown transition-colors"}>
                  {item.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brown"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full p-2.5 text-text-muted hover:bg-cream-dark lg:block"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </motion.button>

          <button
            className="rounded-full p-2.5 text-text lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        className="overflow-hidden border-t border-border/30 lg:hidden"
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                isActive(item.href)
                  ? "bg-brown/10 text-brown"
                  : "text-text-muted hover:bg-cream-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
