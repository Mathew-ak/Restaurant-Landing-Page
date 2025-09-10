import { Button } from "@/components/ui/button";

const ChefSpecial = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1692758344348-dd94f4db1848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc1NzM5MDg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Chef preparing signature dish"
              className="rounded-2xl shadow-elegant w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
            <div className="absolute top-6 left-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-inter font-medium">
              Chef's Special
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Pan-Seared Foie Gras
              </h2>
              <div className="w-16 h-1 bg-gradient-primary mb-6"></div>
            </div>
            
            <blockquote className="text-xl text-foreground-muted italic font-inter leading-relaxed border-l-4 border-primary pl-6">
              "A symphony of flavors that celebrates the essence of French culinary tradition."
            </blockquote>
            
            <p className="text-lg text-foreground-muted leading-relaxed font-inter">
              Our signature foie gras is sourced from the finest French producers and prepared with meticulous care. Pan-seared to perfection, it's served alongside a delicate fig compote, toasted brioche, and a reduction of aged port wine.
            </p>
            
            <p className="text-lg text-foreground-muted leading-relaxed font-inter">
              Each element is carefully balanced to complement the rich, buttery texture of the foie gras, creating an unforgettable dining experience that has become our most requested dish.
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-inter text-foreground-muted">Price</span>
                <span className="text-3xl font-playfair font-bold text-primary">$85</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-inter text-foreground-muted">Chef</span>
                <span className="font-inter font-medium text-foreground">Antoine Dubois</span>
              </div>
            </div>
            
            <Button variant="elegant" size="lg" className="mt-8">
              Reserve for This Dish
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpecial;