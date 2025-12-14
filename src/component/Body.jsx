import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        //console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="mt-37 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_80%,transparent_99%)] object-cover">
          <img src="image.png" alt="" className="w-full  " />
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 ">
          {data.map((val) => (
            <Link to={`/card/${val.id}`} >
            <div
              key={val.id}
              className="border border-gray-300 rounded-xl shadow- shadow-gray-400   "
            >
              <img src={val.thumbnail} className="w-full" />
              <div className="flex flex-col  justify-end  text-center  h-20">
              <h1 className="text-lg font-semibold text-gray-800  ">
                {val.title.length > 15
                  ? val.title.slice(0, 15) + "..."
                  : val.title }
              </h1>

              <h2 className="text-2xl font-bold  pb-2 ">${val.price}</h2>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Body;
