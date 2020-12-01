import styles from "./index.module.scss";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "./store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.ten = input;
}

export default function Ten() {
  const [option, setOption] = useState(-1);

  return (
    <div className={styles.centerAlign}>
      <div>
        <LikertScale
          question="TEMPORARY"
          responses={[
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ]}
          value={option}
          onClick={response => setOption(response)}
        />
        <Link href="eleven" onClick={storeInputInContext(option)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="nine" onClick={storeInputInContext(option)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
    </div>
  );
}
