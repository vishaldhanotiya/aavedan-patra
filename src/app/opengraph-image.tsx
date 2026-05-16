import { ImageResponse } from "next/og";

export const alt = "Aavedan Patra – Hindi application letter templates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #4c1d95 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Aavedan Patra
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          हिंदी आवेदन पत्र, नमूने और प्रारूप
        </div>
      </div>
    ),
    { ...size },
  );
}
