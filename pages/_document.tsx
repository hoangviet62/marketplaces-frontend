import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
      </Head>
      <body style={{ margin: '0 !important', background: '#f0eef5' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}