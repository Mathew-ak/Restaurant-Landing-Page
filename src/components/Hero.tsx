import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary mb-6 tracking-tight">
          Lumière
        </h1>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-foreground-muted mb-12 font-inter font-light leading-relaxed max-w-2xl mx-auto">
          Where culinary artistry meets timeless elegance
        </p>
        <Button 
          variant="hero" 
          size="hero"
          className="animate-pulse hover:animate-none"
        >
          Reserve a Table
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;