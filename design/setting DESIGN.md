---
name: Ambient AI Assistant
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#414755'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc1'
  primary: '#0058bc'
  on-primary: '#ffffff'
  primary-container: '#0070eb'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5d5e63'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe4'
  on-secondary-container: '#626267'
  tertiary: '#006384'
  on-tertiary: '#ffffff'
  tertiary-container: '#007ea6'
  on-tertiary-container: '#fbfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#c1e8ff'
  tertiary-fixed-dim: '#74d1ff'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#004d67'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  margin-page: 40px
  gutter: 24px
  padding-card: 20px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style

This design system is built upon the principles of clarity, weightlessness, and precision. It targets a professional audience that values productivity without visual noise, evoking an emotional response of calm and focused intelligence. 

The aesthetic is a hybrid of **Minimalism** and **Glassmorphism**, heavily influenced by modern macOS desktop environments. It leverages transparency and background blurring to create a sense of depth and spatial awareness. The interface does not compete with the user's content; instead, it provides a high-end, "airy" vessel for interaction. Every element is designed to feel like a physical layer of polished glass floating over a clean, well-lit workspace.

## Colors

The color strategy for this design system is strictly monochromatic to maintain a high-end, "pro" feel, using an **Electric Blue** as the sole functional accent. 

- **Primary:** A vibrant Electric Blue (#007AFF) used exclusively for primary actions, active states, and key focus indicators.
- **Neutral:** A range of greys derived from the system-native palette, focusing on high-brightness whites and soft slates for secondary text.
- **Surface:** Surfaces are not solid colors but translucent layers. The base "Paper" white is used for background contrast, while active surfaces utilize a "Frosted" effect to allow underlying context to bleed through subtly.

## Typography

This design system utilizes **Inter** as its core typeface, chosen for its exceptional legibility and similarity to the macOS system font (San Francisco). 

The typographic hierarchy emphasizes whitespace. Headlines are tight and bold with negative letter spacing to feel modern and authoritative. Body text uses the "Standard" 15px size common in desktop applications for optimal readability in multi-column layouts. Labels and captions are used sparingly, often in slightly heavier weights or subtle uppercase treatments to provide structural metadata without cluttering the view.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. The main application window maintains a structured 12-column grid for complex settings or history views, but transitions to a centered, "Safe Area" focused layout for chat interactions to minimize eye strain.

We employ an 8px spacing rhythm. Large external margins (40px) ensure the interface feels airy and unconstrained. Content is grouped into logical "stacks" where vertical spacing between related elements is minimal (4px-12px) to maintain strong visual proximity, while distinct sections are separated by significant gaps (24px+) to leverage white space as a structural tool.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** rather than traditional shadow-casting. 

1.  **Backdrop Blur:** All primary floating panels (sidebars, modals, chat bubbles) must use a `backdrop-filter: blur(25px)`. This creates a frosted glass effect that suggests the UI is floating directly above the user's desktop or background content.
2.  **Refined Borders:** Elements are defined by a 1px "Inner Glow" border (`rgba(255, 255, 255, 0.5)`) on the top and left edges, and a slightly darker stroke on the bottom and right. This mimics the way light catches the edge of a glass pane.
3.  **Ambient Shadows:** When shadows are used for extreme elevation (e.g., a modal), they should be exceptionally large and diffused: `0px 20px 50px rgba(0, 0, 0, 0.08)`. The goal is a soft, ambient occlusion rather than a sharp drop shadow.

## Shapes

The shape language is consistently **Rounded (Level 2)**. This mirrors the corner radius of hardware (MacBook screens) and native macOS windows. 

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Containers:** Main application cards and chat containers use a 1rem (16px) radius to feel approachable and high-end.
- **Interactive States:** Hover states on list items should use a subtle 0.25rem radius to provide a "soft" selection feel that doesn't feel overly boxy.

## Components

- **Glass Cards:** The foundational container. Use a semi-transparent white background with a heavy backdrop blur and the refined 1px border mentioned in the Elevation section.
- **Primary Buttons:** Solid Electric Blue with white text. No gradients; use a subtle opacity shift on hover (0.9) to maintain the "light" feel.
- **Ghost Buttons:** Transparent background with the 1px refined border. Text is the primary blue or a dark neutral.
- **Text Inputs:** Use a "Field" style—low-opacity white fill (10%) that darkens slightly on focus. The focus state is indicated by a 2px Electric Blue ring with a slight outer glow.
- **AI Chat Bubbles:**
    *   *User:* Solid white or light grey with high contrast.
    *   *Assistant:* Glass-effect container to distinguish the AI's presence as a system-native layer.
- **Segmented Controls:** A pill-shaped background with a sliding glass "thumb" to indicate the active selection, mimicking the macOS Control Center.
- **Empty States:** Utilize large amounts of whitespace and monochromatic line-art icons to maintain the high-end, minimal aesthetic.