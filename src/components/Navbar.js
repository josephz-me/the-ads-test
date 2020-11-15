import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

export default function Footer() {
  return (
    <nav className={styles.navContainer}>
      <Link href="/">
        <a className={styles.left}>The Ads Test</a>
      </Link>

      <div className={styles.right}>About this Project</div>
    </nav>
  );
}
