import React, { useEffect, useState } from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState("1");

  var queryString = window.location.search;
  var queryParams = new URLSearchParams(queryString);
  var _id = queryParams.get("id");
  var j_id = queryParams.get("j_id");

  const currencySymbol = sessionStorage.getItem("currencySymbol");

  const getProducts = async () => {
    if (j_id) {
      await fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((json) => {
          const filteredProducts = json.filter((product) => product.id == j_id);
          setProducts(filteredProducts);
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    } else {
      await fetch(
        `https://fakestoreapi.com/products/category/women's clothing/`
      )
        .then((res) => res.json())
        .then((json) => {
          const filteredProducts = json.filter((product) => product.id == _id);
          setProducts(filteredProducts);
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    }
  };

  useEffect(() => {
    getProducts();
  });

  const addCart = (id, image, title, price) => {
    if (sessionStorage.getItem("cart")) {
      const oldCart = JSON.parse(sessionStorage.getItem("cart"));

      const existingItemIndex = oldCart.findIndex((item) => item.id == id);

      if (existingItemIndex !== -1) {
        oldCart[existingItemIndex].image = image;
        oldCart[existingItemIndex].title = title;
        oldCart[existingItemIndex].price = price;
        oldCart[existingItemIndex].count = count;

        alert("Updated product successfully added to your shopping cart");
      } else {
        const newItem = {
          id: id,
          image: image,
          title: title,
          price: price,
          count: count,
        };
        oldCart.push(newItem);
        alert("Product successfully added to your shopping cart");
      }

      const updatedCart = JSON.stringify(oldCart);
      sessionStorage.setItem("cart", updatedCart);
    } else {
      const cart = [
        { id: id, image: image, title: title, price: price, count: count },
      ];

      let cartData = JSON.stringify(cart);
      sessionStorage.setItem("cart", cartData);
      alert("Product successfully added to your shopping cart");
    }
  };

  return (
    <div className="w-full min-w-[1000px] pt-[100px]">
      <ul>
        {products.map((product, index) => (
          <li
            key={index}
            className="w-full flex justify-center items-center p-[25px]"
          >
            <div className="w-[60%] h-[700px] flex justify-center items-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-[40%] max-h-[60%]"
              />
            </div>
            <div className="w-[40%] min-h-[700px] flex flex-col justify-center items-center p-[25px]">
              <div className="w-full">
                <h1 className="text-[30px] text-[#2F3C7E] font-semibold mb-[20px]">
                  {product.title}
                </h1>
              </div>
              <div className="w-full">
                <h1 className="text-[27px] text-[#E4552D] font-semibold mb-[20px]">
                  {currencySymbol}
                  {product.price}
                </h1>
              </div>
              <div className="w-full">
                <h1 className="text-[25px] text-[#2F3C7E] font-bold mb-[20px]">
                  {product.category}
                </h1>
              </div>
              <div className="w-full">
                <h2 className="text-[20px] text-[#2F3C7E] mb-[20px]">
                  {product.description}
                </h2>
              </div>
              <div className="w-full font-semibold">
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  className="w-[20%] h-[50px] text-center border-[1px] border-solid border-[#2F3C7E] m-0"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  min={1}
                />
                <button
                  className="w-[80%] h-[50px] text-[#fff] text-center bg-[#2F3C7E] hover:bg-[#E4552D]"
                  onClick={() =>
                    addCart(
                      product.id,
                      product.image,
                      product.title,
                      product.price
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Product;
