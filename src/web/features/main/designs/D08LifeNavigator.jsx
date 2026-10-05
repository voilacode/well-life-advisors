import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';


const AUD = ['Individuals & Families', 'Pre-Retirees & Retirees', 'Business Owners', 'Employers & Organizations'];
const REL = [[0, 1], [1, 2], [0, 3], [3, 1]];
class D08LifeNavigator extends React.Component {
  state = { a: 0 };
  componentDidMount() { this.t = setInterval(() => { if (!this.touched) this.setState(s => ({ a: (s.a + 1) % 4 })); }, 4500); }
  componentWillUnmount() { clearInterval(this.t); }
  renderVals() {
    const a = this.state.a, v = {};
    for (let i = 0; i < 4; i++) {
      const on = i === a;
      v['a' + i] = { sel: on ? 'true' : 'false', bg: on ? '#FFFFFF' : 'transparent', fg: on ? '#011C45' : '#FFFFFF', border: on ? '#FFFFFF' : 'rgba(255,255,255,0.25)', img: on ? 1 : 0 };
      v['pick' + i] = () => { this.touched = true; this.setState({ a: i }); };
      const rel = REL[a].includes(i);
      v['s' + i] = { bg: rel ? '#CE0915' : 'rgba(255,255,255,0.08)', fg: '#FFFFFF', o: rel ? 1 : 0.6 };
    }
    return { ...v, audLabel: AUD[a] };
  }
  render() {
    const v = this.renderVals();
    return (
      <>
      <div style={{ fontFamily: "'Familjen Grotesk',system-ui,sans-serif", color: "#141B2B", background: "#FFFFFF", overflowX: "clip" }}>
        <header style={{ maxWidth: "1240px", margin: "0 auto", padding: "20px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,44px)", width: "auto", maxWidth: "100%" }} />
          <a href="#wl-contact" style={{ minHeight: "48px", padding: "0 20px", display: "flex", alignItems: "center", background: "#CE0915", color: "#FFFFFF", fontWeight: "600", fontSize: "15px", textDecoration: "none", borderRadius: "8px", whiteSpace: "nowrap" }}>
            Schedule a Conversation
          </a>
        </header>
        <section style={{ padding: "clamp(32px,5vw,64px) clamp(20px,4vw,40px) 40px" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "24px 64px", alignItems: "end" }}>
            <h1 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(40px,5.6vw,76px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#011C45" }}>
              Protection for today. Planning for what’s ahead.
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#3B4458" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <a href="tel:9732805123" style={{ alignSelf: "flex-start", fontSize: "18px", fontWeight: "600", color: "#011C45" }}>
                Call 973-280-5123
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 clamp(12px,3vw,32px) clamp(64px,8vw,112px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", background: "#011C45", borderRadius: "28px", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))" }}>
            <div style={{ padding: "clamp(28px,4vw,52px)", display: "flex", flexDirection: "column", gap: "26px", color: "#FFFFFF" }}>
              <span style={{ fontSize: "14px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9FB0CC" }}>
                Who we work with
              </span>
              <div role="tablist" aria-label="Who we work with" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button role="tab" aria-selected={v.a0.sel} onClick={v.pick0} style={{ textAlign: "left", minHeight: "64px", padding: "0 22px", borderRadius: "14px", border: `1px solid ${v.a0.border}`, background: v.a0.bg, color: v.a0.fg, font: "inherit", fontSize: "clamp(19px,1.8vw,24px)", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", transition: "background .25s,color .25s" }}>
                  {"Individuals & Families"}
                  <span aria-hidden="true">
                    →
                  </span>
                </button>
                <button role="tab" aria-selected={v.a1.sel} onClick={v.pick1} style={{ textAlign: "left", minHeight: "64px", padding: "0 22px", borderRadius: "14px", border: `1px solid ${v.a1.border}`, background: v.a1.bg, color: v.a1.fg, font: "inherit", fontSize: "clamp(19px,1.8vw,24px)", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", transition: "background .25s,color .25s" }}>
                  {"Pre-Retirees & Retirees"}
                  <span aria-hidden="true">
                    →
                  </span>
                </button>
                <button role="tab" aria-selected={v.a2.sel} onClick={v.pick2} style={{ textAlign: "left", minHeight: "64px", padding: "0 22px", borderRadius: "14px", border: `1px solid ${v.a2.border}`, background: v.a2.bg, color: v.a2.fg, font: "inherit", fontSize: "clamp(19px,1.8vw,24px)", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", transition: "background .25s,color .25s" }}>
                  Business Owners
                  <span aria-hidden="true">
                    →
                  </span>
                </button>
                <button role="tab" aria-selected={v.a3.sel} onClick={v.pick3} style={{ textAlign: "left", minHeight: "64px", padding: "0 22px", borderRadius: "14px", border: `1px solid ${v.a3.border}`, background: v.a3.bg, color: v.a3.fg, font: "inherit", fontSize: "clamp(19px,1.8vw,24px)", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", transition: "background .25s,color .25s" }}>
                  {"Employers & Organizations"}
                  <span aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingTop: "6px" }}>
                <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(24px,2.4vw,32px)", letterSpacing: "-0.02em" }}>
                  Protection isn’t one-size-fits-all.
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "10px" }}>
                  <div style={{ padding: "18px", borderRadius: "14px", background: v.s0.bg, color: v.s0.fg, opacity: v.s0.o, transition: "all .3s", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      {"Life & Protection"}
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.45" }}>
                      Life insurance, final expense, income protection, and family protection strategies.
                    </p>
                  </div>
                  <div style={{ padding: "18px", borderRadius: "14px", background: v.s1.bg, color: v.s1.fg, opacity: v.s1.o, transition: "all .3s", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      {"Health & Medicare"}
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.45" }}>
                      Individual health coverage, Medicare solutions, and supplemental health protection.
                    </p>
                  </div>
                  <div style={{ padding: "18px", borderRadius: "14px", background: v.s2.bg, color: v.s2.fg, opacity: v.s2.o, transition: "all .3s", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      Retirement
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.45" }}>
                      Strategies designed to help protect retirement income and prepare for the years ahead.
                    </p>
                  </div>
                  <div style={{ padding: "18px", borderRadius: "14px", background: v.s3.bg, color: v.s3.fg, opacity: v.s3.o, transition: "all .3s", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>
                      {"Business & Employee Benefits"}
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.45" }}>
                      Protection and benefit solutions for employers, organizations, and their employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "520px", background: "#0B2C5F" }}>
              <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1000&h=1200&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.a0.img, transition: "opacity .6s" }} />
              <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=1000&h=1200&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.a1.img, transition: "opacity .6s" }} />
              <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000&h=1200&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.a2.img, transition: "opacity .6s" }} />
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&h=1200&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: v.a3.img, transition: "opacity .6s" }} />
              <div style={{ position: "absolute", left: "20px", bottom: "20px", padding: "10px 16px", borderRadius: "999px", background: "#FFFFFF", color: "#011C45", fontWeight: "600", fontSize: "16px" }}>
                {v.audLabel}
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 clamp(20px,4vw,40px) clamp(64px,8vw,112px)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "32px 64px", alignItems: "start" }}>
            <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(32px,4vw,56px)", lineHeight: "1.02", letterSpacing: "-0.03em", color: "#011C45" }}>
              We start with the conversation.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", paddingTop: "8px" }}>
              <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#3B4458" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#3B4458" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 clamp(20px,4vw,40px) clamp(64px,8vw,112px)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(24px,3vw,36px)", borderRadius: "24px", background: "#F2F4F8", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(24px,4vw,48px)" }}>
            <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "20px" }} />
            <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 16px" }}>
                <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(26px,2.8vw,34px)", color: "#011C45" }}>
                  Meet Lamond Moore
                </h2>
                <span style={{ fontSize: "17px", fontWeight: "600", color: "#CE0915" }}>
                  {"Insurance & Financial Protection Specialist"}
                </span>
              </div>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3B4458" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3B4458" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(64px,8vw,104px) clamp(20px,4vw,40px)", background: "#011C45" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "28px 64px", alignItems: "center" }}>
            <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(32px,4vw,56px)", lineHeight: "1.02", letterSpacing: "-0.03em", color: "#FFFFFF" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#C8D3E6" }}>
                Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <a href="#wl-contact" style={{ minHeight: "56px", padding: "0 28px", display: "flex", alignItems: "center", background: "#CE0915", color: "#FFFFFF", fontWeight: "600", fontSize: "18px", textDecoration: "none", borderRadius: "10px" }}>
                  Schedule a Conversation
                </a>
                <a href="tel:9732805123" style={{ minHeight: "56px", padding: "0 24px", display: "flex", alignItems: "center", border: "1.5px solid #FFFFFF", color: "#FFFFFF", fontWeight: "600", fontSize: "18px", textDecoration: "none", borderRadius: "10px" }}>
                  973-280-5123
                </a>
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

export default D08LifeNavigator;
