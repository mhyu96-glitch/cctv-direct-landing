import { Button } from "@/components/ui/button";
import { Shield, Camera, Eye, Lock } from "lucide-react";
import heroImage from "@/assets/hero-cctv.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="CCTV Security System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-security-dark/80 to-security-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Shield className="h-5 w-5 text-tech-accent" />
            <span className="text-white font-medium">#1 Sistem Keamanan Terpercaya</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Lindungi Bisnis Anda dengan
            <span className="bg-gradient-to-r from-tech-accent to-primary bg-clip-text text-transparent"> CCTV Terdepan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Sistem pengawasan 24/7 dengan teknologi AI terbaru. Pantau, rekam, dan amankan properti Anda dari mana saja.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
              <Camera className="h-6 w-6 text-tech-accent" />
              <span className="text-white font-medium">4K Ultra HD</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
              <Eye className="h-6 w-6 text-tech-accent" />
              <span className="text-white font-medium">Night Vision</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-4">
              <Lock className="h-6 w-6 text-tech-accent" />
              <span className="text-white font-medium">Cloud Storage</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-tech-accent hover:shadow-hero text-lg px-8 py-6"
            >
              Dapatkan Penawaran Gratis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-security-dark text-lg px-8 py-6"
            >
              Lihat Produk
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-white/70">
            <p className="mb-4">Dipercaya oleh 500+ perusahaan di Indonesia</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-sm">⭐ 4.9/5 Rating</span>
              <span className="text-sm">🛡️ Garansi 2 Tahun</span>
              <span className="text-sm">📞 Support 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;