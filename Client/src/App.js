// import logo from './logo.svg';
import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import HomePage from "./customer/pages/HomePage/HomePage";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouter from "./Router/CustomerRouter";
import AdminRoutes from "./Router/AdminRoutes";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouter />} />
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </div>
  );
}

export default App;
