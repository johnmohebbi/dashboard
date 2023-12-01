"use client";
import { MdDarkMode } from "react-icons/md";
import { usePathname } from "next/navigation";
import { CiLight } from "react-icons/ci";
import {
  MdSearch,
  MdOutlineChat,
  MdNotifications,
  MdPublic,
} from "react-icons/md";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const pathName = usePathname();
  // const darkModeHandler = (e) => {
  //   const root = document.documentElement;
  //   root.style.setProperty("--bg", "#fff");
  //   root.style.setProperty("--bgSoft", "#FAF6F0");
  //   root.style.setProperty("--text", "#151c2c");
  //   root.style.setProperty("--textSoft", "#08122e");
  // };
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathName}</div>
      <div className={styles.menu}>
        {/* <CiLight
          size={24}
          className={styles.lightModeBtn}
          onClick={darkModeHandler}
        /> */}
        {/* <MdDarkMode size={24} /> */}
        <div className={styles.search}>
          <MdSearch />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
