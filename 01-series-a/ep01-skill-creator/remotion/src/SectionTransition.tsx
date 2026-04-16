import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "./brand";

// 0.5s orange line wipe — grows left→right to full width, then fades.
export const SectionTransition: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();

  const grow = interpolate(frame, [0, durationInFrames * 0.5], [0, width], {
    extrapolateRight: "clamp",
  });
  const fade = interpolate(frame, [durationInFrames * 0.7, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <div
        style={{
          position: "absolute",
          top: height / 2 - 4,
          left: 0,
          width: grow,
          height: 8,
          backgroundColor: COLORS.orange,
          opacity: fade,
          borderRadius: 4,
        }}
      />
    </AbsoluteFill>
  );
};
