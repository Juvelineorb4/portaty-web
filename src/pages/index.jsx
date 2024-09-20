
import {
  Navbar,
  Home,
  Features,
  WhatsIs,
  Download,
  Footer,
} from "@/components";
import { download, features } from "@/constants";
import styles from "@/styles/Main.module.css";
import Image from "next/image";

export default function Main() {


  return (
    <div className={styles.container}>
      <Navbar />
      <div id={"home"}>
        <Home />
      </div>

      <div className={styles.features}>
        <Image
          src={features.bgFeatures}
          alt=""
          width={1000}
          height={1000}
          className={styles.bgFeatures}
        />

        <Image
          src={features.bgTiny}
          alt=""
          width={1000}
          height={1000}
          className={styles.bgTiny}
        />
        <Features />
      </div>

      <WhatsIs />
      <div className={styles.download}>
        <Image
          src={download.bgDownload}
          alt=""
          width={1000}
          height={1000}
          className={styles.bgDownload}
        />

        <Image
          src={download.bgTiny}
          alt=""
          width={1000}
          height={1000}
          className={styles.bgDownloadTiny}
        />
        <Download />
      </div>
      <div id={"contact"}>
        <Footer />
      </div>
    </div>
  );
}
