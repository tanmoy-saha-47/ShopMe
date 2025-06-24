"use client";
import styles from "./productlist.module.css";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Product List</h1>
      <p className={styles.para}>
        Here you can find a variety of products available for purchase.
      </p>

      {products.length === 0 ? (
        <p>Loading . . . . . </p>
      ) : (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <h2 className={styles.title}>{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <p className={styles.price}>${product.price}</p>
              <button
                className={styles.button}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
