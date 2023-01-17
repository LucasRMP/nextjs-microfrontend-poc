import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <script
        src="http://localhost:3000/_next/static/chunks/remoteEntry.js"
        defer
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
