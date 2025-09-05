import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  ArrowLeft, 
  Shield, 
  Star, 
  Check,
  Camera,
  Eye,
  Wifi,
  HardDrive,
  Monitor
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-security-dark mb-4">Produk tidak ditemukan</h1>
          <Link to="/products">
            <Button>Kembali ke Produk</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890";
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Beranda</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Produk</Link>
            <span>/</span>
            <span className="text-security-dark">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full rounded-lg shadow-card"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {product.category}
                </Badge>
                {product.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-destructive text-white">
                    Sale
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-security-dark mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(4.9) • 127 ulasan</span>
                </div>

                <div className="space-y-2 mb-6">
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <div className="text-4xl font-bold text-primary">
                    {product.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    *Harga sudah termasuk instalasi dan konfigurasi
                  </p>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-security-dark mb-3">
                    Fitur Unggulan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-success-green" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-success-green hover:bg-success-green/90 text-white"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Beli via WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Shield className="h-5 w-5 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>Garansi 2 Tahun</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="h-4 w-4" />
                    <span>Instalasi Gratis</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-security-dark mb-8">Spesifikasi Teknis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Resolusi</h3>
                  <p className="text-sm text-muted-foreground">{product.specs.resolution}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Sudut Pandang</h3>
                  <p className="text-sm text-muted-foreground">{product.specs.viewing_angle}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Night Vision</h3>
                  <p className="text-sm text-muted-foreground">{product.specs.night_vision}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <HardDrive className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Penyimpanan</h3>
                  <p className="text-sm text-muted-foreground">{product.specs.storage}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Konektivitas</h3>
                  <p className="text-sm text-muted-foreground">{product.specs.connectivity}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link to="/products">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Produk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;