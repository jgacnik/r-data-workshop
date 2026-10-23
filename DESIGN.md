---
name: Data Analysis in R
description: A restrained university course catalogue for a practical R workshop.
colors:
  course-paper: "#ffffff"
  course-ink: "#20242a"
  course-muted: "#555d68"
  course-blue: "#002fa7"
  course-blue-dark: "#002374"
  course-wash: "#f7f7f8"
  course-line: "#dedfe3"
typography:
  display:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(3.25rem, 5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-.03em"
  headline:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.03em"
  title:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 500
  body:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "1.0625rem"
    lineHeight: 1.65
  label:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: ".875rem"
rounded:
  control: "2px"
  flat: "0"
spacing:
  compact: ".5rem"
  standard: "1rem"
  section: "1.5rem"
  wide: "2.5rem"
  major: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.course-blue}"
    textColor: "{colors.course-paper}"
    rounded: "{rounded.control}"
    padding: ".65rem 1.125rem"
  button-primary-hover:
    backgroundColor: "{colors.course-blue-dark}"
    textColor: "{colors.course-paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.course-blue}"
    rounded: "{rounded.control}"
    padding: ".65rem 1.125rem"
  button-link:
    textColor: "{colors.course-blue}"
    padding: ".65rem 0"
  navigation:
    backgroundColor: "{colors.course-paper}"
    textColor: "{colors.course-muted}"
  lesson-row:
    backgroundColor: "{colors.course-paper}"
    textColor: "{colors.course-ink}"
    padding: "1rem 0"
  material-row:
    backgroundColor: "{colors.course-paper}"
    textColor: "{colors.course-ink}"
    padding: "1.5rem 0"
---

# Design System: Data Analysis in R

## Overview

**Creative North Star: "University course catalogue"**

The university course catalogue uses white ground, charcoal reading type, blue actions, and fine rules. Its character is restrained and institutional; the workshop sequence supplies the structure.

The existing institutional logo remains compact in the navigation. Home, Setup, and Materials share this system; the presentation decks retain their separate existing slide styling.

The homepage opening section carries three overlapping blue density curves as a decorative SVG background (`figures/course-density.svg`). The accepted treatment uses 14% opacity and a 1.2 scale, with the artwork concentrated toward the right. It stays behind the opening content and is hidden from assistive technology; mobile confines the artwork to the upper 360px.

On screens at least 1500px wide, Home also has full-length outer-margin plots: a connected scatterplot on the left and varied violins on the right, at 16% opacity. Setup keeps a plain reading ground and clear table-of-contents space. Materials uses only a small decorative scatterplot beside its title above 700px; its resource rows remain plain. These CSS background decorations carry no accessible content or interaction.

**Key Characteristics:**

- White paper and fine neutral dividers.
- One sans-serif family with clear size and weight hierarchy.
- Numbered lesson headings and direct actions.
- Flat surfaces with short colour transitions.

## Colors

A single blue accent sits against a neutral reading palette. Token names match the custom properties in `site.css`.

### Primary

- **Course blue:** Links, filled actions, active navigation, the preparation rule, and keyboard focus.
- **Deep course blue:** Hover, focus, and active fill for primary buttons; hover colour for ordinary links.

### Neutral

- **Paper:** Page and navigation ground; reversed text on filled buttons.
- **Charcoal ink:** Body text, headings, and major section rules.
- **Muted slate:** Supporting descriptions, instructor line, and resting navigation.
- **Pale wash:** Lesson interaction tint, code ground, and instructional callout ground.
- **Fine grey:** Navigation, row, tab, footer, and secondary control borders.

The focus custom property aliases course blue. No secondary accent family is established.

## Typography

The site uses the Helvetica Neue, Helvetica, Arial, sans-serif stack throughout. Headings use medium weight (500), compact negative tracking, and balanced wrapping; supporting copy stays quieter through size and colour.

The frontmatter records source rem values. In the rendered Materials mobile page, the Quarto/Bootstrap root computes to **17px**, overriding the stylesheet's `html { font-size: 16px }`. Body text therefore computes to **18.0625px**. This is an observed cascade discrepancy, not a new root-size requirement.

- **Display:** Homepage title uses the display role; below 700px it changes to `clamp(3rem, 10vw, 4rem)`.
- **Headline:** Inner-page title uses the headline role; below 700px it is `2.5rem` (observed 42.5px).
- **Section:** Inner document sections use `1.75rem`; homepage syllabus and usage headings use `1.9375rem`, reducing to `1.75rem` below 700px.
- **Title:** Lesson and material titles use the title role (observed Materials 21.25px); homepage lesson titles reduce to `1.125rem` below 700px.
- **Body:** The body role is the baseline; opening homepage copy uses `1.125rem/1.6`, reducing to the baseline size below 700px.
- **Label:** Lesson actions and supporting homepage descriptions use the label size; material descriptions use `.9375rem`, and material buttons use `.875rem` (observed 14.875px).

**The Readable Sequence Rule.** Do keep lesson numbers inside their headings at the same size as the lesson title.

## Layout

The website uses open document flow rather than enclosing each section in a panel. The shared navigation and homepage content have a maximum width of 1248px and a width of `100% - 6rem`; below 700px the width becomes `100% - 2.5rem`. Navigation minimum height is 90px, reducing to 76px below 991px. The logo's maximum height is 34px, reducing to 30px below 700px.

The homepage introduction has two columns (2:1) with a fluid gap; its syllabus has a 300px heading column and a flexible lesson column. At 1100px the syllabus heading column becomes 240px, then the syllabus stacks below 991px. The introduction stacks below 700px. Usage and download grids also become single-column below 700px.

Material rows place descriptions beside actions on wide screens and stack below 1100px. On mobile, homepage slide actions follow the lesson description. Inner-page paragraphs cap at 70ch. Recurring spacing values in the frontmatter describe observed repeated dimensions, not a newly imposed scale.

## Elevation & Depth

Website buttons and instructional callouts have no shadow. Fine rules establish divisions; the pale wash adds restrained emphasis and interaction feedback. Homepage lesson rows tint on hover or focus within, while their title links become blue and underlined.

**The Flat Surface Rule.** Separate content with spacing and fine rules; reserve the pale wash for restrained state and instructional emphasis.

## Shapes

Buttons and inline code have barely rounded corners (2px). Tabs and instructional callouts have square corners (0). One-pixel rules carry the repeated linear structure; the preparation accent is a stronger three-pixel rule. The course numbering is ordinary heading text, not a badge shape.

## Components

### Buttons

Filled primary actions use course blue with paper text; deep blue handles hover, focus, and active states. Secondary actions have a transparent ground and fine grey border; hover adds the pale wash and blue border. General padding is `.65rem 1.125rem`, with medium weight and `1rem/1.5` type. Materials row actions use `.5rem .75rem` padding and label-sized type. Link actions remove horizontal padding and retain underlines. Inline code inside action buttons inherits the button's text colour and has a transparent background.

All keyboard targets use a two-pixel blue outline with four-pixel offset. Button colour and border transitions take 160ms with ease-out timing; reduced motion removes button and lesson-row transitions.

### Navigation

The compact institutional brand sits before Setup and Materials. Its site title uses the shared Helvetica stack at regular weight (400) with -.01em tracking, keeping it in the same typographic register as the reading content. Resting navigation is muted slate; active, hovered, and focused links are blue. The active link gains a two-pixel underline. Below 991px Quarto's navigation collapses behind its toggle; search remains directly available.

### Lesson and material rows

Fine bottom rules separate the course sequence. A number and lesson name form one heading, for example “1. Introduction to R.” Homepage rows link to slides; Materials pairs interactive slides with PDF actions. Each action has a distinct lesson-specific accessible name while visible labels stay concise. Descriptions remain plain text beneath the title. Sidecar examples preserve the current wording and state treatment without introducing new controls.

### Operating-system tabs and instructional callouts

Setup tabs are text labels above a fine rule; selection adds a blue two-pixel underline. Both OS tab groups share the selected platform, accessible state and keyboard tab stops. The choice persists on reload; scripts/setup-tabs.js supplements Quarto grouping. The content has top padding without a panel shell. Instructional callouts use a pale wash, a fine border, square corners, and no shadow. Tip headers share the neutral wash, with a course-blue title and the existing Bootstrap lightbulb icon; they do not use Quarto's default green. Existing Quarto search and code blocks retain their framework behavior; no new form-field system is established here.

## Do's and Don'ts

### Do:

- Do keep lesson numbers inside their headings at the same size as the lesson title.
- Do use blue to identify links, primary actions, and selected navigation.
- Do stack content in reading order on narrow screens.
- Do preserve the existing institutional logo and its compact navigation placement.

### Don't:

- Don't turn lesson numbers into tiny detached labels.
- Don't introduce pills, shadows, decorative labels, or an oversized logo into the website.
- Don't apply this website system to the existing presentation decks without a separate design decision.
