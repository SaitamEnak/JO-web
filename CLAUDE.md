# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **Johanna Otranto** — spiritual coach, ontological coach, and mentor. The site is in Spanish and targets an Argentine/Latin American audience. The full homepage copy lives in `content.md` and the design system in `tokens.md`.

There is no build system or framework chosen yet. When scaffolding the site, use `pnpm` for package management.

## Design System

All visual decisions must follow `tokens.md`. Key rules:

- **Backgrounds:** cream tones (`--cream: #F5EDEB`, `--cream-dark: #EDE0DC`)
- **Headings / body text:** `--violet: #2B1F45` for headings, `--soft: #6B5D84` for body
- **Accent:** `--lavender: #A984FF`
- **Gradients:** `--grad-gold`, `--grad-blush`, `--grad-mint` (all start from `#5E457F`)
- **Typography:** Inter Bold for headings/labels, Georgia Bold as italic alt, Mynerve for annotations
- **Decorative separator:** `✦`
- **SVG assets:** Wordmark (279×39) and circular logomark (67×112) are defined as `<symbol>` elements in `carousel-base.html`. Reference them with `<use href="#wordmark">` / `<use href="#logomark">`. Color is controlled via the CSS `color` property.

See `tokens.md` for the exact opacity values used for slide numbers, borders, and wordmark color variants.

## Content

`content.md` contains the complete homepage copy, including all section headings, body text, CTAs, pricing, and product names. Use it as the single source of truth for copy — do not rewrite or paraphrase it.

Key sections: Hero → Free entry points → Philosophy → About → Value ladder (Manual de Manifestación → Sala Despierta tu Poder → Sala Marca Personal → 1:1 sessions) → Closing CTA.

## Instagram Carousels

Use the `/carousel-skill` skill to generate Instagram carousel slides. The skill reads `tokens.md` for design tokens and writes HTML using the SVG symbols from `carousel-base.html`.
