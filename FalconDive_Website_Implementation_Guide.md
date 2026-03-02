# FalconDive.io — Website Enhancement Implementation Guide

> **Document Version:** 1.0
> **Date:** March 2, 2026
> **Parent Company:** Lognormal Analytics (lognormal.io)
> **Product:** FalconDive — AI-First Value Realization Platform
> **Notification Email:** 3p.sachin.uppal@lognormal.io

---

## Table of Contents

1. [Overview & Objectives](#1-overview--objectives)
2. [Design System — Gaming Theme Reference](#2-design-system--gaming-theme-reference)
3. [Section 1: Client Logos (Social Proof)](#3-section-1-client-logos-social-proof)
4. [Section 2: Testimonials](#4-section-2-testimonials)
5. [Section 3: Case Studies — Dedicated Page](#5-section-3-case-studies--dedicated-page)
6. [Section 4: Real-World Proof — Events & Speaking](#6-section-4-real-world-proof--events--speaking)
7. [Section 5: Team Credibility — Founder Bios](#7-section-5-team-credibility--founder-bios)
8. [Section 6: Legal Credibility — Footer Enhancement](#8-section-6-legal-credibility--footer-enhancement)
9. [Section 7: Product Depth — Detailed Product Page](#9-section-7-product-depth--detailed-product-page)
10. [Section 8: Built by Operators — Gaming Veterans](#10-section-8-built-by-operators--gaming-veterans)
11. [Section 9: Metrics Block — Dedicated Stats Section](#11-section-9-metrics-block--dedicated-stats-section)
12. [Section 10: Media Mentions — Featured & Speaking At](#12-section-10-media-mentions--featured--speaking-at)
13. [Section 11: Clear CTA — Outcome-Based Calls-to-Action](#13-section-11-clear-cta--outcome-based-calls-to-action)
14. [Multi-Step Lead Capture Modal — Specification](#14-multi-step-lead-capture-modal--specification)
15. [Email Notification System](#15-email-notification-system)
16. [Page Placement Map](#16-page-placement-map)
17. [Content Sourcing Checklist](#17-content-sourcing-checklist)

---

## 1. Overview & Objectives

This document is the comprehensive implementation guide for enhancing the FalconDive.io website based on feedback analysis. All new sections must adhere to FalconDive's existing **gaming-inspired dark design scheme** (dark backgrounds, cyan/teal accents, terminal-style UI elements, monospace fonts for labels, scan-line animations).

**Current FalconDive Design DNA (must be preserved):**

- **Background:** Dark (#0a0e17 to #111827 gradient range)
- **Primary accent:** Cyan/Teal (#00e5ff / #00ffd5)
- **Secondary accent:** White text on dark
- **Typography:** Monospace/tech fonts for labels and tags (e.g., `[SECTION_TAG] IDENTIFIER`), clean sans-serif for body
- **UI Patterns:** Terminal windows, scan-line animations, bracket-wrapped section tags, stage/pipeline flows, status badges (OPERATIONAL, ACTIVE, etc.)
- **Interactive Elements:** Hover glow effects, animated counters, progress-bar-style elements

**Key Objective:** Add trust, credibility, and depth to the FalconDive website by sourcing content from the parent company Lognormal Analytics (lognormal.io) and enriching it with FalconDive-specific data.

---

## 2. Design System — Gaming Theme Reference

All new sections must follow these design conventions:

### Section Header Pattern
```
[TAG] SECTION_IDENTIFIER
```
Example: `[SOCIAL_PROOF] TRUSTED_BY_LEADERS`

### Card Pattern
Dark card with subtle border glow on hover:
```css
background: rgba(15, 23, 42, 0.8);
border: 1px solid rgba(0, 229, 255, 0.1);
border-radius: 12px;
backdrop-filter: blur(10px);
transition: border-color 0.3s;
/* On hover: border-color: rgba(0, 229, 255, 0.4); */
```

### Metric Counter Pattern
Large cyan number + small white label below:
```
€45M+         18%          2,400+
Revenue       Avg. Margin  Leakages
Recovered     Uplift       Detected
```

### CTA Button Pattern
- **Primary:** Cyan/teal background, dark text, monospace uppercase
- **Secondary:** Dark background, cyan border, cyan text

### Badge/Tag Pattern
```css
background: rgba(0, 229, 255, 0.1);
border: 1px solid rgba(0, 229, 255, 0.3);
color: #00e5ff;
font-family: monospace;
text-transform: uppercase;
font-size: 0.75rem;
padding: 4px 12px;
border-radius: 4px;
```

---

## 3. Section 1: Client Logos (Social Proof)

**Feedback:** Add real client logos — All logos from Lognormal + Kaizen + 888 + MyGreen + WilliamHill

### Section Tag
```
[SOCIAL_PROOF] TRUSTED_BY_INDUSTRY_LEADERS
```

### Logos to Include

From Lognormal.io case studies and client list:

| # | Client | Industry | Source |
|---|--------|----------|--------|
| 1 | **Fortuna Entertainment Group** | iGaming (CEE) | Lognormal case study |
| 2 | **Tipico** | Sportsbook (Germany) | Lognormal case study |
| 3 | **bet-at-home** | iGaming | Lognormal case study |
| 4 | **Superbahis** | iGaming | Lognormal case study |
| 5 | **Newcross Healthcare** | Healthcare | Lognormal case study |
| 6 | **DAZN** | Media & Entertainment | Lognormal case study |
| 7 | **Kaizen Gaming** | iGaming | Feedback requirement |
| 8 | **888 Holdings** | iGaming | Feedback requirement |
| 9 | **MyGreen** | iGaming | Feedback requirement |
| 10 | **William Hill** | iGaming/Sportsbook | Feedback requirement |

### Design Implementation

- **Layout:** Horizontal infinite-scroll logo carousel (auto-scroll, pause on hover)
- **Style:** Grayscale logos by default → color on hover with glow effect
- **Background:** Semi-transparent dark panel
- **Heading:** `Trusted by Billion-Dollar Enterprises`
- **Subtext:** `Our clients include publicly listed, regulated enterprises who rely on deep expertise, security-first architecture, and measurable outcomes.`
- **Animation:** Slow auto-scroll left-to-right, looping. On hover, logo scales up 1.1x with cyan glow.

### Placement
- **Homepage:** Below the hero metrics bar (after €45M+ / 18% / 2,400+ / 94% / 95%)
- **Also on:** Case Studies page, About page

### Action Items
- [ ] Obtain high-res SVG/PNG logos for all 10 clients (white versions for dark background)
- [ ] Get written permission/approval to display each logo
- [ ] Build auto-scrolling carousel component matching dark theme

---

## 4. Section 2: Testimonials

**Feedback:** 2–3 testimonials from clients

### Section Tag
```
[TESTIMONIALS] CLIENT_VOICES
```

### Testimonials to Source

**Note:** The following are placeholder structures. Actual quotes must be obtained from the named clients. Contact Krishna (Lognormal Owner) to collect.

#### Testimonial 1 — Fortuna Entertainment Group
- **Role:** Head of BI / CTO / CEO
- **Context:** 6+ year engagement, €45M+ value generated
- **Quote theme:** Long-term partnership trust, data transformation at scale, measurable revenue impact
- **Suggested ask:** "How has Lognormal/FalconDive transformed your data operations over the past 6 years?"

#### Testimonial 2 — Tipico
- **Role:** Head of Analytics / COO
- **Context:** Management Scorecard tracking 32 KPIs, 1200+ betting shops
- **Quote theme:** Operational visibility, KPI-driven decision making
- **Suggested ask:** "How did the Management Scorecard change how you run your betting operations?"

#### Testimonial 3 — Kaizen Gaming or 888 Holdings
- **Role:** Senior executive
- **Context:** iGaming analytics, player lifecycle management
- **Quote theme:** AI-driven insights, competitive advantage
- **Suggested ask:** "What impact has FalconDive had on your player retention and margin protection?"

### Design Implementation

- **Layout:** Dark testimonial cards in a 3-column grid (stacked on mobile)
- **Each card contains:**
  - Opening quote mark icon (cyan, large)
  - Quote text (white, italic)
  - Client name and title (cyan)
  - Company name (white, smaller)
  - Company logo (small, grayscale)
  - Star rating or impact metric badge
- **Background pattern:** Subtle grid/dot pattern overlay
- **Animation:** Cards fade in sequentially on scroll

### Placement
- **Homepage:** After the Client Logos section
- **Also on:** Case Studies page

### Action Items
- [ ] Contact 3 clients and collect signed-off testimonial quotes
- [ ] Obtain headshots or approve use of initials/company logos
- [ ] Build testimonial card component in gaming theme

---

## 5. Section 3: Case Studies — Dedicated Page

**Feedback:** Include client context, problem, solution, measurable results (% uplift, % churn reduction), timeline

### Section Tag
```
[CASE_STUDIES] VALUE_JOURNEYS
```

### Multi-Step Modal Integration

**IMPORTANT:** When a user clicks "Read Full Case Study" or "See Value Journey," they should be presented with a **multi-step lead capture modal** instead of navigating directly to the case study. See [Section 14](#14-multi-step-lead-capture-modal--specification) for full modal specification.

### Case Studies to Build

Each case study follows this structure:

```
[CASE_STUDY] {CLIENT}_VALUE_JOURNEY

SECTOR:          {industry}
REGION:          {geography}
ENGAGEMENT:      {duration}
VALUE_REALIZED:  {headline metric}
```

---

#### Case Study 1: Fortuna Entertainment Group

| Field | Content |
|-------|---------|
| **Client** | Fortuna Entertainment Group |
| **Sector** | iGaming (CEE — Central & Eastern Europe) |
| **Engagement** | 6+ Years Continuous |
| **Headline Metric** | €45M+ Value Generated |
| **Context** | One of the largest iGaming operators in Central & Eastern Europe with multi-market, multi-platform operations |
| **Problem** | Fragmented data across markets, platforms, and product verticals. No unified omni-channel analytics. BI capabilities unable to keep pace with business growth. |
| **Solution** | Built full BI & Analytics team from the ground up. Developed comprehensive omni-channel data platform integrating all markets, platforms, and product verticals. Deployed FalconDive for customer lifecycle management and value realization. |
| **Results** | €45M+ value generated over 6 years. 2.5x lower development cost vs. in-house. Unified data platform across all markets. Real-time analytics across all verticals. |
| **Timeline** | Year 1: Foundation & team build → Year 2-3: Platform maturity → Year 4-6: AI-driven optimization |

---

#### Case Study 2: Tipico

| Field | Content |
|-------|---------|
| **Client** | Tipico |
| **Sector** | Sportsbook (Germany) |
| **Engagement** | 2 Years Continuous |
| **Headline Metric** | €600K+ Value Generated, 18% Margin Uplift |
| **Context** | Leading German sportsbook operator with 1200+ retail betting shops and a growing online business |
| **Problem** | Lack of unified management visibility across 32 critical KPIs. Customer service analytics gap across 1200+ shops and online operations. |
| **Solution** | Built Management Scorecard tracking 32 KPIs. Developed Customer Services analytics spanning retail and online operations. AI-driven margin optimization. |
| **Results** | €600K+ value generated over 2 years. 18% average margin uplift. 32 KPIs tracked in real-time. Unified view across 1200+ shops + online. |
| **Timeline** | Month 1-3: Discovery & KPI design → Month 4-8: Scorecard build → Month 9-24: Optimization & expansion |

---

#### Case Study 3: bet-at-home

| Field | Content |
|-------|---------|
| **Client** | bet-at-home |
| **Sector** | iGaming |
| **Headline Metric** | €350K+ Value Generated, €150K+ Development Cost Saved |
| **Context** | Major European iGaming operator undergoing critical platform migration |
| **Problem** | Aging data warehouse infrastructure. Needed modernization during live platform migration without business disruption. |
| **Solution** | Rebuilt and modernized DWH during platform migration. Implemented AWS S3 tech stack. Ensured seamless transition and cost efficiency. |
| **Results** | €350K+ value generated. €150K+ in development cost saved. Seamless migration with zero downtime. Modern, scalable data architecture. |

---

#### Case Study 4: Superbahis

| Field | Content |
|-------|---------|
| **Client** | Superbahis |
| **Sector** | iGaming |
| **Engagement** | 2+ Years Continuous |
| **Headline Metric** | €2M+ Value Generated |
| **Context** | Multi-brand iGaming operation requiring granular customer analytics and bonus optimization |
| **Problem** | Limited customer-level analytics across 4 brands. Bonus strategies not optimized. No predictive modeling for player behavior. |
| **Solution** | Built FalconDive application providing granular customer analytics and bonus optimization across 4 brands with predictive modeling. |
| **Results** | €2M+ value generated. Predictive modeling across 4 brands. Optimized bonus strategies. Enhanced customer lifecycle management. |

---

#### Case Study 5: Newcross Healthcare

| Field | Content |
|-------|---------|
| **Client** | Newcross Healthcare |
| **Sector** | Healthcare |
| **Engagement** | 3+ Years Continuous |
| **Headline Metric** | €1M+ Value Generated |
| **Context** | Healthcare staffing and services company with complex data across healthcare, finance, and HR systems |
| **Problem** | Siloed data across healthcare operations, finance, and HR. No real-time operational visibility. Manual reporting processes. |
| **Solution** | Built centralized data warehouse integrating healthcare, finance, and HR systems. Deployed Power BI dashboards for real-time operational insights. |
| **Results** | €1M+ value generated. Centralized data warehouse. Real-time dashboards. Automated reporting across all departments. |

---

#### Case Study 6: DAZN

| Field | Content |
|-------|---------|
| **Client** | DAZN |
| **Sector** | Media & Entertainment |
| **Headline Metric** | €350K+ Value Generated, €150K+ Development Cost Saved |
| **Context** | Global sports streaming platform needing centralized analytics and modern data infrastructure |
| **Problem** | Decentralized analytics. Legacy data infrastructure. Need to build and transition an in-house analytics team. |
| **Solution** | Implemented centralized analytics. Migrated to Snowflake with DBT. Hired and embedded 12-member analytics team, then transitioned in-house. |
| **Results** | €350K+ value generated. €150K+ development cost saved. Successful Snowflake migration. 12-person team transitioned to client. |

---

### Case Study Page Design

- **Page route:** `/case-studies` or `/impact`
- **Layout:** Grid of case study cards on dark background
- **Each card shows:**
  - Sector badge (e.g., `[iGAMING]`, `[HEALTHCARE]`)
  - Client name
  - Headline metric (large, cyan)
  - One-line summary
  - "See Value Journey →" button (triggers multi-step modal)
- **Filter bar at top:** Filter by industry (iGaming | Healthcare | Media | All)

### Action Items
- [ ] Collect detailed case study narratives from Krishna
- [ ] Get client sign-off on published case study content
- [ ] Build case study card grid page in gaming theme
- [ ] Integrate multi-step lead capture modal (Section 14)

---

## 6. Section 4: Real-World Proof — Events & Speaking

**Feedback:** Add Copenhagen, Lisbon, Bangkok, Sri Lanka event photos with logos

### Section Tag
```
[REAL_WORLD_PROOF] GLOBAL_PRESENCE
```

### Events to Feature

| # | Event/Location | Type | Content Needed |
|---|----------------|------|----------------|
| 1 | **Copenhagen** | Industry conference/event | Event photos, conference logo |
| 2 | **Lisbon** | Industry conference/event (likely SBC Summit or similar) | Event photos, conference logo |
| 3 | **Bangkok** | Industry event/summit | Event photos, conference logo |
| 4 | **Sri Lanka** | Industry event/speaking | Event photos, conference logo |

### Design Implementation

- **Layout:** Photo gallery mosaic with overlay captions
- **Style:** Dark overlay on images with location and event name
- **Each photo card:**
  - Background image (event photo)
  - Dark gradient overlay (bottom)
  - Location pin icon + City name (cyan)
  - Event name (white)
  - Year badge
- **Animation:** Parallax scroll effect on images; subtle zoom on hover
- **Optional:** Interactive world map with glowing dots at event locations

### Placement
- **Homepage:** In a "Global Presence" section
- **About page:** (if/when built)

### Action Items
- [ ] Collect event photos from Navneeth (Lognormal Owner)
- [ ] Obtain conference/event logos and names
- [ ] Get permission to use photos publicly
- [ ] Build photo gallery mosaic component

---

## 7. Section 5: Team Credibility — Founder Bios

**Feedback:** Highlight prior roles (PartyGaming/Entain), years in gaming, CXO roles

### Section Tag
```
[LEADERSHIP] COMMAND_TEAM
```

### Team Members to Feature

Based on web research, the FalconDive/Lognormal leadership includes:

| # | Name | Title | Background |
|---|------|-------|------------|
| 1 | **Mayank Pachauri** | Founder & CEO | Ex-PartyGaming, Ex-Bwin.Party. 15+ years in iGaming. Built and scaled analytics for billion-dollar platforms. |
| 2 | **COO** | Chief Operating Officer | Ex-PartyGaming, Ex-Bwin.Party. Deep operational expertise in iGaming. |
| 3 | **SVP Product** | SVP of Product | Ex-PartyGaming, Ex-Bwin.Party, Ex-GVC. Product leadership across major gaming platforms. |
| 4 | **VP Client Services** | VP Client Services | Ex-Entain. Enterprise client relationship management. |

**Note:** Confirm exact names, titles, and approved bios with Krishna. The above is based on public LinkedIn/web data.

### Advisory Board

> "Industry legends who've built billion-dollar platforms and transformed data into profits."

List advisory board members with:
- Name and photo
- Current/former title
- Key achievement (one line)

### Design Implementation

- **Layout:** Horizontal card row (scrollable on mobile)
- **Each team card:**
  ```
  [PROFILE] TEAM_MEMBER_ID

  ┌─────────────────────────────┐
  │  [Photo - circular, cyan    │
  │   border glow]              │
  │                             │
  │  NAME                       │
  │  Title (cyan)               │
  │                             │
  │  ▸ Ex-PartyGaming           │
  │  ▸ Ex-Bwin.Party            │
  │  ▸ 15+ years iGaming        │
  │                             │
  │  LinkedIn icon              │
  └─────────────────────────────┘
  ```
- **Background:** Dark with subtle grid pattern
- **Company history badges:** Small logo badges for past companies (PartyGaming, Bwin.Party, Entain, GVC)

### Placement
- **Homepage:** "Command Team" section
- **About page:** (if/when built as separate page)

### Action Items
- [ ] Collect approved bios, headshots, and LinkedIn URLs from all team members
- [ ] Confirm exact titles and years of experience
- [ ] Obtain logos for past companies (PartyGaming, Bwin.Party, Entain, GVC) for credential badges
- [ ] Build team card component in gaming theme

---

## 8. Section 6: Legal Credibility — Footer Enhancement

**Feedback:** Add registered company name, office address, corporate email

### Current Footer Status
The existing falcondive.io footer shows compliance badges (ISO 27001, ISO 9001, GDPR, E2E Encryption, AWS Cloud) but lacks company legal information.

### Content to Add

From Lognormal.io:

```
REGISTERED COMPANY:   Lognormal Analytics Pvt. Ltd.
OFFICE ADDRESS:       402, 4th Floor, CSR Estate
                      Plot No.8, Sector 1, HUDA Techno Enclave
                      Madhapur, Hyderabad, Telangana 500081
                      India
CORPORATE EMAIL:      info@lognormal.io
PHONE:                (+91) 40-4896-0174
LINKEDIN:             linkedin.com/company/lognormal-analytics
PRODUCT WEBSITE:      falcondive.io
PARENT WEBSITE:       lognormal.io
```

### Footer Design

```
┌──────────────────────────────────────────────────────────────────┐
│  [FalconDive Logo]     PLATFORM  SOLUTIONS  IMPACT  ABOUT       │
│                                                                  │
│  A product of Lognormal Analytics                                │
│                                                                  │
│  ─────────────────────────────────────────────────────────────── │
│                                                                  │
│  COMPANY                    CONTACT                              │
│  Lognormal Analytics        info@lognormal.io                    │
│  Pvt. Ltd.                  (+91) 40-4896-0174                   │
│  402, 4th Floor,            LinkedIn                             │
│  CSR Estate, Plot No.8                                           │
│  HUDA Techno Enclave        COMPLIANCE                           │
│  Madhapur, Hyderabad        ISO 27001 | ISO 9001                 │
│  Telangana 500081, India    GDPR | SOC 2 | E2E Encryption        │
│                                                                  │
│  ─────────────────────────────────────────────────────────────── │
│  © 2026 Lognormal Analytics. All rights reserved.                │
│  Privacy Policy  |  Terms of Service  |  Cookie Policy           │
└──────────────────────────────────────────────────────────────────┘
```

### Action Items
- [ ] Verify registered company name (Pvt. Ltd. vs LLP vs other)
- [ ] Confirm office address is current
- [ ] Add Privacy Policy, Terms of Service, Cookie Policy pages
- [ ] Update footer component

---

## 9. Section 7: Product Depth — Detailed Product Page

**Feedback:** Add AI workflow, data inputs, dashboard screenshots, alert examples

### Section Tag
```
[PRODUCT_DEEP_DIVE] FALCONDIVE_ARCHITECTURE
```

### Current Product Coverage
FalconDive.io already covers the 6 capabilities (Pulse AI, Converse AI, Problem Solver, Data Cube, Narratives, Value Reports) and the Omnis orchestration layer. What's missing is **visual depth** — screenshots, workflow diagrams, and interactive demos.

### Content to Add

#### A. AI Workflow Visualization
Interactive pipeline diagram showing:
```
DATA INPUTS → PROCESSING → DETECTION → DIAGNOSIS → ACTION → MONITORING
    │              │            │            │          │          │
  CRM Data    ETL Pipeline   Pulse AI   Converse AI  Problem   Narratives
  Game Logs   Data Lake      Anomaly    Root Cause   Solver    Value
  Transactions Warehouse     Detection  Analysis     Actions   Reports
  CMS Data    ML Models                              Data Cube
  Frontend                                           Targeting
```

#### B. Dashboard Screenshots
Provide actual or representative screenshots of:
1. **Pulse AI Dashboard** — Real-time alert view with KPI tiles
2. **Converse AI Interface** — Chat/query interface showing natural language interaction
3. **Problem Solver** — Action plan view with ownership and timelines
4. **Data Cube** — Segment builder with visual cohort selection
5. **Narratives** — Auto-generated outcome narrative example
6. **Value Reports** — Value tracking dashboard with trend lines

#### C. Alert Examples
Show example alert cards:
```
⚠ CRITICAL ALERT                          PULSE_AI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Margin erosion detected: Sportsbook DE
  ▸ -2.3% margin drop in last 4 hours
  ▸ Affected segment: High-stakes live betting
  ▸ Estimated impact: €45K/day
  ▸ Root cause probability: Pricing model drift (87%)

  [DIAGNOSE NOW]  [ASSIGN ACTION]  [DISMISS]
```

#### D. Data Input Sources
Visual showing supported integrations:
- CRM Systems (Salesforce, HubSpot, custom)
- Gaming Platforms (proprietary APIs)
- Payment Systems
- Marketing Platforms
- Frontend/App Analytics
- Third-party Data Feeds

### Page Design
- **Route:** `/platform` or expand existing Platform nav link
- **Layout:** Vertical scroll through each capability with alternating left/right content + screenshot layout
- **Interactive elements:** Clickable capability tabs, animated workflow diagram
- **Screenshots:** Use terminal-style frames with dark chrome and cyan accents

### Action Items
- [ ] Collect or create representative dashboard screenshots (can be anonymized/synthetic)
- [ ] Build interactive workflow diagram component
- [ ] Create alert example components
- [ ] Design data input integration visual

---

## 10. Section 8: Built by Operators — Gaming Veterans

**Feedback:** Add combined experience, markets worked in, past brands

### Section Tag
```
[BUILT_BY_OPERATORS] GAMING_VETERANS
```

### Content

```
BUILT BY GAMING VETERANS.
NOT CONSULTANTS. OPERATORS.

FalconDive wasn't built by outsiders looking in. It was forged by operators
who spent decades inside the world's largest iGaming companies — building
the platforms, running the P&L, and solving the problems that FalconDive
now automates.
```

### Key Stats to Display

| Metric | Value | Label |
|--------|-------|-------|
| Combined experience | **75+ Years** | In iGaming & Data |
| Markets operated in | **20+ Markets** | Across 4 Continents |
| Past brands | **6+ Tier-1 Operators** | Including Billion-Dollar Enterprises |
| Revenue influenced | **€500M+** | Decisions Powered |
| Team size | **100+ Data Experts** | Analysts, Engineers & AI Specialists |

### Past Brands Section
Logo badges for:
- PartyGaming
- Bwin.Party
- Entain (GVC Holdings)
- Fortuna Entertainment Group
- 888 Holdings
- William Hill

### Design Implementation

- **Layout:** Full-width dark section with accent border
- **Left side:** Large heading + descriptive text
- **Right side:** Stats grid with animated counters
- **Below:** Horizontal row of past brand logos (grayscale, small)
- **Badge:** `[OPERATOR_DNA]` tag at top

```
┌──────────────────────────────────────────────────────────────┐
│  [BUILT_BY_OPERATORS] GAMING_VETERANS                        │
│                                                              │
│  BUILT BY GAMING VETERANS.       ┌──────┐ ┌──────┐          │
│  NOT CONSULTANTS. OPERATORS.     │ 75+  │ │ 20+  │          │
│                                  │ Years│ │Mrkts │          │
│  FalconDive was forged by        └──────┘ └──────┘          │
│  operators who spent decades     ┌──────┐ ┌──────┐          │
│  inside the world's largest      │ 100+ │ │€500M+│          │
│  iGaming companies...            │Expert│ │Decis.│          │
│                                  └──────┘ └──────┘          │
│                                                              │
│  [PartyGaming] [Bwin] [Entain] [Fortuna] [888] [WilliamHill]│
└──────────────────────────────────────────────────────────────┘
```

### Placement
- **Homepage:** Between the Platform section and the Outcomes section

### Action Items
- [ ] Confirm combined years of experience number
- [ ] Confirm markets count
- [ ] Obtain past brand logos (grayscale versions)
- [ ] Verify revenue influenced figure

---

## 11. Section 9: Metrics Block — Dedicated Stats Section

**Feedback:** Add hard metrics (X% uplift, X markets served, X+ years experience)

### Section Tag
```
[METRICS] VALUE_REALIZED_DASHBOARD
```

### Metrics to Display

#### Row 1: Platform Impact
| Metric | Value | Source |
|--------|-------|--------|
| Revenue Recovered | **€45M+** | Lognormal case studies (cumulative) |
| Avg. Margin Uplift | **18%** | FalconDive outcomes data |
| Leakages Detected | **2,400+** | FalconDive platform data |
| Actions Closed | **94%** | FalconDive platform data |
| Time to Act Reduced | **95%** | FalconDive platform data |

#### Row 2: Company Credentials
| Metric | Value | Source |
|--------|-------|--------|
| Years in iGaming | **12+ Years** | Company history |
| Markets Served | **20+ Markets** | Across client engagements |
| Data Experts | **100+** | Lognormal team size |
| Client Retention | **4+ Year Avg.** | Lognormal partnership data |
| Cost Reduction | **40-60%** | vs. in-house implementation |

#### Row 3: Specific Outcomes
| Metric | Value | Source |
|--------|-------|--------|
| Fraud Prevented | **€28M** | FalconDive risk mitigation |
| Churn Reduced | **28%** | FalconDive outcomes |
| Anomalies Caught | **99.7%** | FalconDive detection rate |
| ROI Achieved | **4.5x** | Average client ROI |
| Deployment Time | **3 Weeks** | Time to go live |

### Design Implementation

- **Layout:** Terminal-style dashboard with 3 rows of metric panels
- **Style:** Each metric in a "monitoring card" with:
  - Small label (monospace, grey)
  - Large value (cyan, bold, animated counter)
  - Subtle pulse animation on the value
  - Mini sparkline or bar chart underneath (decorative)
- **Background:** Dark with subtle scan-line overlay animation
- **Section frame:**
  ```
  ┌─ METRICS_DASHBOARD ──────────────────────────────────┐
  │  PLATFORM_IMPACT                                      │
  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │
  │  │ €45M+  │ │  18%   │ │ 2,400+ │ │  94%   │        │
  │  │Revenue │ │Margin  │ │Leakages│ │Actions │        │
  │  └────────┘ └────────┘ └────────┘ └────────┘        │
  │                                                       │
  │  COMPANY_CREDENTIALS                                  │
  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │
  │  │  12+   │ │  20+   │ │ 100+   │ │  4yr+  │        │
  │  │ Years  │ │Markets │ │Experts │ │Retain  │        │
  │  └────────┘ └────────┘ └────────┘ └────────┘        │
  └───────────────────────────────────────────────────────┘
  ```

### Placement
- **Homepage:** Prominent position (can replace or augment existing hero metrics)
- **Impact page:** Full dashboard view

### Action Items
- [ ] Verify all metric values with Krishna
- [ ] Confirm "years in iGaming" count (founding date)
- [ ] Build animated counter components
- [ ] Create dashboard-style grid layout

---

## 12. Section 10: Media Mentions — Featured & Speaking At

**Feedback:** Add conference logos, speaking engagements, podcasts

### Section Tag
```
[FEATURED] SPEAKING_AND_MEDIA
```

### Events & Conferences to Feature

| # | Event/Conference | Location | Type | Content |
|---|------------------|----------|------|---------|
| 1 | Copenhagen event | Copenhagen, Denmark | Conference/Summit | Speaking, attendance |
| 2 | Lisbon event (likely SBC Summit) | Lisbon, Portugal | iGaming conference | Speaking, attendance |
| 3 | Bangkok event | Bangkok, Thailand | Industry summit | Speaking, attendance |
| 4 | Sri Lanka event | Sri Lanka | Industry event | Speaking, attendance |

**Note:** Exact conference names, dates, and speaking topics need to be confirmed with Navneeth/Krishna.

### Additional Media to Source
- Podcast appearances
- Industry publication features
- Webinar recordings
- Panel participation
- Awards received (if any)

### Design Implementation

- **Layout:** Two sub-sections:
  1. **"Speaking At"** — Conference logo carousel with event names
  2. **"Featured In"** — Media/publication logos (if available)
- **Style:** Similar to client logo carousel but with event context
- **Each event card:**
  ```
  ┌─────────────────────────┐
  │  [Conference Logo]      │
  │  Conference Name        │
  │  City, Country • Year   │
  │  "Speaking" / "Panel"   │
  └─────────────────────────┘
  ```
- **Optional world map:** Dotted map with glowing pins at event locations

### Placement
- **Homepage:** "Featured & Speaking At" section
- **About page:** Expanded version with photos

### Action Items
- [ ] Collect exact conference/event names and dates from Navneeth
- [ ] Obtain conference logos
- [ ] Collect speaking topic titles
- [ ] Source any podcast or media links
- [ ] Build event card carousel component

---

## 13. Section 11: Clear CTA — Outcome-Based Calls-to-Action

**Feedback:** Replace generic "Book Demo" with outcome-based CTA

### Current CTAs on FalconDive.io
- "SEE HOW WE RECOVER REVENUE" (good — already outcome-based)
- "START YOUR VALUE ASSESSMENT" (good)
- "BOOK DEMO" (generic — needs improvement)
- "BOOK DEMO NOW" (generic — needs improvement)

### Replacement CTAs

| Current | Replace With | Context |
|---------|-------------|---------|
| "BOOK DEMO" | **"UNCOVER YOUR REVENUE LEAKAGES"** | Primary CTA |
| "BOOK DEMO NOW" | **"START YOUR VALUE ASSESSMENT — FREE"** | Scheduling section |
| Generic header CTA | **"SEE WHERE VALUE IS LEAKING"** | Navigation bar |
| Case study CTA | **"SEE HOW WE RECOVERED €45M+"** | Case studies section |

### CTA Hierarchy

#### Primary CTA (Hero & Footer)
```
┌─────────────────────────────────────────┐
│  ⚡ UNCOVER YOUR REVENUE LEAKAGES       │
│     Free Value Assessment • 24hr Results │
└─────────────────────────────────────────┘
```
- **Action:** Opens multi-step lead capture modal (Section 14)
- **Style:** Cyan/teal background, dark text, monospace uppercase, pulsing glow

#### Secondary CTA (Sections)
```
┌─────────────────────────────────────────┐
│  START YOUR VALUE ASSESSMENT →          │
└─────────────────────────────────────────┘
```
- **Style:** Dark background, cyan border, cyan text

#### Tertiary CTA (Case Studies)
```
SEE VALUE JOURNEY →
```
- **Action:** Opens multi-step modal, then delivers case study
- **Style:** Text link with arrow, cyan color

### Placement
- Update all existing "BOOK DEMO" instances site-wide
- Ensure every major section ends with an outcome-based CTA

### Action Items
- [ ] Audit all existing CTAs across the site
- [ ] Replace with outcome-based alternatives
- [ ] Connect all CTAs to the multi-step lead capture modal
- [ ] A/B test CTA copy variants

---

## 14. Multi-Step Lead Capture Modal — Specification

This modal is triggered whenever a user clicks on gated content (case studies, downloads, demos, value assessments). It captures lead information and sends a notification email.

### Modal Flow

```
STEP 1: Industry Selection
         ↓
STEP 2: Key Role Selection
         ↓
STEP 3: Seniority Selection
         ↓
STEP 4: Contact Information (Email Capture)
         ↓
STEP 5: Confirmation + Content Delivery
```

### Step 1: Industry Selection

**Header:** `SELECT YOUR INDUSTRY`
**Subtext:** `Help us tailor the experience to your world.`

| Option | Icon Suggestion |
|--------|----------------|
| iGaming | 🎰 Dice/cards icon |
| Healthcare | ⚕️ Medical cross icon |
| Energy | ⚡ Lightning bolt icon |
| Financial Technology | 💳 Fintech icon |
| Manufacturing | ⚙️ Gear icon |

**Design:**
- 5 selection cards in a grid (3+2 or 5 horizontal on desktop)
- Dark cards with cyan border on selection
- Gaming-style hover glow effect
- Single select (radio behavior)
- Card shows icon + industry name
- Selected state: Cyan border + filled background tint

### Step 2: Key Role Selection

**Header:** `WHAT'S YOUR FUNCTION?`
**Subtext:** `So we can speak your language.`

| Option |
|--------|
| Executive & P&L Owners |
| Data & Analytics Leaders |
| Data & Analytics Practitioners (Power Users) |
| Product, Growth & Revenue Stakeholders |
| IT, Platform & Governance Stakeholders |

**Design:**
- Vertical list of selectable options (radio-style)
- Each option is a full-width dark card
- Selected state: Cyan left-border accent + subtle background tint
- Monospace label text

### Step 3: Seniority Selection

**Header:** `YOUR LEVEL`
**Subtext:** `To calibrate depth and detail.`

| Option |
|--------|
| C-Level (CEO, CTO, CDO, CRO, CMO) |
| VP, Director, Head-of |
| Architect, Senior IC, Lead |
| Director, Senior Manager |

**Design:**
- Horizontal pill/chip selectors
- Selected state: Cyan fill with dark text
- Unselected: Dark with cyan border

### Step 4: Contact Information

**Header:** `ALMOST THERE — WHERE DO WE SEND IT?`
**Subtext:** `Your details stay with us. No spam, ever.`

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text input | Yes |
| Work Email | Email input | Yes |
| Company Name | Text input | Yes |
| Phone (optional) | Phone input | No |

**Design:**
- Dark input fields with cyan focus border
- Placeholder text in grey
- Validation: Real-time email format check
- Submit button: `UNLOCK ACCESS →` (primary CTA style)
- Below button: `🔒 Your data is secure. We never share your information.`

### Step 5: Confirmation

**Header:** `ACCESS GRANTED ✓`
**Subtext:** `Your [case study / value assessment / demo] is ready.`

- Show a success animation (checkmark with cyan glow)
- Auto-redirect to the requested content OR
- Display download link / calendar booking embed
- For case studies: Display the full case study content
- For demo booking: Embed Calendly or similar scheduling widget

### Modal Design Specifications

```css
/* Modal overlay */
.modal-overlay {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
}

/* Modal container */
.modal-container {
  background: linear-gradient(135deg, #0a0e17 0%, #111827 100%);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 16px;
  max-width: 600px;
  padding: 40px;
  box-shadow: 0 0 60px rgba(0, 229, 255, 0.1);
}

/* Progress bar */
.progress-bar {
  height: 3px;
  background: rgba(0, 229, 255, 0.1);
}
.progress-fill {
  background: #00e5ff;
  transition: width 0.3s ease;
}

/* Step indicator: STEP 1 of 4 (monospace) */
.step-indicator {
  font-family: monospace;
  color: rgba(0, 229, 255, 0.6);
  font-size: 0.75rem;
  text-transform: uppercase;
}
```

### Progress Indicator
```
STEP 1 of 4
━━━━━━━━━━░░░░░░░░░░░░░░░░░░░░ 25%
```
- Thin progress bar at top of modal
- Step counter in monospace
- Fill color: Cyan

### Navigation
- **Back button:** `← BACK` (text, left-aligned)
- **Next button:** `CONTINUE →` (primary CTA, right-aligned)
- **Close button:** `✕` (top-right corner)
- **Keyboard:** Enter advances, Escape closes

### Mobile Responsiveness
- Modal becomes full-screen on mobile
- Cards stack vertically
- Buttons become full-width
- Touch-friendly tap targets (min 44px)

---

## 15. Email Notification System

When a user completes the multi-step modal (Step 4 submission), an email notification is sent.

### Recipient
```
To: 3p.sachin.uppal@lognormal.io
```

### Email Subject
```
[FalconDive Lead] {Company Name} — {Full Name} ({Industry})
```

### Email Body Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 NEW LEAD FROM FALCONDIVE.IO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
  Name:      {Full Name}
  Email:     {Work Email}
  Company:   {Company Name}
  Phone:     {Phone Number or "Not provided"}

PROFILE
  Industry:  {Selected Industry}
  Role:      {Selected Key Role}
  Seniority: {Selected Seniority}

CONTEXT
  Action:    {What triggered the modal}
             e.g., "Requested Fortuna Case Study"
             e.g., "Started Value Assessment"
             e.g., "Requested Demo"

  Page:      {URL where modal was triggered}
  Timestamp: {ISO 8601 datetime}
  Source:     falcondive.io

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Technical Implementation Options

#### Option A: Serverless (Recommended)
- Use a serverless function (AWS Lambda, Vercel Serverless, Netlify Functions)
- Endpoint: `POST /api/lead-capture`
- Email service: SendGrid, AWS SES, or Resend
- Store lead data in a database (Supabase, Airtable, or CRM)

#### Option B: Third-Party Form Service
- Use Formspree, Typeform, or HubSpot Forms
- Configure email notification to `3p.sachin.uppal@lognormal.io`
- Embed form in the modal

#### Option C: Direct Email API
- Use EmailJS or similar client-side email service
- No backend required
- Less reliable but simplest to implement

### Data Storage
In addition to the email notification, store all leads in a structured format:

| Field | Type |
|-------|------|
| id | UUID |
| full_name | string |
| email | string |
| company | string |
| phone | string (nullable) |
| industry | enum |
| role | enum |
| seniority | enum |
| trigger_action | string |
| trigger_page | string |
| created_at | timestamp |
| utm_source | string (nullable) |
| utm_medium | string (nullable) |
| utm_campaign | string (nullable) |

---

## 16. Page Placement Map

### Homepage Layout (Top to Bottom)

```
1.  HERO SECTION (existing)
    "DETECT. DIAGNOSE. ACT. REALIZE VALUE."
    + Hero metrics bar

2.  CLIENT LOGOS CAROUSEL (NEW — Section 3)
    [SOCIAL_PROOF] TRUSTED_BY_INDUSTRY_LEADERS

3.  VALUE REALIZATION FLOW (existing)
    4-stage pipeline

4.  REVENUE LEAKAGE ALERT (existing)

5.  DIAGNOSTICS (existing)

6.  BUILT BY GAMING VETERANS (NEW — Section 10)
    [BUILT_BY_OPERATORS] GAMING_VETERANS
    75+ years, 20+ markets, 100+ experts

7.  PLATFORM / CAPABILITIES (existing)
    6 capabilities + Omnis

8.  METRICS DASHBOARD (NEW — Section 11, enhanced)
    [METRICS] VALUE_REALIZED_DASHBOARD
    Hard metrics with animated counters

9.  CASE STUDIES PREVIEW (existing, enhanced)
    + More case studies from Lognormal
    + "See Value Journey" triggers modal

10. TESTIMONIALS (NEW — Section 4)
    [TESTIMONIALS] CLIENT_VOICES
    2-3 client quotes

11. TEAM CREDIBILITY (NEW — Section 7)
    [LEADERSHIP] COMMAND_TEAM
    Founder bios with past company badges

12. FEATURED & SPEAKING AT (NEW — Section 12)
    [FEATURED] SPEAKING_AND_MEDIA
    Conference logos + event photos

13. REAL-WORLD PROOF GALLERY (NEW — Section 6)
    [REAL_WORLD_PROOF] GLOBAL_PRESENCE
    Event photos from Copenhagen, Lisbon, Bangkok, Sri Lanka

14. INTEGRATION SECTION (existing)

15. SOLUTIONS BY ROLE (existing)

16. CTA SECTION (existing, updated copy — Section 13)
    "UNCOVER YOUR REVENUE LEAKAGES"

17. BOOK DEMO SECTION (existing, updated copy)

18. FOOTER (enhanced — Section 8)
    + Company registration, address, email
```

### New Pages

| Page | Route | Content |
|------|-------|---------|
| **Case Studies** | `/case-studies` | Full case study grid with modal gating |
| **About / Team** | `/about` | Team bios, company story, advisory board |
| **Impact** | `/impact` | Full metrics dashboard + outcomes |

---

## 17. Content Sourcing Checklist

### From Krishna (Lognormal Owner)

- [ ] Written testimonials from 3 clients (with sign-off)
- [ ] Detailed case study narratives (problem/solution/results format)
- [ ] Confirmed team bios and headshots
- [ ] Verified company registration details
- [ ] Confirmed metric values (years, markets, revenue, etc.)
- [ ] Client logo usage permissions
- [ ] Past company logos (PartyGaming, Bwin.Party, Entain, GVC)

### From Navneeth (Lognormal Owner)

- [ ] Event photos: Copenhagen, Lisbon, Bangkok, Sri Lanka
- [ ] Conference/event names and dates
- [ ] Conference logos
- [ ] Speaking engagement details (topics, panels)
- [ ] Any podcast/media appearance links

### From Sachin (Vriksha Owner)

- [ ] Review and approve all section designs
- [ ] Confirm multi-step modal flow and fields
- [ ] Approve email notification setup to `3p.sachin.uppal@lognormal.io`
- [ ] Sign off on CTA copy changes
- [ ] Approve page placement order
- [ ] Coordinate design implementation timeline

### Design & Development

- [ ] Build multi-step lead capture modal component
- [ ] Build client logo carousel component
- [ ] Build testimonial card grid
- [ ] Build case study page with filtering
- [ ] Build team profile cards
- [ ] Build event/speaking photo gallery
- [ ] Build metrics dashboard with animated counters
- [ ] Update footer with legal information
- [ ] Update all CTA copy across site
- [ ] Set up email notification system (SendGrid/SES)
- [ ] Set up lead storage database
- [ ] Mobile responsiveness testing for all new sections
- [ ] Cross-browser testing
- [ ] Performance audit (ensure new sections don't slow load times)

---

## Appendix A: Feedback Item → Section Mapping

| # | Feedback Category | Section in This Doc | Status |
|---|-------------------|---------------------|--------|
| 1 | Social Proof — Client Logos | Section 3 | Specified |
| 2 | Testimonials | Section 4 | Specified (needs quotes) |
| 3 | Case Studies | Section 5 | Specified |
| 4 | Real-World Proof — Events | Section 6 | Specified (needs photos) |
| 5 | Team Credibility | Section 7 | Specified (needs bios) |
| 6 | Legal Credibility — Footer | Section 8 | Specified |
| 7 | Product Depth | Section 9 | Specified |
| 8 | Built by Operators | Section 10 | Specified |
| 9 | Metrics Block | Section 11 | Specified |
| 10 | Media Mentions | Section 12 | Specified (needs event details) |
| 11 | Clear CTA | Section 13 | Specified |
| — | Multi-Step Modal | Section 14 | Specified |
| — | Email Notification | Section 15 | Specified |

---

## Appendix B: Multi-Step Modal — Selection Values Reference

### Industry Options
```json
[
  "iGaming",
  "Healthcare",
  "Energy",
  "Financial Technology",
  "Manufacturing"
]
```

### Key Role Options
```json
[
  "Executive & P&L Owners",
  "Data & Analytics Leaders",
  "Data & Analytics Practitioners (Power Users)",
  "Product, Growth & Revenue Stakeholders",
  "IT, Platform & Governance Stakeholders"
]
```

### Seniority Options
```json
[
  "C-Level (CEO, CTO, CDO, CRO, CMO)",
  "VP, Director, Head-of",
  "Architect, Senior IC, Lead",
  "Director, Senior Manager"
]
```

---

*End of Implementation Guide*
