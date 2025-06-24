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

      const user = {
        fullname: fullname.trim(),
        userId: userId.trim(),
        email: email.trim(),
        password: password.trim(),
      };

      localStorage.setItem("userdata", JSON.stringify(user));
      console.log("User signed in succesfully", user);
      router.push("/components/Login");
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
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="Password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button className={styles.button}>Submit</button>
      </form>

      <p className={styles.text}>
        Already have an account?{""}
        <a href="/components/Login" className={styles.link}>
          Login
        </a>
      </p>
    </div>
  );
}
