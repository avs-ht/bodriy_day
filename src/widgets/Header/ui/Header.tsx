"use client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { LogoIcon } from "@/shared/ui/Logo";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Nav } from "./Nav";
import { Socials } from "./Socials";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const isMobileMenuHidden = useMediaQuery("(max-width: 945px)");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <LogoIcon />
      </Link>
      {!isMobileMenuHidden ? (
        <>
          <Nav />
          <Socials />
        </>
      ) : (
        <>
          {isMobileMenuOpen && (
            <div className={styles.mobileMenuContainer} data-no-scroll>
              <div className={styles.mobileMenu}>
                <Nav />
                <Socials />
              </div>
            </div>
          )}
          <button
            className={clsx(
              styles.burgerButton,
              isMobileMenuOpen && styles.active
            )}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </>
      )}
    </header>
  );
};
