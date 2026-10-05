import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';
import WLFooter from './WLFooter.jsx';

export default function D07Decent() {
  const v = {};
  return (
      <>
      <div style={{ fontFamily: "'Libre Franklin',system-ui,sans-serif", color: "#1D2533", background: "#FAF8F4", overflowX: "clip" }}>
        <header style={{ borderBottom: "1px solid #E2DDD2" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 clamp(16px,3vw,32px)", minHeight: "80px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px" }}>
            <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "clamp(32px,7vw,44px)", width: "auto", maxWidth: "100%" }} />
            <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 28px", fontSize: "16px" }}>
              <a href="#d7-services" style={{ color: "#1D2533", textDecoration: "none" }} className="wl-h15">
                Services
              </a>
              <a href="#d7-approach" style={{ color: "#1D2533", textDecoration: "none" }} className="wl-h16">
                Approach
              </a>
              <a href="#d7-about" style={{ color: "#1D2533", textDecoration: "none" }} className="wl-h17">
                About
              </a>
              <a href="tel:9732805123" style={{ color: "#011C45", fontWeight: "600", textDecoration: "none" }}>
                973-280-5123
              </a>
            </nav>
          </div>
        </header>
        <section style={{ padding: "clamp(56px,8vw,112px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px,6vw,96px)" }}>
            <div style={{ flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
              <h1 style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontWeight: "400", fontSize: "clamp(38px,5vw,64px)", lineHeight: "1.12", letterSpacing: "-0.01em", color: "#011C45", textWrap: "balance" }}>
                Protection for today.{" "}
                <em style={{ fontStyle: "italic" }}>
                  Planning for what’s ahead.
                </em>
              </h1>
              <p style={{ margin: "0", maxWidth: "32em", fontSize: "19px", lineHeight: "1.7", color: "#3D4555" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <p style={{ margin: "0", fontSize: "15px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6455" }}>
                Life · Health · Medicare · Retirement · Supplemental Benefits
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 28px", paddingTop: "6px" }}>
                <a href="#wl-contact" style={{ minHeight: "56px", padding: "0 28px", display: "flex", alignItems: "center", background: "#011C45", color: "#FFFFFF", fontWeight: "500", fontSize: "17px", textDecoration: "none", borderRadius: "2px" }} className="wl-h18">
                  Schedule a Conversation
                </a>
                <a href="tel:9732805123" style={{ fontSize: "17px", color: "#011C45" }}>
                  or call 973-280-5123
                </a>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=1100&fit=crop&auto=format&q=75" alt="" style={{ flex: "1 1 380px", minWidth: "0", width: "100%", maxWidth: "480px", aspectRatio: "4/5", objectFit: "cover", borderRadius: "2px", display: "block", margin: "0 auto" }} />
          </div>
        </section>
        <section id="d7-services" style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)", borderTop: "1px solid #E2DDD2" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "40px clamp(40px,6vw,96px)" }}>
            <h2 style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", lineHeight: "1.2", color: "#011C45" }}>
              Protection isn’t one-size-fits-all.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "0 40px" }}>
              <div style={{ padding: "22px 0 26px", borderTop: "1px solid #D4CEC1", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Libre Caslon Text',serif", fontStyle: "italic", fontSize: "18px", color: "#CE0915" }}>
                  01
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "19px", color: "#011C45" }}>
                  {"Life & Protection"}
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3D4555" }}>
                  Life insurance, final expense, income protection, and family protection strategies.
                </p>
              </div>
              <div style={{ padding: "22px 0 26px", borderTop: "1px solid #D4CEC1", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Libre Caslon Text',serif", fontStyle: "italic", fontSize: "18px", color: "#CE0915" }}>
                  02
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "19px", color: "#011C45" }}>
                  {"Health & Medicare"}
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3D4555" }}>
                  Individual health coverage, Medicare solutions, and supplemental health protection.
                </p>
              </div>
              <div style={{ padding: "22px 0 26px", borderTop: "1px solid #D4CEC1", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Libre Caslon Text',serif", fontStyle: "italic", fontSize: "18px", color: "#CE0915" }}>
                  03
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "19px", color: "#011C45" }}>
                  Retirement
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3D4555" }}>
                  Strategies designed to help protect retirement income and prepare for the years ahead.
                </p>
              </div>
              <div style={{ padding: "22px 0 26px", borderTop: "1px solid #D4CEC1", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Libre Caslon Text',serif", fontStyle: "italic", fontSize: "18px", color: "#CE0915" }}>
                  04
                </span>
                <h3 style={{ margin: "0", fontWeight: "600", fontSize: "19px", color: "#011C45" }}>
                  {"Business & Employee Benefits"}
                </h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3D4555" }}>
                  Protection and benefit solutions for employers, organizations, and their employees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="d7-approach" style={{ padding: "0 clamp(20px,4vw,40px) clamp(64px,9vw,120px)" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&h=700&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "18/7", objectFit: "cover", borderRadius: "2px", display: "block" }} />
            <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "22px" }}>
              <h2 style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", color: "#011C45" }}>
                We start with the conversation.
              </h2>
              <p style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontSize: "clamp(20px,2vw,24px)", lineHeight: "1.6", color: "#1D2533" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#3D4555" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
          </div>
        </section>
        <section id="d7-about" style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)", background: "#F2EEE6" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px,5vw,72px)" }}>
            <img src={lamondHeadshot} alt="Lamond Moore" style={{ flex: "0 1 280px", minWidth: "220px", width: "280px", aspectRatio: "4/5", objectFit: "cover", borderRadius: "2px", margin: "0 auto" }} />
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,38px)", color: "#011C45" }}>
                Meet Lamond Moore
              </h2>
              <p style={{ margin: "0", fontSize: "15px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B6455" }}>
                {"Insurance & Financial Protection Specialist"}
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#3D4555" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#3D4555" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,3.2vw,40px)", color: "#011C45" }}>
              Who we work with
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "28px" }}>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "2px" }} />
                <figcaption style={{ fontSize: "18px", fontWeight: "500", color: "#011C45" }}>
                  {"Individuals & Families"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "2px" }} />
                <figcaption style={{ fontSize: "18px", fontWeight: "500", color: "#011C45" }}>
                  {"Pre-Retirees & Retirees"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "2px" }} />
                <figcaption style={{ fontSize: "18px", fontWeight: "500", color: "#011C45" }}>
                  Business Owners
                </figcaption>
              </figure>
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop&auto=format&q=75" alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "2px" }} />
                <figcaption style={{ fontSize: "18px", fontWeight: "500", color: "#011C45" }}>
                  {"Employers & Organizations"}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section style={{ padding: "0 clamp(20px,4vw,40px) clamp(64px,9vw,120px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(36px,5vw,64px)", border: "1px solid #D4CEC1", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Libre Caslon Text',Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: "1.2", color: "#011C45" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#3D4555" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "14px 28px" }}>
              <a href="#wl-contact" style={{ minHeight: "56px", padding: "0 28px", display: "flex", alignItems: "center", background: "#011C45", color: "#FFFFFF", fontWeight: "500", fontSize: "17px", textDecoration: "none", borderRadius: "2px" }}>
                Schedule a Conversation
              </a>
              <a href="tel:9732805123" style={{ fontSize: "17px", color: "#011C45" }}>
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
