import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.three = input;
}

export default function Three() {
  const [yesno, setYesNo] = useState(0);
  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="I am careful with how I share my information online"
          value={yesno}
          onClick={response => setYesNo(response)}
        />
        <Link href="four" onClick={storeInputInContext(yesno)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="two" onClick={storeInputInContext(input)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
