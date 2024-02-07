import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/product/${product._id}`)} className="productCard m-3 w-[15rem] cursor-pointer tarnsition-all ">
      <div className="h-[18rem] ">
        <img
          className="w-full h-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex text-center space-x-3">
          <p className="font-semibold ">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-400 font-semibold">{product.discountPercent}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
