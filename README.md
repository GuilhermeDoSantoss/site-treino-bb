# BB·TI — Banco do Brasil TI Exam Preparation Platform

> A complete, gamified study platform designed to help candidates prepare for the **Banco do Brasil Escriturário — Agente de Tecnologia (TI)** public exam (CESGRANRIO), through adaptive practice, mock exams, gamification, performance analytics, and structured study planning.

![Status](https://img.shields.io/badge/status-production--ready-30D5A8?style=flat-square)
![Type](https://img.shields.io/badge/type-frontend--only-5B8AF5?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-7C5CF6?style=flat-square)
![Made with](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JavaScript-F5C842?style=flat-square)

---

## 1. Overview

Public exams in Brazil — especially highly competitive ones like the **Banco do Brasil Agente de Tecnologia (TI)** position — demand consistent, structured, and measurable study. Most candidates rely on a scattered mix of PDFs, spreadsheets, video playlists, and notebooks, with no unified way to track progress, identify weak topics, or simulate real exam conditions.

**BB·TI Study Platform** was created to solve exactly that problem: a **single, self-contained web application** that centralizes the entire preparation journey — from daily study planning to full-length timed mock exams — while keeping the candidate motivated through a gamification layer (XP, levels, streaks, achievements, and weekly rewards).

### Why this project exists

- Concurseiros need **one place** to study, track, and measure progress across multiple subjects (TI, Portuguese, English, Mathematics).
- Motivation tends to drop over long preparation cycles (often 6–12 months) — gamification mechanics help sustain daily engagement.
- Generic quiz apps don't reflect the **actual structure and weight** of the BB 2023 exam (question distribution by area, difficulty levels, time pressure).
- Essay (redação) practice is often neglected, despite being a scored component — this platform includes a dedicated writing lab with self-evaluation.

### Problem it solves

It replaces fragmented study materials with an **integrated dashboard** that:

- Tracks completion percentage per subject and per topic.
- Surfaces weak areas automatically based on real performance data.
- Simulates the real exam (question count, time limits, difficulty distribution based on the 2023 edital).
- Provides instant feedback on quizzes, mock exams, and essays.
- Keeps a study journal and Pomodoro-based focus timer.

### Target audience

- Candidates preparing for **Banco do Brasil — Agente de Tecnologia (TI)** and similar Brazilian banking/public TI exams.
- Software engineers and self-taught developers studying CS fundamentals (DB, algorithms, networks, security) for technical public exams.
- Anyone who wants a **local-first, no-signup, privacy-respecting** study companion (all data stays in the browser via `localStorage`).

### Main objectives

1. Provide a realistic, exam-aligned practice experience.
2. Visualize progress through interactive dashboards and charts.
3. Reinforce consistency through gamification (XP, levels, streaks, badges).
4. Offer a dedicated essay-writing trainer with automated scoring heuristics.
5. Run entirely client-side — deployable for free on GitHub Pages, no backend required.

---

## 2. Features

### 📊 Dashboard (Overview)
- Real-time study overview with level/XP hero card.
- Weekly progress chart and per-category (TI area) breakdown chart.
- Aggregated progress bars per subject group (TI, Portuguese, English, Math).
- Automatic study recommendations based on topics under 30% completion.
- Rotating motivational quotes.

### 🗓 Study Plan
- Full Monday-to-Sunday weekly schedule.
- Daily task lists with estimated duration and XP rewards.
- Per-day completion percentage with visual progress tracking.
- "Week completed" bonus and confetti celebration on full completion.

### ❓ Quiz System (Practice Center)
- 200+ multiple-choice questions across TI, Portuguese, English, and Mathematics.
- Filters by subject, difficulty (Easy / Medium / Hard), and quantity (5 / 10 / 20 / All).
- Detailed explanations after each answer.
- Live score tracking, progress bar, and category badges.
- Post-quiz performance breakdown by subject.

### 🏆 Mock Exams (Simulado)
- Four exam modes: Quick Test (10q), Prática (30q), Mini Simulado (60q), Simulado Completo (100q).
- Realistic difficulty distribution (30% easy / 40% medium / 30% hard).
- Countdown timer with auto-submit on timeout.
- Question navigation map with answered/current state indicators.
- Full performance report with star rating, subject breakdown, and XP rewards.

### ✍️ Essay Writing Laboratory (Redação)
- Curated essay topics filtered by difficulty (Beginner / Intermediate / Advanced).
- Structured writing guide (Introduction → Development 1 → Development 2 → Conclusion).
- Live word counter and structural checklist (thesis, connectives, paragraph structure).
- Automated heuristic scoring (0–100) with actionable feedback tips.
- Essay history with score tracking and reload-for-editing capability.
- Time-management guide aligned with real exam timing.

### 🎮 Gamification
- XP and multi-level progression system with named tiers and icons.
- Daily study streak tracking.
- Weekly reward milestones.
- Achievement badges unlocked through study activity, quiz scores, and consistency.
- Toast notifications, floating XP indicators, and confetti animations on milestones.

### 📚 Learning Resources
- Curated external resources (YouTube videos, courses, documentation) organized by subject.
- Direct links to high-quality references for TI, Portuguese, English, and Mathematics.

### 📈 Analytics & Performance
- 7-day completion trend chart.
- Radar chart of TI subject readiness.
- Polar chart comparing progress across subject groups.
- Summary stat cards: XP, level, streak, pomodoros, topics completed, mock exam history, essay count, days until exam.

### 🏦 BB 2023 Exam Analysis
- Question distribution by area based on the 2023 edital.
- Difficulty distribution chart (easy/medium/hard).
- Recommended study focus chart, prioritized by historical exam weight.
- Curated insight cards highlighting strategic study priorities.

### ⏱ Pomodoro Timer
- Four modes: Pomodoro (25min), Short Break (5min), Long Break (15min), Deep Work (50min).
- Animated SVG progress ring.
- Subject-linked sessions with XP rewards.
- Session history log and daily session counter.

### 📓 Study Journal
- Daily notes, weekly reviews, and monthly reports.
- Persistent entry history with quick-load for editing.

### 💾 Local Persistence
- All progress, achievements, quiz/mock history, essays, journal entries, and timer logs persist via `localStorage`.
- Resilient state loading with safe defaults if storage is corrupted or empty.

---

## 3. Technologies Used

### Frontend
- **HTML5** — semantic structure, accessible navigation, SVG icons.
- **CSS3** — custom design system with CSS variables, responsive grid/flex layouts, dark theme.
- **JavaScript (ES6+)** — vanilla JS, no frameworks, no build step.

### Libraries
- **[Chart.js v4](https://www.chartjs.org/)** — bar, doughnut, radar, polar area, and line charts across Dashboard, Subjects, Analysis, and Analytics pages.

### Browser APIs
- **LocalStorage API** — persistent client-side state management (key: `bb-ti-v6`).
- **DOM API** — dynamic rendering of all pages, cards, and lists.
- **Event Listeners** — navigation, form interactions, quiz/mock/timer controls.
- **Canvas API** — confetti celebration animations and Chart.js rendering.
- **Google Fonts** — JetBrains Mono & Syne for a modern, technical aesthetic.

---

## 4. Project Architecture

The platform is intentionally built as a **lightweight, dependency-free static site** — no bundler, no framework, no backend. This makes it trivially deployable to GitHub Pages, Netlify, Vercel, or any static host.

```
bb-ti-platform/
│
├── index.html        # Main HTML structure — sidebar nav + 13 page sections
├── style.css          # Complete design system (variables, layout, responsive rules)
├── data.js             # All static data: subjects, questions, achievements, plans, resources
├── script.js           # Application logic: state, rendering, charts, gamification
└── README.md
```

### File responsibilities

| File | Responsibility |
|---|---|
| **`index.html`** | Defines the full page structure: sidebar navigation, topbar, and 13 page sections (Overview, Weekly Plan, Subjects, Portuguese, English, Mathematics, Practice/Quiz, Mock Exam, Essay, Resources, Analysis, Timer, Gamification, Journal, Analytics). Each dynamic region has a fixed `id` consumed by `script.js`. |
| **`style.css`** | Centralized design system using CSS custom properties (colors, spacing, radii). Defines responsive breakpoints, sidebar behavior, chart container sizing (fixed-height wrappers to prevent Chart.js layout loops), and component styles for cards, badges, progress bars, and timers. |
| **`data.js`** | Single source of truth for all content: `SUBJECTS_TI/PT/EN/MAT` (topic catalogs), `QUESTIONS` (200+ quiz items), `WEEKLY_PLAN`, `LEVELS`, `ACHIEVEMENTS`, `WEEKLY_REWARDS`, `ESSAY_TOPICS`, `ESSAY_TIPS`, `RESOURCES`, `BB2023` (exam analysis data), `MOTIVATIONS`, and subject-specific daily tips. |
| **`script.js`** | Application core: state management (`loadState`/`saveState`/`updateState`), XP and leveling logic, navigation/routing between pages, render functions for every section, Chart.js initialization and lifecycle management, quiz/mock exam engines, essay evaluation heuristics, Pomodoro timer, and journal persistence. |

> **Note on architecture:** earlier development iterations explored splitting `data.js` into per-domain modules (`StatisticsData.js`, `StudyPlanData.js`, `AchievementsData.js`, `RewardsData.js`, `EssayData.js`, `VideoRecommendationsData.js`). The final production build consolidates these into a single `data.js` loaded via `<script>` tags (rather than ES modules), ensuring the app runs correctly when opened via `file://` or deployed to any static host without CORS/module-loading issues.

---

## 5. Implemented Modules

### 📐 Statistics Module
Covers the probability and statistics content most frequently tested in TI/exact-sciences sections:
- **Probability** — combinatorics, conditional probability, independent events.
- **Bayes' Theorem** — conditional inference problems common in data-related questions.
- **Normal Distribution** — z-scores, standard deviation, percentile reasoning.
- **Statistical Inference** — sampling, confidence intervals, hypothesis basics.
- Backed by a dedicated **question bank** with explanations for each item.

### 🏦 Banking Knowledge Module
Focused on the financial-system knowledge expected from a Banco do Brasil employee:
- **SFN** (Sistema Financeiro Nacional) — structure and regulatory bodies.
- **SELIC** — benchmark interest rate, monetary policy implications.
- **BACEN** (Banco Central do Brasil) — role, instruments, and regulatory scope.
- **CMN** (Conselho Monetário Nacional) — policy-setting structure.
- **LGPD** (Lei Geral de Proteção de Dados) — data protection principles relevant to banking systems.
- **AML** (Anti-Money Laundering) — compliance concepts and detection patterns.

### 💻 Information Technology Module
The core technical syllabus, covering:
- **Machine Learning** — fundamentals, supervised/unsupervised concepts.
- **Databases** — relational modeling, normalization, transactions.
- **SQL** — joins, aggregation, subqueries, indexing.
- **MongoDB** — document modeling, NoSQL concepts.
- **PostgreSQL** — relational engine specifics and SQL dialect nuances.
- **Java 11** — language features, collections, streams.
- **Java EE 8** — enterprise APIs and patterns.
- **Python** — syntax, data structures, common libraries.
- **TypeScript** — typing system and JS interoperability.
- **Big Data** — distributed processing concepts, ecosystem tools.
- **Data Structures & Algorithms** — complexity analysis, common structures (lists, trees, graphs, hash maps) and algorithmic patterns (sorting, searching, recursion).

### 📖 Portuguese Module
- **Grammar** — verb conjugation, agreement (concordância), regency (regência), crase rules.
- **Interpretation** — reading comprehension strategies for exam-style texts.
- **Syntax** — sentence structure, clause analysis, punctuation rules.

Includes a dedicated performance chart and rotating daily grammar tips.

### 🇬🇧 English Module
- **Reading Comprehension** — technical and general text interpretation.
- **Technical English** — IT vocabulary, verb tenses, modals, conditionals, passive voice, phrasal verbs, and connectors relevant to technical documentation.

Includes a dedicated performance chart and rotating daily tips.

### 🔢 Mathematics Module
- **Probability** — combinatorial and applied probability problems.
- **Statistics** — descriptive statistics, variance, standard deviation.
- **Financial Mathematics** — simple and compound interest (`M = C × (1+i)ⁿ`), commonly tested in every edition.
- **Logical Reasoning** — propositional logic, sequences, sets, and pattern recognition.

Includes a dedicated performance chart and rotating daily tips.

---

## 6. Development Journey

### Phase 1 — Dashboard Foundation
Initial creation of the overview dashboard: layout structure, sidebar navigation, level/XP hero card, and the first stat cards displaying overall progress.

### Phase 2 — Quiz System
Implementation of the Practice Center: question bank integration, subject/difficulty/quantity filters, answer selection logic, explanations, and live scoring.

### Phase 3 — Gamification Layer
Introduction of the XP and leveling system, achievement badges, weekly rewards, study streaks, toast notifications, floating XP indicators, and confetti celebrations.

### Phase 4 — Study Planner
Build-out of the weekly study plan grid with daily task lists, per-day progress tracking, and week-completion bonuses.

### Phase 5 — Mock Exam Simulator
Development of the full Simulado engine: configurable exam modes, realistic difficulty distribution, countdown timer, question navigation map, and detailed post-exam reports.

### Phase 6 — Essay Writing Laboratory
Creation of the Redação module: topic library, structured writing guide, live checklist, automated scoring heuristic, essay history, and time-management reference.

### Phase 7 — Data Layer Consolidation
Refactoring of all static content (subjects, questions, achievements, rewards, essay topics, resources, exam analysis data) into a unified, well-documented `data.js` module to simplify maintenance and ensure reliable loading across environments.

### Phase 8 — Bug Fixing & Optimization
Comprehensive QA pass: fixed DOM ID mismatches affecting dashboard UI updates, eliminated duplicate event-listener accumulation on repeated navigation, and verified Chart.js instance lifecycle (destroy-before-recreate) across every chart.

### Phase 9 — Production Readiness
Final integration testing across all 13 pages, responsive verification (mobile/tablet/desktop), localStorage persistence validation, and preparation for static deployment (GitHub Pages).

---

## 7. Bug Fixes and Improvements

### 🧩 DOM Fixes
- **Fixed dashboard ID mismatch**: the Overview "Level Hero" card referenced non-existent element IDs, preventing the level name, XP bar, and total XP display from updating. Corrected to match the actual HTML structure.
- **Eliminated duplicate event listeners**: the Essay (Redação) tab navigation and topic-filter buttons were re-binding click handlers on every page visit, causing handler accumulation. Refactored with one-time initialization guards.
- **Audited all dynamic grids** to confirm `innerHTML` replacement patterns prevent repeated `appendChild` accumulation across re-renders.

### 📊 Chart.js Fixes
- Verified every chart canvas is destroyed (`chart.destroy()`) before being recreated on re-render, preventing memory leaks and duplicate chart instances per canvas.
- Confirmed all chart containers use **fixed-height `.chart-wrap` wrappers** (`130px` / `160px` / `180px` / `220px`) with `position: relative` and absolutely-positioned canvases (`width/height: 100% !important`), eliminating the ResizeObserver feedback loop that previously caused infinite page growth and scrolling.
- All charts use `responsive: true` + `maintainAspectRatio: false` for correct scaling within fixed containers.

### 🎨 CSS Improvements
- Validated responsive behavior across mobile, tablet, and desktop breakpoints, including sidebar collapse/overlay behavior on small screens.
- Confirmed chart container sizing rules apply consistently across Overview, Subject pages, Analysis, and Analytics sections.
- Verified no layout-shift or overflow issues in grid-based components (stat cards, subject cards, badge grids).

### ⚙️ Performance Improvements
- Reduced unnecessary re-renders by scoping initialization logic (option population, listener binding) to run only once per session where appropriate.
- Centralized state access through `loadState()` / `saveState()` / `updateState()` helpers for consistent, predictable localStorage usage.
- Verified `setInterval` timers (Pomodoro, mock exam countdown, top-bar clock) are properly cleared to avoid orphaned intervals.

---

## 8. How to Run the Project

This is a **static, dependency-free web application** — no build tools, no `npm install`, no backend.

### Option 1 — Run locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/bb-ti-study-platform.git

# 2. Move into the project folder
cd bb-ti-study-platform

# 3. Start a local server (choose one)
python3 -m http.server 8000
# or
npx serve .

# 4. Open in your browser
# Visit: http://localhost:8000
```

### Option 2 — Open directly
Simply open `index.html` in any modern browser (Chrome, Firefox, Edge). All core features work without a server, though running via a local server is recommended for consistent behavior.

### Option 3 — Deploy to GitHub Pages

```bash
# From the project root
git add .
git commit -m "Deploy BB·TI Study Platform"
git push origin main

# Then in GitHub:
# Settings → Pages → Source: main branch → / (root)
```

Your platform will be live at:
`https://<your-username>.github.io/bb-ti-study-platform/`

### Start studying
1. Open the **Overview** dashboard to see your current level and progress.
2. Visit **Plano Semanal** to follow your weekly schedule.
3. Use **Questões** for topic-focused quiz practice.
4. Run a **Simulado** for full timed mock exams.
5. Practice writing in the **Redação** lab.
6. Track everything in **Analytics** and **Conquistas**.

---

## 9. Future Enhancements

- 🔐 **User authentication** — multi-device account support.
- ☁️ **Cloud synchronization** — sync progress across devices via a backend (e.g., Firebase, Supabase).
- 🤖 **AI-powered recommendations** — personalized study paths based on performance patterns.
- 📈 **Advanced analytics** — predictive readiness scoring, time-to-target estimations.
- 🏆 **Online ranking system** — leaderboards comparing progress with other candidates.
- 📱 **PWA support** — offline-first installable app experience.
- 🌍 **Internationalization** — support for additional exam boards/languages.
- 🧠 **Expanded question bank** — community-contributed and periodically updated questions aligned with new editals.

---

## 10. Screenshots

> _Add screenshots to a `/screenshots` folder and update the paths below._

| Dashboard | Quiz System |
|---|---|
| ![Dashboard](./screenshots/dashboard.png) | ![Quiz](./screenshots/quiz.png) |

| Mock Exam | Essay Laboratory |
|---|---|
| ![Mock Exam](./screenshots/mock-exam.png) | ![Essay Lab](./screenshots/essay-lab.png) |

| Analytics |
|---|
| ![Analytics](./screenshots/analytics.png) |

---

## 11. Author

**Guilherme dos Santos**
Software Engineer — Backend (Java / Spring Boot) | Software Architecture enthusiast

- 🔗 LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- 💻 GitHub: [github.com/your-username](https://github.com/your-username)
- 📍 Rio de Janeiro, Brazil

---

## 12. License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Guilherme dos Santos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">Built with dedication for the Banco do Brasil Agente de Tecnologia exam — and for everyone on the same journey. 🚀</p>
