import { cookies } from "next/headers";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/Chart";
import { getCookie } from "cookies-next";

import styles from "./dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
const dashboardPage = () => {
  const cookie = getCookie("token", { cookies });
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default dashboardPage;
