// import React, { useEffect, useMemo } from "react";
// import CardItem from "./CardItem";
// import { Button, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";

// const EmptyCartMessage = () => {
//   return (
//     <Grid container justifyContent="center" alignItems="center" height="100%">
//       <Typography variant="h6" color="textSecondary">
//         Your cart is empty.
//       </Typography>
//     </Grid>
//   );
// };

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { cart, auth } = useSelector((store) => store);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [cart.updateCartItem, cart.deleteCartItem]);

//   const handleCheckout = () => {
    
//     navigate("/checkout?step=2");
//   };

//   const memoizedCartItems = useMemo(() => {
//     return (
//       cart.cart?.cartItems.map((item, idx) => (
//         <CardItem key={idx} item={item} />
//       )) 
//     );
//   }, [cart.cart?.cartItems]);

//   return (
//     <div>
//       <div className="lg:grid grid-cols-3 lg:px-16 p-2 relative">
//         <div className="col-span-2">
//           {cart.cart?.cartItems && cart.cart.cartItems.length > 0 ? (
//             memoizedCartItems
//           ) : <EmptyCartMessage/>}
//         </div>

//         <div className="px-5 pt-5 sticky top-0 h-[100vh] lg:mt-0">
//           <div className="rounded-md border p-10">
//             <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>

//             <hr />
//             <div className="space-y-3 font-semibold">
//               <div className="flex justify-between pt-3 text-black">
//                 <span>Price</span>
//                 <span>Rs. {cart.cart?.totalPrice || 0}</span>
//               </div>
//               <div className="flex justify-between pt-3 ">
//                 <span>Discount</span>
//                 <span className="text-green-600">Rs. {cart.cart?.discount || 0}</span>
//               </div>
//               <div className="flex justify-between pt-3">
//                 <span>Delivery Charge</span>
//                 <span className="text-green-600">Free</span>
//               </div>
//               <hr className="font-bold" />
//               <div className="pb-4 flex justify-between pt-3 font-bold">
//                 <span>Total Amount</span>
//                 <span className="text-green-600">Rs. {cart.cart?.totalDiscountedPrice || 0}</span>
//               </div>

//               <Button
//                 onClick={handleCheckout}
//                 variant="contained"
//                 className="w-full"
//                 sx={{
//                   px: "2.5rem",
//                   py: ".7rem",
//                   bgcolor: "#9155fd",
//                 }}
//               >
//                 Checkout
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useMemo } from "react";
import CardItem from "./CardItem";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const EmptyCartMessage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h6" color="textSecondary">
        Your cart is empty.
      </Typography>
    </Grid>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  const handleCheckout = () => {
    if (localStorage.getItem("jwt") && cart.cart?.cartItems.length > 0) {
      navigate("/checkout?step=2");
    }
  };

  const memoizedCartItems = useMemo(() => {
    return (
      cart.cart?.cartItems.map((item, idx) => (
        <CardItem key={idx} item={item} />
      )) 
    );
  }, [cart.cart?.cartItems]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 p-2 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems && cart.cart.cartItems.length > 0 ? (
            memoizedCartItems
          ) : <EmptyCartMessage/>}
        </div>

        <div className="px-5 pt-5 sticky top-0 h-[100vh] lg:mt-0">
          <div className="rounded-md border p-10">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>

            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>Rs. {cart.cart?.totalPrice || 0}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">Rs. {cart.cart?.discount || 0}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="font-bold" />
              <div className="pb-4 flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">Rs. {cart.cart?.totalDiscountedPrice || 0}</span>
              </div>

              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full"
                disabled={!localStorage.getItem("jwt") || cart.cart?.cartItems.length === 0}
                sx={{
                  px: "2.5rem",
                  py: ".7rem",
                  bgcolor: "#9155fd",
                }}
              >
                Checkout
              </Button>
              {!localStorage.getItem("jwt") && <p className="py-2 text-red-500">Login to continue</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
