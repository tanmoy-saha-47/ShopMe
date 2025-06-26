"use client";
import styles from "./homePage.module.css";
import { useUser } from "./context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const { user } = useUser();
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

  const handleExplore = () => {
    if (user) {
      router.push("/products");
    } else {
      alert("Please login first.");
      router.push("/Login");
    }
  };

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
          {user ? `Hello, ${user.name} ` : "Welcome to ShopMe"}
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
