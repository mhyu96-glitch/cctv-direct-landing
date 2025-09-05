import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-security-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
            Produk CCTV Terlengkap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih sistem keamanan yang tepat untuk kebutuhan Anda. Semua produk dilengkapi garansi resmi dan instalasi profesional.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-security-dark mb-4">
              Butuh Konsultasi Khusus?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tim ahli kami siap membantu Anda memilih sistem CCTV yang tepat sesuai kebutuhan dan budget.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-tech-accent">
              Hubungi Konsultan Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;