"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> 🛒 ShopMe </div>
      <p className={styles.description}>
        "👌Trusted by all 👌 🛍️24*7 Open 🛍️ 🚚Home delivery available!🚚"
      </p>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/components/Login">Login</Link>
        <Link href="/components/SignUp">Signup</Link>
      </div>
    </nav>
  );
}
