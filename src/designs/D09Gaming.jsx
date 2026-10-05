import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';


const MAP = [['Life & Protection'], ['Health & Medicare', 'Retirement'], ['Business & Employee Benefits']];
class D09Gaming extends React.Component {
  state = { open: [false, false, false, false], ans: [null, null, null] };
  renderVals() {
    const { open, ans } = this.state, v = {};
    const flip = (i) => { if (!open[i]) this.setState(s => { const o = [...s.open]; o[i] = true; return { open: o }; }); };
    open.forEach((o, i) => {
      v['b' + i] = { t: o ? 'rotateY(180deg)' : 'rotateY(0deg)', pressed: o ? 'true' : 'false' };
      v['open' + i] = () => flip(i);
      v['key' + i] = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(i); } };
    });
    ans.forEach((a, i) => {
      v['q' + i] = { yb: a === true ? '#FFD23F' : 'transparent', yf: a === true ? '#0B1633' : '#FFFFFF', nb: a === false ? '#FFFFFF' : 'transparent', nf: a === false ? '#0B1633' : '#FFFFFF' };
      const set = (val) => () => this.setState(s => { const n = [...s.ans]; n[i] = val; return { ans: n }; });
      v['q' + i + 'yes'] = set(true); v['q' + i + 'no'] = set(false);
    });
    const count = open.filter(Boolean).length;
    const answered = ans.every(a => a !== null);
    let results = [];
    ans.forEach((a, i) => { if (a) results.push(...MAP[i]); });
    results = [...new Set(results)];
    if (answered && !results.length) results = ['Start with a conversation'];
    return { ...v, xp: count * 25, xpPct: count * 25 + '%', allOpen: count === 4, showResult: answered, results };
  }
  render() {
    const v = this.renderVals();
    return (
      <>
      <div style={{ fontFamily: "'Rubik',system-ui,sans-serif", color: "#FFFFFF", background: "#0B1633", backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "22px 22px", overflowX: "clip" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "5", background: "rgba(11,22,51,0.94)", borderBottom: "3px solid #1E2C55" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 16px" }}>
            <span style={{ background: "#FFFFFF", borderRadius: "6px", padding: "6px 12px", display: "flex" }}>
              <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "32px", width: "auto" }} />
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "11px", color: "#FFD23F", whiteSpace: "nowrap" }}>
                XP {v.xp}/100
              </span>
              <div aria-hidden="true" style={{ width: "120px", height: "14px", border: "3px solid #FFFFFF", background: "#0B1633", padding: "1px" }}>
                <div style={{ height: "100%", width: v.xpPct, background: "#FFD23F", transition: "width .5s" }} />
              </div>
            </div>
          </div>
        </header>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,80px)" }}>
            <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
              <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", color: "#FF4D57", lineHeight: "1.6" }}>
                PLAYER 1 · READY
              </span>
              <h1 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(40px,5.4vw,72px)", lineHeight: "1.04", letterSpacing: "-0.02em" }}>
                Protection for today.{" "}
                <span style={{ color: "#FFD23F" }}>
                  Planning for what’s ahead.
                </span>
              </h1>
              <p style={{ margin: "0", maxWidth: "34em", fontSize: "19px", lineHeight: "1.6", color: "#C9D3E6" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <a href="#d9-game" style={{ minHeight: "58px", padding: "0 26px", display: "flex", alignItems: "center", background: "#FFD23F", color: "#0B1633", fontFamily: "'Press Start 2P',monospace", fontSize: "13px", textDecoration: "none", boxShadow: "6px 6px 0 #FF4D57" }} className="wl-h19">
                  PRESS START ▶
                </a>
                <a href="#wl-contact" style={{ minHeight: "58px", padding: "0 24px", display: "flex", alignItems: "center", border: "3px solid #FFFFFF", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>
                  Schedule a Conversation
                </a>
              </div>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <div style={{ width: "min(100%,460px)", border: "6px solid #FFFFFF", boxShadow: "12px 12px 0 #CE0915", background: "#FFFFFF" }}>
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=900&h=900&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
              </div>
            </div>
          </div>
        </section>
        <section id="d9-game" style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)", background: "#0F1D42", borderTop: "3px solid #1E2C55", borderBottom: "3px solid #1E2C55" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", color: "#FFD23F", lineHeight: "1.6" }}>
                LEVEL 1 · OPEN ALL 4 BOXES
              </span>
              <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,4vw,48px)", letterSpacing: "-0.02em" }}>
                Protection isn’t one-size-fits-all.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "22px" }}>
              <div role="button" tabIndex="0" aria-pressed={v.b0.pressed} aria-label="Open box: Life & Protection" onClick={v.open0} onKeyDown={v.key0} style={{ position: "relative", minHeight: "300px", cursor: "pointer", perspective: "1200px" }}>
                <div style={{ position: "absolute", inset: "0", transformStyle: "preserve-3d", transition: "transform .7s cubic-bezier(.2,.8,.2,1)", transform: v.b0.t }}>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: "#1E2C55", border: "4px solid #FFFFFF", boxShadow: "8px 8px 0 #CE0915", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "44px", color: "#FFD23F" }}>
                      ?
                    </span>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#C9D3E6" }}>
                      TAP TO OPEN
                    </span>
                  </div>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#FFFFFF", color: "#0B1633", border: "4px solid #FFD23F", boxShadow: "8px 8px 0 #FFD23F", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#CE0915" }}>
                      +25 XP
                    </span>
                    <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#011C45" }}>
                      {"Life & Protection"}
                    </h3>
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.5", color: "#2E3A4D" }}>
                      Life insurance, final expense, income protection, and family protection strategies.
                    </p>
                  </div>
                </div>
              </div>
              <div role="button" tabIndex="0" aria-pressed={v.b1.pressed} aria-label="Open box: Health & Medicare" onClick={v.open1} onKeyDown={v.key1} style={{ position: "relative", minHeight: "300px", cursor: "pointer", perspective: "1200px" }}>
                <div style={{ position: "absolute", inset: "0", transformStyle: "preserve-3d", transition: "transform .7s cubic-bezier(.2,.8,.2,1)", transform: v.b1.t }}>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: "#1E2C55", border: "4px solid #FFFFFF", boxShadow: "8px 8px 0 #CE0915", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "44px", color: "#FFD23F" }}>
                      ?
                    </span>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#C9D3E6" }}>
                      TAP TO OPEN
                    </span>
                  </div>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#FFFFFF", color: "#0B1633", border: "4px solid #FFD23F", boxShadow: "8px 8px 0 #FFD23F", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#CE0915" }}>
                      +25 XP
                    </span>
                    <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#011C45" }}>
                      {"Health & Medicare"}
                    </h3>
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.5", color: "#2E3A4D" }}>
                      Individual health coverage, Medicare solutions, and supplemental health protection.
                    </p>
                  </div>
                </div>
              </div>
              <div role="button" tabIndex="0" aria-pressed={v.b2.pressed} aria-label="Open box: Retirement" onClick={v.open2} onKeyDown={v.key2} style={{ position: "relative", minHeight: "300px", cursor: "pointer", perspective: "1200px" }}>
                <div style={{ position: "absolute", inset: "0", transformStyle: "preserve-3d", transition: "transform .7s cubic-bezier(.2,.8,.2,1)", transform: v.b2.t }}>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: "#1E2C55", border: "4px solid #FFFFFF", boxShadow: "8px 8px 0 #CE0915", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "44px", color: "#FFD23F" }}>
                      ?
                    </span>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#C9D3E6" }}>
                      TAP TO OPEN
                    </span>
                  </div>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#FFFFFF", color: "#0B1633", border: "4px solid #FFD23F", boxShadow: "8px 8px 0 #FFD23F", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#CE0915" }}>
                      +25 XP
                    </span>
                    <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#011C45" }}>
                      Retirement
                    </h3>
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.5", color: "#2E3A4D" }}>
                      Strategies designed to help protect retirement income and prepare for the years ahead.
                    </p>
                  </div>
                </div>
              </div>
              <div role="button" tabIndex="0" aria-pressed={v.b3.pressed} aria-label="Open box: Business & Employee Benefits" onClick={v.open3} onKeyDown={v.key3} style={{ position: "relative", minHeight: "300px", cursor: "pointer", perspective: "1200px" }}>
                <div style={{ position: "absolute", inset: "0", transformStyle: "preserve-3d", transition: "transform .7s cubic-bezier(.2,.8,.2,1)", transform: v.b3.t }}>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: "#1E2C55", border: "4px solid #FFFFFF", boxShadow: "8px 8px 0 #CE0915", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "44px", color: "#FFD23F" }}>
                      ?
                    </span>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#C9D3E6" }}>
                      TAP TO OPEN
                    </span>
                  </div>
                  <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#FFFFFF", color: "#0B1633", border: "4px solid #FFD23F", boxShadow: "8px 8px 0 #FFD23F", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#CE0915" }}>
                      +25 XP
                    </span>
                    <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#011C45" }}>
                      {"Business & Employee Benefits"}
                    </h3>
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.5", color: "#2E3A4D" }}>
                      Protection and benefit solutions for employers, organizations, and their employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {v.allOpen && (
              <>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "22px 26px", background: "#FFD23F", color: "#0B1633", border: "4px solid #FFFFFF" }}>
                <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "14px", lineHeight: "1.6" }}>
                  LEVEL COMPLETE! 100 XP
                </span>
                <a href="#d9-check" style={{ minHeight: "48px", padding: "0 20px", display: "flex", alignItems: "center", background: "#0B1633", color: "#FFFFFF", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>
                  Next: Level 2 ▼
                </a>
              </div>
              </>
            )}
          </div>
        </section>
        <section id="d9-check" style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", color: "#FFD23F", lineHeight: "1.6" }}>
                LEVEL 2 · QUICK CHECK
              </span>
              <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(28px,3.6vw,44px)", letterSpacing: "-0.02em" }}>
                We start with the conversation.
              </h2>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#C9D3E6" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "18px 20px", background: "#13234D", border: "3px solid #1E2C55" }}>
                <span style={{ fontSize: "19px", fontWeight: "500" }}>
                  Does anyone depend on your income?
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={v.q0yes} style={{ minWidth: "76px", height: "46px", border: "3px solid #FFFFFF", background: v.q0.yb, color: v.q0.yf, fontFamily: "'Press Start 2P',monospace", fontSize: "11px", cursor: "pointer" }}>
                    YES
                  </button>
                  <button onClick={v.q0no} style={{ minWidth: "76px", height: "46px", border: "3px solid #FFFFFF", background: v.q0.nb, color: v.q0.nf, fontFamily: "'Press Start 2P',monospace", fontSize: "11px", cursor: "pointer" }}>
                    NO
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "18px 20px", background: "#13234D", border: "3px solid #1E2C55" }}>
                <span style={{ fontSize: "19px", fontWeight: "500" }}>
                  Are you approaching Medicare or retirement?
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={v.q1yes} style={{ minWidth: "76px", height: "46px", border: "3px solid #FFFFFF", background: v.q1.yb, color: v.q1.yf, fontFamily: "'Press Start 2P',monospace", fontSize: "11px", cursor: "pointer" }}>
                    YES
                  </button>
                  <button onClick={v.q1no} style={{ minWidth: "76px", height: "46px", border: "3px solid #FFFFFF", background: v.q1.nb, color: v.q1.nf, fontFamily: "'Press Start 2P',monospace", fontSize: "11px", cursor: "pointer" }}>
                    NO
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "18px 20px", background: "#13234D", border: "3px solid #1E2C55" }}>
                <span style={{ fontSize: "19px", fontWeight: "500" }}>
                  Do you own a business or manage employees?
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={v.q2yes} style={{ minWidth: "76px", height: "46px", border: "3px solid #FFFFFF", background: v.q2.yb, color: v.q2.yf, fontFamily: "'Press Start 2P',monospace", fontSize: "11px", cursor: "pointer" }}>
                    YES
                  </button>
                  <button onClick={v.q2no} style={{ minWidth: "76px", height: "46px", border: "3px solid #FFFFFF", background: v.q2.nb, color: v.q2.nf, fontFamily: "'Press Start 2P',monospace", fontSize: "11px", cursor: "pointer" }}>
                    NO
                  </button>
                </div>
              </div>
            </div>
            {v.showResult && (
              <>
              <div style={{ padding: "24px 26px", background: "#FFFFFF", color: "#0B1633", border: "4px solid #FFD23F", boxShadow: "8px 8px 0 #FFD23F", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "11px", color: "#CE0915", lineHeight: "1.6" }}>
                  AREAS TO TALK ABOUT
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {(v.results || []).map((r, i0) => (
                    <React.Fragment key={i0}>
                      <span style={{ padding: "8px 14px", background: "#011C45", color: "#FFFFFF", fontWeight: "700", fontSize: "17px" }}>
                        {r}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#2E3A4D" }}>
                  Our approach is education-first, so you can understand your options and make informed decisions with confidence.
                </p>
                <a href="#wl-contact" style={{ alignSelf: "flex-start", minHeight: "52px", padding: "0 22px", display: "flex", alignItems: "center", background: "#CE0915", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>
                  Schedule a Conversation
                </a>
                <span style={{ fontSize: "14px", color: "#4A5568" }}>
                  For education only. Not a recommendation.
                </span>
              </div>
              </>
            )}
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)", background: "#0F1D42", borderTop: "3px solid #1E2C55" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "30px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", color: "#FFD23F", lineHeight: "1.6" }}>
                SELECT YOUR PLAYER
              </span>
              <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(28px,3.6vw,44px)" }}>
                Who we work with
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "20px" }}>
              <div tabIndex="0" style={{ border: "4px solid #1E2C55", background: "#13234D", transition: "transform .15s,border-color .15s" }} className="wl-h20">
                <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "16px", fontSize: "19px", fontWeight: "700" }}>
                  {"Individuals & Families"}
                </h3>
              </div>
              <div tabIndex="0" style={{ border: "4px solid #1E2C55", background: "#13234D", transition: "transform .15s,border-color .15s" }} className="wl-h21">
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "16px", fontSize: "19px", fontWeight: "700" }}>
                  {"Pre-Retirees & Retirees"}
                </h3>
              </div>
              <div tabIndex="0" style={{ border: "4px solid #1E2C55", background: "#13234D", transition: "transform .15s,border-color .15s" }} className="wl-h22">
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "16px", fontSize: "19px", fontWeight: "700" }}>
                  Business Owners
                </h3>
              </div>
              <div tabIndex="0" style={{ border: "4px solid #1E2C55", background: "#13234D", transition: "transform .15s,border-color .15s" }} className="wl-h23">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "16px", fontSize: "19px", fontWeight: "700" }}>
                  {"Employers & Organizations"}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px,5vw,64px)" }}>
            <div style={{ flex: "0 1 280px", margin: "0 auto", border: "6px solid #FFFFFF", boxShadow: "10px 10px 0 #FFD23F" }}>
              <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "11px", color: "#FF4D57", lineHeight: "1.6" }}>
                YOUR GUIDE
              </span>
              <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(28px,3.4vw,40px)" }}>
                Meet Lamond Moore
              </h2>
              <p style={{ margin: "0", fontSize: "17px", fontWeight: "700", color: "#FFD23F" }}>
                {"Insurance & Financial Protection Specialist"}
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#C9D3E6" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#C9D3E6" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)", background: "#CE0915" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
            <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,4vw,50px)", lineHeight: "1.1" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#FFE9EA" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <a href="#wl-contact" style={{ minHeight: "58px", padding: "0 26px", display: "flex", alignItems: "center", background: "#FFFFFF", color: "#0B1633", fontWeight: "800", fontSize: "18px", textDecoration: "none", boxShadow: "6px 6px 0 #0B1633" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ minHeight: "58px", padding: "0 24px", display: "flex", alignItems: "center", border: "3px solid #FFFFFF", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none" }}>
                973-280-5123
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

export default D09Gaming;
