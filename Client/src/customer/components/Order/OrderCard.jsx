import { Grid, useEventCallback } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({item, status}) => {
  const navigate = useNavigate();
  console.log("item:", item)

  return (
    <div onClick={()=> navigate(`/product/${item.product._id}`)} className="p-5 rounded-md shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} sm={6}>
          <div className="flex flex-col sm:flex-row cursor-pointer">
            <img
              className="sm:h-20 sm:w-20 md:h-30 md:w-30 object-cover object-top"
              src={item.product?.imageUrl}
              alt=""
            />
            <div className="ml-0 sm:ml-5 mt-3 sm:mt-0 space-y-2">
              <p>{item.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">Size: {item.size}</p>
              <p className="opacity-50 text-xs font-semibold">Color: {item.product?.color}</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={6} sm={2}>
          <p>Rs.{item.discountedPrice}</p>
        </Grid>

        <Grid item xs={12} sm={4}>
          {false && (
            <div>
              <p className="flex items-center">
                <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 mr-2" />
                <span>{status}</span>
              </p>
              <p className="ml-4 p-1 text-xs">
                 Your item has been delivered.
              </p>
            </div>
          )}
          {status ==="PLACED" && (
            <p>
              <span>Expected Delivery on Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
