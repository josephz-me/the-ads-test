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
        <YesNo title="Do you think Google sells your data to other companies?" />
        <Link href="two" onClick={storeInputInContext(input)}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
