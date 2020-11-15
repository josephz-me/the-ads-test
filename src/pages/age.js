import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.centerAlign}>
      <TextInput question="What is your name?"></TextInput>
    </div>
  );
}