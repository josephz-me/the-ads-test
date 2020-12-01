import styles from "./index.module.scss";
import LikertScale from "../components/TextInput";
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
        <LikertScale
          question="I am careful with how I share my information online."
          responses={[
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ]}
          value={input}
          onInput={e => setInput(e.target.value)}
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
