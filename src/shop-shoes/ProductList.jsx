import ProductItem from "./ProductItem.jsx";

export default function ProductList(props) {
  const { productsData, setStateModal } = props;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {productsData.map((product) => (
        <ProductItem
          key={product.id}
          item={product}
          setStateModal={setStateModal}
        />
      ))}
    </div>
  );
}

