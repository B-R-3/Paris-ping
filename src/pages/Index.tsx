import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Venue from "@/components/Venue";
import Pricing from "@/components/Pricing";
import Map from "@/components/Map";
import FAQChat from "@/components/FAQChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Venue />
      <Pricing />
      <Map />
      <FAQChat />
      <Footer />
    </div>
  );
};

export default Index;
