"use client"

import styles from "./Hamburger.module.css"

interface HamburgerProps {
  open: boolean
  size?: number
  className?: string
}

export function Hamburger({ open, size = 24, className = "" }: HamburgerProps) {
  return (
    <span
      className={`${styles.ham} ${open ? styles.active : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </span>
  )
}
