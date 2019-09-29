# string-to-id

Turns an identifier string (`0-9A-Za-z_-`) into a unique integer id.

## Why?

This is meant to reduce the amount of bytes transferred for string id's during client-server communication.

## Usage

```typescript
import strtoid from "string-to-id";

strtoid("someId");
// => 16326
```

## Possibility of string collisions

> TODO: find out exactly what's the possibility of collisions

There is a possibility of collision.

## License

MIT