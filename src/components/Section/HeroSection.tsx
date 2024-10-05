import React from "react";

interface HeroSectionProps {
  children: React.ReactNode;
}

function HeroSection({ children }: HeroSectionProps) {
  return <>{children}</>;
}

export default HeroSection;
