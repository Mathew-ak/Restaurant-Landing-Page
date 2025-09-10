const OurStory = () => {
  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground-muted leading-relaxed font-inter">
              Founded in 1987, Lumière has been at the forefront of culinary innovation, blending traditional French techniques with contemporary artistry. Our passion for exceptional cuisine has earned us recognition among the world's finest dining establishments.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed font-inter">
              Each dish is crafted with meticulous attention to detail, using only the finest seasonal ingredients sourced from local artisans and trusted suppliers. We believe that dining is not just about nourishment, but about creating memories that last a lifetime.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed font-inter">
              Under the guidance of our acclaimed chef, we continue to push boundaries while honoring the classical traditions that form the foundation of our culinary philosophy.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1743793055775-3c07ab847ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NTc0NzY1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Restaurant interior"
              className="rounded-2xl shadow-elegant w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;