import About from "@/components/About";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Video />
      <Brands />
      <About />
      <Testimonials />
    </>
  );
}
