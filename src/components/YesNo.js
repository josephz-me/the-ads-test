import styles from "./YesNo.module.scss";
import React, { useState } from "react";

export default function TextInputPage(props) {
  const [activeYes, setActiveYes] = useState(false);
  const [activeNo, setActiveNo] = useState(false);

  return (
    <div className={styles.textInputContainer}>
      <h2 className={styles.title}>{props.title}</h2>
      {/* <YesNo></YesNo> */}
      <div className={styles.YesNoContainer}>
        <input
          type="button"
          className={(styles.button, activeYes ? styles.active : "")}
          value="Yes"
          onClick={() => {
            setActiveYes(!activeYes);
            console.log(!activeYes);

            if (activeNo) {
              setActiveNo(!activeNo);
            }
          }}
        />
        <input
          type="button"
          className={(styles.button, activeNo ? styles.active : "")}
          value="No"
          onClick={() => {
            setActiveNo(!activeNo);

            if (activeYes) {
              setActiveYes(!activeYes);
            }
          }}
        />
      </div>
    </div>
  );
}
