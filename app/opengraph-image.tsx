import { ImageResponse } from "next/og";

export const alt = "Khin Myat Thu — aspiring full-stack developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#0e0f0e", color: "#f2f3ef", fontFamily: "Arial, sans-serif", padding: "78px 86px" }}>
      <div style={{ position: "absolute", width: 560, height: 560, borderRadius: 999, right: -150, top: -230, background: "#42803d", opacity: 0.28 }} />
      <div style={{ position: "absolute", width: 420, height: 420, borderRadius: 999, left: -210, bottom: -260, background: "#8fa944", opacity: 0.2 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#a6cf78", fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
          Portfolio <span style={{ width: 88, height: 2, background: "#a6cf78" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>Khin Myat Thu</div>
          <div style={{ maxWidth: 880, color: "#c6c9c2", fontSize: 34, lineHeight: 1.25 }}>
            Final-year Computer Science student and aspiring full-stack developer
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, color: "#b0b3ad", fontSize: 23 }}>
          <span>Web development</span><span>•</span><span>Mobile development</span><span>•</span><span>AI-powered products</span>
        </div>
      </div>
    </div>,
    size,
  );
}
