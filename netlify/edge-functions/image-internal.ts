import type { Context } from "@netlify/edge-functions";

// Let's serve an image that's stored in the repo
// by rewriting the URL.

export default async (request: Request, context: Context) => {
  return new URL("/apple-touch-icon.png", request.url);
};
