import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action";

const AddressCard = ({ address, button }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
  };

  return (
    <div>
      <h1 className="font-semibold text-lg pb-2">Delivery Address :</h1>
      <>
        <p className="font-semibold">
          {address?.firstName + " " + address.lastName}
        </p>
        <p>
          {address?.streetAddress +
            ", " +
            address?.city +
            ", " +
            address?.state +
            ", " +
            address?.zipCode}{" "}
        </p>
        <div className="">
          <p className="font-semibold">Phone no. </p>
          <p>{address?.mobile}</p>
        </div>

        {button && (
          <Button
            onClick={handleSubmit}
            sx={{ mb: 1, mt: 2, bgcolor: "RGB(145 85 253)" }}
            size="large"
            variant="contained"
          >
            Deliver Here
          </Button>
        )}
      </>
    </div>
  );
};

export default AddressCard;
