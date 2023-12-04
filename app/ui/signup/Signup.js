"use client";
import { useRef, useState } from "react";
import styles from "./signup.module.css";
import { addNewUser } from "@/app/lib/actions";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
const Signup = () => {
  const router = useRouter();
  const button = useRef();
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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
  const submithandler = async (e) => {
    button.current.setAttribute("disabled", "disabled");
    const res = await addNewUser(formData);
    if (res === "username" || res === "email") {
      const notify = () =>
        toast.error(`enter correct info, please change your ${res}`);
      notify();
      setIsError(true);
      button.current.removeAttribute("disabled");
    } else {
      const user = JSON.parse(res);
      const notify = () => toast.success(`welcome ${user.username}`);
      notify();
      setCookie("TOKEN", user._id, {
        maxAge: 7200,
        domain: "dashboard-puce-kappa.vercel.app",
      });
        router.replace("/dashboard");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} action={submithandler}>
        <h1>signup</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          required
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          required
          onChange={changeHandler}
        />
        <input
          min={4}
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          required
          onChange={changeHandler}
        />
        <button type="submit" ref={button}>
          register
        </button>
        <Link href={"/login"}>create account</Link>
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

export default Signup;
