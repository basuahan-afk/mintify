import { useEffect, useMemo, useState } from 'react'
import ExpandableProfileCardDemo from './ExpandableProfileCardDemo.jsx'
import { courseLessons, lessonForSlug } from './courseContent.js'

const lessons = courseLessons.map((lesson) => ({ ...lesson, topic: lesson.category === 'Markets' ? 'markets' : lesson.category === 'Investing' ? 'investing' : 'basics', meta: `${lesson.category} · ${lesson.minutes} min read`, text: lesson.standfirst }))

function formatINR(value) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value)
}

function LinkButton({ to, children, className = '' }) {
  return <button className={className} onClick={() => { window.location.hash = to }}>{children}</button>
}

function Header({ page }) {
  const links = [['home', 'Home'], ['lessons', 'Lessons'], ['calculator', 'Calculator']]
  return <header className="site-header"><div className="header-inner">
    <a className="brand" href="#home"><span className="brand-mark">●</span>mintify</a>
    <nav aria-label="Main navigation">
      {links.map(([key, label]) => <a key={key} className={page === key ? 'active' : ''} href={`#${key}`}>{label}</a>)}
      <a className="nav-button" href="#lessons">Start learning</a>
    </nav>
  </div></header>
}

function Footer() {
  return <footer><div className="footer-inner"><div><a className="brand" href="#home"><span className="brand-mark">●</span>mintify</a><p className="footer-note">Friendly financial education for Indian teens. For learning only, not personal investment advice.</p></div><div className="footer-links"><a href="#lessons">Lessons</a><a href="#calculator">Calculator</a><a href="#about">About</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div></div></footer>
}

function Home() {
  return <main className="page">
    <section className="hero"><div><div className="eyebrow">Money basics for Indian teens</div><h1>Your money questions deserve clear answers.</h1><p className="lead">The stuff no one explains properly: stocks, demat accounts, SIPs, taxes, and why compounding is a very big deal.</p><div className="hero-actions"><LinkButton to="lessons" className="button">Browse lessons</LinkButton><LinkButton to="calculator" className="button secondary">Try the SIP calculator</LinkButton></div></div><aside className="lesson-index"><div className="lesson-index-head">your first five lessons</div><ol className="index-list"><li><span>01</span>What does a stock do?</li><li><span>02</span>Demat, explained plainly</li><li><span>03</span>Why a SIP is boring (and good)</li><li><span>04</span>Compound interest, actually</li><li><span>05</span>Risk without the scary words</li></ol></aside></section>
    <hr className="rule" />
    <section className="intro-grid"><div><div className="eyebrow">A more useful finance class</div><p className="pull-quote">No hype. No financial jargon as a personality.</p></div><div><p className="lead">Mintify is a place to get comfortable with money before the advice gets complicated. We write short, practical lessons for young people in India—using examples that actually make sense here.</p><p>Start with an article, try the calculator, then come back when a new financial word turns up in conversation.</p></div></section>
    <hr className="rule" />
    <section><div className="eyebrow">Begin here</div><h2>Three good first reads</h2><div className="lesson-stack"><article className="lesson-row"><span className="number">01 / 10 min</span><div><h3>What a demat account is for</h3><p>A digital locker for the shares and funds you own. Nothing more mysterious than that.</p></div><a className="read-link" href="#lesson-demat">Read lesson →</a></article><article className="lesson-row"><span className="number">02 / 10 min</span><div><h3>SIPs: the slow-and-steady way to invest</h3><p>How monthly investing works, when it helps, and what it does not promise.</p></div><a className="read-link" href="#lesson-sips">Read lesson →</a></article><article className="lesson-row"><span className="number">03 / 10 min</span><div><h3>Compounding needs time, not cleverness</h3><p>Watch a small amount turn into something bigger with an actual calculation.</p></div><a className="read-link" href="#lesson-compounding">Read lesson →</a></article></div></section>
    <hr className="rule" />
    <section className="callout"><div><div className="eyebrow">A page from the lesson</div><h2>See what a monthly SIP could grow into.</h2></div><a className="button" href="#calculator">Open calculator</a></section>
  </main>
}

function Lessons() {
  const [topic, setTopic] = useState('all')
  const filtered = topic === 'all' ? lessons : lessons.filter((lesson) => lesson.topic === topic)
  return <main className="page"><div className="lesson-heading"><div className="eyebrow">The one-hour beginner course</div><h1>Six lessons. One clear start.</h1><p className="lead">Work through these six connected reads at your own pace. Together they are about an hour of practical investing foundations for India.</p></div><div className="course-progress"><span>6 lessons</span><span>~60 minutes</span><span>Education only—not personal advice</span></div><div className="filters" aria-label="Filter lessons">{[['all', 'All topics'], ['investing', 'Investing'], ['basics', 'Money basics'], ['markets', 'Markets']].map(([key, label]) => <button key={key} className={`filter ${topic === key ? 'is-selected' : ''}`} onClick={() => setTopic(key)}>{label}</button>)}</div><section className="articles" aria-live="polite">{filtered.map((lesson) => <article className="article" key={lesson.title}><div className="article-meta">{lesson.meta}</div><div><h2>{lesson.title}</h2><p>{lesson.text}</p></div><a href={`#lesson-${lesson.slug}`}>Read lesson →</a></article>)}</section></main>
}

function Lesson({ slug }) {
  const lesson = lessonForSlug(slug)
  if (!lesson) return <Lessons />
  const index = courseLessons.findIndex((item) => item.slug === slug)
  const next = courseLessons[index + 1]
  const previous = courseLessons[index - 1]
  return <main className="page lesson-page"><a className="back-link" href="#lessons">← All lessons</a><header className="lesson-hero"><div className="eyebrow">Lesson {String(index + 1).padStart(2, '0')} · {lesson.category} · {lesson.minutes} min read</div><h1>{lesson.title}</h1><p className="lead">{lesson.standfirst}</p></header><div className="lesson-body">{lesson.sections.map((section, sectionIndex) => <section className="lesson-section" key={section.heading}><div className="section-number">{String(sectionIndex + 1).padStart(2, '0')}</div><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}{section.terms && <div className="term-grid">{section.terms.map(([term, definition]) => <div key={term}><strong>{term}</strong><p>{definition}</p></div>)}</div>}{section.example && <aside className="lesson-note example"><span>Example</span><p>{section.example}</p></aside>}{section.misconception && <aside className="lesson-note misconception"><span>Common misconception</span><p>{section.misconception}</p></aside>}{section.check && <aside className="check-yourself"><span>Check yourself</span><ol>{section.check.map((question) => <li key={question}>{question}</li>)}</ol></aside>}</div></section>)}</div>{(lesson.slug === 'sips' || lesson.slug === 'compounding') && <section className="lesson-calculator-callout"><div><div className="eyebrow">Put the idea into numbers</div><h2>Try the SIP calculator</h2><p>Compare monthly amounts and timelines. The result is an illustration, not a return promise.</p></div><a className="button" href="#calculator">Open calculator</a></section>}<nav className="lesson-next" aria-label="Course navigation">{previous ? <a href={`#lesson-${previous.slug}`}><span>Previous lesson</span>{previous.title} ←</a> : <a href="#lessons"><span>Course shelf</span>View all lessons ←</a>}{next ? <a href={`#lesson-${next.slug}`}><span>Next lesson</span>{next.title} →</a> : <a href="#lessons"><span>Course complete</span>Back to all lessons →</a>}</nav></main>
}

function Calculator() {
  const [monthly, setMonthly] = useState(2000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)
  const futureValue = useMemo(() => {
    const months = years * 12
    const monthlyRate = rate / 1200
    return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  }, [monthly, rate, years])
  const Range = ({ label, value, setValue, min, max, step, suffix = '', money = false }) => <div className="calc-field"><div className="calc-row"><label>{label}</label><output className="calc-value">{money ? `₹${formatINR(value)}` : `${value}${suffix}`}</output></div><input aria-label={label} type="range" min={min} max={max} step={step} value={value} onChange={(event) => setValue(Number(event.target.value))} /></div>
  return <main className="page"><section className="calculator-layout"><div className="calculator-intro"><div className="eyebrow">An actual lesson tool</div><h1>What might a SIP grow into?</h1><p className="lead">Play with the numbers. The result is an illustration—not a promise—but it is a good way to see how time and consistency work together.</p><div className="formula"><span className="label">Plain-English note</span><p>It assumes you invest the same amount at the end of every month and earn a steady return. Real returns move around.</p></div></div><section className="calculator" aria-label="SIP calculator"><Range label="Monthly amount" value={monthly} setValue={setMonthly} min="500" max="25000" step="500" money /><Range label="Expected annual return" value={rate} setValue={setRate} min="4" max="18" step="1" suffix="%" /><Range label="Time horizon" value={years} setValue={setYears} min="1" max="30" step="1" suffix=" years" /><div className="output"><small>Estimated value after your timeline</small><strong>₹{formatINR(futureValue)}</strong><p>You put in ₹{formatINR(monthly * years * 12)} over {years} years.</p></div><p className="fine-print">This calculator is for education. It uses a simplified monthly-compounding calculation, excludes fees and taxes, and cannot predict real market results.</p></section></section></main>
}

function About() {
  return <main className="page prose"><div className="eyebrow">About mintify</div><h1>Money is already in your life. Understanding it should be, too.</h1><p className="lead">Mintify is a learning project for Indian teens who want a useful, calm start with money—not a sales pitch in disguise.</p><ExpandableProfileCardDemo /><h2>Why this exists</h2><p>Financial terms show up early: UPI, savings accounts, IPOs, SIPs, taxes. But the explanations are often written for adults who have already been around them for years. Mintify starts further back, with plain language and one idea at a time.</p><p>The goal is not to tell anyone what to invest in. It is to help readers ask better questions when they eventually need to make a decision.</p><h2>How a lesson gets made</h2><div className="process"><div className="process-row"><div className="label">01</div><h3>Begin with a real question</h3><p>We start from something a person might genuinely wonder, rather than from an industry term that needs to be pushed.</p></div><div className="process-row"><div className="label">02</div><h3>Remove the assumed knowledge</h3><p>Every lesson defines what it needs before it uses it. If an example requires a demat account, we explain that first.</p></div><div className="process-row"><div className="label">03</div><h3>Show the limit</h3><p>Money decisions carry risk. We say what a tool or idea cannot tell you, especially where actual returns or personal choices are involved.</p></div></div><h2>A small but important note</h2><p>Mintify is educational material, not financial, investment, tax, or legal advice. Before making a financial decision, speak to a qualified professional and use trustworthy sources.</p></main>
}

function Legal({ type }) {
  const isPrivacy = type === 'privacy'
  return <main className="page legal"><div className="eyebrow">Last updated: 19 September 2026</div><h1>{isPrivacy ? 'Privacy policy' : 'Terms of use'}</h1>{isPrivacy ? <><p>This policy explains what information Mintify collects when you use this demonstration site and how it is used.</p><h2>Information we collect</h2><p>The site does not ask you to create an account, submit personal information, or connect a financial account. The SIP calculator runs in your browser; the values you enter are not sent to Mintify.</p><h2>Basic site data</h2><p>If the site is hosted, its hosting provider may automatically receive standard technical information such as browser type, device details, IP address, and pages requested. This information is normally used for security, performance, and aggregate traffic analysis.</p><h2>Cookies</h2><p>This version of Mintify does not set advertising or tracking cookies. A hosting provider may use essential cookies for security or delivery purposes.</p><h2>Changes to this policy</h2><p>If this policy changes, the updated date will appear at the top of this page. Continued use of the site after that change means you accept the updated policy.</p></> : <><p>These terms describe the basic rules for using Mintify. By using the site, you agree to them.</p><h2>For education, not personal advice</h2><p>Mintify provides general educational information. It is not investment, financial, legal, or tax advice, and it is not a recommendation to buy, sell, or hold any investment. Financial decisions should be made with your own research and, where appropriate, a qualified adviser.</p><h2>Calculator results</h2><p>The SIP calculator uses illustrative inputs and a simplified formula. Actual returns may be lower or higher and are not guaranteed. Fees, taxes, inflation, and changes in market conditions can affect real outcomes.</p><h2>Use of content</h2><p>You may read and share links to Mintify for personal, non-commercial learning. Do not present its material as professional advice or reproduce substantial parts of the site without permission.</p><h2>Availability and changes</h2><p>We may update, remove, or correct material at any time. While we aim to keep content clear and accurate, we cannot guarantee that every page is complete, current, or suitable for every situation.</p></>}</main>
}

export default function App() {
  const [page, setPage] = useState(() => window.location.hash.slice(1) || 'home')
  useEffect(() => {
    const update = () => setPage(window.location.hash.slice(1) || 'home')
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => { document.title = page === 'home' ? 'Mintify: Money basics, made clear' : `${page[0].toUpperCase()}${page.slice(1)} | Mintify`; window.scrollTo({ top: 0, behavior: 'smooth' }) }, [page])
  const lessonSlug = page.startsWith('lesson-') ? page.slice(7) : null
  const screens = { home: <Home />, lessons: <Lessons />, calculator: <Calculator />, about: <About />, privacy: <Legal type="privacy" />, terms: <Legal type="terms" /> }
  return <><Header page={lessonSlug ? 'lessons' : page} />{lessonSlug ? <Lesson slug={lessonSlug} /> : (screens[page] ?? screens.home)}<Footer /></>
}
