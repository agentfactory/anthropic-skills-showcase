import { Composition, registerRoot } from "remotion";
import { FPS, WIDTH, HEIGHT } from "./brand";
import { Intro } from "./Intro";
import { EndCard } from "./EndCard";
import { LowerThird } from "./LowerThird";
import { SectionTransition } from "./SectionTransition";
import { KeystrokePill } from "./KeystrokePill";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="Intro"
      component={Intro}
      durationInFrames={FPS * 5}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="EndCard"
      component={EndCard}
      durationInFrames={FPS * 10}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{ nextEpTitle: "Episode 02 — pdf" }}
    />
    <Composition
      id="LowerThird"
      component={LowerThird}
      durationInFrames={FPS * 4}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{ skillName: "skill-creator", speaker: "Denis" }}
    />
    <Composition
      id="SectionTransition"
      component={SectionTransition}
      durationInFrames={Math.round(FPS * 0.5)}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
    <Composition
      id="KeystrokePill"
      component={KeystrokePill}
      durationInFrames={FPS * 1}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{ keys: "⌘+K" }}
    />
  </>
);

registerRoot(RemotionRoot);
