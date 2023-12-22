import About from "@/LandingPage/About/About";
import Category from "@/LandingPage/Category/Category";
import Header from "@/LandingPage/Header/Header";
import Hero from "@/LandingPage/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <About />
    </div>
  );
}
