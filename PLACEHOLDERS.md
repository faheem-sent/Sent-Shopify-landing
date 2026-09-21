# Fill these in before anyone outside the team sees this page

Both placeholders are rendered literally and on purpose, so they are
impossible to miss in review. There are **three** occurrences across two
placeholder strings.

## `[YOUR PRICE]` — 2 occurrences

| # | Where it appears on the page | Source |
| - | - | - |
| 1 | "Why switch" → right-hand panel → row 4, *One price, one line*: "**[YOUR PRICE]** a month. No theme licence, no app bill, no per-feature upgrade." | `src/data.ts` → `compareHere`, last entry, `detail` |
| 2 | Final CTA → line under the input: "Free while you build. **[YOUR PRICE]** a month once you publish. Cancel whenever." | `src/components/FinalCta.tsx` → paragraph after the form |

## `[CONFIRM: list the providers you support at launch.]` — 1 occurrence

| # | Where it appears on the page | Source |
| - | - | - |
| 3 | FAQ → question 3, *Can I keep my payment provider?*: "Connect the provider you already use and payouts carry on landing in the same account. **[CONFIRM: list the providers you support at launch.]**" | `src/data.ts` → `faqs[2].a` |

## Also worth a decision before launch

Not placeholders, but two things a reviewer should know about:

1. **`Text-faint` (#77747F) measures 4.27:1 on the page background**, so it
   sits just under the WCAG AA 4.5:1 minimum for small text. It is used for
   micro-copy, section labels, the comparison detail lines and the footer
   tagline. The value is exactly as specified, so it has been left alone —
   but raising it to `Text-dim` (#8A8792, which measures 5.56:1) would clear
   the only accessibility finding on the page. This needs a design call.
2. **The "NEW SEASON" kicker inside the storefront preview** uses each
   niche's own accent colour on that niche's product background — for
   ceramics that is 3.56:1. Those colours come straight from the sample
   catalogue, so changing them means changing the sample data.
