import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/sass/style.scss";
import "./assets/css/slicknav.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/owl.carousel.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/UserStore/Home";
import StoreDetail from "./pages/UserStore/Stores/StoreDetail";
import Store from "./layouts/Store";
import Admin from "./layouts/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound";
import Stores from "./pages/UserStore/Stores";
import Wrapper from "./layouts/Wrapper";
import Foods from "./pages/UserStore/Foods";
import MyStore from "./pages/Admin/MyStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <Routes>
          {/* UserStore */}
          <Route
            path="/"
            element={
              <Store />
            }
          >
            <Route index element={<Home />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/stores/:id" element={<StoreDetail />} />

            <Route path="/foods" element={<Foods />} />
          </Route>

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <Admin />
            }
          >
            <Route index element={<Dashboard />} />
            <Route  path="/admin/stores" element={<MyStore />} />
            <Route path="/admin/stores/:id" element={<StoreDetail />} />

          </Route>
          <Route path="*" element={<NotFound />}> </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
