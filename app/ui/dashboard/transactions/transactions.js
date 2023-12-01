import Image from "next/image";
import styles from "./transactions.module.css";
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Lasted Transactions</h4>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                john alen
              </div>
            </td>
            <td>
              <span className={`${styles.cancelled} ${styles.status}`}>
                cancelled
              </span>
            </td>
            <td className={styles.date}>14.02.2024</td>
            <td className={styles.amount}>$3000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                john alen
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                pending
              </span>
            </td>
            <td className={styles.date}>14.02.2024</td>
            <td className={styles.amount}>$3000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                john alen
              </div>
            </td>
            <td>
              <span className={`${styles.done} ${styles.status}`}>done</span>
            </td>
            <td className={styles.date}>14.02.2024</td>
            <td className={styles.amount}>$3000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                john alen
              </div>
            </td>
            <td>
              <span className={`${styles.cancelled} ${styles.status}`}>
                cancelled
              </span>
            </td>
            <td className={styles.date}>14.02.2024</td>
            <td className={styles.amount}>$3000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  width={30}
                  height={30}
                  className={styles.userImage}
                />
                john alen
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>
                pending
              </span>
            </td>
            <td className={styles.date}>14.02.2024</td>
            <td className={styles.amount}>$3000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
