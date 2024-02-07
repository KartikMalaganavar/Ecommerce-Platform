import { Grid } from "@mui/material";
import React from "react";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../view/OrderTableView";
import ProductsTableView from "../view/ProductTableView";

const AdminDashboard = () => {
  return (
    <div className="p-2 md:p-5 lg:p-10 ">
      <div className="mb-4 shadow-lg shadow-gray-500 px-5 bg-[#242B2E] text-white rounded-md">
        
      <p className="py-5 font-semibold text-2xl">Welcome, Admin</p>
      
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-500">
            <Achivement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-500">
            <MonthlyOverview />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <OrderTableView />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-500">
            <ProductsTableView />
          </div>
        </Grid>

      </Grid>
    </div>
  );
};

export default AdminDashboard;
