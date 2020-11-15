import styles from "./TextInput.module.scss";
import React, { useState } from "react";

export default function TextInputPage(props) {
  return (
    <div className={styles.textInputContainer}>
      <h2 className={styles.title}>{props.question}</h2>
      <input className={styles.textInput} type="text" placeholder="" />
    </div>
  );
}
