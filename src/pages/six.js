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
          If you didn’t already know, Google personalizes ads.
        </h2>
        <p>
          Click the link to view your Google Ad Settings, and take a few minutes
          to explore the “How your ads are personalized” section.
        </p>
        <a href="https://adssettings.google.com" target="_blank">
          <img src="/ad-settings.png"></img>
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
