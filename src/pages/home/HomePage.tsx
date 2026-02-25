import HeroIntro from "./sections/HeroIntro";
import Hero3DRobot from "./sections/Hero3DRobot";

export default function HomePage() {
  return (
    <div className="bg-black text-white pt-24">
      <HeroIntro />
      <Hero3DRobot />
    </div>
  );
}