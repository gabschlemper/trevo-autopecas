import Image from "next/image";
import Header from "./components/Header";
import AboutUs from "./components/homepage/AboutUs";
import { Differential } from "./components/homepage/Differential";
import { Feedback } from "./components/homepage/Feedback";
import Services from "./components/homepage/Services";
import Slider from "./components/homepage/Slider";

export default function Home() {
  return (
    <main className="overflow-scroll h-screen w-screen">
      <Header />
      <Slider />
      <Services />
      <AboutUs />
      <Feedback />
      <Differential />
    </main>
  );
}
