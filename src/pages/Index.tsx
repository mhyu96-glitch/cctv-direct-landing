import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { Shield, Users, Award, Headphones } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="tentang" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Mengapa Memilih Borneo Etam CCTV?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kami adalah penyedia sistem keamanan CCTV terpercaya dengan pengalaman lebih dari 10 tahun melayani berbagai industri di Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Teknologi Terdepan</h3>
              <p className="text-muted-foreground">Menggunakan teknologi AI dan 4K terbaru untuk keamanan maksimal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-success-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-success-green" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Tim Profesional</h3>
              <p className="text-muted-foreground">Teknisi bersertifikat dengan pengalaman instalasi ribuan projek</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-tech-accent" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Garansi Terpercaya</h3>
              <p className="text-muted-foreground">Garansi resmi 2 tahun dengan layanan purna jual terbaik</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Support 24/7</h3>
              <p className="text-muted-foreground">Tim support siaga 24 jam untuk membantu kebutuhan Anda</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-security-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hubungi Kami Sekarang
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Dapatkan konsultasi gratis dan penawaran terbaik untuk sistem CCTV Anda
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-white/80">+62 812-3456-7890</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/80">info@borneo-etam-cctv.co.id</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
                <h3 className="font-semibold mb-2">Alamat</h3>
                <p className="text-white/80">Jakarta, Indonesia</p>
              </div>
            </div>

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
        </div>
      </section>
    </div>
  );
};

export default Index;
