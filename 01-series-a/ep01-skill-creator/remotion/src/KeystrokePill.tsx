import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "./brand";

type Props = { keys: string };

export const KeystrokePill: React.FC<Props> = ({ keys }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const pop = interpolate(frame, [0, 6], [0.6, 1], { extrapolateRight: "clamp" });
  const fadeIn = interpolate(frame, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 6, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          padding: "16px 32px",
          backgroundColor: COLORS.dark,
          color: COLORS.light,
          fontFamily: FONTS.heading,
          fontSize: 36,
          fontWeight: 600,
          borderRadius: 999,
          border: `2px solid ${COLORS.orange}`,
          transform: `scale(${pop})`,
          opacity,
        }}
      >
        {keys}
      </div>
    </AbsoluteFill>
  );
};
