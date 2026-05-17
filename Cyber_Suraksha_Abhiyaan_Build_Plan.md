# Cyber Suraksha Abhiyaan — Complete Build Plan

---

## Project Overview

**Cyber Suraksha Abhiyaan** is a Next.js TypeScript web application aimed at educating common Indian users about online frauds, safe digital practices, and cyber hygiene through an engaging and interactive platform.

---

## Project Architecture

```
cyber-suraksha-abhiyaan/
├── app/
│   ├── layout.tsx                  # Root layout with navbar
│   ├── page.tsx                    # Main single-page app
│   └── stories/
│       └── page.tsx                # Dedicated stories page
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TopFrauds.tsx
│   │   ├── LearnByScenario.tsx
│   │   ├── SafePractices.tsx
│   │   ├── SafeAlerts.tsx
│   │   ├── SpotTheFraud.tsx
│   │   ├── Videos.tsx
│   │   ├── Activities.tsx
│   │   └── AboutUs.tsx
│   └── ui/
│       ├── Modal.tsx
│       ├── RubikFlipCard.tsx
│       └── QuizCard.tsx
├── data/
│   ├── frauds.ts
│   ├── scenarios.ts
│   ├── practices.ts
│   ├── alerts.ts
│   ├── spotQuiz.ts
│   └── stories.ts
└── public/
    └── images/
```

---

## Design System

| Token       | Value                          |
|-------------|--------------------------------|
| Primary     | `#1a56db` — Trust Blue         |
| Accent      | `#f05252` — Alert Red          |
| Success     | `#0e9f6e` — Safe Green         |
| Warning     | `#ff5a1f` — Caution Orange     |
| Background  | `#f9fafb` — Off-White          |
| Heading Font | Poppins                       |
| Body Font   | Inter                          |
| Theme       | Light throughout               |

---

## Key Technical Decisions

| Decision              | Choice                                                                   |
|-----------------------|--------------------------------------------------------------------------|
| Framework             | Next.js 14 App Router (TypeScript)                                       |
| Styling               | Tailwind CSS — utility-first, fully responsive                           |
| Component Library     | **Aceternity UI** — copy-paste animated components (ui.aceternity.com)   |
| Animations            | Framer Motion (used internally by Aceternity UI components)              |
| 3D Flip Effect        | Pure CSS `rotateY(180deg)` + Aceternity `3D Card Effect` for depth       |
| Quiz Randomisation    | Fisher-Yates shuffle for non-repeating question sets                     |
| State Management      | React `useState` + `useEffect` (no external store)                       |
| Data Layer            | Static TypeScript files — fast, offline-capable                          |
| Routing               | Next.js App Router (`/` and `/stories`)                                  |
| Smooth Scroll         | CSS `scroll-behavior: smooth` + JS `scrollIntoView`                      |

---

## Aceternity UI Component Map

> All components from **https://ui.aceternity.com/components** — copy-paste directly into `/components/ui/`.
> Install peer dependencies: `npm install framer-motion clsx tailwind-merge`

### Installation Pattern (per component)
Each Aceternity component is copy-pasted from the docs into `components/ui/<component-name>.tsx`. They use Tailwind + Framer Motion and are shadcn-compatible. No separate npm package is needed beyond peer deps.

---

### Component → Section Mapping

| Aceternity Component | URL Slug | Used In | Purpose |
|---|---|---|---|
| **Resizable Navbar** | `/components/resizable-navbar` | Navbar | Animated navbar that shrinks/expands on scroll; replaces custom Navbar.tsx |
| **Floating Dock** | `/components/floating-dock` | Navbar (mobile) | Mac-style floating nav for mobile bottom bar |
| **Background Lines** | `/components/background-lines` | Hero | Animated SVG wave lines behind the hero section |
| **Aurora Background** | `/components/aurora-background` | Hero | Subtle aurora/gradient shimmer as hero backdrop |
| **Container Text Flip** | `/components/container-text-flip` | Hero | Tagline word flip — cycles "Jaago → Samjho → Surakshit Raho" |
| **Colourful Text** | `/components/colourful-text` | Hero | Applies vibrant colour cycling to "Cyber Suraksha Abhiyaan" heading |
| **Magnetic Button** | `/components/magnetic-button` | Hero | "Start Learning" and "Report Fraud" CTA buttons with cursor-drift effect |
| **Sticky Banner** | `/components/sticky-banner` | Global | "Cybercrime Helpline: 1930" top banner that hides on scroll |
| **Card Spotlight** | `/components/card-spotlight` | Top Frauds | Fraud type cards — radial spotlight follows cursor on hover |
| **3D Card Effect** | `/components/3d-card-effect` | Top Frauds | Perspective tilt on fraud cards to make them pop on hover |
| **Expandable Cards** | `/components/expandable-card` | Top Frauds (alt) | Alternative: expand card inline instead of a separate modal |
| **Animated Modal** | `/components/animated-modal` | Top Frauds | Full story popup — smooth scale/fade entrance animation |
| **Focus Cards** | `/components/focus-cards` | Learn by Scenario | Question cards — hovered card focuses, others blur |
| **Pointer Highlight** | `/components/pointer-highlight` | Learn by Scenario | Highlights correct/wrong answer options with pointer effect |
| **Tracing Beam** | `/components/tracing-beam` | Learn by Scenario | Vertical beam traces quiz progress as user scrolls down |
| **Background Ripple Effect** | `/components/background-ripple-effect` | Learn by Scenario | Ripple on answer click to signal correct/wrong selection |
| **3D Card Effect** | `/components/3d-card-effect` | Safe Practices | Flip card front — 3D tilt on the practice item cards |
| **Apple Cards Carousel** | `/components/apple-cards-carousel` | Safe Practices | Horizontal carousel for switching between tab categories |
| **Lens** | `/components/lens` | Safe Practices | Magnifier lens on practice images — zoom effect on hover |
| **Animated Testimonials** | `/components/animated-testimonials` | Safe Alerts | Cycles through alert tips with smooth slide/fade animation |
| **Background Beams With Collision** | `/components/background-beams-with-collision` | Safe Alerts | Dynamic animated background behind the alerts section |
| **Card Spotlight** | `/components/card-spotlight` | Safe Alerts | Alert cards with spotlight glow to draw attention |
| **Text Hover Effect** | `/components/text-hover-effect` | Spot the Fraud | Section heading animated gradient outline on hover |
| **Draggable Card** | `/components/draggable-card` | Activities (Drag & Drop) | Tiltable, draggable scenario cards for "Safe or Unsafe?" activity |
| **Compare** | `/components/compare` | Activities | Side-by-side comparison of safe vs unsafe examples |
| **Encrypted Text** | `/components/encrypted-text` | Activities (URL Spotter) | Reveal phishing URLs character-by-character for dramatic reveal |
| **Animated Testimonials** | `/components/animated-testimonials` | Stories Page | Story cards cycling with image + narrative preview |
| **Tracing Beam** | `/components/tracing-beam` | Stories Page | Scroll-following beam beside the full story narrative |
| **Background Gradient Animation** | `/components/background-gradient-animation` | Stories Page | Smooth shifting gradient behind story hero image |
| **Focus Cards** | `/components/focus-cards` | Videos Section | Video thumbnail grid — hover focuses one, blurs others |
| **3D Marquee** | `/components/3d-marquee` | Videos Section | Auto-scrolling 3D grid of video thumbnails for visual impact |
| **Animated Tooltip** | `/components/animated-tooltip` | About Us | Team/contributor avatar cards with tooltip on hover |
| **World Map** | `/components/world-map` | About Us | Animated world map showing states/cities affected by cyber fraud |
| **Background Beams** | `/components/background-beams` | Report Fraud | Animated beam background behind the emergency helpline banner |
| **Stateful Button** | `/components/stateful-button` | Report Fraud | "Copy Helpline Number" button with loading → success state |
| **Google Gemini Effect** | `/components/google-gemini-effect` | About Us / Hero | SVG path scroll effect for a premium visual moment |

---

### Aceternity Component Detail Notes

**Resizable Navbar** (`/components/resizable-navbar`)
```
- Shrinks width as user scrolls down, expands back at top
- Drop-in replacement for custom Navbar — configure links array
- Handles mobile automatically with built-in responsive behaviour
- Add `scroll-spy` logic via IntersectionObserver on top
```

**3D Card Effect** (`/components/3d-card-effect`)
```
- Wrap each fraud card's JSX in <CardContainer> + <CardBody> + <CardItem>
- translateZ values control depth: title at z=60, image at z=100, badge at z=40
- Works perfectly on Top Frauds AND Safe Practices sections
```

**Animated Modal** (`/components/animated-modal`)
```
- Compound component: <Modal>, <ModalTrigger>, <ModalBody>, <ModalContent>, <ModalFooter>
- Pass fraud story content into <ModalContent>
- Built-in backdrop blur + scale animation + ESC to close
- Replace custom Modal.tsx entirely
```

**Apple Cards Carousel** (`/components/apple-cards-carousel`)
```
- Use for Safe Practices tab categories
- Each card = one category (Mobile Security, Banking, etc.)
- Clicking a card expands it — use this as the "tab" mechanism
- Shows 4-5 practice items inside the expanded card view
```

**Tracing Beam** (`/components/tracing-beam`)
```
- Wrap the entire quiz section or story narrative in <TracingBeam>
- SVG beam auto-adjusts length based on scroll speed
- Gives a "guided reading" feel perfect for educational content
```

**Animated Testimonials** (`/components/animated-testimonials`)
```
- Repurpose for Safe Alerts: quote → alert tip text, name → alert category
- image → alert illustration
- Auto-cycles with prev/next controls — perfect for Do's button
```

**Draggable Card** (`/components/draggable-card`)
```
- Use in Activities section for drag-to-safe/unsafe exercise
- Tiltable on hover, bounces on boundary hit
- Wire onDragEnd position check to determine which bucket it landed in
```

**Sticky Banner** (`/components/sticky-banner`)
```
- Top of layout, above Navbar
- Content: "🚨 Cybercrime Helpline: 1930 | Report at cybercrime.gov.in"
- Red background (#f05252), white text
- Hides on scroll down, reappears on scroll up
```

**Focus Cards** (`/components/focus-cards`)
```
- Grid of scenario question cards in Learn by Scenario
- Hovering one blurs all others — draws focus to the active question
- Also use in Videos section for thumbnail grid
```

**Background Beams With Collision** (`/components/background-beams-with-collision`)
```
- Place behind Safe Digital Alerts section
- Exploding beams add energy to alert content without overwhelming it
- Use light/muted beam colours to keep readability
```

**World Map** (`/components/world-map`)
```
- In About Us — plot animated arcs between Indian cities with high fraud rates
- Cities: Mumbai, Delhi, Hyderabad, Bengaluru, Kolkata, Ahmedabad, Chennai
- Dots pulse on each city — visual impact showing nationwide reach
```

---

### Aceternity Setup Checklist

```bash
# 1. Install peer dependencies
npm install framer-motion clsx tailwind-merge

# 2. Add cn() utility (required by all Aceternity components)
# lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

# 3. Copy each component file from ui.aceternity.com into:
# components/ui/<component-name>.tsx

# 4. Configure tailwind.config.ts to include animations Aceternity needs:
# (each component's doc page lists the exact config additions needed)
```

---

### Components NOT Used (and Why)

| Component | Reason Skipped |
|---|---|
| Macbook Scroll | Too decorative — no functional fit |
| ASCII Art | Off-brand for a trust/safety platform |
| 3D Globe | World Map is more India-relevant |
| Webcam Pixel Grid | Privacy concerns + no functional need |
| Dither Shader | Retro aesthetic doesn't fit light theme |
| Keyboard | No keyboard interaction features needed |
| Terminal | Only relevant if showing code — not applicable |

---

## Phase-by-Phase Build Plan

---

### Phase 1 — Foundation & Layout

**Goal:** Set up the project skeleton, global styles, Aceternity UI, and fully functional Navbar.

**Tasks:**
- Initialise Next.js 14 with TypeScript and Tailwind CSS
- Install Aceternity UI peer dependencies: `npm install framer-motion clsx tailwind-merge`
- Add `cn()` utility to `lib/utils.ts` (required by all Aceternity components)
- Copy Aceternity component files into `components/ui/` as needed per phase
- Configure global CSS — color palette, font imports (Poppins + Inter), base resets
- Build `Navbar.tsx` using **Aceternity Resizable Navbar** (`/components/resizable-navbar`):
  - Links: Home, Top Frauds, Learn by Scenario, Safe Digital Practices, Safe Digital Alerts, Report Fraud, Stories, Videos, Activities, About Us
  - Smooth scroll to section IDs on click
  - Shrinks/expands on scroll automatically (built into Resizable Navbar)
  - Mobile: **Aceternity Floating Dock** (`/components/floating-dock`) as a bottom nav bar
  - Active link highlighting via scroll-spy (`IntersectionObserver`)
  - Report Fraud link positioned between Safe Practices and About Us
- Add **Aceternity Sticky Banner** (`/components/sticky-banner`) above Navbar:
  - Content: "🚨 Cybercrime Helpline: 1930 | Report at cybercrime.gov.in"
  - Red background, hides on scroll down, reappears on scroll up
- Create placeholder `<section id="...">` shells for all sections in `page.tsx`
- Set up root `layout.tsx` with Banner + Navbar and global font classes

**Deliverable:** Navigable skeleton with animated Resizable Navbar, Floating Dock on mobile, and Sticky Banner.

---

### Phase 2 — Data Layer

**Goal:** Define all TypeScript interfaces and populate static data files.

| File            | Contents                                                                 |
|-----------------|--------------------------------------------------------------------------|
| `frauds.ts`     | 8–10 fraud cards — fraud type, victim name, city, ₹ amount, story, do's & don'ts |
| `scenarios.ts`  | 15+ MCQ scenarios — question, 4 options, correct answer, explanation     |
| `practices.ts`  | 8 tab categories × 4–5 items — title, icon, detail text, image pool      |
| `alerts.ts`     | 10–15 alert tips — headline, tip text, severity level, image             |
| `spotQuiz.ts`   | 15 Yes/No questions — scenario, correct answer, explanation              |
| `stories.ts`    | 6–8 full stories — title, illustration, narrative, takeaways array       |

**Fraud Types to Cover:**
- UPI / QR Code Fraud
- Phishing (Email & SMS)
- Digital Arrest Scam
- Job & Work-From-Home Scams
- KYC Update Fraud
- Fake Customer Care
- Loan App Fraud
- Lottery / Prize Fraud
- Investment / Stock Tip Fraud
- Romance / Social Media Fraud

**Deliverable:** Fully typed, populated data layer ready to consume in components.

---

### Phase 3 — Hero Section

**Goal:** Visually engaging landing section that immediately communicates the platform's purpose.

**Aceternity Components Used:**
- **Aurora Background** (`/components/aurora-background`) — shifting gradient aurora as backdrop
- **Background Lines** (`/components/background-lines`) — animated SVG wave lines layered above aurora
- **Colourful Text** (`/components/colourful-text`) — vibrant colour cycling on "Cyber Suraksha Abhiyaan"
- **Container Text Flip** (`/components/container-text-flip`) — tagline flips: "Jaago" → "Samjho" → "Surakshit Raho"
- **Magnetic Button** (`/components/magnetic-button`) — CTA buttons drift toward cursor on hover

**Tasks:**
- Wrap section in `<AuroraBackground>` with `<BackgroundLines>` layered inside
- Website name in `<ColourfulText>` (large, bold, Poppins)
- Tagline in `<ContainerTextFlip words={["Jaago", "Samjho", "Surakshit Raho"]}>`
- Mascot image: **Suraksha Didi** + **Cyber Bhai** characters side-by-side
- Both CTA buttons wrapped in `<MagneticButton>`:
  - "Start Learning" → scrolls to `#top-frauds`
  - "Report Fraud" → scrolls to `#report-fraud`
- Fully responsive — stacked on mobile, side-by-side on desktop

**Deliverable:** Polished animated hero with aurora background, flipping tagline, colourful heading, and magnetic CTAs.

---

### Phase 4 — Top Frauds Section

**Goal:** Card-based fraud showcase with detailed animated modal popups.

**Aceternity Components Used:**
- **3D Card Effect** (`/components/3d-card-effect`) — perspective tilt on fraud cards on hover; wrap each card in `<CardContainer><CardBody>` with `<CardItem translateZ={60}>` for title, `translateZ={100}` for badge
- **Card Spotlight** (`/components/card-spotlight`) — radial spotlight follows cursor inside each card
- **Animated Modal** (`/components/animated-modal`) — full story popup using `<Modal><ModalTrigger><ModalBody><ModalContent><ModalFooter>`

**Tasks:**
- Responsive grid of fraud type cards (3 columns desktop, 1–2 mobile)
- Each card (3D Card Effect + Card Spotlight) displays:
  - Fraud type icon + category tag (`translateZ={40}`)
  - Victim name, city, ₹ amount lost red badge (`translateZ={60}`)
  - Short teaser sentence
- Click card → **Animated Modal** opens with:
  - Full story narrative (2–3 paragraphs)
  - Red-flagged warning signs list
  - ✅ Do's checklist (green)
  - ❌ Don'ts checklist (red)
  - Built-in close button + ESC key + click-outside support
- Accessible: `aria-modal`, `role="dialog"` on ModalBody

**Deliverable:** Fully interactive 3D fraud cards with animated modal popups.

---

### Phase 5 — Learn by Scenario (Interactive Quiz)

**Goal:** Randomised MCQ quiz that educates through real-life fraud scenarios.

**Aceternity Components Used:**
- **Tracing Beam** (`/components/tracing-beam`) — wrap entire quiz section; beam traces scroll progress alongside questions
- **Focus Cards** (`/components/focus-cards`) — answer option cards; hovered option focuses, others blur
- **Background Ripple Effect** (`/components/background-ripple-effect`) — ripple on answer click to signal correct/wrong
- **Pointer Highlight** (`/components/pointer-highlight`) — highlights the correct answer option with pointer border after revealing

**Tasks:**
- Wrap quiz section in `<TracingBeam>` for guided-reading feel
- On page load: Fisher-Yates shuffle on 15+ questions, pick 4 unique ones
- Each question displays:
  - Scenario card (WhatsApp / call / email mockup style)
  - 4 answer options as `<FocusCards>` — hover focuses one, blurs others
- On answer click: `<BackgroundRippleEffect>` fires; correct answer gets `<PointerHighlight>`
- Progress indicator: "Question 2 of 4"
- Score summary screen at the end
- **"Try New Questions"** button reshuffles — guaranteed fresh non-repeating set

**Deliverable:** Tracing-beam guided quiz with focus cards, ripple feedback, and pointer highlight on answers.

---

### Phase 6 — Safe Digital Practices (Tabbed + Rubik's Flip Cards)

**Goal:** Tabbed knowledge base with 3D flip card interaction for each practice item.

**Tabs (8 Categories):**
1. Mobile Security Hygiene
2. Banking & UPI Safety
3. Password Hygiene
4. Social Media Awareness
5. Email & Link Safety
6. Identity & Document Safety
7. Scam Call & Message Awareness
8. Online Shopping Safety

**Aceternity Components Used:**
- **Apple Cards Carousel** (`/components/apple-cards-carousel`) — horizontal carousel for switching tab categories; each card = one category; clicking expands to show practice items inside
- **3D Card Effect** (`/components/3d-card-effect`) — each practice item card has perspective tilt; front face = title + icon, back face = detail + image via CSS `rotateY` flip
- **Lens** (`/components/lens`) — magnifier zoom on practice images when back face is revealed

**Tasks:**
- Use `<AppleCardsCarousel>` as the category tab selector (replaces custom tab bar)
- Expanded category shows grid of practice cards built with `<CardContainer>` (3D Card Effect)
- CSS `rotateY(180deg)` flip on click reveals back face with image + detail text
- `<Lens>` wraps the image on back face for zoom-on-hover
- Image cycles through a pool on each flip — no repetition
- Smooth `AnimatePresence` transition when switching categories

**Deliverable:** Apple-carousel category selector with 3D flip practice cards and lens zoom on images.

---

### Phase 7 — Safe Digital Alerts

**Goal:** Rotating alert tips with animated image transitions on each interaction.

**Aceternity Components Used:**
- **Animated Testimonials** (`/components/animated-testimonials`) — repurposed: quote → alert tip text, name → category, image → alert illustration; built-in prev/next cycling
- **Background Beams With Collision** (`/components/background-beams-with-collision`) — dynamic animated beams behind the section for visual energy
- **Card Spotlight** (`/components/card-spotlight`) — spotlight glow on individual alert cards

**Tasks:**
- `<BackgroundBeamsWithCollision>` wraps the entire section
- `<AnimatedTestimonials>` drives the tip cycling:
  - "Do's" / "Next Tip" button maps to built-in next() trigger
  - Tip image flips with built-in slide animation (replaces custom Rubik flip)
  - Alert tip text, category badge, and severity colour update on each cycle
- `<CardSpotlight>` on surrounding context cards (Info / Warning / Danger cards)
- Color-coded severity: Info → Blue, Warning → Orange, Danger → Red

**Deliverable:** Beam-backed alert section with testimonial-style tip cycling and spotlight cards.

---

### Phase 8 — Can You Spot the Fraud? (Yes/No Quiz)

**Goal:** 15-question binary quiz that sharpens fraud-detection instincts.

**Aceternity Components Used:**
- **Text Hover Effect** (`/components/text-hover-effect`) — section heading "Can You Spot the Fraud?" with animated gradient outline on hover
- **Card Spotlight** (`/components/card-spotlight`) — scenario display card with spotlight glow
- **Stateful Button** (`/components/stateful-button`) — "Yes — Fraud" / "No — Safe" buttons show loading → confirmed state on click
- **Background Ripple Effect** (`/components/background-ripple-effect`) — fires on answer selection

**Tasks:**
- Section heading wrapped in `<TextHoverEffect>`
- Questions one at a time; scenario in `<CardSpotlight>` card (SMS / email / call mockup)
- Both answer buttons as `<StatefulButton>` — transitions from idle → checking → correct/wrong
- `<BackgroundRippleEffect>` fires on click
- Running score: "Score: 8/15" visible throughout
- End screen: celebratory message + share button + "Try Again"

**Deliverable:** 15-question quiz with hover-effect heading, stateful answer buttons, and ripple feedback.

---

### Phase 9 — Stories Page (`/stories`)

**Goal:** Dedicated route with in-depth real-life inspired fraud stories.

**Aceternity Components Used:**
- **Animated Testimonials** (`/components/animated-testimonials`) — story listing carousel with illustration + title + preview
- **Tracing Beam** (`/components/tracing-beam`) — scroll-following beam beside the full story narrative
- **Background Gradient Animation** (`/components/background-gradient-animation`) — shifting gradient behind the story hero image
- **Pointer Highlight** (`/components/pointer-highlight`) — highlights key takeaway bullets in "What This Teaches Us" box

**Tasks:**
- Separate Next.js App Router page: `app/stories/page.tsx`
- Story listing: `<AnimatedTestimonials>` cycles through story previews
- Full story view:
  - `<BackgroundGradientAnimation>` behind full-width illustration image
  - Story title + category badge
  - Narrative wrapped in `<TracingBeam>` for guided reading
  - **"What This Teaches Us"** callout box with `<PointerHighlight>` on each takeaway
- Navbar accessible on `/stories` page (same `layout.tsx`)

**Stories to Include (6–8):**
1. The Digital Arrest That Wasn't — IPS officer impersonation
2. The Dream Job That Drained My Account — fake HR job offer
3. How a QR Code Emptied My Wallet — UPI QR reversal scam
4. My KYC Update Turned Into a Nightmare — fake bank executive
5. The Investment That Promised 40% Returns — stock tip fraud
6. Love Online, Loss Offline — romance scam story
7. The Lottery I Never Entered — prize/lottery scam
8. Clicked One Link, Lost Everything — phishing link story

**Deliverable:** `/stories` page with animated listing, tracing-beam narratives, and highlighted takeaways.

---

### Phase 10 — Videos Section

**Goal:** Showcase curated cyber safety awareness videos.

**Aceternity Components Used:**
- **Focus Cards** (`/components/focus-cards`) — video thumbnail grid; hovering one focuses it, blurs others
- **3D Marquee** (`/components/3d-marquee`) — auto-scrolling 3D grid of video thumbnails as a visual hero for the section

**Tasks:**
- `<ThreeDMarquee>` at top of section — showcases all video thumbnails in animated 3D grid
- Below: categorised `<FocusCards>` grid (For Seniors / Students / Banking / General)
- Each card: thumbnail + title + duration + play button overlay
- Clicking opens video in **Animated Modal** or new tab
- Links to real GOI / Cyber Dost / MeitY awareness videos on YouTube

**Deliverable:** 3D marquee video showcase + focus-card categorised gallery.

---

### Phase 11 — Activities Section

**Goal:** Hands-on interactive exercises for deeper engagement.

**Aceternity Components Used:**
- **Draggable Card** (`/components/draggable-card`) — tiltable draggable scenario cards for "Safe or Unsafe?" drag activity
- **Encrypted Text** (`/components/encrypted-text`) — phishing URLs revealed character-by-character for dramatic URL reveal in URL Spotter
- **Compare** (`/components/compare`) — side-by-side slider comparing safe vs unsafe examples (real vs phishing site, secure vs weak password)

**Tasks:**
- **Activity 1 — Phishing URL Spotter:**
  - `<EncryptedText>` reveals URL letter-by-letter
  - User clicks "Safe" or "Suspicious" — explanation shown

- **Activity 2 — Password Strength Checker:**
  - `<Compare>` slider: weak password example on left, strong on right
  - Real-time strength meter below input: Weak / Medium / Strong / Very Strong

- **Activity 3 — Drag & Drop "Safe or Unsafe?":**
  - 8 scenario cards as `<DraggableCard>` — tiltable, bounces on boundary
  - Two drop zones: "Safe ✅" bucket and "Unsafe ❌" bucket
  - `onDragEnd` position check determines bucket placement
  - Score revealed at end with explanations

**Deliverable:** Three interactive activities — encrypted URL reveal, compare slider, and draggable card sort.

---

### Phase 12 — Report Fraud Section

**Goal:** Clear, prominent guidance on how and where to report cyber fraud.

**Aceternity Components Used:**
- **Background Beams** (`/components/background-beams`) — animated beam background behind the emergency helpline banner
- **Stateful Button** (`/components/stateful-button`) — "Copy Helpline Number" button: idle → copying → copied!
- **Card Spotlight** (`/components/card-spotlight`) — spotlight glow on each portal/resource link card

**Tasks:**
- `<BackgroundBeams>` wraps the helpline banner at the top
- Emergency banner: "🚨 Cybercrime Helpline: **1930**" with `<StatefulButton>` to copy number
- Step-by-step guide: "How to Report in 3 Steps" (numbered, icon per step)
- `<CardSpotlight>` cards for direct links:
  - National Cyber Crime Reporting Portal — `cybercrime.gov.in`
  - Helpline 1930
  - State police cyber cell links (top 5 states)
- "What to Keep Ready" checklist: Transaction ID, screenshots, bank details, incident time

**Deliverable:** Beam-backed report section with stateful copy button and spotlight resource cards.

---

### Phase 13 — About Us Section

**Goal:** Communicate the mission, initiative background, and credibility.

**Aceternity Components Used:**
- **World Map** (`/components/world-map`) — animated arcs between Indian cities with high fraud rates (Mumbai, Delhi, Hyderabad, Bengaluru, Kolkata, Ahmedabad, Chennai); pulsing dots per city
- **Animated Tooltip** (`/components/animated-tooltip`) — team/contributor avatar cards with stacked images + tooltip name reveal on hover
- **Background Gradient Animation** (`/components/background-gradient-animation`) — shifting gradient behind mission statement block

**Tasks:**
- `<BackgroundGradientAnimation>` behind mission statement paragraph
- `<WorldMap>` with animated arcs showing nationwide cyber fraud reach across Indian cities
- Key stats row (illustrative): frauds reported, users educated, states covered
- Partner logos: MeitY, Cyber Dost, National Cyber Crime Portal
- `<AnimatedTooltip>` for team/contributor avatar row
- Social links: Twitter/X (@cyberdost), official portal

**Deliverable:** World map of fraud reach, animated tooltip team row, gradient mission block.

---

### Phase 14 — Polish & QA

**Goal:** Production-ready quality across all sections.

**Aceternity Components Used:**
- **Google Gemini Effect** (`/components/google-gemini-effect`) — scroll-driven SVG path animation used as a premium visual divider between major sections
- **Loaders** (`/components/loader`) — minimal loaders for any async/lazy-loaded sections

**Tasks:**
- Insert `<GoogleGeminiEffect>` as a decorative scroll-triggered divider (e.g., between Hero and Top Frauds)
- `<Loader>` on any lazy-loaded section while it hydrates
- Full mobile responsiveness audit (320px → 1440px)
- Keyboard navigation: Tab, Enter, ESC for all Aceternity modals (built-in)
- ARIA labels and roles on all interactive elements
- `next/image` optimisation for all images
- Page loading performance — lazy load sections below the fold
- SEO: meta tags, Open Graph, title/description in `layout.tsx`
- Favicon and PWA manifest (optional)
- Final design consistency pass — spacing, typography scale, color usage

---

## Build Sequence Summary

| Phase | Focus                             | Key Aceternity Components                                       | Key Output                                  |
|-------|-----------------------------------|-----------------------------------------------------------------|---------------------------------------------|
| 1     | Foundation & Layout               | Resizable Navbar, Floating Dock, Sticky Banner                  | Animated navbar + shells                    |
| 2     | Data Layer                        | —                                                               | All TypeScript data files populated         |
| 3     | Hero Section                      | Aurora Background, Background Lines, Colourful Text, Container Text Flip, Magnetic Button | Animated hero with flipping tagline |
| 4     | Top Frauds + Modal                | 3D Card Effect, Card Spotlight, Animated Modal                  | 3D fraud cards with animated modals         |
| 5     | Learn by Scenario Quiz            | Tracing Beam, Focus Cards, Background Ripple, Pointer Highlight | Guided quiz with ripple + focus cards       |
| 6     | Safe Practices Tabs + Flip Cards  | Apple Cards Carousel, 3D Card Effect, Lens                      | Carousel tabs with 3D flip cards + lens     |
| 7     | Safe Digital Alerts               | Animated Testimonials, Background Beams With Collision, Card Spotlight | Beam-backed cycling alert tips        |
| 8     | Spot the Fraud Yes/No Quiz        | Text Hover Effect, Card Spotlight, Stateful Button, Background Ripple | Yes/No quiz with stateful buttons    |
| 9     | Stories Page (`/stories`)         | Animated Testimonials, Tracing Beam, Background Gradient, Pointer Highlight | Story listing + tracing-beam reader |
| 10    | Videos Section                    | Focus Cards, 3D Marquee                                         | 3D marquee + focus-card video gallery       |
| 11    | Activities Section                | Draggable Card, Encrypted Text, Compare                         | Drag sort, URL reveal, compare slider       |
| 12    | Report Fraud Section              | Background Beams, Stateful Button, Card Spotlight               | Beam banner + copy button + spotlight cards |
| 13    | About Us Section                  | World Map, Animated Tooltip, Background Gradient Animation      | India fraud map + team tooltips             |
| 14    | Polish & QA                       | Google Gemini Effect, Loaders                                   | Section dividers + performance polish       |

---

## Navbar Link → Section ID Mapping

| Navbar Link           | Section ID              |
|-----------------------|-------------------------|
| Home                  | `#home`                 |
| Top Frauds            | `#top-frauds`           |
| Learn by Scenario     | `#learn-scenario`       |
| Safe Digital Practices| `#safe-practices`       |
| Safe Digital Alerts   | `#safe-alerts`          |
| Report Fraud          | `#report-fraud`         |
| Stories               | `/stories` (new route)  |
| Videos                | `#videos`               |
| Activities            | `#activities`           |
| About Us              | `#about-us`             |

---

*Cyber Suraksha Abhiyaan — Jaago, Samjho, Surakshit Raho*
