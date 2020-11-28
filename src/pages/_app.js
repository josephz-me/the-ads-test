import "../../styles/globals.scss";
import Page from "../components/Page";
import React from "react";
import { Provider, Context } from './store'

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </Page>
  );
}
