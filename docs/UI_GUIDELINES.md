# UI guidelines

These guidelines describe the current interface; they are not a proposal for a new design system.

## Visual language

- The interface uses a calm green editorial style with soft cards, thin borders, subtle grid/noise/orb backgrounds, rounded pills, and restrained shadows.
- `DM Sans` is the body face. `Playfair Display` is the display face and commonly uses italic green emphasis. Both are imported in `src/index.css` from Google Fonts.
- Use semantic Tailwind color aliases (`bg`, `bgSoft`, `bgCard`, `primary`, `primaryGlow`, `accent`, `textMain`, `textDim`, `textMuted`, `textBody`) rather than introducing literal colors for ordinary UI.
- Light and dark palettes are CSS custom properties on `:root.light` and `:root`. Theme changes occur by toggling the root `light` class.

## Layout and spacing

- Use `section-shell` for general full-page sections and `home-section` for the denser home rhythm. Both cap content at `1400px` and provide responsive horizontal padding.
- Existing pages favor generous vertical space, asymmetric editorial grids at large breakpoints, bordered section divisions, and single-column mobile fallbacks.
- Cards generally use `rounded-xl`, `rounded-2xl`, or `rounded-3xl`, `border-borderSoft`/`border-borderMedium`, and token-based backgrounds.
- Preserve established primitives such as `eyebrow`, `section-title`, `label-tag`, `project-tech-chip`, `text-link`, `button-primary`, `button-secondary`, and `social-button` before creating equivalents.

## Responsive behavior

- Build mobile-first and use the existing `sm`, `md`, `lg`, and occasional `xl` progression.
- Avoid fixed widths that can overflow narrow screens. Existing detail galleries and archives move from one column to two or three columns as space allows.
- Navigation changes to a full-screen animated mobile menu below `lg`; preserve its scroll lock, Escape handling, focus return, and route-close behavior.
- Interactive content may deliberately use different patterns by viewport, such as desktop tabs and a mobile accordion on the About page.

## Motion and interaction

- Framer Motion handles page transitions, section reveals, lightboxes, menus, and interactive emphasis. The recurring easing is `[0.22, 1, 0.36, 1]`, with short transitions for state changes and longer transitions for reveals.
- Respect `useReducedMotion`, `MotionConfig reducedMotion="user"`, Tailwind `motion-reduce:*`, and the global reduced-motion media query. Decorative motion must never be required to understand or operate the page.
- Hover enhancements should have keyboard/focus equivalents where they expose state. Keep touch behavior usable without hover.

## Accessibility and semantics

- Primary page content uses `id="main-content"` as the target for the shell's skip link. Preserve or add that target when editing page wrappers.
- Keep visible `:focus-visible` outlines, semantic landmarks/headings, descriptive alt text, button `type="button"`, and external-link `rel="noreferrer"` conventions.
- Preserve ARIA state on tabs, accordions, menus, filters, lightboxes, live regions, and selectable controls. Decorative SVGs and backgrounds should remain hidden from assistive technology.
- Lightboxes close with Escape, prevent background scrolling, and provide explicit close controls. Maintain these behaviors when editing them.

## Images and content states

- Use `next/image` for ordinary imported images when practical, including accurate `sizes`, `alt`, and intentional `priority` usage.
- Project and achievement models permit missing images. Preserve the existing accessible placeholder treatment rather than assuming every content item has media.
- Treat portfolio text as factual content. Preserve neutral or unconfirmed wording unless the user supplies corrections.
