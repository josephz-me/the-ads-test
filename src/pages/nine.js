import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.name = input;
}

export default function One() {
  const [input, setInput] = useState("");
  return (
    <div className={styles.centerAlign}>
      <div>
        {/* <TextInput
          question="What is your name?"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        /> */}
        <YesNo title="Was ad personalization turned on for your account?" />
        <Link href="two" onClick={storeInputInContext(input)}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
