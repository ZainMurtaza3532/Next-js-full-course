"use client";

import { useState } from "react";

const ProductPage = () => {

  const product = {
    name: "Nike Pegasus 41 shoes",
    category: "Sports",
    price: 189,
    offerPrice: 159,
    rating: 4,
    images: [
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png"
    ],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes"
    ]
  };

  const [thumbnail, setThumbnail] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-10">

      <div className="max-w-6xl w-full px-6">

        {/* Breadcrumb */}
        <p>
          <span>Home</span> /
          <span> Products</span> /
          <span className="text-indigo-500"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">

          {/* Images */}
          <div className="flex gap-3">

            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Product Info */}
          <div className="text-sm w-full md:w-1/2">

            <h1 className="text-3xl font-medium">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
              {Array(5).fill("").map((_, i) =>
                product.rating > i ? "⭐" : "☆"
              )}
              <p className="ml-2">({product.rating})</p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: ${product.price}
              </p>
              <p className="text-2xl font-medium">
                ${product.offerPrice}
              </p>
              <span className="text-gray-500/70">
                (inclusive of all taxes)
              </span>
            </div>

            {/* Description */}
            <p className="text-base font-medium mt-6">
              About Product
            </p>

            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex items-center mt-10 gap-4">
              <button className="w-full py-3.5 bg-gray-100 hover:bg-gray-200">
                Add to Cart
              </button>

              <button className="w-full py-3.5 bg-indigo-500 text-white hover:bg-indigo-600">
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;