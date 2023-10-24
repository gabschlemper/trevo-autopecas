"use client";
import Header from "./components/Header";
import OurMission from "./components/homepage/OurMission";
import { Differential } from "./components/homepage/Differential";
import { Feedback } from "./components/homepage/Feedback";
import Services from "./components/homepage/Services";
import Hero from "./components/homepage/Hero";
import { Brands } from "./components/homepage/Brands";
import AboutUs from "./components/homepage/AboutUs";
import { Location } from "./components/homepage/Location";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Contact from "./components/homepage/Contact";

export default function Home() {
  return (
    <main className="overflow-scroll h-screen w-screen scroll-smooth">
      <Header />
      {/* <Slider /> */}
      <Hero />
      <Modal />
      <AboutUs />
      <Differential />
      <OurMission />
      <Services />
      <Brands />
      <Feedback />
      {/* <OurTeam /> */}
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
