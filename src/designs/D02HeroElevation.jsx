import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';

export default function D02HeroElevation() {
  const v = {};
  return (
      <>
      <div style={{ fontFamily: "'Libre Franklin',system-ui,sans-serif", color: "#1F2A3C", background: "#F3F5F7", overflowX: "clip" }}>
        <section data-screen-label="02 Hero" style={{ position: "relative", minHeight: "max(700px,100vh)", display: "flex", flexDirection: "column", background: "#011C45 url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1280&fit=crop&auto=format&q=75') center/cover no-repeat" }}>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(1,28,69,0.92) 0%,rgba(1,28,69,0.7) 45%,rgba(1,28,69,0.2) 100%)" }} />
          <div style={{ position: "relative", padding: "20px clamp(16px,3vw,32px)" }}>
            <div style={{ maxWidth: "1180px", margin: "0 auto", minHeight: "72px", padding: "12px 12px 12px 22px", background: "#FFFFFF", borderRadius: "16px", boxShadow: "0 18px 40px rgba(0,0,0,0.22)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 16px" }}>
              <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,42px)", width: "auto", maxWidth: "100%" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <a href="tel:9732805123" style={{ fontWeight: "600", fontSize: "16px", color: "#011C45", textDecoration: "none", whiteSpace: "nowrap" }}>
                  973-280-5123
                </a>
                <a href="#wl-contact" style={{ height: "48px", padding: "0 20px", borderRadius: "10px", background: "#CE0915", color: "#FFFFFF", fontWeight: "600", fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  Schedule a Conversation
                </a>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", flex: "1", display: "flex", alignItems: "center", padding: "40px clamp(20px,4vw,40px) 180px" }}>
            <div style={{ maxWidth: "1180px", width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
              <h1 style={{ margin: "0", maxWidth: "760px", fontWeight: "800", fontSize: "clamp(40px,6vw,76px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#FFFFFF", textWrap: "balance" }}>
                Protection for today. Planning for what’s ahead.
              </h1>
              <p style={{ margin: "0", maxWidth: "600px", fontSize: "clamp(18px,1.6vw,21px)", lineHeight: "1.6", color: "#E3E9F2" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>
                  Life
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>
                  Health
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>
                  Medicare
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>
                  Retirement
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontSize: "16px", fontWeight: "500" }}>
                  Supplemental Benefits
                </li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <a href="#wl-contact" style={{ height: "58px", padding: "0 30px", borderRadius: "12px", background: "#CE0915", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none", display: "flex", alignItems: "center", boxShadow: "0 14px 30px rgba(206,9,21,0.4)" }}>
                  Schedule a Conversation
                </a>
                <a href="tel:9732805123" style={{ height: "58px", padding: "0 26px", borderRadius: "12px", border: "1.5px solid rgba(255,255,255,0.7)", color: "#FFFFFF", fontWeight: "600", fontSize: "18px", textDecoration: "none", display: "flex", alignItems: "center" }}>
                  Call 973-280-5123
                </a>
              </div>
            </div>
          </div>
        </section>
        <section style={{ position: "relative", zIndex: "2", marginTop: "-130px", padding: "0 clamp(16px,3vw,32px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", background: "#FFFFFF", borderRadius: "24px", boxShadow: "0 40px 90px rgba(1,28,69,0.2)", padding: "clamp(28px,4vw,52px)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
              <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(26px,3vw,36px)", letterSpacing: "-0.02em", color: "#011C45" }}>
                Protection isn’t one-size-fits-all.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "20px" }}>
              <div style={{ padding: "26px", borderRadius: "16px", background: "#F7F9FC", display: "flex", flexDirection: "column", gap: "14px", transition: "transform .2s, box-shadow .2s" }} className="wl-h5">
                <span style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#011C45", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "700", fontSize: "20px", color: "#011C45" }}>
                  {"Life & Protection"}
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#2E3A4D" }}>
                  Life insurance, final expense, income protection, and family protection strategies.
                </p>
              </div>
              <div style={{ padding: "26px", borderRadius: "16px", background: "#F7F9FC", display: "flex", flexDirection: "column", gap: "14px", transition: "transform .2s, box-shadow .2s" }} className="wl-h6">
                <span style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#011C45", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                    <path d="M3.5 12h5l1.5-3 3 6 1.5-3h6" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "700", fontSize: "20px", color: "#011C45" }}>
                  {"Health & Medicare"}
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#2E3A4D" }}>
                  Individual health coverage, Medicare solutions, and supplemental health protection.
                </p>
              </div>
              <div style={{ padding: "26px", borderRadius: "16px", background: "#F7F9FC", display: "flex", flexDirection: "column", gap: "14px", transition: "transform .2s, box-shadow .2s" }} className="wl-h7">
                <span style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#011C45", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 20h18" />
                    <path d="M4 16l5-5 4 3 7-7" />
                    <path d="M15 7h5v5" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "700", fontSize: "20px", color: "#011C45" }}>
                  Retirement
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#2E3A4D" }}>
                  Strategies designed to help protect retirement income and prepare for the years ahead.
                </p>
              </div>
              <div style={{ padding: "26px", borderRadius: "16px", background: "#F7F9FC", display: "flex", flexDirection: "column", gap: "14px", transition: "transform .2s, box-shadow .2s" }} className="wl-h8">
                <span style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#011C45", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M3 13h18" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "700", fontSize: "20px", color: "#011C45" }}>
                  {"Business & Employee Benefits"}
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#2E3A4D" }}>
                  Protection and benefit solutions for employers, organizations, and their employees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,88px)" }}>
            <div style={{ flex: "1 1 420px", position: "relative", minWidth: "0" }}>
              <div style={{ position: "absolute", inset: "28px -20px -24px 28px", background: "#011C45", borderRadius: "20px" }} />
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=900&fit=crop&auto=format&q=75" alt="" style={{ position: "relative", width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: "20px", boxShadow: "0 30px 60px rgba(1,28,69,0.25)", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
              <span style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
              <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.15", letterSpacing: "-0.02em", color: "#011C45" }}>
                We start with the conversation.
              </h2>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A4D" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A4D" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 clamp(16px,3vw,32px) clamp(72px,9vw,128px)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", background: "#FFFFFF", borderRadius: "24px", boxShadow: "0 30px 70px rgba(1,28,69,0.12)", padding: "clamp(24px,4vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(28px,4vw,52px)" }}>
            <img src={lamondHeadshot} alt="Lamond Moore" style={{ flex: "0 1 260px", minWidth: "200px", width: "260px", aspectRatio: "1", objectFit: "cover", borderRadius: "18px", boxShadow: "0 18px 36px rgba(1,28,69,0.2)" }} />
            <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(26px,3vw,34px)", color: "#011C45" }}>
                Meet Lamond Moore
              </h2>
              <p style={{ margin: "0", fontSize: "17px", fontWeight: "600", color: "#CE0915" }}>
                {"Insurance & Financial Protection Specialist"}
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.65", color: "#2E3A4D" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.65", color: "#2E3A4D" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 clamp(20px,4vw,40px) clamp(72px,9vw,128px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
            <h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(28px,3.4vw,42px)", letterSpacing: "-0.02em", color: "#011C45" }}>
              Who we work with
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "22px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 14px 34px rgba(1,28,69,0.1)", transition: "transform .2s" }} className="wl-h9">
                <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "8/7", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "20px 22px", fontSize: "19px", fontWeight: "700", color: "#011C45" }}>
                  {"Individuals & Families"}
                </h3>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 14px 34px rgba(1,28,69,0.1)", transition: "transform .2s" }} className="wl-h10">
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=800&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "8/7", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "20px 22px", fontSize: "19px", fontWeight: "700", color: "#011C45" }}>
                  {"Pre-Retirees & Retirees"}
                </h3>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 14px 34px rgba(1,28,69,0.1)", transition: "transform .2s" }} className="wl-h11">
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "8/7", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "20px 22px", fontSize: "19px", fontWeight: "700", color: "#011C45" }}>
                  Business Owners
                </h3>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "18px", overflow: "hidden", boxShadow: "0 14px 34px rgba(1,28,69,0.1)", transition: "transform .2s" }} className="wl-h12">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "8/7", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "20px 22px", fontSize: "19px", fontWeight: "700", color: "#011C45" }}>
                  {"Employers & Organizations"}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section style={{ position: "relative", padding: "clamp(80px,10vw,140px) clamp(20px,4vw,40px)", background: "#011C45 url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1000&fit=crop&auto=format&q=75') center/cover" }}>
          <div style={{ position: "absolute", inset: "0", background: "rgba(1,28,69,0.86)" }} />
          <div style={{ position: "relative", maxWidth: "780px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,4vw,48px)", lineHeight: "1.15", letterSpacing: "-0.02em", color: "#FFFFFF", textWrap: "balance" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#DCE3EE" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <a href="#wl-contact" style={{ height: "58px", padding: "0 30px", borderRadius: "12px", background: "#CE0915", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none", display: "flex", alignItems: "center" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ height: "58px", padding: "0 26px", borderRadius: "12px", border: "1.5px solid rgba(255,255,255,0.7)", color: "#FFFFFF", fontWeight: "600", fontSize: "18px", textDecoration: "none", display: "flex", alignItems: "center" }}>
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
