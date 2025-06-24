"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored useer in navbar:", storedUser);
    setLoggedIn(!!storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    console.log("User Loggedout succesfully");
    setLoggedIn(false);
    router.push("/components/Login");
  };

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

        {!loggedIn ? (
          <>
            <Link href="/components/Login">Login</Link>
            <Link href="/components/Signup">Signup</Link>
          </>
        ) : (
          <span
            onClick={handleLogout}
            style={{ cursor: "pointer", color: "white" }}
          >
            Logout
          </span>
        )}
      </div>
    </nav>
  );
}
