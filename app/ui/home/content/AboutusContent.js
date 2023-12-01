import Image from "next/image";
import styles from "./AboutusContent.module.css";
const AboutusContent = () => {
  return (
    <section  className={styles.aboutus}>
        <div className={styles.parent}>
      <div className={styles.imgContainer}>
        <Image width={1000} height={1000} src="/03.jpg" alt="Picture of the author" />
      </div>
      <div className={styles.desc}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh
          sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus
          suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam,
          rhoncus sagittis metus semper quis. Praesent convallis mauris sed
          ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a
          volutpat mauris lobortis.
        </p>
      </div>
    </div>
    </section>
  );
};

export default AboutusContent;
