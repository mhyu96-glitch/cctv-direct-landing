import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { Shield, Award, Headphones, Truck } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary to-tech-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Katalog Produk CCTV
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Jelajahi koleksi lengkap sistem keamanan CCTV dengan teknologi terdepan
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-security-dark mb-2">Garansi Resmi</h3>
              <p className="text-sm text-muted-foreground">2 tahun garansi penuh</p>
            </div>
            <div className="text-center">
              <div className="bg-success-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-success-green" />
              </div>
              <h3 className="font-semibold text-security-dark mb-2">Kualitas Premium</h3>
              <p className="text-sm text-muted-foreground">Produk berkualitas tinggi</p>
            </div>
            <div className="text-center">
              <div className="bg-tech-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-tech-accent" />
              </div>
              <h3 className="font-semibold text-security-dark mb-2">Support 24/7</h3>
              <p className="text-sm text-muted-foreground">Bantuan teknis setiap saat</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-security-dark mb-2">Instalasi Gratis</h3>
              <p className="text-sm text-muted-foreground">Tim profesional berpengalaman</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      {/* Contact CTA */}
      <section className="py-16 bg-security-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Meningkatkan Keamanan Anda?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Dapatkan konsultasi gratis dan penawaran terbaik untuk sistem CCTV impian Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const phone = "6281234567890";
                const message = encodeURIComponent("Halo, saya tertarik untuk konsultasi sistem CCTV. Bisakah Anda membantu saya?");
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              }}
              className="bg-success-green hover:bg-success-green/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              WhatsApp Konsultasi
            </button>
            <a 
              href="tel:+6281234567890"
              className="bg-white text-security-dark px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Telepon Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;