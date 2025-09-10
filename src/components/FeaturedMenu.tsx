import MenuCard from "./MenuCard";

const FeaturedMenu = () => {
  const menuItems = [
    {
      image: "https://images.unsplash.com/photo-1733700469173-15d46efc2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYmVlZiUyMHN0ZWFrJTIwcGxhdGVkfGVufDF8fHx8MTc1NzQ3NjU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Wagyu Beef Tenderloin",
      price: "$68",
      description: "Pan-seared with truffle jus and seasonal vegetables"
    },
    {
      image: "https://images.unsplash.com/photo-1729707691140-d0a5a1d2bb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwZmluZSUyMGRpbmluZyUyMGxvYnN0ZXJ8ZW58MXx8fHwxNzU3NDc2NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Maine Lobster Thermidor",
      price: "$52",
      description: "Classic preparation with cognac and gruyère"
    },
    {
      image: "https://images.unsplash.com/photo-1624968814155-236efede1cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNvdHRvJTIwbXVzaHJvb20lMjBmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc1NzQ3NjU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Truffle Risotto",
      price: "$38",
      description: "Arborio rice with black truffle and parmesan"
    },
    {
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWNrJTIwYnJlYXN0JTIwcGxhdGVkJTIwZ291cm1ldHxlbnwxfHx8fDE3NTc0NzY1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Duck Confit",
      price: "$44",
      description: "Five-spice cured duck leg with cherry gastrique"
    },
    {
      image: "https://images.unsplash.com/photo-1607205829692-44382aa7c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaWxsZXQlMjBlbGVnYW50JTIwcGxhdGluZ3xlbnwxfHx8fDE3NTc0NzY1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Atlantic Salmon",
      price: "$42",
      description: "Cedar plank roasted with dill beurre blanc"
    },
    {
      image: "https://images.unsplash.com/photo-1617455559706-fa196228c05d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwZWxlZ2FudCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU3NDc2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Chocolate Soufflé",
      price: "$18",
      description: "Valrhona dark chocolate with vanilla bean crème"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Featured Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto font-inter">
            Discover our carefully curated selection of signature dishes, each crafted with the finest ingredients and artistic presentation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;