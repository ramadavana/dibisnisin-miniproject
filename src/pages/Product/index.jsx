import Layout from "../../components/Layout";
import BreadcrumbsDefault from "../../components/Breadcrumb";
import { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Product 1",
    price: 1000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (1).jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (2).jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (3).jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 4000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (4).jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 5000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (5).jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 6000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (1).jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: 7000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (2).jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: 8000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (3).jpg",
  },
  {
    id: 9,
    name: "Product 9",
    price: 9000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (4).jpg",
  },
  {
    id: 10,
    name: "Product 10",
    price: 10000000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat enim eget neque malesuada pharetra.",
    image: "/images/pictures/carousel (5).jpg",
  },
];

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Set the number of items per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Calculate the index of the first and last product on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  // Get the products for the current page
  const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      currencyDisplay: "symbol",
      minimumFractionDigits: 0, // No decimal places for whole numbers
    }).format(price);
  };

  return (
    <Layout>
      <section className="bg-[#222831] rounded-xl container mx-auto px-4 py-2 lg:px-8 lg:py-4 flex gap-4 flex-col">
        <BreadcrumbsDefault />

        <div className="container grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:px-8 lg:gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="container mx-auto flex flex-col justify-between gap-4 lg:gap-8 p-8 lg:p-12 border-2 bg-[#393E46] border-transparent rounded-lg w-full h-full">
              <div className="flex flex-row items-center gap-4 lg:gap-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-24 h-24 rounded-lg lg:w-48 lg:h-48"
                />
                <div>
                  <p className="text-xl font-bold tracking-wide text-[#f96d00] lg:text-2xl">
                    {product.name}
                  </p>
                  <p className="text-sm italic lg:text-base">{formatPrice(product.price)}</p>
                </div>
              </div>
              <p className="p-2 rounded-md bg-[#222831] border-[#f2f2f2] border-2">
                {product.description}
              </p>

              <button className="bg-[#f2f2f2] text-[#393E46] px-4 py-2 rounded-lg hover:bg-[#f96d00] hover:text-[#f2f2f2] font-bold transition-all duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-4">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`${
                currentPage === pageNumber
                  ? "bg-[#393E46] text-[#f2f2f2]"
                  : "bg-[#f2f2f2] text-[#393E46]"
              } px-4 py-2 rounded-lg`}>
              {pageNumber}
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
}
