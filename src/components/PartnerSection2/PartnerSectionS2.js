import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaRocket, FaGlobe } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnershipValues = [
  {
    icon: <FaHandshake size={48} color="#4F8A8B" />,
    title: "Collaboration",
    desc: "We work hand-in-hand with our partners to achieve shared success.",
  },
  {
    icon: <FaLightbulb size={48} color="#F9D923" />,
    title: "Innovation",
    desc: "Together, we create new solutions and drive progress.",
  },
  {
    icon: <FaUsers size={48} color="#36C9C6" />,
    title: "Community",
    desc: "Building strong, supportive networks for lasting impact.",
  },
  {
    icon: <FaRocket size={48} color="#F26419" />,
    title: "Growth",
    desc: "Empowering each other to reach new heights.",
  },
  {
    icon: <FaGlobe size={48} color="#43AA8B" />,
    title: "Global Reach",
    desc: "Expanding opportunities and connections worldwide.",
  },
];

const PartnerSectionS2 = (props) => {
  return (
    <section
      className={`partners-section section-padding ${props.tNone || ""}`}
      style={{ background: "#f8fafc" }}
    >
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 style={{ fontWeight: 700, color: "#222" }}>Our Partnership Values</h2>
            <p
              style={{ color: "#666", maxWidth: 600, margin: "0 auto" }}
            >
              We believe in strong, value-driven partnerships that foster
              innovation, growth, and community. Here are the principles that
              guide our collaborations:
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {partnershipValues.map((item, idx) => (
            <div key={idx} className="col-md-2 col-6 mb-4 d-flex align-items-stretch">
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  padding: 24,
                  width: "100%",
                  textAlign: "center",
                  transition: "box-shadow 0.2s",
                  minHeight: 220,
                }}
              >
                <div className="mb-3">{item.icon}</div>
                <h5 style={{ fontWeight: 600, color: "#333" }}>{item.title}</h5>
                <p style={{ color: "#888", fontSize: 15 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSectionS2;