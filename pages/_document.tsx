import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/font.css" />
      </Head>
      <body style={{ margin: '0 !important', background: '#f2f2f0' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}