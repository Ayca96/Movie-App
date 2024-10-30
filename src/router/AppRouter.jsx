import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
import { MovieContextt } from "../context/MovieContext";
// toastContainer de Browser da görünsün diye browserRouter sarmalını üst component olan indexedDB.js de yaptık
const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page/:pageNumber" element={<Main />}/>
          <Route path="/details/:id" element={<PrivateRouter/>}>
          <Route path="" element={<MovieDetail />} />
          </Route>
        {/* <Route path ="/page/:pageNumber/details/:id" element={<MovieDetail/>}/> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/page/:pageNumber/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
