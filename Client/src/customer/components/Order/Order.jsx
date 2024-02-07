import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "../../../State/Order/Action";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {

  const dispatch = useDispatch()
  const {order} = useSelector((store)=>store)

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // const abortController = new AbortController();

    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        await dispatch(
          orderHistory()
        );
        setIsLoading(false);
      } catch (error) {
        
        console.error("Error fetching order data:", error);
        setIsLoading(false);
      }
    };

    fetchHistory();

  }, [dispatch])



  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!order.orders) {
    return <p>No order data available.</p>;
  }

  return (
    <div className="mt-5 px-4 lg:px-20 ">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} md={3} lg={2.5} className="pb-5">
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg"> Filter </h1>
            <div className="space-y-4 mt-2 lg:mt-5">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((option, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {" "}
                    {option.label}{" "}
                  </label>
                </div>
              ))}
            </div>
          </div>


          
        </Grid>

        <Grid item xs={12} md={9} lg={8.5} className="space-y-4">
        {order.orders.map((orderItem) =>
            orderItem.orderItems.map((item, id) => (
              <OrderCard key={id} item={item} status={orderItem.orderStatus}/>
            ))
          )}

        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
