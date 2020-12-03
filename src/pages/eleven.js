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

export default function Eleven() {
  const [input, setInput] = useState("");
  let arrows;
  if (input == "") {
    arrows = (
      <Link href="ten" onClick={storeInputInContext(input)}>
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  } else {
    arrows = (
      <>
        <Link href="twelve" onClick={storeInputInContext(input)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="ten" onClick={storeInputInContext(input)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </>
    );
  }

  return (
    <div className={styles.centerAlign}>
      <div>
        <TextInput
          question="What percentage of Google’s revenue comes from ads? Write a number between 0 and 100."
          value={input}
          onInput={e => setInput(e.target.value)}
        />
        {arrows}
      </div>
    </div>
  );
}
