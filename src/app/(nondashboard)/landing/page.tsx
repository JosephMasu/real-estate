import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from './FeatureSection';
import DiscoverSection from './DiscoverSection';
import CallToActionSection from './CallToActionSection';
import FooterSection from './FooterSection';

export default function Page() {
  console.log("Landing page rendered");
  return <div>
    <HeroSection/>
    <FeaturesSection/>
    <DiscoverSection/>
    <CallToActionSection/>
    <FooterSection />
  </div>;
  
}
