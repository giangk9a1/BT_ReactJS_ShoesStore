export default function ProductModal(props) {
    const { content, onClose } = props;
    if (!content) return null;

    return (
        <div
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/40"
            aria-hidden="false"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6 bg-white">
                    <div className="flex items-center justify-between border-b border-default pb-3">
                        <h3 className="text-xl font-bold text-heading text-success">
                            Chi tiết sản phẩm: {content.name}
                        </h3>
                        <button
                            type="button"
                            className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                            onClick={onClose}
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                />
                            </svg>
                            <span className="sr-only">Đóng</span>
                        </button>
                    </div>
                    <div className="space-y-4 md:space-y-6 py-4 md:py-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/2 space-y-4">
                                <div className="rounded-base flex items-center justify-center p-4">
                                    <img
                                        src={content.image}
                                        alt={content.name}
                                        className="max-h-64 object-contain"
                                    />
                                </div>
                            </div>

                            <div className="md:w-1/2 space-y-4 text-justify">
                                <div>
                                    <h4 className="text-base font-semibold text-heading mb-1">
                                        {content.name}
                                    </h4>
                                    <p className="leading-relaxed text-body whitespace-pre-line">
                                        {content.description}
                                    </p>
                                </div>
                                <p className="text-2xl font-bold text-black-500">
                                    Giá:
                                    <span className="text-success ml-2">
                                        ${content.price.toFixed ? content.price.toFixed(2) : content.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5 justify-end">
                        <button
                            type="button"
                            className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                            onClick={onClose}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

