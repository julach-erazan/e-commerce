import React, { useEffect, useState } from "react";

const Tshirts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center pt-[100px] p-[20px]">
      <div className="w-[1000px] h-[400px] flex justify-evenly items-center bg-black mb-[25px]">
        <img
          src="/Images/tshirt.png"
          alt="banner"
          className="w-[650px] h-full"
        />
        <div className="w-[350px] h-full text-[#fff] bg-[#2F3C7E] flex flex-col justify-center items-start p-[50px]">
          <h1 className="text-[30px] font-bold">T Shirts</h1>
          <h2>
            To ensure you're always at the pinnacle of elegance, The Nines
            offers a large range of shirts that are made in Europe and available
            in a selection of high-end fabrics. Our models come in 3 cuts to fit
            your body perfectly and in a large selection of classic or
            contemporary collars that can be adapted to suit your face.
          </h2>
        </div>
      </div>
      <ul className="w-full flex justify-evenly items-center flex-wrap">
        {products.map((data) => (
          <li key={data.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tshirts;
