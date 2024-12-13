import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NewsLetter from "./components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Feature /> 
      <NewsLetter />
      <Footer  />
    </div>
  );
}
