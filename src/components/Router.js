import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Page/Home";
import Products from "./Page/Products";
import Search from "./Page/Search/Search";
import Register from "./Page/Register/Register";
import UploadProduct from "./Page/Upload Product/UploadProduct";
import User from "./Page/User/User";
import Cart from "./Page/Cart/Cart";
import EditProducts from "./Page/Edit Products/EditProducts";
import Error from "./Error";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
        <Route
          path="/products/:name"
          caseSensitive={false}
          element={<Products />}
        />
        <Route
          path="/search/:keyWord"
          caseSensitive={false}
          element={<Search />}
        />
        <Route path="/register" caseSensitive={false} element={<Register />} />
        <Route
          path="/upload-product"
          caseSensitive={false}
          element={<UploadProduct />}
        />
        <Route path="/:user" caseSensitive={false} element={<User />} />
        <Route path="/cart" caseSensitive={false} element={<Cart />} />
        <Route
          path="/edit-product/:productid"
          caseSensitive={false}
          element={<EditProducts />}
        />
        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routing;
