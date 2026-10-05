import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';


export default function WLFooter() {
  const v = {};
  return (
      <>
      <footer id="wl-contact" style={{ fontFamily: "'Libre Franklin',system-ui,sans-serif", padding: "clamp(48px,6vw,72px) clamp(20px,4vw,40px) clamp(40px,5vw,64px)", background: "#FFFFFF", color: "#1F2A3C", borderTop: "1px solid #E3E7ED" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "36px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1 1 280px" }}>
              <img src={logoHorizontal} alt="Well-Life Advisors" style={{ height: "52px", width: "auto", alignSelf: "flex-start", marginBottom: "12px" }} />
              <p style={{ margin: "0", fontWeight: "700", fontSize: "20px", color: "#011C45" }}>
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
              <a href="tel:9732805123" style={{ fontWeight: "600", color: "#011C45" }}>
                973-280-5123
              </a>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "baseline" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5568", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Proposed:
                </span>
                <a href="mailto:lamond@welllifeadvisors.com" style={{ color: "#011C45", wordBreak: "break-all" }}>
                  lamond@welllifeadvisors.com
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "baseline" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5568", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Proposed:
                </span>
                <span style={{ color: "#2E3A4D" }}>
                  welllifeadvisors.com
                </span>
              </div>
            </div>
            <nav aria-label="Legal" style={{ flex: "1 1 220px" }}>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "4px", fontSize: "17px" }}>
                <li>
                  <a href="#privacy" style={{ color: "#011C45", display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" style={{ color: "#011C45", display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Terms / Website Disclosures
                  </a>
                </li>
                <li>
                  <a href="#licensing" style={{ color: "#011C45", display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Licensing Information
                  </a>
                </li>
                <li>
                  <a href="#medicare-disclosure" style={{ color: "#011C45", display: "inline-flex", minHeight: "36px", alignItems: "center" }}>
                    Medicare Disclosure
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section aria-label="Disclosures" style={{ background: "#F3F5F7", border: "1px solid #E3E7ED", borderRadius: "12px", padding: "clamp(22px,3vw,36px)", display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", lineHeight: "1.65", color: "#2E3A4D" }}>
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
            <div style={{ border: "1.5px dashed #9AA6B8", borderRadius: "8px", padding: "14px 16px", background: "#FFFFFF", color: "#4A5568" }}>
              [Editable TPMO block: CMS-required language for the applicable service area is inserted here from the disclosure content store. Counts are not hard-coded.]
            </div>
            <p style={{ margin: "0" }}>
              For information about all Medicare options available in an area, consumers may visit{" "}
              <a href="https://www.medicare.gov" target="_blank" rel="noopener" style={{ color: "#011C45" }}>
                Medicare.gov
              </a>
              {" "}or call{" "}
              <a href="tel:18006334227" style={{ color: "#011C45" }}>
                1-800-MEDICARE (1-800-633-4227)
              </a>
              .
            </p>
            <p style={{ margin: "0" }}>
              Plan availability, benefits, costs, eligibility, and enrollment options vary by plan and service area. Contacting Well-Life Advisors does not obligate an individual to enroll in a Medicare plan.
            </p>
          </section>
          <p style={{ margin: "0", fontSize: "15px", color: "#4A5568" }}>
            © 2026 Well-Life Advisors. All rights reserved.
          </p>
        </div>
      </footer>
      </>
    );
}
