# IMG API JavaScript
I made an [image manipulation API](https://github.com/ravener/img-api) in Golang, primarily targetting Discord Bots.

This is an API wrapper for the api in JavaScript

This wrapper is official and will be kept updated as new stuff gets added.

## Install
```sh
$ npm install img-api
```
No dependencies. TypeScript typings included.

## Usage
```js
const { Client } = require("img-api");

// Port defaults to 3030
// Host defaults to localhost
// Password only required if using from a different host and one is set in the server.
const api = new Client({ port: 3030, password: "password", host: "localhost" });

api.ping()
  .then(console.log);

api.stats(false)
  .then((stats) => console.log(`Version v${stats.version} Up for ${stats.uptime} seconds.`));

// To send images via discord.js
const { MessageAttachment } = require("discord.js");

const buffer = await api.tom(msg.author.displayAvatarURL({ format: "png", size: 2048 }));
someChannel.send(new MessageAttachment(buffer, "name.png"));
```
See [Endpoints.md](https://github.com/pollen5/img-api/blob/master/Endpoints.md) for all endpoints.

The function arguments take arguments in the same order the Endpoints list shows.

> **Note:** The API only accepts `jpg` and `png` when using Discord.js make sure to always ask for `png` like so `user.displayAvatarURL({ format: "png" })` the default is `webp` which is not supported.

## Changelog

#### v1.0.4 (8/2/2023)
- Maintenance update: update links and refactor the code slightly
- Added missing typescript typings for `kaguya` endpoint

#### v1.0.3 (27/5/2020)
- Add `Client#dominantColor(avatar)`
- Improved TypeScript typings for `ping`/`stats`'s response.
- Start using ESLint.

#### v1.0.2
- Fix `tweet()`

#### v1.0.1
- Fix `stats()`'s boolean logic
- Add TypeScript typings for `ping`/`stats`

#### v1.0.0 (19/5/2020)
- Initial release.

## License
Released under the [MIT License](LICENSE)
