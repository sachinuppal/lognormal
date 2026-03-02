# FalconDive — Client Logo Card Shimmer Effect Specification

> **Section:** `[SOCIAL_PROOF] TRUSTED_BY_INDUSTRY_LEADERS`
> **Target:** Client logo cards in the "Trusted by Billion-Dollar Enterprises" carousel
> **Effect:** Animated silver/golden shimmer along card borders

---

## Current State

Each client card is a dark rectangular card (~200×120px) with:
- Dark background (`rgba(15, 23, 42, 0.8)`)
- Subtle border (`1px solid rgba(0, 229, 255, 0.1)`)
- Client name in monospace uppercase (white)
- Industry label below (grey/muted)
- Rounded corners (`border-radius: 12px`)

---

## Shimmer Effect — Overview

A continuous animated gradient that travels along the card border, creating a premium metallic shimmer. The effect uses a `conic-gradient` rotating around the card perimeter, masked so only the border edge glows.

**Two tiers of shimmer:**

| Tier | Clients | Effect | Rationale |
|------|---------|--------|-----------|
| **Gold Shimmer** | Fortuna, Tipico, 888, William Hill | Warm gold/amber gradient | Longest engagements or largest brand recognition |
| **Silver Shimmer** | bet-at-home, Superbahis, Newcross, DAZN, Kaizen, MyGreen | Cool silver/platinum gradient | Strong partners, growing engagements |

> **Note:** If you prefer all cards to use the same shimmer, use **Option C** (unified dual-tone) below.

---

## Option A — Gold Shimmer (Tier 1 Clients)

### CSS

```css
/* === GOLD SHIMMER CARD === */
.client-card-gold {
  position: relative;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 12px;
  padding: 24px 32px;
  overflow: hidden;
  isolation: isolate;
}

/* Rotating conic gradient border */
.client-card-gold::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 14px; /* card radius + border width */
  background: conic-gradient(
    from var(--shimmer-angle, 0deg),
    transparent 0%,
    transparent 25%,
    #b8860b 30%,       /* dark goldenrod */
    #ffd700 35%,       /* gold */
    #fff8dc 38%,       /* cornsilk (bright flash) */
    #ffd700 41%,       /* gold */
    #b8860b 46%,       /* dark goldenrod */
    transparent 51%,
    transparent 100%
  );
  animation: shimmer-rotate 4s linear infinite;
  z-index: -2;
}

/* Inner card fill to mask center, leaving only border visible */
.client-card-gold::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 10px; /* card radius - border width */
  background: rgba(15, 23, 42, 0.95);
  z-index: -1;
}

@keyframes shimmer-rotate {
  from { --shimmer-angle: 0deg; }
  to   { --shimmer-angle: 360deg; }
}

/* Register the custom property for animation */
@property --shimmer-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
```

### Hover Enhancement

```css
.client-card-gold:hover::before {
  background: conic-gradient(
    from var(--shimmer-angle, 0deg),
    transparent 0%,
    transparent 20%,
    #b8860b 25%,
    #ffd700 30%,
    #fff8dc 34%,
    #ffffff 36%,       /* white-hot flash on hover */
    #fff8dc 38%,
    #ffd700 42%,
    #b8860b 47%,
    transparent 52%,
    transparent 100%
  );
  animation-duration: 2.5s; /* faster rotation on hover */
  filter: brightness(1.3);
}

/* Outer glow on hover */
.client-card-gold:hover {
  box-shadow:
    0 0 15px rgba(255, 215, 0, 0.15),
    0 0 40px rgba(255, 215, 0, 0.08);
}
```

---

## Option B — Silver Shimmer (Tier 2 Clients)

### CSS

```css
/* === SILVER SHIMMER CARD === */
.client-card-silver {
  position: relative;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 12px;
  padding: 24px 32px;
  overflow: hidden;
  isolation: isolate;
}

.client-card-silver::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  background: conic-gradient(
    from var(--shimmer-angle, 0deg),
    transparent 0%,
    transparent 25%,
    #708090 30%,       /* slate grey */
    #c0c0c0 35%,       /* silver */
    #e8e8e8 37%,       /* near-white flash */
    #f5f5f5 38%,       /* brightest point */
    #e8e8e8 39%,
    #c0c0c0 41%,       /* silver */
    #708090 46%,       /* slate grey */
    transparent 51%,
    transparent 100%
  );
  animation: shimmer-rotate 5s linear infinite;
  z-index: -2;
}

.client-card-silver::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.95);
  z-index: -1;
}
```

### Hover Enhancement

```css
.client-card-silver:hover::before {
  background: conic-gradient(
    from var(--shimmer-angle, 0deg),
    transparent 0%,
    transparent 20%,
    #708090 25%,
    #c0c0c0 30%,
    #e8e8e8 33%,
    #ffffff 35%,       /* white flash on hover */
    #e8e8e8 37%,
    #c0c0c0 42%,
    #708090 47%,
    transparent 52%,
    transparent 100%
  );
  animation-duration: 3s;
  filter: brightness(1.2);
}

.client-card-silver:hover {
  box-shadow:
    0 0 15px rgba(192, 192, 192, 0.12),
    0 0 40px rgba(192, 192, 192, 0.06);
}
```

---

## Option C — Unified Dual-Tone Shimmer (All Cards Same)

If you prefer a single effect for all client cards, use this hybrid silver-gold gradient that blends both tones.

### CSS

```css
/* === DUAL-TONE SHIMMER (SILVER + GOLD) === */
.client-card-shimmer {
  position: relative;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 12px;
  padding: 24px 32px;
  overflow: hidden;
  isolation: isolate;
}

.client-card-shimmer::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  background: conic-gradient(
    from var(--shimmer-angle, 0deg),
    transparent 0%,
    transparent 20%,
    /* Silver arc */
    #708090 24%,
    #c0c0c0 27%,
    #f0f0f0 29%,
    #c0c0c0 31%,
    #708090 34%,
    transparent 38%,
    transparent 45%,
    /* Gold arc */
    #b8860b 49%,
    #ffd700 52%,
    #fff8dc 54%,
    #ffd700 56%,
    #b8860b 59%,
    transparent 63%,
    transparent 100%
  );
  animation: shimmer-rotate 5s linear infinite;
  z-index: -2;
}

.client-card-shimmer::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.95);
  z-index: -1;
}

/* Hover: brighter, faster, with glow */
.client-card-shimmer:hover::before {
  animation-duration: 2.5s;
  filter: brightness(1.4);
}

.client-card-shimmer:hover {
  box-shadow:
    0 0 20px rgba(255, 215, 0, 0.1),
    0 0 20px rgba(192, 192, 192, 0.08),
    0 0 50px rgba(255, 215, 0, 0.05);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

---

## Alternative Approach — Traveling Edge Shimmer (No Conic Gradient)

If `@property` browser support is a concern (Safari < 16.4), use this `background-position` approach instead.

### CSS

```css
/* === TRAVELING EDGE SHIMMER (wider browser support) === */
.client-card-edge {
  position: relative;
  background: rgba(15, 23, 42, 0.85);
  border-radius: 12px;
  padding: 24px 32px;
  overflow: hidden;
}

/* Shimmer beam that sweeps across the border */
.client-card-edge::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px; /* border thickness */
  background: linear-gradient(
    130deg,
    transparent 0%,
    transparent 33%,
    #708090 40%,
    #c0c0c0 44%,
    #ffd700 48%,
    #fff8dc 50%,
    #ffd700 52%,
    #c0c0c0 56%,
    #708090 60%,
    transparent 67%,
    transparent 100%
  );
  background-size: 300% 300%;
  animation: shimmer-sweep 4s ease-in-out infinite;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

@keyframes shimmer-sweep {
  0%   { background-position: 100% 100%; }
  50%  { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

/* Hover */
.client-card-edge:hover::before {
  animation-duration: 2s;
  filter: brightness(1.3);
}

.client-card-edge:hover {
  box-shadow:
    0 0 25px rgba(255, 215, 0, 0.12),
    0 0 25px rgba(192, 192, 192, 0.08);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

---

## Implementation in React / JSX

```jsx
// ClientCard.jsx
const ClientCard = ({ name, industry, tier = 'silver' }) => {
  const cardClass = tier === 'gold'
    ? 'client-card-gold'
    : 'client-card-silver';

  return (
    <div className={cardClass}>
      <div className="client-card-content">
        <span className="client-name">{name}</span>
        <span className="client-industry">{industry}</span>
      </div>
    </div>
  );
};

// Usage
const clients = [
  { name: 'FORTUNA',    industry: 'iGaming',    tier: 'gold' },
  { name: 'TIPICO',     industry: 'Sportsbook', tier: 'gold' },
  { name: '888',        industry: 'iGaming',    tier: 'gold' },
  { name: 'WILLIAM HILL', industry: 'Sportsbook', tier: 'gold' },
  { name: 'BET-AT-HOME', industry: 'iGaming',   tier: 'silver' },
  { name: 'SUPERBAHIS', industry: 'iGaming',    tier: 'silver' },
  { name: 'NEWCROSS',   industry: 'Healthcare', tier: 'silver' },
  { name: 'DAZN',       industry: 'Media',      tier: 'silver' },
  { name: 'KAIZEN',     industry: 'iGaming',    tier: 'silver' },
  { name: 'MYGREEN',    industry: 'iGaming',    tier: 'silver' },
];
```

---

## Inner Content Styling

```css
/* Text inside the card */
.client-card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.client-name {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-transform: uppercase;
}

.client-industry {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: rgba(0, 229, 255, 0.5);
  text-transform: capitalize;
  letter-spacing: 0.05em;
}

/* On hover, industry label brightens */
.client-card-gold:hover .client-industry,
.client-card-silver:hover .client-industry {
  color: rgba(0, 229, 255, 0.8);
  transition: color 0.3s ease;
}
```

---

## Carousel Container

```css
.client-carousel {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.client-carousel::-webkit-scrollbar {
  display: none;
}

.client-carousel > * {
  scroll-snap-align: center;
  flex-shrink: 0;
}
```

---

## Visual Reference — Expected Result

```
   idle state                       hover state
┌──────────────────┐          ┌──────────────────┐
│ ·····shim···     │          │ ██BRIGHT_FLASH███ │
│ ·              · │          │ █                █ │
│ ·  FORTUNA     · │    →     │ █  FORTUNA      █ │
│ ·  iGaming     · │          │ █  iGaming      █ │
│ ·              · │          │ █                █ │
│   ···shimmer···  │          │ █████████████████ █│
└──────────────────┘          └──────────────────┘
 subtle rotating glow          faster + brighter
 silver or gold                + outer box-shadow
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `@property` (Option A/B/C) | 85+ | 128+ | 16.4+ | 85+ |
| `mask-composite` (Alt approach) | 120+ | 53+ | 15.4+ | 120+ |
| `conic-gradient` | 69+ | 83+ | 12.1+ | 79+ |

**Recommendation:** Use Option A/B/C (conic gradient) as the primary approach. The alternative traveling-edge approach serves as a fallback. For maximum compatibility, detect `@property` support and fall back gracefully.

---

*End of shimmer effect specification*
