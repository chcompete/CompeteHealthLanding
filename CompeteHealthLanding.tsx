// Compete.Health — Landing Page
// Framer Code Component
// Usage: Insert → Code Component → paste this file
// Recommended canvas size: 1440px wide, height: auto

import { useEffect, useRef } from "react"

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
    white: "#FFFFFF",
    offWhite: "#F8F7F4",
    cream: "#F2F0EB",
    green: "#2D6A4F",
    greenLight: "#40916C",
    greenPale: "#D8F3DC",
    greenMid: "#52B788",
    accent: "#1B4332",
    text: "#1A1A18",
    textMuted: "#6B6B63",
    textLight: "#9A9A92",
    border: "#E0DDD6",
    borderDark: "#C8C5BC",
}

// ─── Google Fonts injection ───────────────────────────────────────────────────
function useFonts() {
    useEffect(() => {
        if (document.getElementById("ch-fonts")) return
        const link = document.createElement("link")
        link.id = "ch-fonts"
        link.rel = "stylesheet"
        link.href =
            "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
        document.head.appendChild(link)
    }, [])
}

// ─── Global styles (injected once) ───────────────────────────────────────────
function useGlobalStyles() {
    useEffect(() => {
        if (document.getElementById("ch-styles")) return
        const style = document.createElement("style")
        style.id = "ch-styles"
        style.textContent = `
      .ch * { box-sizing: border-box; margin: 0; padding: 0; }
      .ch { font-family: 'DM Sans', sans-serif; color: ${C.text}; background: ${C.white}; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
      .ch a { text-decoration: none; }
      .ch ul { list-style: none; }

      @keyframes ch-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes ch-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

      .ch-animate { opacity: 0; animation: ch-fadeUp 0.65s ease forwards; }
      .ch-d1 { animation-delay: 0.1s; }
      .ch-d2 { animation-delay: 0.22s; }
      .ch-d3 { animation-delay: 0.36s; }
      .ch-d4 { animation-delay: 0.5s; }
      .ch-d5 { animation-delay: 0.64s; }

      .ch-ticker-track { display: inline-flex; animation: ch-ticker 22s linear infinite; white-space: nowrap; }

      .ch-step:hover { background: ${C.greenPale} !important; }
      .ch-card:hover { background: ${C.offWhite} !important; }
      .ch-testimonial:hover { background: ${C.offWhite} !important; }

      .ch-bar-fill { width: 0; transition: width 1.1s cubic-bezier(0.34, 1.56, 0.64, 1); }
      .ch-bar-fill.ch-bar-animated.ch-bar-1 { width: 60%; }
      .ch-bar-fill.ch-bar-animated.ch-bar-2 { width: 30%; }
      .ch-bar-fill.ch-bar-animated.ch-bar-3 { width: 15%; }

      .ch-btn-primary { background: ${C.green}; color: ${C.white}; font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.92rem; padding: 0.85rem 2rem; border: none; border-radius: 100px; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.2s, transform 0.15s; }
      .ch-btn-primary:hover { background: ${C.accent}; transform: translateY(-1px); }
      .ch-btn-ghost { font-size: 0.85rem; color: ${C.textMuted}; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; transition: color 0.2s; }
      .ch-btn-ghost:hover { color: ${C.text}; }
      .ch-nav-cta { background: ${C.green} !important; color: ${C.white} !important; padding: 0.55rem 1.3rem !important; border-radius: 100px; font-weight: 500 !important; transition: background 0.2s !important; }
      .ch-nav-cta:hover { background: ${C.accent} !important; }

      .ch-waitlist-input { flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: ${C.white}; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; padding: 0.85rem 1.2rem; border-radius: 100px; outline: none; transition: border-color 0.2s; }
      .ch-waitlist-input::placeholder { color: rgba(255,255,255,0.35); }
      .ch-waitlist-input:focus { border-color: ${C.greenMid}; }

      @media (max-width: 900px) {
        .ch-hero-right { display: none !important; }
        .ch-hero { grid-template-columns: 1fr !important; }
        .ch-steps { grid-template-columns: 1fr 1fr !important; }
        .ch-challenges { grid-template-columns: 1fr !important; }
        .ch-payout-grid { grid-template-columns: 1fr !important; }
        .ch-testimonials { grid-template-columns: 1fr !important; }
        .ch-footer { flex-direction: column !important; align-items: flex-start !important; }
        .ch-nav-links { display: none !important; }
      }
    `
        document.head.appendChild(style)
    }, [])
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Nav() {
    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.1rem 4rem",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                borderBottom: `1px solid ${C.border}`,
            }}
        >
            <a
                href="https://www.compete.health"
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    letterSpacing: "-0.01em",
                    color: C.accent,
                }}
            >
                Compete
                <span style={{ color: C.greenMid }}>.</span>
                Health
            </a>
            <ul
                className="ch-nav-links"
                style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
            >
                {[
                    ["How it works", "#how"],
                    ["Challenges", "#challenges"],
                    ["Payouts", "#payouts"],
                ].map(([label, href]) => (
                    <li key={label}>
                        <a
                            href={href}
                            style={{
                                fontSize: "0.82rem",
                                color: C.textMuted,
                                transition: "color 0.2s",
                            }}
                        >
                            {label}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="https://www.compete.health/requestdetails"
                        className="ch-nav-cta"
                        style={{ fontSize: "0.82rem" }}
                    >
                        Request details
                    </a>
                </li>
            </ul>
        </nav>
    )
}

function PhoneMockup() {
    return (
        <div style={{ width: 255, position: "relative", zIndex: 2 }}>
            <div
                style={{
                    background: C.white,
                    borderRadius: 36,
                    border: `1px solid ${C.borderDark}`,
                    padding: 14,
                    boxShadow: `0 20px 60px rgba(27,67,50,0.1), 0 4px 16px rgba(0,0,0,0.06)`,
                }}
            >
                <div
                    style={{
                        background: C.offWhite,
                        borderRadius: 24,
                        overflow: "hidden",
                        aspectRatio: "9/19",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Top bar */}
                    <div
                        style={{
                            background: C.accent,
                            padding: "12px 16px 10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: "0.76rem",
                                color: C.white,
                            }}
                        >
                            Compete.Health
                        </span>
                        <div
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: C.greenMid,
                            }}
                        />
                    </div>

                    {/* Challenge card */}
                    <div
                        style={{
                            margin: "10px 10px 6px",
                            background: C.white,
                            borderRadius: 12,
                            padding: "11px 12px",
                            border: `1px solid ${C.border}`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.55rem",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: C.green,
                                marginBottom: 3,
                                fontWeight: 500,
                            }}
                        >
                            Active challenge
                        </div>
                        <div
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: "0.92rem",
                                color: C.accent,
                                marginBottom: 6,
                            }}
                        >
                            October Miles Cup
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: 6,
                                fontSize: "0.58rem",
                                color: C.textMuted,
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    background: C.greenPale,
                                    color: C.green,
                                    padding: "2px 7px",
                                    borderRadius: 20,
                                    fontWeight: 600,
                                    letterSpacing: "0.06em",
                                }}
                            >
                                GROUP
                            </span>
                            <span>6 days left</span>
                            <span>48 runners</span>
                        </div>
                    </div>

                    {/* Leaderboard */}
                    <div
                        style={{
                            margin: "0 10px",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.55rem",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: C.textLight,
                                padding: "4px 0 2px",
                                fontWeight: 500,
                            }}
                        >
                            Leaderboard
                        </div>
                        {[
                            {
                                rank: "1",
                                rankColor: "#B8860B",
                                init: "KJ",
                                bg: C.greenPale,
                                fg: C.green,
                                name: "K. Johnson",
                                score: "94.2mi",
                                me: false,
                            },
                            {
                                rank: "2",
                                rankColor: "#888",
                                init: "MR",
                                bg: C.cream,
                                fg: C.textMuted,
                                name: "M. Rivera",
                                score: "87.1mi",
                                me: false,
                            },
                            {
                                rank: "3",
                                rankColor: C.green,
                                init: "You",
                                bg: C.greenPale,
                                fg: C.green,
                                name: "You",
                                score: "81.8mi",
                                me: true,
                            },
                            {
                                rank: "4",
                                rankColor: "#8B5E3C",
                                init: "TC",
                                bg: "#f5ede6",
                                fg: "#8B5E3C",
                                name: "T. Chen",
                                score: "73.4mi",
                                me: false,
                            },
                        ].map((row) => (
                            <div
                                key={row.rank}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 7,
                                    background: row.me ? C.greenPale : C.white,
                                    borderRadius: 9,
                                    padding: "7px 9px",
                                    border: `1px solid ${row.me ? "rgba(64,145,108,0.3)" : C.border}`,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'DM Serif Display', serif",
                                        fontSize: "0.82rem",
                                        width: 13,
                                        textAlign: "center",
                                        color: row.rankColor,
                                    }}
                                >
                                    {row.rank}
                                </span>
                                <div
                                    style={{
                                        width: 23,
                                        height: 23,
                                        borderRadius: "50%",
                                        background: row.bg,
                                        color: row.fg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.5rem",
                                        fontWeight: 600,
                                        flexShrink: 0,
                                    }}
                                >
                                    {row.init}
                                </div>
                                <span
                                    style={{
                                        fontSize: "0.66rem",
                                        fontWeight: 500,
                                        color: row.me ? C.green : C.text,
                                        flex: 1,
                                    }}
                                >
                                    {row.name}
                                </span>
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: "0.68rem",
                                        color: C.green,
                                    }}
                                >
                                    {row.score}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Prize pot */}
                    <div
                        style={{
                            margin: "5px 10px 11px",
                            background: C.accent,
                            borderRadius: 12,
                            padding: "10px 12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "0.54rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.55)",
                                    fontWeight: 500,
                                }}
                            >
                                Prize pool
                            </div>
                            <div
                                style={{
                                    fontFamily: "'DM Serif Display', serif",
                                    fontSize: "1.25rem",
                                    color: C.white,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                $960
                            </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div
                                style={{
                                    fontSize: "0.54rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.55)",
                                    fontWeight: 500,
                                }}
                            >
                                Your est. payout
                            </div>
                            <div
                                style={{
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                    color: "rgba(255,255,255,0.75)",
                                }}
                            >
                                $288
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Hero() {
    return (
        <section
            className="ch-hero"
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                minHeight: "100vh",
                background: C.offWhite,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "6rem 4rem",
                }}
            >
                <p
                    className="ch-animate ch-d1"
                    style={{
                        fontSize: "0.72rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: C.green,
                        marginBottom: "1.5rem",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            width: 20,
                            height: 1.5,
                            background: C.green,
                        }}
                    />
                    The competitive fitness platform
                </p>
                <h1
                    className="ch-animate ch-d2"
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontWeight: 400,
                        fontSize: "clamp(3.2rem, 5.5vw, 5rem)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        color: C.accent,
                        marginBottom: "1.75rem",
                    }}
                >
                    Compete.
                    <br />
                    <em style={{ fontStyle: "italic", color: C.greenLight }}>
                        Sweat.
                    </em>
                    <br />
                    Win.
                </h1>
                <p
                    className="ch-animate ch-d3"
                    style={{
                        fontSize: "1.05rem",
                        fontWeight: 300,
                        color: C.textMuted,
                        lineHeight: 1.7,
                        maxWidth: 420,
                        marginBottom: "2.75rem",
                    }}
                >
                    Join challenges, sync your activity, climb the leaderboard.{" "}
                    <strong style={{ color: C.text, fontWeight: 500 }}>
                        Real entry fees. Real winners. Real payouts.
                    </strong>
                </p>
                <div
                    className="ch-animate ch-d4"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.25rem",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="https://www.compete.health/requestdetails"
                        className="ch-btn-primary"
                    >
                        Request details
                    </a>
                    <a href="#how" className="ch-btn-ghost">
                        See how it works →
                    </a>
                </div>
                <div
                    className="ch-animate ch-d5"
                    style={{
                        display: "flex",
                        gap: "2.5rem",
                        marginTop: "3.5rem",
                        paddingTop: "2rem",
                        borderTop: `1px solid ${C.border}`,
                    }}
                >
                    {[
                        ["$500K+", "In prizes distributed"],
                        ["12K+", "Active competitors"],
                        ["98%", "Payout success rate"],
                    ].map(([num, label]) => (
                        <div key={label}>
                            <div
                                style={{
                                    fontFamily: "'DM Serif Display', serif",
                                    fontSize: "1.9rem",
                                    color: C.accent,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {num}
                            </div>
                            <div
                                style={{
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.04em",
                                    textTransform: "uppercase",
                                    color: C.textLight,
                                    marginTop: "0.2rem",
                                }}
                            >
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="ch-hero-right"
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: C.cream,
                    borderLeft: `1px solid ${C.border}`,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at 60% 30%, rgba(82,183,136,0.08) 0%, transparent 65%)",
                    }}
                />
                <PhoneMockup />
            </div>
        </section>
    )
}

function Ticker() {
    const items = [
        "Solo challenges",
        "Group competitions",
        "1v1 showdowns",
        "Instant payouts",
        "Activity sync",
        "Verified rankings",
        "Real prize money",
    ]
    const doubled = [...items, ...items]
    return (
        <div
            style={{
                background: C.accent,
                overflow: "hidden",
                padding: "0.65rem 0",
                whiteSpace: "nowrap",
            }}
        >
            <div className="ch-ticker-track">
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 400,
                            fontSize: "0.76rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.6)",
                            padding: "0 2rem",
                        }}
                    >
                        {i !== 0 && (
                            <span
                                style={{
                                    marginRight: "2rem",
                                    color: C.greenMid,
                                }}
                            >
                                ·
                            </span>
                        )}
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Create your account",
            desc: "Sign up with email or social. Set your fitness preferences and we'll match you with the right challenges.",
        },
        {
            num: "02",
            title: "Choose a challenge",
            desc: "Browse solo, group, or 1v1 challenges. Filter by activity type, duration, entry fee, and prize pool size.",
        },
        {
            num: "03",
            title: "Pay your entry fee",
            desc: "Entry fees go directly into the prize pool. Stripe-powered payments keep everything secure and transparent.",
        },
        {
            num: "04",
            title: "Sync your activity",
            desc: "Connect your fitness tracker or wearable. Progress updates automatically and your rank adjusts in real time.",
        },
        {
            num: "05",
            title: "Collect your winnings",
            desc: "Winners confirm eligibility and receive their payout directly to their bank account. No delays.",
        },
    ]

    return (
        <section
            id="how"
            style={{ padding: "7rem 4rem", background: C.offWhite }}
        >
            <p
                style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: C.green,
                    marginBottom: "1rem",
                    fontWeight: 500,
                }}
            >
                How it works
            </p>
            <h2
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: C.accent,
                    marginBottom: "4rem",
                }}
            >
                Five steps to{" "}
                <em style={{ fontStyle: "italic", color: C.greenLight }}>
                    your first payout
                </em>
            </h2>
            <div
                className="ch-steps"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    border: `1px solid ${C.border}`,
                }}
            >
                {steps.map((step, i) => (
                    <div
                        key={step.num}
                        className="ch-step"
                        style={{
                            padding: "2.5rem 1.75rem",
                            borderRight:
                                i < steps.length - 1
                                    ? `1px solid ${C.border}`
                                    : "none",
                            background: C.white,
                            transition: "background 0.25s",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: "3rem",
                                lineHeight: 1,
                                color: C.borderDark,
                                marginBottom: "1.25rem",
                                display: "block",
                            }}
                        >
                            {step.num}
                        </span>
                        <div
                            style={{
                                width: 36,
                                height: 36,
                                background: C.greenPale,
                                borderRadius: 8,
                                marginBottom: "1rem",
                            }}
                        />
                        <div
                            style={{
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                color: C.accent,
                                marginBottom: "0.65rem",
                            }}
                        >
                            {step.title}
                        </div>
                        <div
                            style={{
                                fontSize: "0.83rem",
                                color: C.textMuted,
                                lineHeight: 1.65,
                            }}
                        >
                            {step.desc}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function Challenges() {
    const cards = [
        {
            type: "Solo",
            accent: C.greenMid,
            title: "Prove it\nto yourself",
            desc: "You versus a goal. Hit the target — miles, steps, workouts — before the clock runs out and claim your share of the prize pool.",
            features: [
                "Individual performance ranking",
                "Multiple activity types supported",
                "Tiered prizes for top finishers",
                "Age-band groupings available",
            ],
        },
        {
            type: "Group",
            accent: C.green,
            title: "Team up.\nCash out.",
            desc: "Form a crew or get assigned to a bracket. Pool your collective effort against other groups and split the winnings.",
            features: [
                "Team-based collective scoring",
                "Automated group assignment",
                "Per-group prize distributions",
                "Private or public challenges",
            ],
        },
        {
            type: "1v1",
            accent: C.accent,
            title: "You vs.\none rival.",
            desc: "Call out a rival. Both put skin in the game. One winner takes everything. The most personal, most intense format.",
            features: [
                "Direct challenger / challenged setup",
                "Optional custom entry fee",
                "Winner-takes-all payout",
                "Head-to-head leaderboard",
            ],
        },
    ]

    return (
        <section id="challenges" style={{ padding: "7rem 4rem" }}>
            <p
                style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: C.green,
                    marginBottom: "1rem",
                    fontWeight: 500,
                }}
            >
                Challenge types
            </p>
            <h2
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: C.accent,
                    marginBottom: "4rem",
                }}
            >
                Pick your{" "}
                <em style={{ fontStyle: "italic", color: C.greenLight }}>
                    battleground
                </em>
            </h2>
            <div
                className="ch-challenges"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 1,
                    background: C.border,
                    border: `1px solid ${C.border}`,
                }}
            >
                {cards.map((card) => (
                    <div
                        key={card.type}
                        className="ch-card"
                        style={{
                            background: C.white,
                            padding: "2.75rem 2.25rem",
                            position: "relative",
                            transition: "background 0.25s",
                            borderTop: `3px solid ${card.accent}`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.65rem",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fontWeight: 600,
                                color: card.accent,
                                marginBottom: "0.75rem",
                            }}
                        >
                            {card.type}
                        </div>
                        <h3
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: "2.2rem",
                                lineHeight: 1.05,
                                color: C.accent,
                                marginBottom: "1.1rem",
                                whiteSpace: "pre-line",
                            }}
                        >
                            {card.title}
                        </h3>
                        <p
                            style={{
                                fontSize: "0.88rem",
                                color: C.textMuted,
                                lineHeight: 1.65,
                                marginBottom: "1.75rem",
                            }}
                        >
                            {card.desc}
                        </p>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.55rem",
                            }}
                        >
                            {card.features.map((f) => (
                                <li
                                    key={f}
                                    style={{
                                        fontSize: "0.82rem",
                                        color: C.textMuted,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: "50%",
                                            background: card.accent,
                                            flexShrink: 0,
                                            display: "inline-block",
                                        }}
                                    />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

function Payouts() {
    const bar1Ref = useRef<HTMLDivElement>(null)
    const bar2Ref = useRef<HTMLDivElement>(null)
    const bar3Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "ch-bar-animated",
                            `ch-bar-${(entry.target as HTMLElement).dataset.bar}`
                        )
                    }
                })
            },
            { threshold: 0.3 }
        )
        ;[bar1Ref, bar2Ref, bar3Ref].forEach((ref) => {
            if (ref.current) observer.observe(ref.current)
        })
        return () => observer.disconnect()
    }, [])

    const barStyle: React.CSSProperties = {
        height: "100%",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        paddingLeft: 12,
        fontWeight: 600,
        fontSize: "0.82rem",
    }

    return (
        <section
            id="payouts"
            style={{ padding: "7rem 4rem", background: C.offWhite }}
        >
            <div
                className="ch-payout-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6rem",
                    alignItems: "center",
                }}
            >
                <div>
                    <p
                        style={{
                            fontSize: "0.7rem",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: C.green,
                            marginBottom: "1rem",
                            fontWeight: 500,
                        }}
                    >
                        Prize structure
                    </p>
                    <h2
                        style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontWeight: 400,
                            fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.02em",
                            color: C.accent,
                            marginBottom: "1.5rem",
                        }}
                    >
                        Real money.{" "}
                        <em style={{ fontStyle: "italic", color: C.greenLight }}>
                            Real ranks.
                        </em>
                    </h2>
                    <p
                        style={{
                            fontSize: "0.92rem",
                            color: C.textMuted,
                            lineHeight: 1.7,
                            maxWidth: 380,
                            marginBottom: "2rem",
                        }}
                    >
                        Every challenge has a fully transparent payout breakdown.
                        Know exactly what you're competing for before you enter.
                        No surprises.
                    </p>
                    {[
                        "Stripe-powered instant payouts",
                        "Winners confirm eligibility via affidavit",
                        "Automated refund processing if needed",
                    ].map((item) => (
                        <div
                            key={item}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                fontSize: "0.83rem",
                                color: C.textMuted,
                                marginBottom: "0.55rem",
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: C.green,
                                    flexShrink: 0,
                                    display: "inline-block",
                                }}
                            />
                            {item}
                        </div>
                    ))}
                </div>

                <div>
                    <div
                        style={{
                            background: C.white,
                            border: `1px solid ${C.border}`,
                            borderBottom: "none",
                            padding: "1.5rem 2rem 0",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                paddingBottom: "1.5rem",
                                borderBottom: `1px solid ${C.border}`,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: C.textLight,
                                    fontWeight: 500,
                                }}
                            >
                                Example: 20-person group challenge
                            </span>
                            <span
                                style={{
                                    fontFamily: "'DM Serif Display', serif",
                                    fontSize: "1.05rem",
                                    color: C.green,
                                }}
                            >
                                $1,000 pool
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            background: C.white,
                            border: `1px solid ${C.border}`,
                            borderTop: "none",
                            padding: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        {[
                            {
                                ref: bar1Ref,
                                n: "1",
                                label: "1st",
                                amount: "$600",
                                bg: C.green,
                                fg: C.white,
                            },
                            {
                                ref: bar2Ref,
                                n: "2",
                                label: "2nd",
                                amount: "$250",
                                bg: C.greenMid,
                                fg: C.white,
                            },
                            {
                                ref: bar3Ref,
                                n: "3",
                                label: "3rd",
                                amount: "$150",
                                bg: C.greenPale,
                                fg: C.green,
                            },
                        ].map((row) => (
                            <div
                                key={row.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'DM Serif Display', serif",
                                        fontSize: "1rem",
                                        width: 56,
                                        color: C.textMuted,
                                    }}
                                >
                                    {row.label}
                                </span>
                                <div
                                    style={{
                                        flex: 1,
                                        height: 34,
                                        background: C.cream,
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        border: `1px solid ${C.border}`,
                                    }}
                                >
                                    <div
                                        ref={row.ref}
                                        data-bar={row.n}
                                        className="ch-bar-fill"
                                        style={{
                                            ...barStyle,
                                            background: row.bg,
                                            color: row.fg,
                                        }}
                                    >
                                        {row.amount}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <p
                            style={{
                                fontSize: "0.74rem",
                                color: C.textLight,
                                marginTop: "0.5rem",
                            }}
                        >
                            Percentages are configurable per challenge by the
                            host.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Testimonials() {
    const items = [
        {
            quote: (
                <>
                    "I've tried every fitness app. Nothing gets me out of bed at
                    5am like knowing{" "}
                    <strong style={{ color: C.green, fontWeight: 500 }}>
                        there's $150 on the line.
                    </strong>{" "}
                    The leaderboard stress is unreal."
                </>
            ),
            init: "JK",
            bg: C.greenPale,
            fg: C.green,
            name: "Jamie K.",
            meta: "Marathon runner · $340 won",
        },
        {
            quote: (
                <>
                    "Set up a group challenge for my office. 12 people, $30
                    each.{" "}
                    <strong style={{ color: C.green, fontWeight: 500 }}>
                        $360 going to the top three finishers.
                    </strong>{" "}
                    Best team-building we've ever done."
                </>
            ),
            init: "DS",
            bg: "#e8f4f0",
            fg: C.green,
            name: "Dana S.",
            meta: "Group challenge host · 3 events run",
        },
        {
            quote: (
                <>
                    "1v1'd my coworker.{" "}
                    <strong style={{ color: C.green, fontWeight: 500 }}>
                        $50 each, winner takes $100.
                    </strong>{" "}
                    We both hit PRs that week. He won but I've never trained
                    harder."
                </>
            ),
            init: "MP",
            bg: C.cream,
            fg: C.textMuted,
            name: "Marcus P.",
            meta: "1v1 competitor · 5 matches played",
        },
    ]

    return (
        <section style={{ padding: "7rem 4rem" }}>
            <p
                style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: C.green,
                    marginBottom: "1rem",
                    fontWeight: 500,
                }}
            >
                Early members
            </p>
            <h2
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    color: C.accent,
                    marginBottom: "4rem",
                }}
            >
                What competitors{" "}
                <em style={{ fontStyle: "italic", color: C.greenLight }}>
                    are saying
                </em>
            </h2>
            <div
                className="ch-testimonials"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 1,
                    background: C.border,
                    border: `1px solid ${C.border}`,
                }}
            >
                {items.map((item) => (
                    <div
                        key={item.name}
                        className="ch-testimonial"
                        style={{
                            background: C.white,
                            padding: "2.5rem",
                            transition: "background 0.25s",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: 300,
                                lineHeight: 1.75,
                                color: C.textMuted,
                                marginBottom: "1.5rem",
                            }}
                        >
                            {item.quote}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: "50%",
                                    background: item.bg,
                                    color: item.fg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    flexShrink: 0,
                                }}
                            >
                                {item.init}
                            </div>
                            <div>
                                <div
                                    style={{
                                        fontWeight: 500,
                                        fontSize: "0.85rem",
                                        color: C.text,
                                    }}
                                >
                                    {item.name}
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.74rem",
                                        color: C.textLight,
                                        marginTop: "0.1rem",
                                    }}
                                >
                                    {item.meta}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

function CTA() {
    const handleSubmit = () => {
        const input = document.getElementById(
            "ch-email"
        ) as HTMLInputElement | null
        const note = document.getElementById("ch-note")
        if (!input || !note) return
        const email = input.value.trim()
        if (!email || !email.includes("@")) {
            note.textContent = "Please enter a valid email address."
            note.style.color = "#c0392b"
            return
        }
        input.value = ""
        note.textContent = "You're on the list! We'll be in touch soon."
        note.style.color = C.greenMid
    }

    return (
        <section
            id="waitlist"
            style={{
                padding: "8rem 4rem",
                textAlign: "center",
                background: C.accent,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(82,183,136,0.15) 0%, transparent 60%)",
                    pointerEvents: "none",
                }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
                <p
                    style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: C.greenMid,
                        marginBottom: "1rem",
                        fontWeight: 500,
                    }}
                >
                    Early access
                </p>
                <h2
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontWeight: 400,
                        fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                        color: C.white,
                        maxWidth: 700,
                        margin: "0 auto 1.5rem",
                    }}
                >
                    Ready to put{" "}
                    <em style={{ fontStyle: "italic", color: C.greenMid }}>
                        skin in the game?
                    </em>
                </h2>
                <p
                    style={{
                        fontSize: "1rem",
                        color: "rgba(255,255,255,0.6)",
                        fontWeight: 300,
                        marginBottom: "3rem",
                    }}
                >
                    Join the waitlist. First 1,000 members get{" "}
                    <strong style={{ color: C.white, fontWeight: 500 }}>
                        zero entry fees
                    </strong>{" "}
                    on their first challenge.
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: "0.6rem",
                        maxWidth: 420,
                        margin: "0 auto 1.25rem",
                    }}
                >
                    <input
                        id="ch-email"
                        type="email"
                        placeholder="your@email.com"
                        className="ch-waitlist-input"
                    />
                    <button
                        onClick={handleSubmit}
                        className="ch-btn-primary"
                        style={{
                            background: C.greenMid,
                            whiteSpace: "nowrap",
                            borderRadius: 100,
                        }}
                    >
                        Join now
                    </button>
                </div>
                <p
                    id="ch-note"
                    style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                    }}
                >
                    No spam. Just launch news and your challenge invite.
                </p>
            </div>
        </section>
    )
}

function Footer() {
    const links = [
        ["About", "https://www.compete.health/requestdetails"],
        ["Privacy Policy", "https://www.compete.health/privacy"],
        ["Terms of Service", "https://www.compete.health/terms"],
        ["Challenge Terms", "https://www.compete.health/challenge-terms"],
        ["Challenge Rulebook", "https://www.compete.health/rulebook"],
        ["My Health My Data", "https://www.compete.health/mhmd"],
    ]

    return (
        <footer
            className="ch-footer"
            style={{
                padding: "2.5rem 4rem",
                borderTop: `1px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: C.white,
                flexWrap: "wrap",
                gap: "1.25rem",
            }}
        >
            <a
                href="https://www.compete.health"
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: C.accent,
                    textDecoration: "none",
                }}
            >
                Compete
                <span style={{ color: C.greenMid }}>.</span>
                Health
            </a>
            <ul
                style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}
            >
                {links.map(([label, href]) => (
                    <li key={label}>
                        <a
                            href={href}
                            style={{
                                fontSize: "0.78rem",
                                color: C.textMuted,
                                textDecoration: "none",
                                transition: "color 0.2s",
                            }}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            <span style={{ fontSize: "0.74rem", color: C.textLight }}>
                © 2026 Compete Health LLC
            </span>
        </footer>
    )
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function CompeteHealthLanding() {
    useFonts()
    useGlobalStyles()

    return (
        <div className="ch" style={{ width: "100%", minHeight: "100vh" }}>
            <Nav />
            <Hero />
            <Ticker />
            <HowItWorks />
            <Challenges />
            <Payouts />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}
