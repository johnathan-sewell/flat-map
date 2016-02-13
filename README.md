# flat-map

## Developing

Node 4.2.6 must be installed. If you're using NVM, just run `nvm install` in the project root.

Start the server:

```bash
npm run nodemon
```

This will run and monitor the Node.js Express server.

Start the frontend app:

```bash
npm run dev
```

This will build, run and monitor the frontend app.

Run the tests:

```bash
npm run test
```

## Performance

Server responses are compressed using the [compression middleware](https://www.npmjs.com/package/compression)
