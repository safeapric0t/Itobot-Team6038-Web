import AboutSection from "./sections/AboutSection";
import HeroIntro from "./sections/HeroIntro";
import Hero3DRobot from "./sections/Hero3DRobot";

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip">
      <HeroIntro />
      <Hero3DRobot />
      <AboutSection />
    </div>
  );
}
