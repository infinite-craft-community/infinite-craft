type StringEmoji = string & {};

interface ServerError {
  ok: false;
  status: 500;
}

export type { StringEmoji, ServerError };
