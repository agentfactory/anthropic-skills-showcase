import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "./brand";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const logoScale = spring({ frame, fps, from: 0.6, to: 1, config: { damping: 14 } });
  const logoOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  const underlineWidth = interpolate(frame, [18, 36], [0, 600], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const subOpacity = interpolate(frame, [24, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Fade out final 8 frames
  const exit = interpolate(frame, [durationInFrames - 8, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.dark, opacity: exit }}>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 700,
            fontSize: 128,
            color: COLORS.light,
            letterSpacing: -2,
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          Anthropic Skills
        </div>
        <div
          style={{
            height: 6,
            width: underlineWidth,
            backgroundColor: COLORS.orange,
            marginTop: 24,
            borderRadius: 3,
          }}
        />
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 36,
            color: COLORS.midGray,
            marginTop: 28,
            opacity: subOpacity,
            letterSpacing: 4,
          }}
        >
          SHOWCASE
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
