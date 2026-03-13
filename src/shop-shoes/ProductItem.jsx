export default function ProductItem(props) {
  const { item, setStateModal } = props;

  const handleViewDetail = () => {
    setStateModal(item);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="bg-slate-50 rounded-t-lg flex justify-center items-center p-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 object-contain"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-base font-semibold text-slate-900 line-clamp-1 mb-1 cursor-pointer hover:text-success" 
          onClick={handleViewDetail}>
          {item.name}
        </h3>
        <p className="text-lg font-bold text-emerald-600 mb-4">${item.price}</p>
        <button
          type="button"
          onClick={handleViewDetail}
          className="mt-auto inline-flex justify-center items-center cursor-pointer px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}

