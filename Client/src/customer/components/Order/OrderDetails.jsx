import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="m-2 p-6 rounded-md px-5 lg:px-20 ">
      <div className="ml-4 mt-2">
        <h1 className="text-3xl font-bold mb-4">Delivery Details</h1>
        <AddressCard />
      </div>

      <div className="mt-12 mb-10 lg:mb-14">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5 mt-2">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-lg rounded-md p-5 border space-y-5 lg:space-y-0 "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            
            
            <Grid item xs={12} lg={6}>
              <div className="flex space-x-8 items-center">
                <img
                  className="rounded-md w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ">
                  <p className="font-semibold text-md">Men Full Sleev Kurta</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold ">
                    <span>Color: Pink </span> <span>Size: M</span>
                  </p>
                  <p>Seller: Appario</p>
                  <p>Rs. 1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: deepPurple[500], pr: 6 }}>
                <StarBorderIcon fontSize={"medium"} className="mr-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
