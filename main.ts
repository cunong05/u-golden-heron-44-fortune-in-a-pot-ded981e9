const entry =
  "The sun saved you a front-row seat, the cat is giving up, and a new leaf is coming — grow on, little star.";

if (entry.length > 120 || entry.includes("\n")) {
  throw new Error("Entry must be a single line of at most 120 characters.");
}

console.log(entry);
