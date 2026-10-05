import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import lamondHeadshot from '../assets/lamond-moore-headshot.png';



class D01ClientRequired extends React.Component {
  state = { w: typeof window !== 'undefined' ? window.innerWidth : 1200, nearEnd: false, ctaOpen: false, submitted: false };
  closingRef = React.createRef();
  footerRef = React.createRef();
  vis = new Map();

  componentDidMount() {
    this.onResize = () => this.setState({ w: window.innerWidth });
    this.onKey = (e) => { if (e.key === 'Escape' && this.state.ctaOpen) this.close(); };
    window.addEventListener('resize', this.onResize);
    window.addEventListener('keydown', this.onKey);
    this.io = new IntersectionObserver((entries) => {
      entries.forEach(en => this.vis.set(en.target, en.isIntersecting));
      this.setState({ nearEnd: [...this.vis.values()].some(Boolean) });
    }, { threshold: 0 });
    [this.closingRef.current, this.footerRef.current].forEach(el => el && this.io.observe(el));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKey);
    this.io && this.io.disconnect();
  }

  track(event, location) {
    const payload = { event, location };
    (window.dataLayer = window.dataLayer || []).push(payload);
    console.log('[analytics]', payload);
  }
  open(location) {
    this.track('cta_click', location);
    this.setState({ ctaOpen: true, submitted: false });
  }
  close() { this.setState({ ctaOpen: false }); }

  renderVals() {
    const mobile = this.state.w < 768;
    const mode = this.props.ctaMode ?? 'Short form';
    const isCalendar = mode === 'Calendar embed';
    return {
      closingRef: this.closingRef,
      footerRef: this.footerRef,
      isDesktopHeader: !mobile,
      headerBtnPad: mobile ? '14px' : '22px',
      showSticky: mobile && !this.state.nearEnd && !this.state.ctaOpen,
      ctaHeader: () => this.open('header'),
      ctaHero: () => this.open('hero'),
      ctaClosing: () => this.open('closing'),
      ctaSticky: () => this.open('sticky'),
      trackPhoneHeader: () => this.track('phone_tap', 'header'),
      trackPhoneClosing: () => this.track('phone_tap', 'closing'),
      trackPhoneFooter: () => this.track('phone_tap', 'footer'),
      ctaOpen: this.state.ctaOpen,
      closeCta: () => this.close(),
      stop: (e) => e.stopPropagation(),
      isCalendar,
      showForm: !isCalendar && !this.state.submitted,
      submitted: !isCalendar && this.state.submitted,
      submit: (e) => { e.preventDefault(); this.track('form_submit', 'modal'); this.setState({ submitted: true }); },
      showProposed: this.props.showProposed ?? true,
      showTpmoPlaceholder: this.props.showTpmoPlaceholder ?? true,
      longCopy: this.props.longCopy ?? false,
      extraParagraphs: [1, 2, 3, 4, 5].map(n => `[Additional compliance language: placeholder paragraph ${n}. The container grows with its content; the layout above is unaffected.]`),
      year: new Date().getFullYear(),
    };
  }
  render() {
    const v = this.renderVals();
    return (
      <>
      <header data-screen-label="Header" style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #E3E7ED", backdropFilter: "saturate(1.2) blur(6px)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(16px,4vw,40px)", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href="#top" aria-label="Well-Life Advisors home" style={{ display: "flex", alignItems: "center", flex: "0 1 auto", minWidth: "0" }}>
            <img src={logoHorizontal} alt="Well-Life Advisors" style={{ maxWidth: "100%", height: "clamp(34px,6vw,46px)", width: "auto", display: "block" }} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px,2vw,24px)" }}>
            <a href="tel:9732805123" onClick={v.trackPhoneHeader} aria-label="Call 973-280-5123" style={{ minWidth: "44px", justifyContent: "center", display: "flex", alignItems: "center", gap: "8px", minHeight: "44px", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "17px", color: "#011C45", textDecoration: "none", whiteSpace: "nowrap" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CE0915" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              {v.isDesktopHeader && (
                <>
                <span>
                  973-280-5123
                </span>
                </>
              )}
            </a>
            {true && (
              <>
              <button onClick={v.ctaHeader} style={{ flex: "none", height: "48px", padding: `0 ${v.headerBtnPad}`, border: "0", borderRadius: "8px", background: "#011C45", color: "#FFFFFF", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "16px", cursor: "pointer", whiteSpace: "nowrap" }} className="wl-h1">
                Schedule a Conversation
              </button>
              </>
            )}
          </div>
        </div>
      </header>
      <main id="top">
        <section data-screen-label="Hero" style={{ padding: "clamp(40px,7vw,96px) clamp(20px,4vw,40px) clamp(56px,8vw,112px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,72px)" }}>
            <div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
              <h1 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "clamp(36px,4.8vw,56px)", lineHeight: "1.1", letterSpacing: "-0.02em", color: "#011C45", textWrap: "balance" }}>
                Protection for today. Planning for what’s ahead.
              </h1>
              <p style={{ margin: "0", fontSize: "clamp(19px,1.6vw,21px)", lineHeight: "1.6", color: "#2E3A4D", maxWidth: "34em", textWrap: "pretty" }}>
                Well-Life Advisors helps individuals, families, business owners, and organizations understand their options and make informed decisions about protecting what matters today while preparing for what’s ahead.
              </p>
              <ul aria-label="Areas we cover" style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#F3F5F7", border: "1px solid #E3E7ED", fontSize: "17px", fontWeight: "600", color: "#011C45", whiteSpace: "nowrap" }}>
                  Life
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#F3F5F7", border: "1px solid #E3E7ED", fontSize: "17px", fontWeight: "600", color: "#011C45", whiteSpace: "nowrap" }}>
                  Health
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#F3F5F7", border: "1px solid #E3E7ED", fontSize: "17px", fontWeight: "600", color: "#011C45", whiteSpace: "nowrap" }}>
                  Medicare
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#F3F5F7", border: "1px solid #E3E7ED", fontSize: "17px", fontWeight: "600", color: "#011C45", whiteSpace: "nowrap" }}>
                  Retirement
                </li>
                <li style={{ padding: "8px 16px", borderRadius: "999px", background: "#F3F5F7", border: "1px solid #E3E7ED", fontSize: "17px", fontWeight: "600", color: "#011C45", whiteSpace: "nowrap" }}>
                  Supplemental Benefits
                </li>
              </ul>
              <div style={{ display: "flex", paddingTop: "4px" }}>
                <button onClick={v.ctaHero} style={{ whiteSpace: "nowrap", height: "58px", padding: "0 32px", border: "0", borderRadius: "8px", background: "#011C45", color: "#FFFFFF", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "18px", cursor: "pointer" }} className="wl-h2">
                  Schedule a Conversation
                </button>
              </div>
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", aspectRatio: "4/5", maxHeight: "600px", position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&h=1250&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", display: "block" }} />
            </div>
          </div>
        </section>
        <section data-screen-label="What we help with" style={{ background: "#F3F5F7", padding: "clamp(56px,8vw,104px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
              <h2 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: "1.2", letterSpacing: "-0.015em", color: "#011C45", textWrap: "balance" }}>
                Protection isn’t one-size-fits-all.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "20px" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #E3E7ED", borderRadius: "12px", padding: "32px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#EEF2F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#011C45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "21px", lineHeight: "1.3", color: "#011C45" }}>
                  {"Life & Protection"}
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#2E3A4D", textWrap: "pretty" }}>
                  Life insurance, final expense, income protection, and family protection strategies.
                </p>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #E3E7ED", borderRadius: "12px", padding: "32px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#EEF2F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#011C45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
                    <path d="M3.5 12h5l1.5-3 3 6 1.5-3h6" />
                  </svg>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "21px", lineHeight: "1.3", color: "#011C45" }}>
                  {"Health & Medicare"}
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#2E3A4D", textWrap: "pretty" }}>
                  Individual health coverage, Medicare solutions, and supplemental health protection.
                </p>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #E3E7ED", borderRadius: "12px", padding: "32px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#EEF2F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#011C45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 20h18" />
                    <path d="M4 16l5-5 4 3 7-7" />
                    <path d="M15 7h5v5" />
                  </svg>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "21px", lineHeight: "1.3", color: "#011C45" }}>
                  Retirement
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#2E3A4D", textWrap: "pretty" }}>
                  Strategies designed to help protect retirement income and prepare for the years ahead.
                </p>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #E3E7ED", borderRadius: "12px", padding: "32px 28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#EEF2F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#011C45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M3 13h18" />
                  </svg>
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "21px", lineHeight: "1.3", color: "#011C45" }}>
                  {"Business & Employee Benefits"}
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#2E3A4D", textWrap: "pretty" }}>
                  Protection and benefit solutions for employers, organizations, and their employees.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="Our approach" style={{ padding: "clamp(56px,8vw,112px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,72px)" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
              <h2 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: "1.2", letterSpacing: "-0.015em", color: "#011C45", textWrap: "balance" }}>
                We start with the conversation.
              </h2>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A4D", maxWidth: "32em", textWrap: "pretty" }}>
                Before discussing solutions, we take the time to understand your needs, priorities, concerns, and what you are trying to accomplish.
              </p>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A4D", maxWidth: "32em", textWrap: "pretty" }}>
                Our approach is education-first, so you can understand your options and make informed decisions with confidence.
              </p>
            </div>
            <div style={{ flex: "1 1 400px", minWidth: "0", aspectRatio: "3/2", position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=800&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", display: "block" }} />
            </div>
          </div>
        </section>
        <section data-screen-label="Meet Lamond Moore" style={{ background: "#F3F5F7", padding: "clamp(56px,8vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px,5vw,64px)" }}>
            <figure style={{ margin: "0", flex: "0 1 280px", minWidth: "220px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src={lamondHeadshot} alt="Lamond Moore, Insurance & Financial Protection Specialist" style={{ width: "100%", aspectRatio: "479/492", objectFit: "cover", borderRadius: "14px", display: "block" }} />
              <figcaption style={{ fontSize: "16px", fontWeight: "600", color: "#2E3A4D" }}>
                Lamond Moore
              </figcaption>
            </figure>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h2 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "clamp(26px,3vw,34px)", lineHeight: "1.2", color: "#011C45" }}>
                  Meet Lamond Moore
                </h2>
                <p style={{ margin: "0", fontSize: "18px", fontWeight: "600", color: "#CE0915" }}>
                  {"Insurance & Financial Protection Specialist"}
                </p>
              </div>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A4D", textWrap: "pretty" }}>
                With more than 25 years of experience in the insurance industry, Lamond works with individuals, families, business owners, and organizations to help them understand their options and make informed decisions about protecting what matters most.
              </p>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#2E3A4D", textWrap: "pretty" }}>
                His focus is on bringing clarity to protection, coverage, and planning so clients can move forward with greater understanding and confidence.
              </p>
            </div>
          </div>
        </section>
        <section data-screen-label="Who we work with" style={{ padding: "clamp(56px,8vw,112px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
              <h2 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: "1.2", letterSpacing: "-0.015em", color: "#011C45" }}>
                Who we work with
              </h2>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(46%,220px),1fr))", gap: "clamp(16px,2vw,24px)" }}>
              <li style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "4/5", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "clamp(17px,1.6vw,20px)", lineHeight: "1.3", color: "#011C45" }}>
                  {"Individuals & Families"}
                </h3>
              </li>
              <li style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "4/5", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "clamp(17px,1.6vw,20px)", lineHeight: "1.3", color: "#011C45" }}>
                  {"Pre-Retirees & Retirees"}
                </h3>
              </li>
              <li style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "4/5", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "clamp(17px,1.6vw,20px)", lineHeight: "1.3", color: "#011C45" }}>
                  Business Owners
                </h3>
              </li>
              <li style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "4/5", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=750&fit=crop&auto=format&q=75" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }} />
                </div>
                <h3 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "clamp(17px,1.6vw,20px)", lineHeight: "1.3", color: "#011C45" }}>
                  {"Employers & Organizations"}
                </h3>
              </li>
            </ul>
          </div>
        </section>
        <section ref={v.closingRef} data-screen-label="Closing CTA" style={{ background: "#011C45", padding: "clamp(64px,9vw,112px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }} aria-hidden="true">
              <span style={{ width: "28px", height: "3px", background: "#CE0915", borderRadius: "2px" }} />
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFFFFF" }} />
              <span style={{ width: "28px", height: "3px", background: "#CE0915", borderRadius: "2px" }} />
            </div>
            <h2 style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "clamp(28px,3.6vw,42px)", lineHeight: "1.2", letterSpacing: "-0.015em", color: "#FFFFFF", textWrap: "balance" }}>
              Not sure where to start? Let’s talk about it.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.65", color: "#DCE3EE", textWrap: "pretty" }}>
              Whether you’re reviewing existing protection, preparing for retirement, navigating Medicare or health coverage, or considering benefits for a business or organization, the first step is understanding the options.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px 28px", paddingTop: "8px" }}>
              <button onClick={v.ctaClosing} style={{ whiteSpace: "nowrap", height: "58px", padding: "0 32px", border: "0", borderRadius: "8px", background: "#FFFFFF", color: "#011C45", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "18px", cursor: "pointer" }} className="wl-h3">
                Schedule a Conversation
              </button>
              <a href="tel:9732805123" onClick={v.trackPhoneClosing} style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "600", minHeight: "44px", display: "flex", alignItems: "center" }}>
                or call 973-280-5123
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer ref={v.footerRef} data-screen-label="Footer" style={{ padding: "clamp(48px,6vw,72px) clamp(20px,4vw,40px) clamp(40px,5vw,64px)", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "36px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 280px" }}>
              <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "52px", width: "auto", alignSelf: "flex-start", marginBottom: "12px" }} />
              <p style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "20px", color: "#011C45" }}>
                Well-Life Advisors
              </p>
              <p style={{ margin: "0", fontSize: "18px", color: "#2E3A4D" }}>
                {"Insurance & Financial Protection"}
              </p>
              <p style={{ margin: "0", fontSize: "15px", color: "#4A5568" }}>
                {"Powered by Community Care & Advocacy"}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: "1 1 240px", fontSize: "18px" }}>
              <a href="tel:9732805123" onClick={v.trackPhoneFooter} style={{ fontWeight: "600" }}>
                973-280-5123
              </a>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "baseline" }}>
                {v.showProposed && (
                  <>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#4A5568", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Proposed:
                  </span>
                  </>
                )}
                <a href="mailto:lamond@welllifeadvisors.com" style={{ wordBreak: "break-all" }}>
                  lamond@welllifeadvisors.com
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "baseline" }}>
                {v.showProposed && (
                  <>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#4A5568", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Proposed:
                  </span>
                  </>
                )}
                <span style={{ color: "#2E3A4D" }}>
                  welllifeadvisors.com
                </span>
              </div>
            </div>
            <nav aria-label="Legal" style={{ flex: "1 1 220px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "17px" }}>
                <li>
                  <a href="#privacy" style={{ display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" style={{ display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Terms / Website Disclosures
                  </a>
                </li>
                <li>
                  <a href="#licensing" style={{ display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Licensing Information
                  </a>
                </li>
                <li>
                  <a href="#medicare-disclosure" style={{ display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Medicare Disclosure
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section id="medicare-disclosure" aria-label="Disclosures" style={{ background: "#F3F5F7", border: "1px solid #E3E7ED", borderRadius: "12px", padding: "clamp(22px,3vw,36px)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", lineHeight: "1.65", color: "#2E3A4D" }}>
            <p style={{ margin: "0" }}>
              <strong style={{ color: "#011C45" }}>
                Business / Licensing Disclosure.
              </strong>
              {" "}{"Well-Life Advisors is a marketing and brand name used in connection with insurance and financial protection services. Medicare-related insurance services are offered through Community Care & Advocacy and other appropriately licensed and appointed entities, as applicable. Life insurance products are offered through licensed and appointed insurance producers and agencies based on carrier, product, and state availability."}
            </p>
            <p style={{ margin: "0" }}>
              Insurance products are subject to eligibility, underwriting where applicable, carrier approval, product availability, and applicable state licensing requirements. Well-Life Advisors is not an insurance carrier.
            </p>
            <div style={{ height: "1px", background: "#D8DEE6" }} />
            <p style={{ margin: "0" }}>
              <strong style={{ color: "#011C45" }}>
                Medicare Disclosure.
              </strong>
              {" "}Well-Life Advisors is an independent insurance agency and is not affiliated with or endorsed by the U.S. government or the federal Medicare program. We represent multiple Medicare insurance organizations and plan options. Plan availability varies by location and service area.
            </p>
            <p style={{ margin: "0" }}>
              We do not offer every Medicare plan available in every service area. The Medicare organizations and products represented may vary based on the beneficiary’s location. When discussing Medicare plan options, the applicable CMS-required disclosure for that service area should be provided.
            </p>
            {v.showTpmoPlaceholder && (
              <>
              <div style={{ border: "1.5px dashed #9AA6B8", borderRadius: "8px", padding: "14px 16px", background: "#FFFFFF", color: "#4A5568" }}>
                [Editable TPMO block: CMS-required language for the applicable service area is inserted here from the disclosure content store. Counts are not hard-coded.]
              </div>
              </>
            )}
            <p style={{ margin: "0" }}>
              For information about all Medicare options available in an area, consumers may visit{" "}
              <a href="https://www.medicare.gov" target="_blank" rel="noopener">
                Medicare.gov
              </a>
              {" "}or call{" "}
              <a href="tel:18006334227">
                1-800-MEDICARE (1-800-633-4227)
              </a>
              .
            </p>
            <p style={{ margin: "0" }}>
              Plan availability, benefits, costs, eligibility, and enrollment options vary by plan and service area. Contacting Well-Life Advisors does not obligate an individual to enroll in a Medicare plan.
            </p>
            {v.longCopy && (
              <>
              {(v.extraParagraphs || []).map((p, i0) => (
                <React.Fragment key={i0}>
                  <p style={{ margin: "0", color: "#4A5568" }}>
                    {p}
                  </p>
                </React.Fragment>
              ))}
              </>
            )}
          </section>
          <p style={{ margin: "0", fontSize: "15px", color: "#4A5568" }}>
            © {v.year} Well-Life Advisors. All rights reserved.
          </p>
        </div>
      </footer>
      {v.showSticky && (
        <>
        <div style={{ position: "fixed", left: "0", right: "0", bottom: "0", zIndex: "30", padding: "12px 16px calc(12px + env(safe-area-inset-bottom))", background: "#FFFFFF", borderTop: "1px solid #E3E7ED", boxShadow: "0 -6px 20px rgba(1,28,69,0.08)" }}>
          <button onClick={v.ctaSticky} style={{ width: "100%", height: "54px", border: "0", borderRadius: "8px", background: "#011C45", color: "#FFFFFF", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "17px", cursor: "pointer" }}>
            Schedule a Conversation
          </button>
        </div>
        </>
      )}
      {v.ctaOpen && (
        <>
        <div onClick={v.closeCta} style={{ position: "fixed", inset: "0", zIndex: "50", background: "rgba(1,28,69,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
          <div role="dialog" aria-modal="true" aria-labelledby="cta-title" onClick={v.stop} style={{ width: "100%", maxWidth: "520px", maxHeight: "calc(100vh - 32px)", overflow: "auto", background: "#FFFFFF", borderRadius: "16px", padding: "clamp(24px,4vw,40px)", display: "flex", flexDirection: "column", gap: "22px", boxShadow: "0 24px 60px rgba(1,28,69,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h2 id="cta-title" style={{ margin: "0", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "700", fontSize: "26px", lineHeight: "1.2", color: "#011C45" }}>
                  Schedule a Conversation
                </h2>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.5", color: "#2E3A4D" }}>
                  Share a few details and Lamond will reach out to find a time.
                </p>
              </div>
              <button onClick={v.closeCta} aria-label="Close" style={{ flex: "none", width: "44px", height: "44px", border: "0", borderRadius: "8px", background: "#F3F5F7", color: "#011C45", fontSize: "24px", lineHeight: "1", cursor: "pointer" }}>
                ×
              </button>
            </div>
            {v.isCalendar && (
              <>
              <div style={{ border: "1.5px dashed #9AA6B8", borderRadius: "12px", minHeight: "360px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "24px", color: "#4A5568", fontSize: "17px", background: "#F3F5F7" }}>
                Scheduling calendar embed (Calendly or similar). Link pending from Lamond.
              </div>
              </>
            )}
            {v.showForm && (
              <>
              <form onSubmit={v.submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "16px", fontWeight: "600", color: "#011C45" }}>
                  Full name{" "}
                  <input required name="name" autoComplete="name" style={{ height: "52px", padding: "0 14px", border: "1.5px solid #B9C2CF", borderRadius: "8px", font: "inherit", fontWeight: "400", fontSize: "18px", color: "#1F2A3C" }} />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "16px" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "16px", fontWeight: "600", color: "#011C45" }}>
                    Phone{" "}
                    <input required name="phone" type="tel" autoComplete="tel" style={{ height: "52px", padding: "0 14px", border: "1.5px solid #B9C2CF", borderRadius: "8px", font: "inherit", fontWeight: "400", fontSize: "18px", color: "#1F2A3C" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "16px", fontWeight: "600", color: "#011C45" }}>
                    ZIP code{" "}
                    <input name="zip" inputMode="numeric" autoComplete="postal-code" maxLength="5" style={{ height: "52px", padding: "0 14px", border: "1.5px solid #B9C2CF", borderRadius: "8px", font: "inherit", fontWeight: "400", fontSize: "18px", color: "#1F2A3C" }} />
                  </label>
                </div>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "16px", fontWeight: "600", color: "#011C45" }}>
                  Email{" "}
                  <input name="email" type="email" autoComplete="email" style={{ height: "52px", padding: "0 14px", border: "1.5px solid #B9C2CF", borderRadius: "8px", font: "inherit", fontWeight: "400", fontSize: "18px", color: "#1F2A3C" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "16px", fontWeight: "600", color: "#011C45" }}>
                  What would you like to talk about?{" "}
                  <select name="topic" style={{ height: "52px", padding: "0 12px", border: "1.5px solid #B9C2CF", borderRadius: "8px", font: "inherit", fontWeight: "400", fontSize: "18px", color: "#1F2A3C", background: "#FFFFFF" }}>
                    <option>
                      Not sure yet
                    </option>
                    <option>
                      {"Life & Protection"}
                    </option>
                    <option>
                      {"Health & Medicare"}
                    </option>
                    <option>
                      Retirement
                    </option>
                    <option>
                      {"Business & Employee Benefits"}
                    </option>
                  </select>
                </label>
                <button type="submit" style={{ height: "56px", border: "0", borderRadius: "8px", background: "#011C45", color: "#FFFFFF", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "18px", cursor: "pointer", marginTop: "4px" }} className="wl-h4">
                  Request a Conversation
                </button>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#4A5568" }}>
                  Prefer to talk now? Call{" "}
                  <a href="tel:9732805123">
                    973-280-5123
                  </a>
                  . Contacting Well-Life Advisors does not obligate an individual to enroll in a Medicare plan.
                </p>
              </form>
              </>
            )}
            {v.submitted && (
              <>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "8px 0" }}>
                <div style={{ width: "40px", height: "4px", background: "#CE0915", borderRadius: "2px" }} />
                <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#2E3A4D" }}>
                  Thank you. Lamond will be in touch soon to set up a time to talk.
                </p>
                <button onClick={v.closeCta} style={{ alignSelf: "flex-start", height: "52px", padding: "0 24px", border: "1.5px solid #011C45", borderRadius: "8px", background: "#FFFFFF", color: "#011C45", fontFamily: "'Libre Franklin',sans-serif", fontWeight: "600", fontSize: "17px", cursor: "pointer" }}>
                  Close
                </button>
              </div>
              </>
            )}
          </div>
        </div>
        </>
      )}
      </>
    );
  }
}

export default D01ClientRequired;
