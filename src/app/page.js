"use client";
import styles from "./homePage.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [checkingLogin, setCheckingLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user in homepage:", storedUser);

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setloggedIn(true);
      setUserName(user.name);
    } else {
      setloggedIn(false);
    }

    setCheckingLogin(false);
  }, []);

  useEffect(() => {
    if (!checkingLogin && !loggedIn) {
      const timer = setTimeout(() => {
        router.push("/Login");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [checkingLogin, loggedIn, router]);

  const handleExplore = () => {
    if (loggedIn) {
      router.push("/products");
    } else {
      alert("Please login first.");
      router.push("/Login");
    }
  };
  if (checkingLogin) return <div>Loading. . . </div>;

  const categoryImages = {
    electronics:
      "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?cs=srgb&dl=pexels-jeshoots-218863.jpg&fm=jpg",
    jewelery: " https://images.pexels.com/photos/17834/pexels-photo.jpg ",
    "men's clothing":
      "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg",
    "women's clothing":
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg",
  };

  return (
    <>
      <div className={styles.intro}>
        <h1 className={styles.header}>
          {userName ? `Hello, ${userName} ` : "Welcome to ShopMe"}
        </h1>

        <p className={styles.text}>
          You have arrived at the right place. Browse through our wide range of
          products. Start shopping now!
        </p>
        <button onClick={handleExplore} className={styles.explore}>
          Explore now
        </button>
      </div>

      <section className={styles.featured}>
        <h2> 🌟 Our Products</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <img
                src={categoryImages[category]}
                alt={category}
                className={styles.categoryImages}
              />
              <h3>{category}</h3>
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
