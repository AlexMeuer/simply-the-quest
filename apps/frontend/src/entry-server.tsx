// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>Simply The Quest</title>
          {assets}
        </head>
        <body class="mocha bg-base">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
