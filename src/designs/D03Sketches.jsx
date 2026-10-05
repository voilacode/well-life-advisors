import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';

export default function D03Sketches() {
  const v = {};
  return (
      <>
      <div style={{ fontFamily: "'Patrick Hand',cursive", fontSize: "21px", color: "#22262E", backgroundColor: "#FBF8F1", backgroundImage: "linear-gradient(#ECE5D4 1px,transparent 1px),linear-gradient(90deg,#ECE5D4 1px,transparent 1px)", backgroundSize: "30px 30px", overflowX: "clip" }}>
        <header style={{ maxWidth: "1180px", margin: "0 auto", padding: "22px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,44px)", width: "auto", maxWidth: "100%" }} />
          <a href="#wl-contact" style={{ padding: "10px 20px", minHeight: "48px", display: "flex", alignItems: "center", border: "2.5px solid #22262E", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", background: "#FFFFFF", boxShadow: "4px 4px 0 #22262E", color: "#011C45", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "18px", textDecoration: "none", whiteSpace: "nowrap" }} className="wl-h13">
            Schedule a Conversation
          </a>
        </header>
        <section style={{ padding: "clamp(32px,6vw,80px) clamp(20px,4vw,40px) clamp(56px,8vw,110px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,80px)" }}>
            <div style={{ flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
              <h1 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "clamp(40px,5.4vw,66px)", lineHeight: "1.12", color: "#011C45" }}>
                Protection for today.{" "}
                <span style={{ background: "linear-gradient(transparent 58%,#FFE27A 58%,#FFE27A 92%,transparent 92%)" }}>
                  Planning for what’s ahead.
                </span>
              </h1>
              <svg width="220" height="18" viewBox="0 0 220 18" aria-hidden="true">
                <path d="M3 12 C 40 4, 80 16, 120 8 S 190 6, 217 10" fill="none" stroke="#CE0915" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p style={{ margin: "0", maxWidth: "34em", lineHeight: "1.5" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <li style={{ padding: "4px 14px", border: "2px solid #22262E", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", background: "#FFFFFF" }}>
                  Life
                </li>
                <li style={{ padding: "4px 14px", border: "2px solid #22262E", borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px", background: "#FFFFFF" }}>
                  Health
                </li>
                <li style={{ padding: "4px 14px", border: "2px solid #22262E", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", background: "#FFFFFF" }}>
                  Medicare
                </li>
                <li style={{ padding: "4px 14px", border: "2px solid #22262E", borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px", background: "#FFFFFF" }}>
                  Retirement
                </li>
                <li style={{ padding: "4px 14px", border: "2px solid #22262E", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", background: "#FFFFFF" }}>
                  Supplemental Benefits
                </li>
              </ul>
              <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
                <a href="#wl-contact" style={{ padding: "14px 28px", minHeight: "56px", display: "flex", alignItems: "center", border: "3px solid #22262E", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", background: "#011C45", boxShadow: "5px 5px 0 #CE0915", color: "#FFFFFF", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "21px", textDecoration: "none" }}>
                  Schedule a Conversation
                </a>
                <svg width="90" height="50" viewBox="0 0 90 50" aria-hidden="true">
                  <path d="M86 40 C 60 46, 30 36, 12 14" fill="none" stroke="#22262E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M10 28 L 12 13 L 26 16" fill="none" stroke="#22262E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <figure style={{ position: "relative", margin: "0", padding: "16px 16px 56px", background: "#FFFFFF", boxShadow: "0 14px 30px rgba(0,0,0,0.14)", transform: "rotate(3deg)", maxWidth: "440px", width: "100%" }}>
                <span style={{ position: "absolute", top: "-16px", left: "50%", width: "120px", height: "34px", marginLeft: "-60px", background: "rgba(255,226,122,0.8)", transform: "rotate(-4deg)" }} />
                <img src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=900&h=1000&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "9/10", objectFit: "cover", display: "block", filter: "grayscale(0.25) contrast(1.05)" }} />
                <figcaption style={{ position: "absolute", left: "0", right: "0", bottom: "14px", textAlign: "center", fontFamily: "'Kalam',cursive", fontSize: "22px", color: "#011C45" }}>
                  Well-Life Advisors
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "44px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", color: "#011C45" }}>
              Protection isn’t one-size-fits-all.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "28px" }}>
              <div style={{ background: "#FFF4A3", padding: "28px 24px 32px", transform: "rotate(-2deg)", boxShadow: "0 12px 20px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22262E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "25px", color: "#011C45" }}>
                  {"Life & Protection"}
                </h3>
                <p style={{ margin: "0", lineHeight: "1.4" }}>
                  Life insurance, final expense, income protection, and family protection strategies.
                </p>
              </div>
              <div style={{ background: "#FFD9E2", padding: "28px 24px 32px", transform: "rotate(1.5deg)", boxShadow: "0 12px 20px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22262E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                  <path d="M3.5 12h5l1.5-3 3 6 1.5-3h6" />
                </svg>
                <h3 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "25px", color: "#011C45" }}>
                  {"Health & Medicare"}
                </h3>
                <p style={{ margin: "0", lineHeight: "1.4" }}>
                  Individual health coverage, Medicare solutions, and supplemental health protection.
                </p>
              </div>
              <div style={{ background: "#D6ECFF", padding: "28px 24px 32px", transform: "rotate(-1deg)", boxShadow: "0 12px 20px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22262E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 20h18" />
                  <path d="M4 16l5-5 4 3 7-7" />
                  <path d="M15 7h5v5" />
                </svg>
                <h3 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "25px", color: "#011C45" }}>
                  Retirement
                </h3>
                <p style={{ margin: "0", lineHeight: "1.4" }}>
                  Strategies designed to help protect retirement income and prepare for the years ahead.
                </p>
              </div>
              <div style={{ background: "#DCF5D2", padding: "28px 24px 32px", transform: "rotate(2deg)", boxShadow: "0 12px 20px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22262E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <path d="M3 13h18" />
                </svg>
                <h3 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "25px", color: "#011C45" }}>
                  {"Business & Employee Benefits"}
                </h3>
                <p style={{ margin: "0", lineHeight: "1.4" }}>
                  Protection and benefit solutions for employers, organizations, and their employees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,72px)" }}>
            <div style={{ flex: "1 1 460px", minWidth: "0", position: "relative", padding: "36px 32px 36px 72px", background: "repeating-linear-gradient(#FFFFFF 0 37px,#D5E2F3 37px 38px)", border: "2px solid #22262E", borderRadius: "6px 12px 8px 14px", boxShadow: "6px 6px 0 rgba(34,38,46,0.15)" }}>
              <span style={{ position: "absolute", top: "0", bottom: "0", left: "50px", width: "2px", background: "#F2A3A8" }} />
              <h2 style={{ margin: "0 0 12px", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.4", color: "#011C45" }}>
                We start with the conversation.
              </h2>
              <p style={{ margin: "0 0 4px", lineHeight: "38px" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", lineHeight: "38px" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
            <figure style={{ flex: "0 1 340px", margin: "0 auto", padding: "14px 14px 48px", background: "#FFFFFF", boxShadow: "0 14px 30px rgba(0,0,0,0.14)", transform: "rotate(-3deg)", position: "relative" }}>
              <span style={{ position: "absolute", top: "-14px", right: "30px", width: "100px", height: "30px", background: "rgba(214,236,255,0.9)", transform: "rotate(6deg)" }} />
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", filter: "grayscale(0.25)" }} />
            </figure>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,64px)" }}>
            <figure style={{ flex: "0 1 300px", margin: "0 auto", padding: "14px 14px 52px", background: "#FFFFFF", boxShadow: "0 14px 30px rgba(0,0,0,0.14)", transform: "rotate(-2deg)", position: "relative" }}>
              <span style={{ position: "absolute", top: "-15px", left: "50%", marginLeft: "-55px", width: "110px", height: "32px", background: "rgba(255,226,122,0.85)", transform: "rotate(3deg)" }} />
              <img src={lamondHeadshot} alt="Lamond Moore" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
              <figcaption style={{ position: "absolute", left: "0", right: "0", bottom: "12px", textAlign: "center", fontFamily: "'Kalam',cursive", fontSize: "22px", color: "#011C45" }}>
                Lamond Moore
              </figcaption>
            </figure>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "clamp(30px,3.4vw,42px)", color: "#011C45" }}>
                Meet Lamond Moore
              </h2>
              <p style={{ margin: "0", fontFamily: "'Kalam',cursive", fontSize: "20px", color: "#CE0915" }}>
                {"Insurance & Financial Protection Specialist"}
              </p>
              <p style={{ margin: "0", lineHeight: "1.5" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", lineHeight: "1.5" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "44px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "clamp(30px,3.6vw,44px)", color: "#011C45" }}>
              Who we work with
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "32px" }}>
              <figure style={{ margin: "0", padding: "12px 12px 16px", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(0,0,0,0.12)", transform: "rotate(-2deg)" }}>
                <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", filter: "grayscale(0.25)" }} />
                <figcaption style={{ paddingTop: "12px", textAlign: "center", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "21px", color: "#011C45" }}>
                  {"Individuals & Families"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", padding: "12px 12px 16px", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(0,0,0,0.12)", transform: "rotate(1.5deg)" }}>
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", filter: "grayscale(0.25)" }} />
                <figcaption style={{ paddingTop: "12px", textAlign: "center", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "21px", color: "#011C45" }}>
                  {"Pre-Retirees & Retirees"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", padding: "12px 12px 16px", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(0,0,0,0.12)", transform: "rotate(-1deg)" }}>
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", filter: "grayscale(0.25)" }} />
                <figcaption style={{ paddingTop: "12px", textAlign: "center", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "21px", color: "#011C45" }}>
                  Business Owners
                </figcaption>
              </figure>
              <figure style={{ margin: "0", padding: "12px 12px 16px", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(0,0,0,0.12)", transform: "rotate(2deg)" }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block", filter: "grayscale(0.25)" }} />
                <figcaption style={{ paddingTop: "12px", textAlign: "center", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "21px", color: "#011C45" }}>
                  {"Employers & Organizations"}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(48px,7vw,96px) clamp(20px,4vw,40px) clamp(72px,9vw,120px)" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", padding: "clamp(32px,5vw,56px)", background: "#FFFFFF", border: "3px solid #22262E", borderRadius: "255px 25px 225px 25px/25px 225px 25px 255px", boxShadow: "10px 10px 0 #011C45", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", color: "#011C45" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", lineHeight: "1.5" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px 24px" }}>
              <a href="#wl-contact" style={{ padding: "14px 28px", minHeight: "56px", display: "flex", alignItems: "center", border: "3px solid #22262E", borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px", background: "#CE0915", boxShadow: "5px 5px 0 #22262E", color: "#FFFFFF", fontFamily: "'Kalam',cursive", fontWeight: "700", fontSize: "21px", textDecoration: "none" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ fontFamily: "'Kalam',cursive", fontSize: "21px", color: "#011C45" }}>
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
