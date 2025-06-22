"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userId.trim() || !password.trim()) {
      setError("Please fill in all the fields");
      return;
    }

    const userData = {
      userId: userId.trim(),
      password: password.trim(),
    };

    localStorage.setItem("userdata", JSON.stringify(userData));
    console.log("User logged in succesfully", userData);
    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Log in to your Account</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          placeholder="UserName"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />

        <button className={styles.button}>Login</button>
      </form>
      <p className={styles.text}>
        Don't have an account?,{" "}
        <a href="/components/SignUp" className={styles.link}>
          Signup Now
        </a>
      </p>
    </div>
  );
}
