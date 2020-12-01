import styles from "./index.module.scss";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

export default function Six() {
  return (
    <div className={styles.centerAlign}>
      <div className={styles.textInputContainer}>
        <h2 className={styles.title}>
          If you didn’t already know, Google personalizes ads. Click the link to
          view your Google Ad Settings, and take a few minutes to explore the
          “How your ads are personalized” section.
        </h2>
        <a href="https://adssettings.google.com" target="_blank">
          Click HERE for your Google Ad Settings
        </a>
        <Link href="seven">
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="five">
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
