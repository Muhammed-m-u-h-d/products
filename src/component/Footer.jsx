import React from "react";

function Footer() {
  return (
    <>
    <div className="bg-black p-5 z-50">
      <h1 className="text-3xl font-bold text-yellow-800 text-center">
        Mart<span className="text-yellow-500">X</span>
      </h1>
      <p className="text-white italic pt-6">
        <strong>Description : </strong>AllProducts offers a curated selection of
        quality items, secure checkout, fast delivery, and dependable customer
        support. We aim to provide a seamless shopping experience for everyone.”
      </p>
    </div>
  <p className="bg-gray-500 text-white text-center p-2 text-lg">© 2025 AllProducts. All rights reserved.</p>
    </>
  );
}

export default Footer;
