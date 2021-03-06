import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.ten = input;
}

export default function Ten() {
  const [yesno, setYesNo] = useState(0);
  let arrows;
  if (yesno == 0) {
    arrows = (
      <Link href="nine" onClick={storeInputInContext(yesno)}>
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  } else {
    arrows = (
      <>
        <Link href="eleven" onClick={storeInputInContext(yesno)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="nine" onClick={storeInputInContext(yesno)}>
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
        <YesNo
          question="Do you think Google collects data about you from non-Google websites?"
          value={yesno}
          onClick={response => setYesNo(response)}
        />
        {arrows}
      </div>
      <Footer level={10} />
    </div>
  );
}
