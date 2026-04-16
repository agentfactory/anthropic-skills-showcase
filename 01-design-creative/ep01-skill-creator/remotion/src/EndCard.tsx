import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "./brand";

type Props = { nextEpTitle: string };

export const EndCard: React.FC<Props> = ({ nextEpTitle }) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const nextSlide = interpolate(frame, [60, 90], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const nextOpacity = interpolate(frame, [60, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.dark, opacity: fadeIn }}>
      <AbsoluteFill style={{ padding: 120, flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: FONTS.heading, fontSize: 56, color: COLORS.light, fontWeight: 600 }}>
            Thanks for watching
          </div>
          <div style={{ height: 4, width: 200, backgroundColor: COLORS.orange, marginTop: 16, borderRadius: 2 }} />
        </div>

        <div style={{ display: "flex", gap: 48 }}>
          <div
            style={{
              flex: 1,
              padding: 48,
              backgroundColor: COLORS.orange,
              borderRadius: 24,
              color: COLORS.light,
              fontFamily: FONTS.heading,
            }}
          >
            <div style={{ fontSize: 28, opacity: 0.85 }}>Subscribe</div>
            <div style={{ fontSize: 52, fontWeight: 700, marginTop: 8 }}>95 skills, one per episode</div>
          </div>
          <div
            style={{
              flex: 1,
              padding: 48,
              backgroundColor: COLORS.lightGray,
              borderRadius: 24,
              color: COLORS.dark,
              fontFamily: FONTS.heading,
              transform: `translateY(${nextSlide}px)`,
              opacity: nextOpacity,
            }}
          >
            <div style={{ fontSize: 28, color: COLORS.orange }}>Next up</div>
            <div style={{ fontSize: 52, fontWeight: 700, marginTop: 8 }}>{nextEpTitle}</div>
          </div>
        </div>

        <div style={{ fontFamily: FONTS.body, fontSize: 28, color: COLORS.midGray }}>
          github.com/agentfactory/anthropic-skills-showcase
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
