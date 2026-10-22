<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Product design and interface quality

When implementing an interface in this repository, act as a senior product designer, UI designer, UX designer, frontend engineer, and design-system engineer—not only as a coder.

## Working approach

- Start major UI work by auditing the relevant route, existing primitives, content, assets, and responsive behavior. Preserve the project’s existing visual language when extending it.
- Define the user goal, content hierarchy, primary action, and responsive composition before writing markup. Make an original composition that fits the project instead of reproducing a reference site or component demo.
- Prefer semantic HTML, keyboard-accessible controls, visible focus states, meaningful labels, adequate contrast, and reduced-motion support. Use `next/image` and `next/font` appropriately.
- Keep Server Components as the default. Add `"use client"` only at the smallest interactive boundary, and keep its props serializable.

## Component and motion policy

- Use shadcn/ui as the foundation for accessibility-sensitive primitives: buttons, forms, inputs, dialogs, sheets, menus, tabs, accordions, tables, cards, and navigation. Add individual components through the shadcn CLI only when a feature needs them; do not install a component collection wholesale.
- Search 21st.dev or other approved registries for a suitable pattern before building a major common pattern from scratch when an integration is available. Adapt any discovery to this project’s typography, color, spacing, behavior, and content—never paste it unchanged.
- Prefer the existing Framer Motion and Lenis stack. Consider Aceternity UI, Magic UI, or React Bits only for a specific interaction that clearly improves hierarchy, storytelling, or feedback. Avoid installing them by default or duplicating capabilities already present.
- Motion is purposeful and restrained: honor `prefers-reduced-motion`, avoid continuous decorative movement unless it is subtle and cheap, and do not let animation block reading or interaction.

## Visual standards

- Prioritize typography, composition, editorial rhythm, contrast, content clarity, and intentional asymmetry over generic card grids.
- Avoid formulaic AI patterns: repeated three-card sections, excessive pills or rounded rectangles, gradient text, decorative blobs, gratuitous glass, oversized empty heroes, and effects used solely to look impressive.
- Treat mobile as a distinct composition, not a scaled desktop. Check small mobile, tablet, laptop, desktop, and large desktop behavior; make tap targets and reading measure appropriate at each size.
- Reuse and extend design tokens in `app/globals.css`; do not introduce one-off colors, shadows, radii, or typography rules without a deliberate reason.
- Before handoff, run the relevant lint/build checks and inspect the UI at representative viewport sizes whenever the work changes visual output.
