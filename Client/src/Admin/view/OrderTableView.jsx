import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const handleShipedorder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredorder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.deletedOrder,
    adminOrder.delivered,
    adminOrder.shipped,
    adminOrder.confirmed,
  ]);

  return (
    <div className="p-2">
      <Card className="mt-2">
        <CardHeader title="Recent Orders" />
        {adminOrder.orders ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {adminOrder?.orders?.map((item, idx) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{idx + 1}.</TableCell>

                    <TableCell align="left">{item._id}</TableCell>
                    <TableCell align="left">
                      {/* <Avatar src={item.imageUrl} /> */}
                      <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                        {item?.orderItems?.map((orderItem) => (
                          <Avatar src={orderItem.product.imageUrl}></Avatar>
                        ))}
                      </AvatarGroup>
                    </TableCell>

                    <TableCell align="left" scope="row">
                      {item.orderItems.map((orderItem) => (
                        <p>{orderItem.product.title}</p>
                      ))}
                    </TableCell>

                    <TableCell align="left">{item.totalPrice}</TableCell>
                    {/* <TableCell align="left">{item.orderStatus}</TableCell> */}

                    <TableCell align="left">
                      <span
                        className={`text-white px-5 py-2 rounded-full
                        ${
                          item.orderStatus === "CONFIRMED"
                            ? "bg-[green]"
                            : item.orderStatus === "SHIPPED"
                            ? "bg-[#4141ff]"
                            : item.orderStatus === "PLACED"
                            ? "bg-[#02B290]"
                            : item.orderStatus === "DELIVERED"
                            ? "bg-[#a52ed8]"
                            : item.orderStatus === "PENDING"
                            ? "bg-[red]"
                            : "bg-[#025720]"
                        }`}
                      >
                        {" "}
                        {item.orderStatus}
                      </span>{" "}
                    </TableCell>

                    
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p>Loading...</p>
        )}
      </Card>
    </div>
  );
};
export default OrderTableView;
