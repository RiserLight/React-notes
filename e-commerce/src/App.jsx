import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProducts from "./components/Admin/Product";
import Products from './components/Products';
import Orders from "./components/Admin/Orders";
import NotFound from "./components/NotFound";
import Customers from "./components/Admin/Customers";
import Payments from './components/Admin/Payments';
import Settings from './components/Admin/Settings';
import Dashboard from './components/Admin/Dashboard';
import Home from './components/Home';
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/admin">
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers/>}/>
          <Route path="payments" element={<Payments/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
