import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.city = input;
}

export default function Two() {
  const [input, setInput] = useState("");
  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="I am careful with how I share my information online"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <Link href="four" onClick={storeInputInContext(input)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
