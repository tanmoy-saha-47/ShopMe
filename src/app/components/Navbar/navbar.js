"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/Login");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> 🛒 ShopMe </div>
      <p className={styles.description}>
        {user
          ? `Welcome, ${user.name},Happy Shopping!`
          : "Welcome to ShopMe, Login to explore our products!"}
      </p>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>

        {!user ? (
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
