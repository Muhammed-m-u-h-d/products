import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { MdOutlineFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCart } from "react-icons/io";

function Card() {
  const [data, setData] = useState({});
  const [showqty, setShowqty] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams("id");
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleImageClick(val) {
    return () => {
      setData({ ...data, thumbnail: val });
    };
  }

  const qtyList = data.minimumOrderQuantity
    ? Array.from({ length: data.minimumOrderQuantity }, (_, i) => i + 1)
    : [];

  function Quantity() {
    setShowqty(!showqty);
  }

  return (
    <>
      <div className="p-4">
        <div className="border border-gray-300 p-3 rounded-lg">
          <div className="flex justify-end">
            <MdOutlineFavorite className="text-red-500" size={30} />
          </div>
          <img
            src={data.thumbnail}
            alt=""
            className="h-95 object-cover duration-300"
          />
          <div className="flex gap-3 p-3  border border-gray-300 justify-center rounded-2xl bg-gray-100 shadow-md shadow-gray-500  ">
            {data.images?.map((val, i) => (
              <img
                key={i}
                src={val}
                className="h-18 border border-gray-300 shadow-lg shadow-gray-400 active:scale-95 duration-100"
                onClick={handleImageClick(val)}
              />
            ))}
          </div>
        </div>
        <div className="border-b-3 pb-1 border-gray-300  ">
          <div>
            <p className="text-3xl font-semibold">
              {data.title} | {data.brand} | {data.category}
            </p>
            {data.tags?.map((val, i) => (
              <span key={i} className="text-gray-500 mr-3 text-md">
                #{val}
              </span>
            ))}
            <p className="text-3xl font-bold">
              <span className="text-red-800 text-2xl ">Discount : </span>$
              {data.discountPercentage}
            </p>
            <p className="text-xl font-semibold text-gray-500">
              MSRP : <span className="line-through">${data.price}</span>
            </p>
            <p className="text-gray-500 text-xl">
              <strong>Rating : </strong>
              <span className="text-2xl font-semibold">{data.rating}</span>
            </p>
            <p className="text-green-700 text-lg font-semibold pt-2">
              {data.availabilityStatus}
            </p>

            <div className="flex gap-3 items-center p-3 border border-gray-500 rounded-md w-full justify-between mt-3">
              <p className="text-lg">Quantity : {quantity}</p>
              <IoIosArrowDown size={20} onClick={Quantity} />
            </div>
            {showqty && (
              <div className="flex justify-end">
              <div className="border border-gray-400 h-35 overflow-y-scroll rounded-md mt-2 bg-white shadow-xl shadow-black  w-30">
                {qtyList.map((q) => (
                  <p
                    key={q} 
                    className="p-3  border border-gray-200 active:bg-grey-500 duration-300"
                    onClick={() => {
                      setQuantity(q);
                      setShowqty(false);
                    }}
                  >
                    {q}
                  </p>
                ))}
              </div>
              </div>
            )}
           
           <div className="flex justify-center  gap-3 text-xl  p-3 bg-white w-full  text-white border-black">
              <button className="border bg-orange-500 p-4 flex items-center gap-1 rounded-xl">
                 <IoMdCart/>
                Add to Cart
              </button>
              <button className="border bg-yellow-500 p-4 rounded-xl w-35">
                Buy Now
                </button>
           </div>



          </div>
          <p className="text-lg font-semibold text-center pb-2">
            {data.shippingInformation}
          </p>
          <p className="text-lg text-red-600 font-semibold text-center border-t-3 border-gray-300">
            {data.returnPolicy}
          </p>
        </div>
        <div className="pt-5 border border-gray-300 p-3 mt-5 rounded-md">
          <h2 className="text-lg font-bold">Product Details : </h2>

          <div className="grid grid-cols-2 text-sm pt-5 [line-height:3rem] ">
            <p>
              <strong>Brand</strong>
            </p>
            <p>{data.brand}</p>
            <p>
              <strong>Category</strong>
            </p>
            <p>{data.category}</p>
            <p>
              <strong>Stock</strong>
            </p>
            <p>{data.stock}</p>
            <p>
              <strong>SKU</strong>
            </p>
            <p>{data.sku}</p>
            <p>
              <strong>Weight</strong>
            </p>
            <p>{data.weight}</p>
            <p>
              <strong>Dimensions</strong>
            </p>
            <div>
              {data.dimensions ? (
                <div className="[line-height:2rem]">
                  <p>Width : {data.dimensions.width}</p>
                  <p>Height : {data.dimensions.height}</p>
                  <p>depth : {data.dimensions.depth}</p>
                </div>
              ) : null}
            </div>
            <p>
              <strong>Warranty</strong>
            </p>
            <p>{data.warrantyInformation}</p>
          </div>
        </div>
        <div className="pt-5 text-sm text-gray-800 border-b-3 pb-3 border-gray-300">
          <p>
            <strong className="text-black">description : </strong>
            {data.description}
          </p>
        </div>
        <div className="mt-5 border border-gray-300 p-2 pb-0 rounded-md">
          <h2 className="text-lg font-semibold text-gray-500 p-1">
            Reviews :{" "}
          </h2>
          <div className="pt-5 text-gray-800 text-lg">
            {data.reviews?.map((val, i) => (
              <div key={i} className="border p-2 rounded-xl bg-gray-100 border-gray-300 pb-3 mb-3">
                <div className="flex gap-2 items-center ">
                  <FaUserCircle size={35} />
                  <p className="text-xl font-semibold">{val.reviewerName}</p>
                </div>
                <p className="text-sm">{val.reviewerEmail}</p>
                <p className="text-sm">{val.date}</p>
                <p className="p-3 text-sm">{val.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Card;
