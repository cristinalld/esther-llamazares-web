import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import About from "@/components/home/About";
import Results from "@/components/home/Results";
import LatestNews from "@/components/home/LatestNews";
import SocialBanner from "@/components/layout/SocialBanner";
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <About />
      <Results />
      <LatestNews />
      <SocialBanner />
    </>
  );
}
