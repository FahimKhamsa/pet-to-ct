import React from "react";
import Hero from "../components/sections/Hero";
import Overview from "../components/sections/Overview";
import MethodologySection from "../components/sections/Methodology";
import Results from "../components/sections/Results";
import Gallery from "../components/sections/Gallery";
import FutureWork from "../components/sections/FutureWork";
import EthicalConsiderations from "../components/sections/EthicalConsiderations";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <MethodologySection />
      <Results />
      <Gallery limit={3} />
      <EthicalConsiderations />
      <FutureWork />
    </div>
  );
};

export default Home;
