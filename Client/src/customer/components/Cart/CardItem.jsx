import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
    };
    console.log("data : ", data);
    dispatch(updateCartItem(data));

  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id));
  };

  return (
    <div className="mt-5 p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]">
          {item && item?.product?.imageUrl ? (
            <img
              src={item.product.imageUrl}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div>Loading....</div>
          )}
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: {item.size}, White</p>
          <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">Rs.{item.discountedPrice} </p>
            <p className="opacity-50 line-through">Rs.{item.price} </p>
            <p className="text-green-600 font-semibold">
              {item.product.discountPercent}% off
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            sx={{ color: "RGB(145 85 253)" }}
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>

          <IconButton
            sx={{ color: "RGB(145 85 253)" }}
            onClick={() => handleUpdateCartItem(1)}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <Button
          onClick={handleRemoveCartItem}
          sx={{ color: "RGB(145 85 253)" }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
