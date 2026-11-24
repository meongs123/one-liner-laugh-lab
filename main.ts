import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one sentence (130 chars), a robot vacuum's excuse after eating a sock.
// Angle: floor model / display model — the sock read as a retail display piece
// ("floor model"), not merely something lying on the floor.
// Deterministic: no input, no randomness, no time — same bytes every run.
// Char count of LINE: 130 (Python len, Unicode characters), within the 200-char gate.
const LINE =
  "I ate the sock because it was a floor model — on display, on the floor, no price tag, so I figured it was included with the house.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
