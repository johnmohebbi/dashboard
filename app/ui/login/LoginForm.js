"use client";
import styles from "./login.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "@/app/lib/actions";
import { setCookie } from "cookies-next";
import Link from "next/link";
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const submitHandler = async (formdata) => {
    const res = await loginUser(formdata);
    if (res?.error) {
      console.log(res.error);
    } else {
      const user = JSON.parse(res);
      router.replace("/dashboard");
    }
  };
  const changeHandler = async (e) => {
    if (e.target.name === "email") {
      setFormData((data) => ({
        ...data,
        email: e.target.value,
      }));
    }
    if (e.target.name === "password") {
      setFormData((data) => ({
        ...data,
        password: e.target.value,
      }));
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} action={submitHandler}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          required
        />
        <input
          min={4}
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          required
        />
        <button type="submit" >Login</button>
        <Link href={"/signup"}>create account</Link>
      </form>
      {isError && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      )}
    </div>
  );
};

export default LoginForm;
