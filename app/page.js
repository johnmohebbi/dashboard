import Box from "./ui/home/box/Box";
import styles from "./page.module.css";
import Link from "next/link";
//icons
import { PiTelegramLogo } from "react-icons/pi";
import { LuCircleDollarSign } from "react-icons/lu";
import { BsRocket } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { FaOpencart } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import AboutusContent from "./ui/home/content/AboutusContent";
import Collapse from "./ui/home/collapse/Collapse";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h2>Logo</h2>
          </div>
          <div className={styles.dashboardLinkContainer}>
            <Link href={`/dashboard`}>dashboard</Link>
          </div>
        </nav>
      </div>
      <div className={styles.mainTitleContainer}>
        <div className={styles.mainTitle}>
          <h1>MARKETING</h1>
          <h1>SOLUTION AGENCY</h1>
          <p>
            Lorem ipsum dolor sit amet, mei melius verterem te, nec dicta
            aliquam appellantur ei. Cum unum prima recusabo Lorem ipsum dolor
            sit amet, mei melius verterem te, nec dicta
          </p>
        </div>
      </div>
      <section className={styles.boxContainer}>
        <div className={styles.boxPot}>
          <Box
            c={styles.box}
            icon={PiTelegramLogo}
            title={"Digital Marketing"}
          />
          <Box c={styles.box} icon={LuCircleDollarSign} title={"Trade Shows"} />
          <Box c={styles.box} icon={BsRocket} title={"Branding"} />
          <Box c={styles.box} icon={TfiWrite} title={"Content Creation"} />
          <Box c={styles.box} icon={ImMagicWand} title={"Graphic Design"} />
          <Box c={styles.box} icon={FaOpencart} title={"Media Buying"} />
        </div>
      </section>
      <AboutusContent />

      <div className={styles.collapsibleContainer}>
        <Collapse title={"Digital Marketing"} />
        <Collapse title={"Trade Shows"} />
        <Collapse title={"Branding"} />
        <Collapse title={"Content Creation"} />
        <Collapse title={"Graphic Design"} />
        <Collapse title={"Branding"} />
        <Collapse title={"Media Buying"} />
      </div>
      <section className={styles.boxContainer}>
        <div className={styles.boxPot}>
          <Box
            c={styles.box}
            icon={PiTelegramLogo}
            title={"Digital Marketing"}
          />
          <Box c={styles.box} icon={TfiWrite} title={"Content Creation"} />
          <Box c={styles.box} icon={FaOpencart} title={"Media Buying"} />
        </div>
      </section>
      <footer className={styles.footerContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing tempor.</p>
        <p>© dashboard Theme by <strong>john</strong></p>
      </footer>
    </main>
  );
}
