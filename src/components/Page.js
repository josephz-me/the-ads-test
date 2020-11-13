import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Meta";
// import styles from "./Page.module.scss";

export default function Page(props) {
  return (
    <div>
      <Meta />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
