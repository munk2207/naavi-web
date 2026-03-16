'use client';

import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL REVEAL HOOK
// ─────────────────────────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const conversation = [
  {
    speaker: 'naavi',
    text: "Morning. Four things on my radar — Dr. Patel at 2, a medication refill coming up, that clinic call you mentioned last week, and you haven't spoken to your brother in a while. Want to go through any of them?",
    note: 'Naavi has already reviewed the calendar, health portal, and pending threads — before Robert says a word.',
  },
  {
    speaker: 'robert',
    text: 'The appointment.',
  },
  {
    speaker: 'naavi',
    text: "Dr. Patel today at 2pm, Centretown Medical on MacLaren. It's a regular check-in — last time she adjusted your Lisinopril. You'll want to mention your BP has been running slightly higher in the evenings. Anything else?",
    note: 'Connects today\'s appointment to the last visit. Surfaces a useful preparation note.',
  },
  {
    speaker: 'robert',
    text: "What's the refill thing?",
  },
  {
    speaker: 'naavi',
    text: 'Your Metformin runs out around April 10. If you want to avoid a gap, call Dr. Patel\'s office by March 28 — that\'s 11 days from now. Want me to set a reminder?',
    note: 'Gives the deadline in days, not just a date. Offers the next step as a question — never an instruction.',
  },
  {
    speaker: 'robert',
    text: 'Sure.',
  },
  {
    speaker: 'naavi',
    text: 'Done — reminder set for March 28. Anything else from the list?',
  },
  {
    speaker: 'robert',
    text: "That's it for now.",
  },
  {
    speaker: 'naavi',
    text: 'Enjoy the walk. Good luck with Dr. Patel.',
    note: 'Knows he walks in the morning. Closes without a summary — Robert was there.',
  },
];

const layers = [
  {
    number: '01',
    name: 'Physical World',
    description: "Robert's calendar, health portal, smart home, notes, and voice memos — the tools he already uses every day.",
    color: 'bg-gray-100',
    text: 'text-gray-700',
    border: 'border-gray-200',
  },
  {
    number: '02',
    name: 'Edge Device',
    description: "Robert's iPhone. All data syncs locally first, so Naavi works even without internet. His data stays on his device by default.",
    color: 'bg-naavi-50',
    text: 'text-naavi-800',
    border: 'border-naavi-100',
  },
  {
    number: '03',
    name: 'Integration Layer',
    description: 'Naavi reads from every tool — silently, in the background, every 15 minutes. It normalises everything into one shared picture.',
    color: 'bg-naavi-50',
    text: 'text-naavi-800',
    border: 'border-naavi-100',
  },
  {
    number: '04',
    name: 'AI Orchestration',
    description: "Claude — a large language model — reads Robert's full context and decides what matters, what to say, and when to say it.",
    color: 'bg-naavi-100',
    text: 'text-naavi-900',
    border: 'border-naavi-200',
  },
  {
    number: '05',
    name: 'Cognitive Profile',
    description: "Naavi's persistent memory. It grows over time — learning Robert's rhythms, relationships, preferences, and patterns.",
    color: 'bg-naavi-800',
    text: 'text-white',
    border: 'border-naavi-700',
    numberColor: 'text-naavi-400',
  },
];

const principles = [
  {
    icon: '🇨🇦',
    title: 'Data stays in Canada',
    body: "Robert's health context, routines, and relationship data never leave Canadian servers. Regulated under PIPEDA and Ontario's PHIPA.",
  },
  {
    icon: '🎙️',
    title: 'No audio stored — ever',
    body: "Naavi listens, transcribes, then discards the audio immediately. Only the text of what Robert said is retained — and only the text he'd expect.",
  },
  {
    icon: '🧱',
    title: 'Boundaries are enforced in code',
    body: 'Robert chose not to connect his banking. Naavi will never ask again. Boundaries are not guidelines — they are hard rules built into the system.',
  },
  {
    icon: '🗑️',
    title: 'Full deletion on request',
    body: 'Robert can export or delete his entire Cognitive Profile at any time. Purged within 24 hours. No retention, no backup exceptions.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Page() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-naavi-800 font-semibold text-lg tracking-tight">Naavi</span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
            <a href="#problem"      className="hover:text-naavi-700 transition-colors">The Problem</a>
            <a href="#checkin"      className="hover:text-naavi-700 transition-colors">Morning Check-in</a>
            <a href="#architecture" className="hover:text-naavi-700 transition-colors">Architecture</a>
            <a href="#privacy"      className="hover:text-naavi-700 transition-colors">Privacy</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-naavi-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-naavi-100 text-naavi-700 text-sm font-medium tracking-wide">
            Life orchestration for active seniors
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-naavi-900 leading-[1.1] tracking-tight mb-6">
            Your life,<br />orchestrated.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
            Robert is sharp. His calendar, health portal, notes, and smart home
            are not talking to each other. He connects the dots manually. Every day.
            <br /><br />
            <span className="text-naavi-700 font-medium">Naavi connects them for him.</span>
          </p>
          <a
            href="#problem"
            className="inline-flex items-center gap-2 bg-naavi-800 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-naavi-700 transition-colors"
          >
            See how it works
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section id="problem" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The coordination problem
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Robert is not struggling with technology. He is struggling with the gap between his tools.
            </p>
          </div>

          {/* Tool grid */}
          <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                name: 'Google Calendar', icon: '📅', note: 'Doctor at 2pm',
                url: 'https://calendar.google.com',
                tooltip: 'Naavi reads your events every 15 minutes and classifies them as medical, social, or personal using your care team and relationship data.',
              },
              {
                name: 'Google Keep', icon: '📌', note: '"Call clinic about referral"',
                url: 'https://keep.google.com',
                tooltip: 'Naavi reads your Google Keep notes and extracts action items and unresolved tasks, turning them into tracked threads it follows up on.',
              },
              {
                name: 'MyChart', icon: '🏥', note: 'Refill due April 10',
                url: 'https://mycarecompass.lifelabs.com/',
                tooltip: 'Naavi connects to your health portal via a secure Canadian standard (FHIR). It reads upcoming appointments, medications, and lab trends — and cross-references them with your calendar.',
              },
              {
                name: 'Weather', icon: '🌡️', note: '18°C — turned down last night',
                url: 'https://www.theweathernetwork.com/en',
                tooltip: 'Naavi reads and controls your thermostat. Say "turn the heat up" and it adjusts automatically. No app-switching required.',
              },
              {
                name: 'Voice Memos', icon: '🎙️', note: '"Reminder: ask about Lisinopril"',
                url: 'https://apps.apple.com/ca/app/voice-memos/id1069512134',
                tooltip: 'Naavi transcribes your voice memos and extracts reminders and tasks, adding them to your pending threads so nothing slips through.',
              },
              {
                name: 'Health Portal', icon: '📋', note: 'Lab results uploaded',
                url: 'https://www.mychart.com',
                tooltip: 'Naavi monitors your portal for new lab results and appointment updates, surfacing only what is relevant — never raw numbers, always plain language.',
              },
            ].map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded-2xl p-5 bg-gray-50 relative hover:border-naavi-300 hover:bg-naavi-50 transition-colors cursor-pointer group"
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="font-medium text-sm text-gray-800 mb-1 group-hover:text-naavi-700 transition-colors">{tool.name}</div>
                <div className="text-xs text-gray-400 italic">"{tool.note}"</div>
                {/* Disconnected indicator */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-300" />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-naavi-900 text-white text-xs rounded-xl px-3 py-2.5 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 shadow-lg">
                  <div className="font-semibold text-naavi-300 mb-1">How Naavi connects</div>
                  {tool.tooltip}
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-naavi-900" />
                </div>
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4">
              <span className="text-amber-500 text-xl">⚠️</span>
              <p className="text-amber-800 text-sm font-medium">
                Six tools. Six separate apps. Zero awareness of each other.<br />
                <span className="font-normal text-amber-700">Robert holds all of this in his head and connects the dots manually.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 bg-naavi-50">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Naavi works
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Naavi does not replace Robert's tools. It sits above them — reading everything, remembering everything, and surfacing only what matters.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Listens',
                body: 'Robert speaks naturally. Naavi understands English and French, handles mid-sentence switching, and responds in whichever language Robert used.',
                icon: '🎙️',
              },
              {
                step: '02',
                title: 'Learns',
                body: "Over time, Naavi builds a Cognitive Profile — Robert's daily rhythms, relationships, health context, and preferences. It learns without being taught.",
                icon: '🧠',
              },
              {
                step: '03',
                title: 'Orchestrates',
                body: 'Every morning, before Robert reaches for his phone, Naavi has already reviewed his day and assembled a brief. The answer is ready before the question.',
                icon: '⚡',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 border border-naavi-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-xs font-semibold text-naavi-600 tracking-widest uppercase mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORNING CHECK-IN ── */}
      <section id="checkin" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The morning check-in
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every morning, Naavi opens with an answer — not a question.
              It has already reviewed Robert's day so he does not have to.
            </p>
          </div>

          <div className="reveal flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

            {/* Phone mockup */}
            <div className="flex-shrink-0 mx-auto lg:mx-0 lg:sticky lg:top-24">
              <div className="phone-frame">
                <div className="phone-screen">
                  {/* Status bar */}
                  <div className="phone-status-bar">
                    <span className="text-white/60 text-[10px] font-medium">Naavi</span>
                  </div>

                  {/* Time header */}
                  <div className="bg-naavi-800 px-5 pb-4">
                    <p className="text-naavi-400 text-[11px]">Tuesday, March 17 · 08:15</p>
                  </div>

                  {/* Messages */}
                  <div className="phone-messages">
                    {conversation.map((msg, i) => (
                      <div key={i} className={`flex flex-col ${msg.speaker === 'robert' ? 'items-end' : 'items-start'}`}>
                        <p className={`bubble-label ${msg.speaker === 'naavi' ? 'bubble-label-naavi' : 'bubble-label-robert'}`}>
                          {msg.speaker === 'naavi' ? 'Naavi' : 'Robert'}
                        </p>
                        <div className={msg.speaker === 'naavi' ? 'bubble-naavi' : 'bubble-robert'}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Annotations */}
            <div className="flex-1 space-y-5">
              <p className="text-sm font-semibold text-naavi-700 uppercase tracking-widest mb-6">
                What Naavi is doing
              </p>
              {conversation
                .filter((m) => m.note)
                .map((msg, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-naavi-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-naavi-700" />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 leading-relaxed italic border-l-2 border-naavi-100 pl-3">
                        "{msg.text.substring(0, 60)}{msg.text.length > 60 ? '…' : ''}"
                      </p>
                      <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">{msg.note}</p>
                    </div>
                  </div>
                ))}

              <div className="mt-8 p-5 rounded-2xl bg-naavi-50 border border-naavi-100">
                <p className="text-sm font-semibold text-naavi-800 mb-2">Design principle</p>
                <p className="text-sm text-naavi-700 leading-relaxed">
                  Naavi opens every morning check-in with the count and a question —
                  never a greeting, never a health quiz. Robert is a peer. He came for the answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ── */}
      <section id="architecture" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Five layers. One experience.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Naavi is structured in layers — each with a clear responsibility,
              each invisible to Robert.
            </p>
          </div>

          <div className="reveal space-y-3">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className={`layer-card rounded-2xl border px-7 py-5 ${layer.color} ${layer.border} flex items-start gap-5`}
              >
                <span className={`text-2xl font-bold tabular-nums flex-shrink-0 ${layer.numberColor ?? 'text-naavi-600'}`}>
                  {layer.number}
                </span>
                <div>
                  <h3 className={`font-semibold text-base mb-1 ${layer.text}`}>{layer.name}</h3>
                  <p className={`text-sm leading-relaxed ${layer.text} opacity-75`}>{layer.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 text-center">
            <p className="text-sm text-gray-400 italic">
              The Cognitive Profile grows over time — within 90 days, it knows Robert well enough to anticipate rather than just respond.
            </p>
          </div>
        </div>
      </section>

      {/* ── COGNITIVE PROFILE PREVIEW ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Naavi's memory of Robert
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              The Cognitive Profile is not a database of facts.
              It is a living map that grows with every conversation.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                layer: 'Identity',
                color: 'border-gray-200 bg-gray-50',
                accent: 'bg-gray-200 text-gray-700',
                items: [
                  'Ottawa, ON — Eastern time',
                  'English primary, French secondary',
                  'Prefers concise, peer-level tone',
                ],
              },
              {
                layer: 'Rhythms',
                color: 'border-naavi-100 bg-naavi-50',
                accent: 'bg-naavi-100 text-naavi-700',
                items: [
                  'Wakes 07:00 — sharp 09:00–12:00',
                  'Walks most mornings (weather)',
                  'Medication: 08:00 and 20:00',
                ],
              },
              {
                layer: 'Health',
                color: 'border-blue-100 bg-blue-50',
                accent: 'bg-blue-100 text-blue-700',
                items: [
                  'Type 2 diabetes — managed',
                  'Metformin + Lisinopril',
                  'Dr. Patel — Centretown Medical',
                ],
              },
              {
                layer: 'Relationships',
                color: 'border-rose-100 bg-rose-50',
                accent: 'bg-rose-100 text-rose-700',
                items: [
                  'Sophie (daughter) — weekly Saturday',
                  'Claude (brother) — every 2–3 weeks',
                  'Jim (friend) — Monday gym',
                ],
              },
              {
                layer: 'Environment',
                color: 'border-amber-100 bg-amber-50',
                accent: 'bg-amber-100 text-amber-700',
                items: [
                  'Ecobee thermostat — 21°C day',
                  'Google Calendar connected',
                  'MyChart (health portal) connected',
                ],
              },
              {
                layer: 'Signals',
                color: 'border-purple-100 bg-purple-50',
                accent: 'bg-purple-100 text-purple-700',
                items: [
                  'Most active 08:30–10:00',
                  '"Call clinic about referral" — unresolved',
                  'Metformin adherence: 92%',
                ],
              },
            ].map((card) => (
              <div key={card.layer} className={`rounded-2xl border p-5 ${card.color}`}>
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${card.accent}`}>
                  {card.layer}
                </span>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-300 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY ── */}
      <section id="privacy" className="py-24 px-6 bg-naavi-900">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built on trust
            </h2>
            <p className="text-naavi-400 text-lg max-w-xl mx-auto">
              Robert is 68. His health data, his routines, his relationships —
              these are not data points. They are his life. Naavi treats them that way.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-naavi-800/60 border border-naavi-700 p-6"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-semibold text-white text-base mb-2">{p.title}</h3>
                <p className="text-naavi-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <p className="text-naavi-600 text-sm max-w-lg mx-auto leading-relaxed">
              Robert sets his boundaries once. They are enforced in code — not in guidelines,
              not in privacy policies. The banking integration he declined will never appear again.
            </p>
          </div>
        </div>
      </section>

      {/* ── BILINGUAL ── */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="reveal grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold mb-4 tracking-wide uppercase">
                Bilingual · English / Français
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Robert switches languages. Naavi follows.
              </h2>
              <p className="text-gray-500 leading-relaxed">
                When Robert says <em>"parle-moi en français"</em>, Naavi switches immediately —
                no announcement, no delay. It uses Canadian French vocabulary and stays
                in whichever language Robert used last.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-naavi-50 rounded-2xl p-5 border border-naavi-100">
                <p className="text-xs font-semibold text-naavi-600 uppercase tracking-widest mb-2">English</p>
                <p className="text-sm text-gray-700 italic">"Dr. Patel today at 2pm, Centretown Medical on MacLaren."</p>
              </div>
              <div className="bg-naavi-800 rounded-2xl p-5">
                <p className="text-xs font-semibold text-naavi-400 uppercase tracking-widest mb-2">Français</p>
                <p className="text-sm text-white italic">"Le Dr Patel est à 14h aujourd'hui, à la clinique Centretown sur la rue MacLaren."</p>
              </div>
              <p className="text-xs text-gray-400 text-right">Same information. Robert's language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-naavi-800 font-semibold text-base">Naavi</span>
            <p className="text-gray-400 text-xs mt-1">Ottawa, Canada · Built for Robert.</p>
          </div>
          <div className="text-xs text-gray-400 text-center sm:text-right leading-relaxed">
            Voice-first · Bilingual English / Français<br />
            Canadian data residency · PIPEDA compliant
          </div>
        </div>
      </footer>

    </div>
  );
}
