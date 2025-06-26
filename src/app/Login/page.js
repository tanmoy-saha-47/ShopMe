"use client";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import styles from "./LoginPage.module.css";
import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) {
      setError("Please fill in all the fields");
      return;
    }

    const userData = {
      name: name.trim(),
      password: password.trim(),
    };
    login(userData);
    router.push("/");
    // setTimeout(() => {
    //   window.location.href = "/";
    // }, 100);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Log in to your Account</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          placeholder="UserName"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <a href="/SignUp" className={styles.link}>
          Signup Now
        </a>
      </p>
    </div>
  );
}
