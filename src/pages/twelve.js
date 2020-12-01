import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.twelve = input;
}

export default function Twelve() {
  const [input, setInput] = useState("");
  return (
    <div className={styles.centerAlign}>
      <div>
        <TextInput
          question="What percentage of Google’s revenue comes from ads? Write a number between 0 and 100."
          value={input}
          onInput={e => setInput(e.target.value)}
        />
        <Link href="thirteen" onClick={storeInputInContext(input)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="eleven" onClick={storeInputInContext(input)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
