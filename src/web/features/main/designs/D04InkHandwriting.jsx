import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';


const TEXT = { h1a: 'Protection for today.', h1b: 'Planning for what’s ahead.', s1: 'Protection isn’t one-size-fits-all.', s2: 'We start with the conversation.', s3: 'Meet Lamond Moore', sig: 'Lamond Moore', s4: 'Who we work with', s5: 'Not sure where to start?', s5b: 'Let’s talk about it.' };
const GROUPS = { hero: ['h1a', 'h1b'], services: ['s1'], approach: ['s2'], bio: ['s3', 'sig'], who: ['s4'], cta: ['s5', 's5b'] };
class D04InkHandwriting extends React.Component {
  state = { n: {} };
  refServices = React.createRef(); refApproach = React.createRef(); refBio = React.createRef(); refWho = React.createRef(); refCta = React.createRef();
  started = new Set(); timers = [];
  componentDidMount() {
    this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.write('hero');
    const map = new Map([[this.refServices.current, 'services'], [this.refApproach.current, 'approach'], [this.refBio.current, 'bio'], [this.refWho.current, 'who'], [this.refCta.current, 'cta']]);
    this.io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) this.write(map.get(e.target)); }), { threshold: 0.3 });
    map.forEach((_, el) => el && this.io.observe(el));
  }
  componentWillUnmount() { this.io && this.io.disconnect(); this.timers.forEach(clearInterval); }
  write(group) {
    if (!group || this.started.has(group)) return;
    this.started.add(group);
    const keys = [...GROUPS[group]];
    if (this.reduced) { this.setState(s => { const n = { ...s.n }; keys.forEach(k => n[k] = TEXT[k].length); return { n }; }); return; }
    const next = () => {
      const k = keys.shift(); if (!k) return;
      let i = 0;
      const t = setInterval(() => {
        i++;
        this.setState(s => ({ n: { ...s.n, [k]: i } }));
        if (i >= TEXT[k].length) { clearInterval(t); setTimeout(next, 250); }
      }, 70);
      this.timers.push(t);
    };
    setTimeout(next, group === 'hero' ? 400 : 150);
  }
  renderVals() {
    const n = this.state.n, w = {};
    Object.keys(TEXT).forEach(k => w[k] = TEXT[k].slice(0, n[k] || 0));
    const heroDone = (n.h1b || 0) >= TEXT.h1b.length;
    return { w, heroRest: heroDone ? 1 : 0, heroShift: heroDone ? '0px' : '14px',
      refServices: this.refServices, refApproach: this.refApproach, refBio: this.refBio, refWho: this.refWho, refCta: this.refCta };
  }
  render() {
    const v = this.renderVals();
    return (
      <>
      <div style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: "21px", color: "#13254A", background: "#F7F2E8", backgroundImage: "radial-gradient(ellipse at 50% 0%,#FBF8F1 0%,#F7F2E8 55%,#EFE7D7 100%)", overflowX: "clip" }}>
        <header style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", borderBottom: "1px solid #D9CEB8" }}>
          <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,44px)", width: "auto", maxWidth: "100%" }} />
          <a href="tel:9732805123" style={{ fontSize: "20px", color: "#13254A", whiteSpace: "nowrap" }}>
            973-280-5123
          </a>
        </header>
        <section style={{ padding: "clamp(56px,9vw,120px) clamp(20px,4vw,40px) clamp(48px,7vw,96px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <span style={{ fontSize: "15px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A6A4F" }}>
              {"Well-Life Advisors · Insurance & Financial Protection"}
            </span>
            <h1 aria-label="Protection for today. Planning for what’s ahead." style={{ margin: "0", fontFamily: "'Homemade Apple',cursive", fontWeight: "400", fontSize: "clamp(28px,4.4vw,54px)", lineHeight: "1.75", color: "#13254A" }}>
              <span style={{ display: "block", position: "relative" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Protection for today.
                </span>
                <span style={{ position: "absolute", inset: "0" }}>
                  {v.w.h1a}
                </span>
              </span>
              <span style={{ display: "block", position: "relative", color: "#A3121C" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Planning for what’s ahead.
                </span>
                <span style={{ position: "absolute", inset: "0" }}>
                  {v.w.h1b}
                </span>
              </span>
            </h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", opacity: v.heroRest, transform: `translateY(${v.heroShift})`, transition: "opacity .8s ease, transform .8s ease" }}>
              <svg width="260" height="20" viewBox="0 0 260 20" aria-hidden="true">
                <path d="M4 12 C 50 2, 90 18, 130 10 S 210 2, 256 12" fill="none" stroke="#13254A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <p style={{ margin: "0", maxWidth: "32em", fontSize: "22px", lineHeight: "1.6", color: "#2B3A5C" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <p style={{ margin: "0", fontStyle: "italic", fontSize: "20px", color: "#7A6A4F" }}>
                Life · Health · Medicare · Retirement · Supplemental Benefits
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px 26px" }}>
                <a href="#wl-contact" style={{ minHeight: "56px", padding: "0 30px", display: "flex", alignItems: "center", background: "#13254A", color: "#F7F2E8", fontSize: "21px", fontWeight: "500", textDecoration: "none", borderRadius: "2px", letterSpacing: "0.02em" }} className="wl-h14">
                  Schedule a Conversation
                </a>
                <a href="tel:9732805123" style={{ fontSize: "20px", color: "#13254A" }}>
                  or call 973-280-5123
                </a>
              </div>
            </div>
          </div>
        </section>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
          <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1800&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "18/7", objectFit: "cover", display: "block", filter: "sepia(0.35) saturate(0.85)", border: "1px solid #CBBE9F", boxShadow: "12px 12px 0 #E7DDC8" }} />
        </div>
        <section ref={v.refServices} style={{ padding: "clamp(64px,9vw,120px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
            <h2 aria-label="Protection isn’t one-size-fits-all." style={{ margin: "0", fontFamily: "'Homemade Apple',cursive", fontWeight: "400", fontSize: "clamp(24px,3.2vw,38px)", lineHeight: "1.7", textAlign: "center" }}>
              <span style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Protection isn’t one-size-fits-all.
                </span>
                <span style={{ position: "absolute", left: "0", top: "0", whiteSpace: "nowrap" }}>
                  {v.w.s1}
                </span>
              </span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "0 56px" }}>
              <div style={{ padding: "26px 0", borderTop: "1px solid #CBBE9F", display: "grid", gridTemplateColumns: "56px 1fr", gap: "4px 12px" }}>
                <span style={{ gridRow: "span 2", fontStyle: "italic", fontSize: "30px", color: "#A3121C" }}>
                  i.
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "25px" }}>
                  {"Life & Protection"}
                </h3>
                <p style={{ margin: "0", lineHeight: "1.55", color: "#2B3A5C" }}>
                  Life insurance, final expense, income protection, and family protection strategies.
                </p>
              </div>
              <div style={{ padding: "26px 0", borderTop: "1px solid #CBBE9F", display: "grid", gridTemplateColumns: "56px 1fr", gap: "4px 12px" }}>
                <span style={{ gridRow: "span 2", fontStyle: "italic", fontSize: "30px", color: "#A3121C" }}>
                  ii.
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "25px" }}>
                  {"Health & Medicare"}
                </h3>
                <p style={{ margin: "0", lineHeight: "1.55", color: "#2B3A5C" }}>
                  Individual health coverage, Medicare solutions, and supplemental health protection.
                </p>
              </div>
              <div style={{ padding: "26px 0", borderTop: "1px solid #CBBE9F", display: "grid", gridTemplateColumns: "56px 1fr", gap: "4px 12px" }}>
                <span style={{ gridRow: "span 2", fontStyle: "italic", fontSize: "30px", color: "#A3121C" }}>
                  iii.
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "25px" }}>
                  Retirement
                </h3>
                <p style={{ margin: "0", lineHeight: "1.55", color: "#2B3A5C" }}>
                  Strategies designed to help protect retirement income and prepare for the years ahead.
                </p>
              </div>
              <div style={{ padding: "26px 0", borderTop: "1px solid #CBBE9F", display: "grid", gridTemplateColumns: "56px 1fr", gap: "4px 12px" }}>
                <span style={{ gridRow: "span 2", fontStyle: "italic", fontSize: "30px", color: "#A3121C" }}>
                  iv.
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "25px" }}>
                  {"Business & Employee Benefits"}
                </h3>
                <p style={{ margin: "0", lineHeight: "1.55", color: "#2B3A5C" }}>
                  Protection and benefit solutions for employers, organizations, and their employees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section ref={v.refApproach} style={{ padding: "clamp(40px,6vw,80px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,72px)" }}>
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=1000&fit=crop&auto=format&q=75" alt="" style={{ flex: "0 1 340px", minWidth: "240px", width: "340px", aspectRatio: "4/5", objectFit: "cover", filter: "sepia(0.35) saturate(0.85)", border: "1px solid #CBBE9F", boxShadow: "-12px 12px 0 #E7DDC8", margin: "0 auto" }} />
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 aria-label="We start with the conversation." style={{ margin: "0", fontFamily: "'Homemade Apple',cursive", fontWeight: "400", fontSize: "clamp(22px,2.8vw,34px)", lineHeight: "1.7" }}>
                <span style={{ position: "relative", display: "block" }} aria-hidden="true">
                  <span style={{ visibility: "hidden" }}>
                    We start with the conversation.
                  </span>
                  <span style={{ position: "absolute", inset: "0" }}>
                    {v.w.s2}
                  </span>
                </span>
              </h2>
              <p style={{ margin: "0", lineHeight: "1.65", color: "#2B3A5C" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", lineHeight: "1.65", color: "#2B3A5C" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
          </div>
        </section>
        <section ref={v.refBio} style={{ padding: "clamp(64px,9vw,120px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", padding: "clamp(28px,5vw,56px)", background: "#FBF8F1", border: "1px solid #D9CEB8", boxShadow: "0 20px 50px rgba(19,37,74,0.08)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "18px" }}>
            <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "180px", height: "200px", objectFit: "cover", borderRadius: "50%/45%", border: "1px solid #CBBE9F", padding: "6px", background: "#F7F2E8", filter: "sepia(0.15)" }} />
            <h2 aria-label="Meet Lamond Moore" style={{ margin: "0", fontFamily: "'Homemade Apple',cursive", fontWeight: "400", fontSize: "clamp(22px,2.8vw,32px)", lineHeight: "1.7" }}>
              <span style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Meet Lamond Moore
                </span>
                <span style={{ position: "absolute", left: "0", top: "0", whiteSpace: "nowrap" }}>
                  {v.w.s3}
                </span>
              </span>
            </h2>
            <p style={{ margin: "0", fontStyle: "italic", color: "#A3121C" }}>
              {"Insurance & Financial Protection Specialist"}
            </p>
            <p style={{ margin: "0", lineHeight: "1.65", color: "#2B3A5C" }}>
              With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
            </p>
            <p style={{ margin: "0", lineHeight: "1.65", color: "#2B3A5C" }}>
              His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
            </p>
            <span aria-hidden="true" style={{ position: "relative", display: "inline-block", fontFamily: "'Homemade Apple',cursive", fontSize: "30px", color: "#13254A", paddingTop: "8px" }}>
              <span style={{ visibility: "hidden" }}>
                Lamond Moore
              </span>
              <span style={{ position: "absolute", left: "0", top: "8px", whiteSpace: "nowrap" }}>
                {v.w.sig}
              </span>
            </span>
          </div>
        </section>
        <section ref={v.refWho} style={{ padding: "0 clamp(20px,4vw,40px) clamp(64px,9vw,120px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <h2 aria-label="Who we work with" style={{ margin: "0", textAlign: "center", fontFamily: "'Homemade Apple',cursive", fontWeight: "400", fontSize: "clamp(24px,3.2vw,38px)", lineHeight: "1.7" }}>
              <span style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Who we work with
                </span>
                <span style={{ position: "absolute", left: "0", top: "0", whiteSpace: "nowrap" }}>
                  {v.w.s4}
                </span>
              </span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "28px" }}>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", filter: "sepia(0.35) saturate(0.85)", border: "1px solid #CBBE9F" }} />
                <figcaption style={{ fontStyle: "italic", fontSize: "22px", textAlign: "center" }}>
                  {"Individuals & Families"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", filter: "sepia(0.35) saturate(0.85)", border: "1px solid #CBBE9F" }} />
                <figcaption style={{ fontStyle: "italic", fontSize: "22px", textAlign: "center" }}>
                  {"Pre-Retirees & Retirees"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", filter: "sepia(0.35) saturate(0.85)", border: "1px solid #CBBE9F" }} />
                <figcaption style={{ fontStyle: "italic", fontSize: "22px", textAlign: "center" }}>
                  Business Owners
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", filter: "sepia(0.35) saturate(0.85)", border: "1px solid #CBBE9F" }} />
                <figcaption style={{ fontStyle: "italic", fontSize: "22px", textAlign: "center" }}>
                  {"Employers & Organizations"}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section ref={v.refCta} style={{ padding: "clamp(64px,9vw,120px) clamp(20px,4vw,40px)", background: "#13254A", color: "#F7F2E8" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <h2 aria-label="Not sure where to start? Let’s talk about it." style={{ margin: "0", fontFamily: "'Homemade Apple',cursive", fontWeight: "400", fontSize: "clamp(22px,3vw,36px)", lineHeight: "1.8", color: "#F7F2E8" }}>
              <span style={{ display: "block", position: "relative" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Not sure where to start?
                </span>
                <span style={{ position: "absolute", inset: "0" }}>
                  {v.w.s5}
                </span>
              </span>
              <span style={{ display: "block", position: "relative" }} aria-hidden="true">
                <span style={{ visibility: "hidden" }}>
                  Let’s talk about it.
                </span>
                <span style={{ position: "absolute", inset: "0" }}>
                  {v.w.s5b}
                </span>
              </span>
            </h2>
            <p style={{ margin: "0", lineHeight: "1.65", color: "#DCD3C0" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px 26px" }}>
              <a href="#wl-contact" style={{ minHeight: "56px", padding: "0 30px", display: "flex", alignItems: "center", background: "#F7F2E8", color: "#13254A", fontSize: "21px", fontWeight: "600", textDecoration: "none", borderRadius: "2px" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ fontSize: "20px", color: "#F7F2E8" }}>
                or call 973-280-5123
              </a>
            </div>
          </div>
        </section>
        <WLFooter />
      </div>
      </>
    );
  }
}

export default D04InkHandwriting;
