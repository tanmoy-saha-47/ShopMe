import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          &copy;{new Date().getFullYear()}.All rights reserved.
        </p>
      </div>
    </footer>
  );
}
