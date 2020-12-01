import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.thirteen = input;
}

export default function Thirteen() {
  const [yesno, setYesNo] = useState(0);
  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="Do you think Google sells your data to other companies?"
          value={yesno}
          onClick={response => setYesNo(response)}
        />
        <Link href="fourteen" onClick={storeInputInContext(yesno)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="twelve" onClick={storeInputInContext(yesno)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
