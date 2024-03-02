import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>chaos</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <script src="https://kit.fontawesome.com/0f4e0282cf.js" crossorigin="anonymous"></script>
        <Component />
      </body>
    </html>
  );
}
