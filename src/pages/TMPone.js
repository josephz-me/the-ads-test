import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.one = input;
}

export default function One() {
  const [input, setInput] = useState("");
  return (
    <div className={styles.centerAlign}>
      <div>
        <TextInput
          question="How old are you?"
          value={input}
          onInput={e => setInput(e.target.value)}
        />
        <Link href="two" onClick={storeInputInContext(input)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="/" onClick={storeInputInContext(input)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
