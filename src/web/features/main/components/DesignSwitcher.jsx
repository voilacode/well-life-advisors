import React from 'react';
import D01ClientRequired from '../designs/D01ClientRequired.jsx';
import D02HeroElevation from '../designs/D02HeroElevation.jsx';
import D03Sketches from '../designs/D03Sketches.jsx';
import D04InkHandwriting from '../designs/D04InkHandwriting.jsx';
import D05FullScreenImages from '../designs/D05FullScreenImages.jsx';
import D06Rainbow from '../designs/D06Rainbow.jsx';
import D07Decent from '../designs/D07Decent.jsx';
import D08LifeNavigator from '../designs/D08LifeNavigator.jsx';
import D09Gaming from '../designs/D09Gaming.jsx';
import D10Conversation from '../designs/D10Conversation.jsx';


const NAMES = ['Client required', 'Hero elevation', 'Sketches', 'Ink handwriting', 'Full-screen images', 'Rainbow', 'Decent', 'Life navigator', 'Gaming', 'Conversation'];
const FILES = ['Well-Life Landing Page', 'WL 02 Hero Elevation', 'WL 03 Sketches', 'WL 04 Ink Handwriting', 'WL 05 Full-Screen Images', 'WL 06 Rainbow', 'WL 07 Decent', 'WL 08 Life Navigator', 'WL 09 Gaming', 'WL 10 Conversation'];
class DesignSwitcher extends React.Component {
  qp = new URLSearchParams(location.search);
  embed = this.qp.get('embed') === '1';
  state = this.embed ? { d: Number(this.qp.get('d')) || 1, dev: 'laptop' } : { d: Number(localStorage.getItem('wl-design-choice')) || 1, dev: localStorage.getItem('wl-design-device') || 'laptop' };
  setDev(dev) { localStorage.setItem('wl-design-device', dev); this.setState({ dev }); window.scrollTo(0, 0); }
  renderVals() {
    const d = this.state.d, v = {}, mob = this.state.dev === 'mobile';
    const tabs = NAMES.map((label, i) => {
      const n = i + 1, on = n === d;
      v['s' + n] = on && !mob;
      return { num: String(n).padStart(2, '0'), label, pressed: on ? 'true' : 'false', bg: on ? '#011C45' : '#FFFFFF', fg: on ? '#FFFFFF' : '#011C45', border: on ? '#011C45' : '#D6DCE5',
        onPick: () => { localStorage.setItem('wl-design-choice', String(n)); this.setState({ d: n }); window.scrollTo(0, 0); } };
    });
    const act = (on) => ({ bg: on ? '#011C45' : 'transparent', fg: on ? '#FFFFFF' : '#011C45', p: on ? 'true' : 'false' });
    const L = act(!mob), M = act(mob);
    return { ...v, tabs, isMobile: mob, showNav: !this.embed, mobileSrc: location.href.split('#')[0].split('?')[0] + '?embed=1&d=' + d,
      setLaptop: () => this.setDev('laptop'), setMobile: () => this.setDev('mobile'),
      laptopBg: L.bg, laptopFg: L.fg, laptopPressed: L.p, mobileBg: M.bg, mobileFg: M.fg, mobilePressed: M.p };
  }
  render() {
    const v = this.renderVals();
    return (
      <>
      {v.showNav && (
        <>
        <nav aria-label="Design options" style={{ fontFamily: "'Libre Franklin',system-ui,sans-serif", background: "#FFFFFF", borderBottom: "1px solid #E3E7ED", position: "relative", zIndex: "50" }}>
          <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ flex: "none", fontWeight: "700", fontSize: "14px", color: "#011C45", whiteSpace: "nowrap" }}>
              Well-Life · Designs
            </span>
            <div style={{ flex: "1", minWidth: "0", display: "flex", gap: "6px", overflowX: "auto", padding: "2px" }}>
              {(v.tabs || []).map((t, i0) => (
                <React.Fragment key={i0}>
                  <button onClick={t.onPick} aria-pressed={t.pressed} style={{ flex: "none", height: "40px", padding: "0 14px", borderRadius: "8px", border: `1px solid ${t.border}`, background: t.bg, color: t.fg, fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap" }}>
                    <span style={{ fontSize: "12px", opacity: "0.7" }}>
                      {t.num}
                    </span>
                    {t.label}
                  </button>
                </React.Fragment>
              ))}
            </div>
            <div role="group" aria-label="Device" style={{ flex: "none", display: "flex", padding: "3px", borderRadius: "10px", background: "#F3F5F7", border: "1px solid #E3E7ED" }}>
              <button onClick={v.setLaptop} aria-pressed={v.laptopPressed} style={{ height: "34px", padding: "0 12px", border: "0", borderRadius: "7px", background: v.laptopBg, color: v.laptopFg, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="5" width="16" height="11" rx="1.5" />
                  <path d="M2 19h20" />
                </svg>
                Laptop
              </button>
              <button onClick={v.setMobile} aria-pressed={v.mobilePressed} style={{ height: "34px", padding: "0 12px", border: "0", borderRadius: "7px", background: v.mobileBg, color: v.mobileFg, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>
                Mobile
              </button>
            </div>
          </div>
        </nav>
        </>
      )}
      {v.isMobile && (
        <>
        <div style={{ minHeight: "calc(100vh - 62px)", background: "#E9ECF1", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "24px 16px" }}>
          <div style={{ width: "414px", maxWidth: "100%", height: "min(860px,calc(100vh - 110px))", padding: "12px", borderRadius: "52px", background: "#11151C", boxShadow: "0 30px 70px rgba(1,28,69,0.25)" }}>
            <iframe src={v.mobileSrc} title="Mobile preview" style={{ width: "100%", height: "100%", border: "0", borderRadius: "40px", background: "#FFFFFF", display: "block" }} />
          </div>
        </div>
        </>
      )}
      {v.s1 && (
        <>
        <D01ClientRequired />
        </>
      )}
      {v.s2 && (
        <>
        <D02HeroElevation />
        </>
      )}
      {v.s3 && (
        <>
        <D03Sketches />
        </>
      )}
      {v.s4 && (
        <>
        <D04InkHandwriting />
        </>
      )}
      {v.s5 && (
        <>
        <D05FullScreenImages />
        </>
      )}
      {v.s6 && (
        <>
        <D06Rainbow />
        </>
      )}
      {v.s7 && (
        <>
        <D07Decent />
        </>
      )}
      {v.s8 && (
        <>
        <D08LifeNavigator />
        </>
      )}
      {v.s9 && (
        <>
        <D09Gaming />
        </>
      )}
      {v.s10 && (
        <>
        <D10Conversation />
        </>
      )}
      </>
    );
  }
}

export default DesignSwitcher;
