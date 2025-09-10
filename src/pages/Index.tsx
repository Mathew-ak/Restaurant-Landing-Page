import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import FeaturedMenu from "@/components/FeaturedMenu";
import ChefSpecial from "@/components/ChefSpecial";
import ReservationForm from "@/components/ReservationForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <FeaturedMenu />
      <ChefSpecial />
      <ReservationForm />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
