"use client";
import { useState } from "react";
import styles from "./signup.module.css";
import { addNewUser } from "@/app/lib/actions";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const changeHandler = async (e) => {
    if (e.target.name === "username") {
      setFormData((data) => ({
        ...data,
        username: e.target.value,
      }));
    }
    if (e.target.name === "password") {
      setFormData((data) => ({
        ...data,
        password: e.target.value,
      }));
    }
    if (e.target.name === "email") {
      setFormData((data) => ({
        ...data,
        email: e.target.value,
      }));
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addNewUser}>
        <h1>signup</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        <input
          min={4}
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
        <button type="submit">register</button>
        <Link href={"/login"}>create account</Link>
      </form>
    </div>
  );
};

export default Signup;
