# elysia-mount-req-method-bug

This repository shows that Elysia's `mount` method can transform the incoming request method to `GET`.

Please run the following to test:

```bash
curl -X POST 'http://localhost:3000/?test=1' \
  -H 'Content-Type: application/json' \
  --data-raw '{}'
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

