import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CardItem from "../Cart/CardItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const { order } = useSelector((store) => store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchOrderData = async () => {
      try {
        setIsLoading(true);
        await dispatch(
          getOrderById(orderId, { signal: abortController.signal })
        );
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore this error since it's due to the cleanup
          return;
        }
        console.error("Error fetching order data:", error);
        setIsLoading(false);
      }
    };

    fetchOrderData();


    return () => {
      // Cleanup function
      abortController.abort();
    };
  }, [dispatch, orderId]);

  const handleCheckout = () => {
    dispatch(createPayment(orderId));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!order.order) {
    return <p>No order data available.</p>;
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={order.order?.shippingAddress} button={false} />
      </div>

      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {order.order?.orderItems.map((item, id) => (
            <CardItem key={id} item={item} />
          ))}
        </div>

        <div className="px-5 pt-5 sticky top-0 h-[100vh] lg:mt-0">
          <div className="rounded-md shadow-lg border p-10">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>

            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>Rs. {order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">
                  -Rs. {order.order?.discount}
                </span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="font-bold" />
              <div className="pb-4 flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  Rs. {order.order?.totalDiscountedPrice}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full"
                sx={{
                  px: "2.5rem",
                  py: ".7rem",
                  bgcolor: "#9155fd",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
