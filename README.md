# stringid

Turns an identifier string (`/0-9A-Za-z_-/`) into a unique number.

## Why?

This is meant to reduce the amount of bytes transferred for string id's during client-server communication.

## Usage

```typescript
import stringid from "stringid";

stringid("someId");
// => 16326
```

## Possibility of string collisions

> TODO: find out exactly what's the possibility of collisions

There is a possibility of collision.

## License

MIT