"use client"

import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Header() {

  return (
      <header className="flex items-center justify-between mx-5 my-5">
          <Link href="/">Portfolio - Swann Gillé</Link>
          <div className="flex items-center gap-8">
              <Link href="/me">A propos de moi</Link>
              <Link href="/">Parcours</Link>
              <Link href="/">Compétences</Link>
              <Link href="/projects">Projets</Link>
              <Link href="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
              <ThemeSwitcher />
          </div>
      </header>
  );
}
