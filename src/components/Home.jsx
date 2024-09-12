import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { home } from "@/constants";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className="container section">
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.ad}>
            <p className={styles.titleAd}>{home.ad}</p>
          </div>
          <h2 className={styles.title}>
            <span>{home.first}</span> {home.second}{" "}
          </h2>

          <p className={styles.subtitle}>{home.subtitle} </p>
          <div className={styles.buttons}>
            <Link
              href={home.buttons.one.link}
              className={styles.buttonGet}
              target="_blank"
            >
              <Image src={home.google} alt="" width={30} height={30} />
              <p className={styles.pale}>{`|`}</p>

              <p className={styles.textButton}>{home.buttons.one.title}</p>
            </Link>
            <Link
              href={home.buttons.two.link}
              className={styles.buttonGet}
              target="_blank"
            >
              <Image src={home.apple} alt="" width={30} height={30} />
              <p className={styles.pale}>{`|`}</p>

              <p className={styles.textButton}>{home.buttons.two.title}</p>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={home.mainImage} alt="" width={1200} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default Home;
