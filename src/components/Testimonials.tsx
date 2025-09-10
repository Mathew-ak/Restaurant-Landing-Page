import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lumière sets the gold standard for fine dining. Each dish is a masterpiece that tells a story through flavor and presentation. An absolutely unforgettable experience.",
      author: "Sarah Mitchell",
      role: "Food Critic, Culinary Quarterly"
    },
    {
      quote: "The attention to detail is extraordinary. From the moment you walk in until the last bite, every element is crafted to perfection. Worth every star.",
      author: "James Richardson",
      role: "Travel & Lifestyle Blogger"
    },
    {
      quote: "As a fellow chef, I'm consistently impressed by the innovation and technique. Lumière continues to push culinary boundaries while respecting classic traditions.",
      author: "Maria Gonzalez",
      role: "Executive Chef, Four Seasons"
    },
    {
      quote: "The wine pairing program is exceptional. Each selection perfectly complements the dishes, creating harmonious flavor combinations that elevate the entire dining experience.",
      author: "David Chen",
      role: "Wine Connoisseur"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto font-inter">
            Don't just take our word for it. Here's what culinary experts and food enthusiasts have to say about their experience at Lumière.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <blockquote className="text-lg text-foreground-muted italic font-inter leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-playfair font-semibold text-foreground text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-foreground-muted font-inter text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl text-foreground-muted mb-8 font-inter">
            Ready to create your own memorable dining experience?
          </p>
          <Button variant="hero" size="hero">
            Experience Excellence
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;