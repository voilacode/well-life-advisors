import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';

export default function D05FullScreenImages() {
  const v = {};
  return (
      <>
      <div style={{ fontFamily: "'Libre Franklin',system-ui,sans-serif", color: "#FFFFFF", background: "#0A0F1A", overflowX: "clip" }}>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0A0F1A url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.88) 0%,rgba(5,10,22,0.35) 55%,rgba(5,10,22,0.55) 100%)" }} />
          <header style={{ position: "relative", padding: "22px clamp(16px,3vw,40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <span style={{ background: "#FFFFFF", borderRadius: "10px", padding: "8px 14px", display: "flex" }}>
              <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,36px)", width: "auto", maxWidth: "100%" }} />
            </span>
            <a href="#wl-contact" style={{ minHeight: "48px", padding: "0 20px", display: "flex", alignItems: "center", background: "#FFFFFF", color: "#011C45", fontWeight: "700", fontSize: "15px", textDecoration: "none", borderRadius: "6px", whiteSpace: "nowrap" }}>
              Schedule a Conversation
            </a>
          </header>
          <div style={{ position: "relative", flex: "1", display: "flex", alignItems: "flex-end", padding: "40px clamp(20px,4vw,56px) clamp(48px,7vw,88px)" }}>
            <div style={{ maxWidth: "1100px", display: "flex", flexDirection: "column", gap: "26px" }}>
              <h1 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(38px,10vw,150px)", lineHeight: "0.9", textTransform: "uppercase", overflowWrap: "anywhere", letterSpacing: "0.005em" }}>
                Protection for today.
                <br />
                <span style={{ color: "#FF5A63" }}>
                  Planning for what’s ahead.
                </span>
              </h1>
              <p style={{ margin: "0", maxWidth: "620px", fontSize: "clamp(18px,1.5vw,21px)", lineHeight: "1.6", color: "#E6EAF2" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
                <a href="#wl-contact" style={{ minHeight: "58px", padding: "0 30px", display: "flex", alignItems: "center", background: "#CE0915", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none", borderRadius: "6px" }}>
                  Schedule a Conversation
                </a>
                <span style={{ fontSize: "16px", color: "#C9D1DF", letterSpacing: "0.04em" }}>
                  Life · Health · Medicare · Retirement · Supplemental Benefits
                </span>
              </div>
            </div>
          </div>
        </section>
        <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", padding: "clamp(64px,9vw,120px) clamp(20px,4vw,56px)", background: "#011C45" }}>
          <h2 style={{ margin: "0", maxWidth: "1100px", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,8vw,120px)", lineHeight: "0.92", textTransform: "uppercase", overflowWrap: "anywhere" }}>
            Protection isn’t one-size-fits-all.
          </h2>
        </section>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,56px)", background: "#0A0F1A url('https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.9),rgba(5,10,22,0.1) 65%)" }} />
          <div style={{ position: "relative", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "28px", color: "#FF5A63" }}>
              01 / 04
            </span>
            <h3 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,6vw,84px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              {"Life & Protection"}
            </h3>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#E6EAF2" }}>
              Life insurance, final expense, income protection, and family protection strategies.
            </p>
          </div>
        </section>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,56px)", background: "#0A0F1A url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.9),rgba(5,10,22,0.1) 65%)" }} />
          <div style={{ position: "relative", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "28px", color: "#FF5A63" }}>
              02 / 04
            </span>
            <h3 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,6vw,84px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              {"Health & Medicare"}
            </h3>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#E6EAF2" }}>
              Individual health coverage, Medicare solutions, and supplemental health protection.
            </p>
          </div>
        </section>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,56px)", background: "#0A0F1A url('https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.9),rgba(5,10,22,0.1) 65%)" }} />
          <div style={{ position: "relative", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "28px", color: "#FF5A63" }}>
              03 / 04
            </span>
            <h3 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,6vw,84px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              Retirement
            </h3>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#E6EAF2" }}>
              Strategies designed to help protect retirement income and prepare for the years ahead.
            </p>
          </div>
        </section>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,56px)", background: "#0A0F1A url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.9),rgba(5,10,22,0.1) 65%)" }} />
          <div style={{ position: "relative", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "28px", color: "#FF5A63" }}>
              04 / 04
            </span>
            <h3 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,6vw,84px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              {"Business & Employee Benefits"}
            </h3>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#E6EAF2" }}>
              Protection and benefit solutions for employers, organizations, and their employees.
            </p>
          </div>
        </section>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,56px)", background: "#0A0F1A url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(1,28,69,0.94) 0%,rgba(1,28,69,0.75) 50%,rgba(1,28,69,0.1) 100%)" }} />
          <div style={{ position: "relative", maxWidth: "620px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,6vw,88px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              We start with the conversation.
            </h2>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.65", color: "#E6EAF2" }}>
              Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
            </p>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.65", color: "#E6EAF2" }}>
              Our approach is education-first, so you can understand your options and make informed decisions with confidence.
            </p>
          </div>
        </section>
        <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", background: "#011C45" }}>
          <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "100%", height: "100%", minHeight: "60vh", objectFit: "cover", display: "block" }} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", padding: "clamp(40px,6vw,88px)" }}>
            <h2 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,5.5vw,80px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              Meet Lamond Moore
            </h2>
            <p style={{ margin: "0", fontSize: "18px", fontWeight: "600", color: "#FF5A63", letterSpacing: "0.02em" }}>
              {"Insurance & Financial Protection Specialist"}
            </p>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#DCE3EE" }}>
              With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
            </p>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#DCE3EE" }}>
              His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
            </p>
          </div>
        </section>
        <section style={{ background: "#0A0F1A" }}>
          <h2 style={{ margin: "0", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,56px) 28px", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,6vw,88px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
            Who we work with
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(50%,280px),1fr))" }}>
            <div style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "flex-end", padding: "28px", background: "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=1200&fit=crop&auto=format&q=75') center/cover" }}>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.85),transparent 55%)" }} />
              <h3 style={{ position: "relative", margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "clamp(28px,2.6vw,40px)", lineHeight: "1", textTransform: "uppercase", overflowWrap: "anywhere" }}>
                {"Individuals & Families"}
              </h3>
            </div>
            <div style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "flex-end", padding: "28px", background: "url('https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=800&h=1200&fit=crop&auto=format&q=75') center/cover" }}>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.85),transparent 55%)" }} />
              <h3 style={{ position: "relative", margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "clamp(28px,2.6vw,40px)", lineHeight: "1", textTransform: "uppercase", overflowWrap: "anywhere" }}>
                {"Pre-Retirees & Retirees"}
              </h3>
            </div>
            <div style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "flex-end", padding: "28px", background: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=1200&fit=crop&auto=format&q=75') center/cover" }}>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.85),transparent 55%)" }} />
              <h3 style={{ position: "relative", margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "clamp(28px,2.6vw,40px)", lineHeight: "1", textTransform: "uppercase", overflowWrap: "anywhere" }}>
                Business Owners
              </h3>
            </div>
            <div style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "flex-end", padding: "28px", background: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=1200&fit=crop&auto=format&q=75') center/cover" }}>
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(to top,rgba(5,10,22,0.85),transparent 55%)" }} />
              <h3 style={{ position: "relative", margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "800", fontSize: "clamp(28px,2.6vw,40px)", lineHeight: "1", textTransform: "uppercase", overflowWrap: "anywhere" }}>
                {"Employers & Organizations"}
              </h3>
            </div>
          </div>
        </section>
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(48px,7vw,88px) clamp(20px,4vw,56px)", background: "#0A0F1A url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover", textAlign: "center" }}>
          <div style={{ position: "absolute", inset: "0", background: "rgba(5,10,22,0.7)" }} />
          <div style={{ position: "relative", maxWidth: "900px", display: "flex", flexDirection: "column", alignItems: "center", gap: "26px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Big Shoulders Display',sans-serif", fontWeight: "900", fontSize: "clamp(34px,7vw,104px)", lineHeight: "0.95", textTransform: "uppercase", overflowWrap: "anywhere" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", maxWidth: "680px", fontSize: "20px", lineHeight: "1.65", color: "#E6EAF2" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <a href="#wl-contact" style={{ minHeight: "58px", padding: "0 30px", display: "flex", alignItems: "center", background: "#CE0915", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none", borderRadius: "6px" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ minHeight: "58px", padding: "0 26px", display: "flex", alignItems: "center", border: "1.5px solid #FFFFFF", color: "#FFFFFF", fontWeight: "600", fontSize: "18px", textDecoration: "none", borderRadius: "6px" }}>
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
