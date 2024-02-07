import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { createOrder } from "../../../State/Order/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../../../State/Auth/Store";


const DeliveryAddressForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {auth} = useSelector(store=> store);


  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {address, navigate} 
    dispatch(createOrder(orderData))

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-4">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={5}>
          <div className="border rounded-s-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer">
              {
              // auth.user?.address?.map((item)=>
              // <div className="py-1 px-4 border rounded-md my-2" >
              // <AddressCard product = {item }/>
              // <Button
              //   sx={{ mb:1, mt: 2, bgcolor: "RGB(145 85 253)" }}
              //   size="large"
              //   variant="contained"
              //   // className="w-full"
              // >
              //   Deliver Here
              // </Button>
              // </div>)

              auth.user?.address?.map((item) =>
  <div className="py-1 px-4 border rounded-md my-2" >
    <AddressCard address={item} button = {true}/>
  </div>
)

              }
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    value={address.firstName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                    value={address.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="streetAddress"
                    name="streetAddress"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                    value={address.streetAddress}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                    value={address.city}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Region"
                    fullWidth
                    autoComplete="given-name"
                    value={address.state}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Zip/Pincode"
                    fullWidth
                    autoComplete="shipping postal-code"
                    value={address.zipCode}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobile"
                    name="mobile"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                    value={address.mobile}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                    className="w-full"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
