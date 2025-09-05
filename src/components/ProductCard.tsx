import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Eye, Star } from "lucide-react";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:scale-105 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            {product.category}
          </Badge>
          {product.originalPrice && (
            <Badge className="absolute top-3 right-3 bg-destructive text-white">
              Sale
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-security-dark mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(4.9)</span>
        </div>

        <div className="space-y-1 mb-3">
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
          <div className="text-2xl font-bold text-primary">
            {product.price}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="text-sm text-muted-foreground flex items-center">
              <div className="w-1.5 h-1.5 bg-success-green rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="flex space-x-2 w-full">
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              Detail
            </Button>
          </Link>
          <Button 
            onClick={handleWhatsAppClick}
            className="flex-1 bg-success-green hover:bg-success-green/90 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Beli
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;