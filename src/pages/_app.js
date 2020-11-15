import "../../styles/globals.scss";
import Page from "../components/Page";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
