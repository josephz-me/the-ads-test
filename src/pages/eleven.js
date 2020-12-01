import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.eleven = input;
}

export default function Eleven() {
  const [yesno, setYesNo] = useState(0);
  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="Do you think Google collects data about you from non-Google websites?"
          value={yesno}
          onClick={response => setYesNo(response)}
        />
        <Link href="twelve" onClick={storeInputInContext(yesno)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="ten" onClick={storeInputInContext(yesno)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
