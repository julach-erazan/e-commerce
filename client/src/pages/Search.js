import React, { useEffect, useState } from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";

const Search = () => {
  const [message, setMessage] = useState();
  const [products, setProducts] = useState([]);

  var queryString = window.location.search;
  var queryParams = new URLSearchParams(queryString);
  var key = queryParams.get("key");

  const searchProducts = () => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing/`)
      .then((res) => res.json())
      .then((json) => {
        // Check if key is present
        if (key) {
          // Filter products based on the key
          const filteredProducts = json.filter((product) =>
            product.title.toLowerCase().includes(key.toLowerCase())
          );
          setProducts(filteredProducts);
          if (filteredProducts[0]) {
            setMessage("Search Results");
          } else {
            setMessage("No Search Results Found");
          }
        } else {
          setMessage("No Search Results Found");
        }
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center pt-[100px]">
      <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
        {message}
      </h1>
      <ul className="w-full min-h-[200px] flex justify-evenly items-center flex-wrap p-[20px]">
        {products.map((data) => (
          <li key={data.id}>
            <a href={`/product?id=${data.id}`}>
              <div className="w-[350px] h-[450px] flex flex-col justify-center items-center border-[5px] border-solid border-[#cacafa] hover:border-[5px] hover:border-solid hover:border-[#2F3C7E] m-[25px]">
                <img
                  src={data.image}
                  alt="produccts"
                  className="w-[330px] h-[330px]"
                />
                <div className="w-full h-[90px] flex justify-between items-center p-[10px]">
                  <h1 className="w-[70%] h-full text-[#2F3C7E] flex justify-center items-center">
                    {data.title}
                  </h1>
                  <h1 className="w-[20%] h-full text-[#E4552D] font-bold flex justify-center items-center">
                    ${data.price}
                  </h1>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Search;
