import styles from "./index.module.scss";
import YesNo from "../components/YesNo";

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.left}>
        <h1>The Ads Test</h1>
        <p>How well do your apps know you?</p>
        <button>Take the test</button>

        {/* <YesNo></YesNo> */}
      </div>
      <div className={styles.right}>
        <img src="/landing-image.png"></img>
      </div>
    </div>
  );
}
