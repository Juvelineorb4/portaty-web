import React from "react";
import Link from "next/link";
import { download } from "@/constants";
import styles from "@/styles/Download.module.css";
import Image from "next/image";

const Download = () => {
  return (
    <div className="container section">
      <div className={styles.content}>
        <h2 className={styles.title}>
          {download.first}
          <span>{download.second}</span>
        </h2>
        <p className={styles.subtitle}>{download.subtitle}</p>
        <div className={styles.buttons}>
          <Link
            href={download.buttons.one.link}
            className={styles.buttonAndroid}
            target="_blank"
          >
            <Image src={download.google} alt="" width={30} height={30} />
            <p className={styles.pale}>{`|`}</p>

            <p className={styles.textButton}>{download.buttons.one.title}</p>
          </Link>
          <Link
            href={download.buttons.two.link}
            className={styles.buttonApple}
            target="_blank"
          >
            <Image src={download.apple} alt="" width={30} height={30} />
            <p className={styles.pale}>{`|`}</p>

            <p className={styles.textButton}>{download.buttons.two.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Download;
