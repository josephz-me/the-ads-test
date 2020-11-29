import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <ProgressBar now={60} />
    </footer>
  );
}
