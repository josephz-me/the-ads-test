import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.two = input;
}

export default function Two() {
  const [input, setInput] = useState("");
  return (
    <div className={styles.centerAlign}>
      <div>
        <TextInput
          question="What city are you from?"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <Link href="three" onClick={storeInputInContext(input)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
