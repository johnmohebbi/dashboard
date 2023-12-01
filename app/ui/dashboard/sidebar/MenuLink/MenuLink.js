"use client";
import Link from "next/link";
import styles from "./MenuLink.module.css";
import { usePathname } from "next/navigation";
const MenuLink = ({ item, title }) => {
  const path = usePathname();
  const str = path[0].toUpperCase() + path.slice(1);
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        str === item.path ? styles.active : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
