import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';


class D10Conversation extends React.Component {
  state = { st: [0, 0, 0, 0, 0] };
  gRefs = [0, 1, 2, 3, 4].map(() => React.createRef());
  timers = [];
  componentDidMount() {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { this.setState({ st: [2, 2, 2, 2, 2] }); return; }
    this.io = new IntersectionObserver((es) => es.forEach(e => {
      if (!e.isIntersecting) return;
      const i = this.gRefs.findIndex(r => r.current === e.target);
      if (i < 0 || this.state.st[i]) return;
      this.io.unobserve(e.target);
      this.set(i, 1);
      this.timers.push(setTimeout(() => this.set(i, 2), i === 4 ? 900 : 1300));
    }), { threshold: 0.25 });
    this.gRefs.forEach(r => r.current && this.io.observe(r.current));
  }
  componentWillUnmount() { this.io && this.io.disconnect(); this.timers.forEach(clearTimeout); }
  set(i, v) { this.setState(s => { const st = [...s.st]; st[i] = v; return { st }; }); }
  renderVals() {
    const v = {};
    this.state.st.forEach((s, i) => {
      v['g' + i] = this.gRefs[i];
      v['q' + i] = { o: s >= 1 ? 1 : 0, t: s >= 1 ? 'none' : 'translateY(16px)' };
      v['r' + i] = { o: s >= 2 ? 1 : 0, t: s >= 2 ? 'none' : 'translateY(16px)' };
      v['typing' + i] = s === 1;
    });
    return v;
  }
  render() {
    const v = this.renderVals();
    return (
      <>
      <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", color: "#1B2232", background: "#F4F1EA", overflowX: "clip" }}>
        <header style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,44px)", width: "auto", maxWidth: "100%" }} />
          <a href="#wl-contact" style={{ minHeight: "48px", padding: "0 20px", display: "flex", alignItems: "center", background: "#011C45", color: "#FFFFFF", fontWeight: "500", fontSize: "15px", textDecoration: "none", borderRadius: "999px", whiteSpace: "nowrap" }}>
            Schedule a Conversation
          </a>
        </header>
        <section style={{ padding: "clamp(48px,8vw,112px) clamp(20px,4vw,40px) clamp(40px,6vw,72px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <h1 style={{ margin: "0", fontFamily: "'Instrument Serif',serif", fontWeight: "400", fontSize: "clamp(46px,7vw,96px)", lineHeight: "1", letterSpacing: "-0.01em", color: "#011C45" }}>
              Protection for today.{" "}
              <em style={{ color: "#CE0915" }}>
                Planning for what’s ahead.
              </em>
            </h1>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "20px", lineHeight: "1.6", color: "#3E4659" }}>
              Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
            </p>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
              <li style={{ padding: "7px 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2DCCF", fontSize: "16px" }}>
                Life
              </li>
              <li style={{ padding: "7px 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2DCCF", fontSize: "16px" }}>
                Health
              </li>
              <li style={{ padding: "7px 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2DCCF", fontSize: "16px" }}>
                Medicare
              </li>
              <li style={{ padding: "7px 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2DCCF", fontSize: "16px" }}>
                Retirement
              </li>
              <li style={{ padding: "7px 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E2DCCF", fontSize: "16px" }}>
                Supplemental Benefits
              </li>
            </ul>
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1600&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "16/7", objectFit: "cover", borderRadius: "28px", marginTop: "16px" }} />
          </div>
        </section>
        <section aria-label="Conversation" style={{ padding: "0 clamp(16px,4vw,40px) clamp(64px,9vw,120px)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,7vw,88px)" }}>
            <div ref={v.g0} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ alignSelf: "flex-end", maxWidth: "80%", padding: "14px 20px", borderRadius: "22px 22px 6px 22px", background: "#011C45", color: "#FFFFFF", fontSize: "19px", opacity: v.q0.o, transform: v.q0.t, transition: "opacity .5s,transform .5s" }}>
                Not sure where to start?
              </div>
              {v.typing0 && (
                <>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  <img src={lamondHeadshot} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ padding: "16px 18px", borderRadius: "22px 22px 22px 6px", background: "#FFFFFF", display: "flex", gap: "5px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .15s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .3s infinite" }} />
                  </div>
                </div>
                </>
              )}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", opacity: v.r0.o, transform: v.r0.t, transition: "opacity .5s,transform .5s" }}>
                <img src={lamondHeadshot} alt="" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                <div style={{ maxWidth: "88%", padding: "22px 24px", borderRadius: "24px 24px 24px 6px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(27,34,50,0.06)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Instrument Serif',serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.1", color: "#011C45" }}>
                    We start with the conversation.
                  </h2>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3E4659" }}>
                    Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
                  </p>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3E4659" }}>
                    Our approach is education-first, so you can understand your options and make informed decisions with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div ref={v.g1} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ alignSelf: "flex-end", maxWidth: "80%", padding: "14px 20px", borderRadius: "22px 22px 6px 22px", background: "#011C45", color: "#FFFFFF", fontSize: "19px", opacity: v.q1.o, transform: v.q1.t, transition: "opacity .5s,transform .5s" }}>
                What can you help with?
              </div>
              {v.typing1 && (
                <>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  <img src={lamondHeadshot} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ padding: "16px 18px", borderRadius: "22px 22px 22px 6px", background: "#FFFFFF", display: "flex", gap: "5px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .15s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .3s infinite" }} />
                  </div>
                </div>
                </>
              )}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", opacity: v.r1.o, transform: v.r1.t, transition: "opacity .5s,transform .5s" }}>
                <img src={lamondHeadshot} alt="" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                <div style={{ flex: "1", minWidth: "0", padding: "22px 24px", borderRadius: "24px 24px 24px 6px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(27,34,50,0.06)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Instrument Serif',serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.1", color: "#011C45" }}>
                    Protection isn’t one-size-fits-all.
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "10px" }}>
                    <div style={{ padding: "16px", borderRadius: "16px", background: "#F4F1EA", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#011C45" }}>
                        {"Life & Protection"}
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#3E4659" }}>
                        Life insurance, final expense, income protection, and family protection strategies.
                      </p>
                    </div>
                    <div style={{ padding: "16px", borderRadius: "16px", background: "#F4F1EA", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#011C45" }}>
                        {"Health & Medicare"}
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#3E4659" }}>
                        Individual health coverage, Medicare solutions, and supplemental health protection.
                      </p>
                    </div>
                    <div style={{ padding: "16px", borderRadius: "16px", background: "#F4F1EA", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#011C45" }}>
                        Retirement
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#3E4659" }}>
                        Strategies designed to help protect retirement income and prepare for the years ahead.
                      </p>
                    </div>
                    <div style={{ padding: "16px", borderRadius: "16px", background: "#F4F1EA", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#011C45" }}>
                        {"Business & Employee Benefits"}
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#3E4659" }}>
                        Protection and benefit solutions for employers, organizations, and their employees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={v.g2} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ alignSelf: "flex-end", maxWidth: "80%", padding: "14px 20px", borderRadius: "22px 22px 6px 22px", background: "#011C45", color: "#FFFFFF", fontSize: "19px", opacity: v.q2.o, transform: v.q2.t, transition: "opacity .5s,transform .5s" }}>
                Who do you work with?
              </div>
              {v.typing2 && (
                <>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  <img src={lamondHeadshot} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ padding: "16px 18px", borderRadius: "22px 22px 22px 6px", background: "#FFFFFF", display: "flex", gap: "5px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .15s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .3s infinite" }} />
                  </div>
                </div>
                </>
              )}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", opacity: v.r2.o, transform: v.r2.t, transition: "opacity .5s,transform .5s" }}>
                <img src={lamondHeadshot} alt="" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                <div style={{ flex: "1", minWidth: "0", padding: "22px 24px", borderRadius: "24px 24px 24px 6px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(27,34,50,0.06)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Instrument Serif',serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.1", color: "#011C45" }}>
                    Who we work with
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "10px" }}>
                    <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=450&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "14px" }} />
                      <figcaption style={{ fontSize: "16px", fontWeight: "700", color: "#011C45" }}>
                        {"Individuals & Families"}
                      </figcaption>
                    </figure>
                    <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=450&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "14px" }} />
                      <figcaption style={{ fontSize: "16px", fontWeight: "700", color: "#011C45" }}>
                        {"Pre-Retirees & Retirees"}
                      </figcaption>
                    </figure>
                    <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=450&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "14px" }} />
                      <figcaption style={{ fontSize: "16px", fontWeight: "700", color: "#011C45" }}>
                        Business Owners
                      </figcaption>
                    </figure>
                    <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=450&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "14px" }} />
                      <figcaption style={{ fontSize: "16px", fontWeight: "700", color: "#011C45" }}>
                        {"Employers & Organizations"}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div ref={v.g3} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ alignSelf: "flex-end", maxWidth: "80%", padding: "14px 20px", borderRadius: "22px 22px 6px 22px", background: "#011C45", color: "#FFFFFF", fontSize: "19px", opacity: v.q3.o, transform: v.q3.t, transition: "opacity .5s,transform .5s" }}>
                Who will I be talking to?
              </div>
              {v.typing3 && (
                <>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  <img src={lamondHeadshot} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ padding: "16px 18px", borderRadius: "22px 22px 22px 6px", background: "#FFFFFF", display: "flex", gap: "5px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .15s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .3s infinite" }} />
                  </div>
                </div>
                </>
              )}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", opacity: v.r3.o, transform: v.r3.t, transition: "opacity .5s,transform .5s" }}>
                <img src={lamondHeadshot} alt="" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                <div style={{ flex: "1", minWidth: "0", padding: "22px 24px", borderRadius: "24px 24px 24px 6px", background: "#FFFFFF", boxShadow: "0 8px 24px rgba(27,34,50,0.06)", display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "150px", height: "150px", borderRadius: "18px", objectFit: "cover" }} />
                  <div style={{ flex: "1 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h2 style={{ margin: "0", fontFamily: "'Instrument Serif',serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", lineHeight: "1.1", color: "#011C45" }}>
                      Meet Lamond Moore
                    </h2>
                    <p style={{ margin: "0", fontSize: "16px", fontWeight: "700", color: "#CE0915" }}>
                      {"Insurance & Financial Protection Specialist"}
                    </p>
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3E4659" }}>
                      With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
                    </p>
                    <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3E4659" }}>
                      His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={v.g4} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {v.typing4 && (
                <>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                  <img src={lamondHeadshot} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                  <div style={{ padding: "16px 18px", borderRadius: "22px 22px 22px 6px", background: "#FFFFFF", display: "flex", gap: "5px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .15s infinite" }} />
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#8A90A0", animation: "wl10-dot 1.2s .3s infinite" }} />
                  </div>
                </div>
                </>
              )}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", opacity: v.r4.o, transform: v.r4.t, transition: "opacity .5s,transform .5s" }}>
                <img src={lamondHeadshot} alt="" style={{ flex: "none", width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
                <div style={{ flex: "1", minWidth: "0", padding: "28px", borderRadius: "24px 24px 24px 6px", background: "#011C45", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h2 style={{ margin: "0", fontFamily: "'Instrument Serif',serif", fontWeight: "400", fontSize: "clamp(30px,3.6vw,44px)", lineHeight: "1.05" }}>
                    Not sure where to start? Let’s talk about it.
                  </h2>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#D2DAE8" }}>
                    Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    <a href="#wl-contact" style={{ minHeight: "54px", padding: "0 24px", display: "flex", alignItems: "center", background: "#FFFFFF", color: "#011C45", fontWeight: "700", fontSize: "17px", textDecoration: "none", borderRadius: "999px" }}>
                      Schedule a Conversation
                    </a>
                    <a href="tel:9732805123" style={{ minHeight: "54px", padding: "0 22px", display: "flex", alignItems: "center", border: "1.5px solid rgba(255,255,255,0.7)", color: "#FFFFFF", fontWeight: "500", fontSize: "17px", textDecoration: "none", borderRadius: "999px" }}>
                      973-280-5123
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WLFooter />
      </div>
      </>
    );
  }
}

export default D10Conversation;
