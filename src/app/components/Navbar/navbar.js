"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored useer in navbar:", storedUser);
    if (storedUser) {
      const data = JSON.parse(storedUser);
      setUser(data.name);
    }
    setLoggedIn(!!storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    console.log("User Loggedout succesfully");
    setLoggedIn(false);
    setUser(null);
    router.refresh();
    router.push("/Login");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> 🛒 ShopMe </div>
      <p className={styles.description}>
        {user
          ? `Welcome, ${user},Happy Shopping!`
          : "Welcome to ShopMe, Login to explore our products!"}
      </p>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>

        {!loggedIn ? (
          <>
            <Link href="/Login">Login</Link>
            <Link href="/SignUp">Signup</Link>
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
