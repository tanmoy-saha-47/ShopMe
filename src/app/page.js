"use client";
import styles from "./homePage.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 12)));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("userdata");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setloggedIn(true);

      setUserName(userData.userId);
    } else {
      setloggedIn(false);
      setUserName("Guest");
    }
  }, []);

  const handleExplore = () => {
    if (loggedIn) {
      router.push("/components/products");
    } else {
      alert("Please login first.");
      router.push("/components/Login");
    }
  };

  return (
    <>
      <div className={styles.intro}>
        <h1 className={styles.header}>Welcome {userName}</h1>
        <p className={styles.text}>
          You have arrived at the right place. Browse through our wide range of
          products. Start shopping now!
        </p>
        <button onClick={handleExplore} className={styles.explore}>
          Explore now
        </button>
      </div>
      {/* ⭐ Featured Products Section */}
      <section className={styles.featured}>
        <h2>⭐ Featured Products</h2>
        <div className={styles.productGrid}>
          {products.map((item) => (
            <div key={item.id} className={styles.productCard}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title.slice(0, 30)}...</h4>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/products" className={styles.btn}>
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}
