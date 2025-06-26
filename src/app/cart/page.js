"use client";
import { useCart } from "../context/CartContext";
import styles from "./cartPage.module.css";
import { useUser } from "../context/UserContext";

export default function CartPage() {
  const { user } = useUser();
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>
        {user
          ? `Hello, ${user.name}. Lets checkout your Cart!`
          : " Welcome to your Cart!"}
      </h1>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.cartList}>
              {cartItems.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemPrice}>${item.price} </p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.itemImage}
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    Remove{" "}
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.total}>Total: ${totalPrice.toFixed(2)}</div>
          </>
        )}
      </div>
    </div>
  );
}
