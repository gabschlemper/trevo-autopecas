import Image from "next/image";
import Header from "./components/Header";
import OurMission from "./components/homepage/OurMission";
import { Differential } from "./components/homepage/Differential";
import { Feedback } from "./components/homepage/Feedback";
import Services from "./components/homepage/Services";
import Slider from "./components/homepage/Slider";
import Hero from "./components/homepage/Hero";
import { Brands } from "./components/homepage/Brands";
import AboutUs from "./components/homepage/AboutUs";
import { Location } from "./components/homepage/Location";
import { OurTeam } from "./components/homepage/OurTeam";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-scroll h-screen w-screen">
      <Header />
      {/* <Slider /> */}
      <Hero />
      <AboutUs />
      <Differential />
      <Services />
      <Brands />
      <OurMission />
      <Feedback />
      {/* <OurTeam /> */}
      <Location />
      <Footer />
    </main>
  );
}
