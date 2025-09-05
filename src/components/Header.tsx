import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-security-dark">SecureVision</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-security-dark hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link to="/products" className="text-security-dark hover:text-primary transition-colors">
              Produk
            </Link>
            <a href="#tentang" className="text-security-dark hover:text-primary transition-colors">
              Tentang
            </a>
            <a href="#kontak" className="text-security-dark hover:text-primary transition-colors">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-gradient-to-r from-primary to-tech-accent hover:shadow-lg">
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-security-dark hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/products" className="text-security-dark hover:text-primary transition-colors">
                Produk
              </Link>
              <a href="#tentang" className="text-security-dark hover:text-primary transition-colors">
                Tentang
              </a>
              <a href="#kontak" className="text-security-dark hover:text-primary transition-colors">
                Kontak
              </a>
              <Button variant="default" className="bg-gradient-to-r from-primary to-tech-accent w-full">
                Konsultasi Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;