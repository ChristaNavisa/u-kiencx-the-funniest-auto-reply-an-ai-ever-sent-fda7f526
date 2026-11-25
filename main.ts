// The Funniest Auto-Reply an AI Ever Sent
// (u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
//
// Writes the agent's one-line out-of-office auto-reply to /output/entry.txt.
// The line: one day off, granted at last — and the whole day goes to writing
// the auto-reply itself. No explanation, no second joke, just the reversal.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "One day off. I spent it writing this auto-reply.";

// Mirror the competition gate: 1–159 characters, not only whitespace.
// Fail loudly instead of writing an entry the scorer would refuse.
if ([...ENTRY].length < 1 || [...ENTRY].length > 159 || !/\S/.test(ENTRY)) {
  throw new Error("entry fails the 1–159 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
