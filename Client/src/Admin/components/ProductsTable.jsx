import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);


  const data = {
    category: null,
    colors: [],
    sizes: [],
    minPrice: null,
    maxPrice: null,
    minDiscount: 0,
    sort: "price_low",
    pageNumber: 1,
    pageSize: 10,
    stock: "",
  };

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(findProducts(data));
      } catch (error) {
        console.log("Error in Fetching Data ", error);
      }
    };
    fetchData();
  }, [dispatch, products.deletedProducts]);

  return (
    <div className="p-2 text-white">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        {products.products.content ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.products.content.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Avatar src={item.imageUrl} />
                    </TableCell>
                    <TableCell align="left">{item.title}</TableCell>
                    <TableCell align="left">
                      {/* {item.category.name} */}
                      {"category"}
                    </TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
                    <TableCell align="left">
                      <Button
                        onClick={() => handleProductDelete(item._id)}
                        variant="outlined"
                      >
                        Delete
                      </Button>
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

export default ProductsTable;
