


const NewProductForm = () => {
  return (
    <div className="flex flex-col justify-between bg-white">
      <form className="py-4 pr-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <label htmlFor="input">
              <input accept="image/*" type="file" id="input" hidden />
              <img
                className="max-w-24 cursor-pointer"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                alt="uploadArea"
                width={100}
                height={100}
              />
            </label>
          </div>
        </div>
        <div className="min-w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="product-price">
              Rating
            </label>
            <input
              id="product-rating"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="">Select Category</option>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
          </select>
        </div>
        <div className="flex flex-row items-end gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price ($ USD)
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>

          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Best selling
            </label>
            <select
            id="best"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              In stock
            </label>
            <select
            id="best"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          
        </div>
        <button className="w-full px-8 py-2.5 bg-(--primary) text-white font-medium rounded">
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
}

export default NewProductForm