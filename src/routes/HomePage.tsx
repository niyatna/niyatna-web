import { FeatureSection } from '../components/sections/FeatureSection';
import { Hero } from '../components/sections/Hero';
import { MoreFeaturesSection } from '../components/sections/MoreFeaturesSection';

export function HomePage() {
  return (
    <main id="main-content" className="w-full max-w-full overflow-x-hidden">
      <Hero />
      <FeatureSection />
      <MoreFeaturesSection />
    </main>
  );
}
