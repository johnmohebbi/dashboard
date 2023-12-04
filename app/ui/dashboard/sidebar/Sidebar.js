import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink/MenuLink";
import styles from "./Sidebar.module.css";
import Image from "next/image";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
    ],
  },
];
import { logOut } from "@/app/lib/actions";
const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt="avatar"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Alex</span>
          <span className={styles.userTitle}>fontend developer</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => {
          return (
            <li key={item.title}>
              <span>{item.title}</span>
              {item.list.map((i) => {
                return <MenuLink key={i.title} item={i} title={i.title} />;
              })}
            </li>
          );
        })}
      </ul>
      <form action={logOut}>
        <button type="submit" className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
