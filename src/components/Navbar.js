import React from "react";
// import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Footer() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.left}>The Ads Test</div>
      <div className={styles.right}>About this Project</div>
    </nav>
  );
}
