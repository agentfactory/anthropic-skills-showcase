import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "./brand";

type Props = { skillName: string; speaker: string };

export const LowerThird: React.FC<Props> = ({ skillName, speaker }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const slideIn = interpolate(frame, [0, 15], [-600, 0], { extrapolateRight: "clamp" });
  const slideOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [0, -600], { extrapolateLeft: "clamp" });
  const translateX = frame < durationInFrames - 15 ? slideIn : slideOut;

  const rightSlide = interpolate(frame, [6, 21], [600, 0], { extrapolateRight: "clamp" });
  const rightOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [0, 600], { extrapolateLeft: "clamp" });
  const rightX = frame < durationInFrames - 15 ? rightSlide : rightOut;

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 80,
          transform: `translateX(${translateX}px)`,
          backgroundColor: COLORS.dark,
          color: COLORS.light,
          padding: "20px 40px",
          fontFamily: FONTS.heading,
          fontSize: 42,
          fontWeight: 600,
          borderRadius: 8,
        }}
      >
        {speaker}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 120,
          right: 80,
          transform: `translateX(${rightX}px)`,
          backgroundColor: COLORS.orange,
          color: COLORS.light,
          padding: "20px 40px",
          fontFamily: FONTS.heading,
          fontSize: 42,
          fontWeight: 600,
          borderRadius: 8,
        }}
      >
        {skillName}
      </div>
    </AbsoluteFill>
  );
};
