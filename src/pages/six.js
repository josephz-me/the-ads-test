import styles from "./index.module.scss";
import Link from "next/link";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import { useState } from "react";

export default function Six() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.centerAlign}>
      <div className={styles.textInputContainer}>
        <h2 className={styles.title}>
          If you didn’t already know, Google personalizes ads.
        </h2>
        <p>
          Click the image to view your Google Ad Settings, and take a few
          minutes to explore the “How your ads are personalized” section.
        </p>
        <a href="https://adssettings.google.com" target="_blank" onClick={() => setClicked(true)}>
          <img src="/ad-settings.png"></img>
        </a>
        {clicked && <Link href="seven">
          <a>
            <RightArrow />
          </a>
        </Link>}
        <Link href="five">
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
