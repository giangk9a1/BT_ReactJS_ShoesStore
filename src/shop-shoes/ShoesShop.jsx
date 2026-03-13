import { useState } from "react";
import productsData from "../data/data.json";
import ProductList from "./ProductList.jsx";
import ProductModal from "./ProductModal.jsx";

export default function ShoesShop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  // Đóng modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow mb-6">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
            Shoes Shop
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-10">
        <ProductList
          productsData={productsData}
          setStateModal={handleOpenModal}
        />
      </main>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal content={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

