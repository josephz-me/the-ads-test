import styles from "./index.module.scss";
import YesNo from "../components/YesNo";

export default function Home() {
  return (
    <div className={styles.centerAlign}>
      <YesNo question="Did you know you can personalize your Google Ads?"></YesNo>
    </div>
  );
}
