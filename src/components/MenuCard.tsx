interface MenuCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const MenuCard = ({ image, title, price, description }: MenuCardProps) => {
  return (
    <div className="group bg-card hover:bg-card-hover rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <span className="text-2xl font-playfair font-bold text-primary">
            {price}
          </span>
        </div>
        <p className="text-foreground-muted font-inter leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;