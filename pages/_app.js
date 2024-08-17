import { Fragment } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Bakery page (Community)</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </Fragment>
  );
}

export default MyApp;
