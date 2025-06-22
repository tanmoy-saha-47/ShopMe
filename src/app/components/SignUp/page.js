"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SignUpPage.module.css";

export default function SignUpPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname && userId && email && password) {
      console.log("Signup completed", { fullname, userId, email, password });
      router.push("/");
    } else {
      console.log("Please fill all the fields");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="Password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
      </form>
      <button className={styles.button}>Submit</button>
      <p className={styles.text}>
        Already have an account?{""}
        <a href="/components/Login" className={styles.link}>
          Login
        </a>
      </p>
    </div>
  );
}
