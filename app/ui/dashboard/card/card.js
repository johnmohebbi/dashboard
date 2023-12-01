import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>User Title</span>
        <span className={styles.number}>999</span>
        <span className={styles.detail}>
          {" "}
          <span className={styles.positive}>12%</span> Compiled in 152ms
        </span>
      </div>
    </div>
  );
};

export default Card;
