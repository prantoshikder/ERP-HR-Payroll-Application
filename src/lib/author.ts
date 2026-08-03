/**
 * Authorship record — the single source of truth for who wrote this codebase.
 *
 * This file is covered by the MIT licence in ./LICENSE, which requires the
 * copyright notice to be retained in "all copies or substantial portions of
 * the Software". Stripping the attribution below — here, in the footer, in the
 * document metadata or in NOTICE — terminates your right to use this code.
 *
 * The integrity check at the bottom runs at module load, which means it runs
 * during `next build`: every route imports `siteConfig`, so a tampered or
 * emptied record fails the build with an explanatory error instead of quietly
 * shipping an unattributed site.
 *
 * Forking under your own name is welcome — see the instructions in the thrown
 * error. Do it in the open, not by deleting a line.
 */

/**
 * Frozen so it cannot be reassigned or edited at runtime.
 *
 * `url` is the canonical author link — the footer credit, the document
 * `authors` metadata and the Schema.org Person node all point at it, so it is
 * the portfolio rather than the code host. `github` is carried separately and
 * surfaces through Schema.org `sameAs`.
 */
export const author = Object.freeze({
  name: "Pranto Shikder",
  email: "prantoshikder24@gmail.com",
  url: "https://prantoshikder.vercel.app",
  github: "https://github.com/prantoshikder",
});

/** Year the copyright notice in LICENSE starts from. */
export const copyrightYear = 2026;

/** FNV-1a fingerprint of the record above. Regenerate it if you fork — do not delete it. */
const AUTHOR_FINGERPRINT = "17b86f1f";

/** FNV-1a (32-bit). Small, dependency-free, and enough to catch an edit. */
function fingerprint(value: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

const actual = fingerprint(
  `${author.name}|${author.email}|${author.url}|${author.github}`,
);

if (actual !== AUTHOR_FINGERPRINT) {
  throw new Error(
    [
      "",
      "  Attribution check failed in src/lib/author.ts.",
      "",
      `  Expected fingerprint ${AUTHOR_FINGERPRINT}, got ${actual}.`,
      "  The author record was changed or removed.",
      "",
      "  This project is MIT licensed (see LICENSE). The licence lets you use,",
      "  modify and sell this code — on one condition: the copyright notice and",
      "  permission notice stay in place. Deleting the attribution is the one",
      "  thing the licence does not permit.",
      "",
      "  Forking it properly:",
      "    1. Keep the original notice in LICENSE and NOTICE.",
      "    2. Add yourself alongside it — do not replace it.",
      "    3. Update AUTHOR_FINGERPRINT to match your new record:",
      `       node -e 'const s=\"NAME|EMAIL|URL|GITHUB\";let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0}console.log(h.toString(16).padStart(8,\"0\"))'`,
      "",
      `  Questions: ${author.email}`,
      "",
    ].join("\n"),
  );
}
