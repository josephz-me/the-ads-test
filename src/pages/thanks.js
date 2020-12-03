import styles from "./index.module.scss";
import Link from "next/link";
import { Context } from "./store";
import { useContext } from "react";
import LeftArrow from "../components/LeftArrow";

export default function Home() {
  const context = useContext(Context);
  console.log(context);
  fetch(
    "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwgbEDUMMVmj2q1ZbJqs6s-w0YNESXtDoZ8lSDX321F6lUnCZzf/exec",
    {
      method: "POST",
      body: JSON.stringify(context)
    }
  )
    .then(response => response.text())
    .then(data => console.log(data));
  return (
    <div className={styles.centerAlign}>
      <h2 className={styles.title}>Thanks for taking part in this survey!</h2>
      <Link href="twelve">
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    </div>
  );
}
