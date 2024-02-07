import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountIcon from "@mui/icons-material/AccountCircle";

import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import CustomersTable from "./components/CustomersTable";
import OrdersTable from "./components/OrdersTable";
import ProductsTable from "./components/ProductsTable";
import CreateProductForm from "./components/CreateProductForm";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GradingIcon from '@mui/icons-material/Grading';
import AddBoxIcon from '@mui/icons-material/AddBox';
// ... (your existing imports)

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon />,
  },
  { name: "Products", path: "/admin/products", icon: <Inventory2Icon /> },
  { name: "Orders", path: "/admin/orders", icon: <GradingIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <AddBoxIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);

  const handleAccountButtonClick = () => {
    setAccountMenuVisible(!accountMenuVisible);
  };

  const handleLogout = () => {
    // Perform logout actions, e.g., clear localStorage
    localStorage.clear();
    // Redirect to the login page or perform any other logout-related actions
    navigate("/");
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {isLargeScreen && <ListItemText>{item.name}</ListItemText>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List >
        <ListItem disablePadding>
          <ListItemButton onClick={handleAccountButtonClick}>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            {isLargeScreen && <ListItemText>Account</ListItemText>}
          </ListItemButton>
          {accountMenuVisible && (
            <List>
              <ListItem disablePadding onClick={() => console.log("Profile clicked")}>
                <ListItemButton>
                  <ListItemText>Profile</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={handleLogout}>
                <ListItemButton>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="realtive flex h-[100vh] ">
      <CssBaseline />
      <div className="w-[15%] shadow-lg shadow-gray-500 border border-r-gray-300 h-full fixed top-0">
        {drawer}
      </div>

      <Box className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/products" element={<ProductsTable />} />
          <Route path="/orders" element={<OrdersTable />} />
          <Route path="/customers" element={<CustomersTable />} />
        </Routes>
      </Box>
    </div>
  );
};

export default Admin;
