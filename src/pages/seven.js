import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.seven = input;
}

export default function Seven() {
  const [yesno, setYesNo] = useState(0);
  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="Was ad personalization turned on for your account? You can go back to your Ad Settings to check."
          value={yesno}
          onClick={response => setYesNo(response)}
        />
        <Link href="eight" onClick={storeInputInContext(yesno)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="six" onClick={storeInputInContext(yesno)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
