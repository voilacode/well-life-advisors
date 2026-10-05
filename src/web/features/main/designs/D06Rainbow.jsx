import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';

export default function D06Rainbow() {
  const v = {};
  return (
      <>
      <div style={{ fontFamily: "'Bricolage Grotesque',system-ui,sans-serif", color: "#1A1F2E", background: "#FFFFFF", overflowX: "clip" }}>
        <div style={{ display: "flex", height: "8px" }}>
          <span style={{ flex: "1", background: "#E5484D" }} />
          <span style={{ flex: "1", background: "#F76B15" }} />
          <span style={{ flex: "1", background: "#FFC53D" }} />
          <span style={{ flex: "1", background: "#30A46C" }} />
          <span style={{ flex: "1", background: "#0090FF" }} />
          <span style={{ flex: "1", background: "#8E4EC6" }} />
        </div>
        <header style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,44px)", width: "auto", maxWidth: "100%" }} />
          <a href="#wl-contact" style={{ minHeight: "48px", padding: "0 22px", display: "flex", alignItems: "center", borderRadius: "999px", background: "#1A1F2E", color: "#FFFFFF", fontWeight: "700", fontSize: "15px", textDecoration: "none", whiteSpace: "nowrap" }}>
            Schedule a Conversation
          </a>
        </header>
        <section style={{ padding: "clamp(40px,6vw,88px) clamp(20px,4vw,40px) clamp(64px,8vw,112px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,80px)" }}>
            <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "26px" }}>
              <h1 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(42px,6vw,80px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#011C45" }}>
                Protection for today.{" "}
                <span style={{ background: "linear-gradient(90deg,#E5484D,#F76B15,#E5A000,#30A46C,#0090FF,#8E4EC6)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Planning for what’s ahead.
                </span>
              </h1>
              <p style={{ margin: "0", maxWidth: "34em", fontSize: "20px", lineHeight: "1.6", color: "#3A4256" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#FFE5E5", color: "#A1171D", fontWeight: "700", fontSize: "16px" }}>
                  Life
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#FFEBDB", color: "#A33A00", fontWeight: "700", fontSize: "16px" }}>
                  Health
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#FFF4CF", color: "#7A5300", fontWeight: "700", fontSize: "16px" }}>
                  Medicare
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#DDF5E7", color: "#11643F", fontWeight: "700", fontSize: "16px" }}>
                  Retirement
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#E0F0FF", color: "#0B5CA8", fontWeight: "700", fontSize: "16px" }}>
                  Supplemental Benefits
                </li>
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <a href="#wl-contact" style={{ minHeight: "58px", padding: "0 30px", display: "flex", alignItems: "center", borderRadius: "999px", background: "#011C45", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none", boxShadow: "0 0 0 4px #FFFFFF,0 0 0 7px #FFC53D" }}>
                  Schedule a Conversation
                </a>
                <a href="tel:9732805123" style={{ minHeight: "58px", padding: "0 24px", display: "flex", alignItems: "center", borderRadius: "999px", border: "2px solid #1A1F2E", color: "#1A1F2E", fontWeight: "700", fontSize: "18px", textDecoration: "none" }}>
                  973-280-5123
                </a>
              </div>
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <div style={{ width: "min(100%,480px)", aspectRatio: "1", borderRadius: "50%", padding: "14px", background: "conic-gradient(#E5484D,#F76B15,#FFC53D,#30A46C,#0090FF,#8E4EC6,#E5484D)" }}>
                <img src="https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", border: "8px solid #FFFFFF", display: "block" }} />
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)", background: "#FAFAFC" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.03em", color: "#011C45" }}>
              Protection isn’t one-size-fits-all.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "20px" }}>
              <div style={{ background: "#FFE9E9", borderRadius: "24px", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#E5484D", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#1A1F2E" }}>
                  {"Life & Protection"}
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#3A4256" }}>
                  Life insurance, final expense, income protection, and family protection strategies.
                </p>
              </div>
              <div style={{ background: "#FFF1DE", borderRadius: "24px", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#F76B15", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                    <path d="M3.5 12h5l1.5-3 3 6 1.5-3h6" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#1A1F2E" }}>
                  {"Health & Medicare"}
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#3A4256" }}>
                  Individual health coverage, Medicare solutions, and supplemental health protection.
                </p>
              </div>
              <div style={{ background: "#E2F6EA", borderRadius: "24px", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#30A46C", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 20h18" />
                    <path d="M4 16l5-5 4 3 7-7" />
                    <path d="M15 7h5v5" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#1A1F2E" }}>
                  Retirement
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#3A4256" }}>
                  Strategies designed to help protect retirement income and prepare for the years ahead.
                </p>
              </div>
              <div style={{ background: "#E3F1FF", borderRadius: "24px", padding: "30px 26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#0090FF", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M3 13h18" />
                  </svg>
                </span>
                <h3 style={{ margin: "0", fontWeight: "800", fontSize: "22px", color: "#1A1F2E" }}>
                  {"Business & Employee Benefits"}
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#3A4256" }}>
                  Protection and benefit solutions for employers, organizations, and their employees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(56px,8vw,112px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,80px)" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", position: "relative" }}>
              <div style={{ position: "absolute", inset: "-14px 30px 30px -14px", borderRadius: "28px", background: "linear-gradient(135deg,#FFC53D,#F76B15)" }} />
              <div style={{ position: "absolute", inset: "30px -14px -14px 30px", borderRadius: "28px", background: "linear-gradient(135deg,#0090FF,#8E4EC6)" }} />
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1100&h=850&fit=crop&auto=format&q=75" alt="" style={{ position: "relative", width: "100%", aspectRatio: "11/8.5", objectFit: "cover", borderRadius: "28px", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "4px", width: "120px", height: "6px" }}>
                <span style={{ flex: "1", borderRadius: "3px", background: "#E5484D" }} />
                <span style={{ flex: "1", borderRadius: "3px", background: "#F76B15" }} />
                <span style={{ flex: "1", borderRadius: "3px", background: "#FFC53D" }} />
                <span style={{ flex: "1", borderRadius: "3px", background: "#30A46C" }} />
                <span style={{ flex: "1", borderRadius: "3px", background: "#0090FF" }} />
                <span style={{ flex: "1", borderRadius: "3px", background: "#8E4EC6" }} />
              </div>
              <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,3.6vw,48px)", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#011C45" }}>
                We start with the conversation.
              </h2>
              <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#3A4256" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#3A4256" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)", background: "#FAFAFC" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px,5vw,64px)" }}>
            <div style={{ flex: "0 1 290px", margin: "0 auto", padding: "10px", borderRadius: "32px", background: "conic-gradient(from 90deg,#E5484D,#F76B15,#FFC53D,#30A46C,#0090FF,#8E4EC6,#E5484D)" }}>
              <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "24px", border: "6px solid #FFFFFF", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,3.4vw,44px)", letterSpacing: "-0.03em", color: "#011C45" }}>
                Meet Lamond Moore
              </h2>
              <p style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "#8E4EC6" }}>
                {"Insurance & Financial Protection Specialist"}
              </p>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#3A4256" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#3A4256" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
            <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,4vw,52px)", letterSpacing: "-0.03em", color: "#011C45" }}>
              Who we work with
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "20px" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "#CE2C31" }}>
                <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "18px 22px", fontWeight: "800", fontSize: "20px", color: "#FFFFFF" }}>
                  {"Individuals & Families"}
                </h3>
              </div>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "#C24400" }}>
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "18px 22px", fontWeight: "800", fontSize: "20px", color: "#FFFFFF" }}>
                  {"Pre-Retirees & Retirees"}
                </h3>
              </div>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "#18794E" }}>
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "18px 22px", fontWeight: "800", fontSize: "20px", color: "#FFFFFF" }}>
                  Business Owners
                </h3>
              </div>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "#0D74CE" }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                <h3 style={{ margin: "0", padding: "18px 22px", fontWeight: "800", fontSize: "20px", color: "#FFFFFF" }}>
                  {"Employers & Organizations"}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)", background: "linear-gradient(100deg,#E5484D,#F76B15,#FFC53D,#30A46C,#0090FF,#8E4EC6)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", background: "#FFFFFF", borderRadius: "32px", padding: "clamp(32px,5vw,60px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px", boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}>
            <h2 style={{ margin: "0", fontWeight: "800", fontSize: "clamp(30px,4vw,50px)", lineHeight: "1.05", letterSpacing: "-0.03em", color: "#011C45" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#3A4256" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <a href="#wl-contact" style={{ minHeight: "58px", padding: "0 30px", display: "flex", alignItems: "center", borderRadius: "999px", background: "#011C45", color: "#FFFFFF", fontWeight: "700", fontSize: "18px", textDecoration: "none" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ minHeight: "58px", padding: "0 24px", display: "flex", alignItems: "center", borderRadius: "999px", border: "2px solid #1A1F2E", color: "#1A1F2E", fontWeight: "700", fontSize: "18px", textDecoration: "none" }}>
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
