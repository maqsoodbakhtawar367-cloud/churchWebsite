"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLogo } from "@/src/components/atoms/NavLogo";
import { NavLink } from "@/src/components/molecules/NavLink";
import { cormorantTitle } from "@/src/lib/fonts";
import { SITE_HORIZONTAL_GUTTER } from "@/src/lib/siteGutters";
import { cn } from "@/src/lib/utils";
import type { NavbarProps } from "./Navbar.types";

const MENU_BG = "#5c6b3d";
const MENU_WATERMARK = "/menu_church_mark.png";

export function Navbar({
  links,
  donateLabel = "Donate",
  donateHref = "#donate",
  className,
  navProps,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] w-full min-w-0 py-3 sm:py-4",
        SITE_HORIZONTAL_GUTTER,
        className,
      )}
    >
      <nav
        className="relative z-[99] flex w-full min-w-0 max-w-[100%] flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0"
        aria-label="Primary"
        {...navProps}
      >
        <div className="flex w-full flex-shrink-0 items-center justify-between gap-3 lg:w-auto lg:justify-start">
          <NavLogo />
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[#1a1a1a] outline-offset-2 transition-colors hover:bg-black/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5a7a3a] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-7 w-7" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-7 w-7" strokeWidth={2} aria-hidden />
            )}
          </button>
        </div>

        <ul
          id={menuId}
          className={cn(
            "list-none transition-[transform,opacity] duration-200 ease-out lg:flex lg:flex-1 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-6 lg:gap-y-2 lg:opacity-100",
            "hidden lg:flex",
          )}
        >
          {links.map((item) => (
            <li key={item.id}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* <div className="hidden shrink-0 items-center justify-center lg:flex lg:justify-end">
          <Button href={donateHref} label={donateLabel} variant="primary" />
        </div> */}
      </nav>

      {/* Full-screen mobile menu (olive, centered links, cream Donate) */}
      {menuOpen ? (
        <div
          className="fixed inset-0 z-[200] flex flex-col lg:hidden"
          style={{ backgroundColor: MENU_BG }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <div className="absolute left-1/2 top-[34%] z-0 w-[min(280vw,245vmin,220rem)] max-w-none -translate-x-1/2 -translate-y-1/2 sm:top-[38%]">
              <Image
                src={MENU_WATERMARK}
                alt=""
                width={960}
                height={960}
                sizes="100vw"
                className="h-auto w-full max-h-[min(118vh,150vmin)] object-contain object-center opacity-[0.42]"
              />
            </div>
          </div>

          <div
            className={cn(
              "relative z-10 flex min-h-0 flex-1 flex-col px-5 sm:px-6",
              "pt-[max(0.75rem,env(safe-area-inset-top))]",
            )}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 pb-2">
              <NavLogo variant="onDark" onNavigate={closeMenu} />
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white outline-offset-2 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="h-8 w-8" strokeWidth={2} aria-hidden />
              </button>
            </div>

            <nav
              className="flex min-h-0 flex-1 flex-col items-center justify-center gap-10 py-6 sm:gap-12"
              aria-label="Mobile primary"
            >
              {links.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  prefetch={false}
                  className={cn(
                    cormorantTitle.className,
                    "text-center text-xl font-normal tracking-normal text-white underline decoration-white underline-offset-[0.35em] transition-opacity hover:opacity-90 sm:text-2xl",
                  )}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* <div
              className={cn(
                "shrink-0 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4",
                "flex justify-center",
              )}
            >
              <Link
                href={donateHref}
                prefetch={false}
                onClick={closeMenu}
                className={cn(
                  firaSans.className,
                  "inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-[#f5f0e4] px-10 py-3.5 text-base font-semibold text-[#5c6b3d] shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg",
                )}
              >
                {donateLabel}
              </Link>
            </div> */}
          </div>
        </div>
      ) : null}
    </header>
  );
}
