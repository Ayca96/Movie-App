import React from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
import MovieContext from "./context/MovieContext";

//!toastify için =>1 yarn add ile package.json a kütüphane yükledik, index.js ye teşekkür importu ekledik, (isteğe bağlı)=> ayrı bir sayfada toast ları topladık, AppRouter hizasına ToastContainer ekledik

const App = () => {

   

    
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContext>
        <MovieContext>
          <AppRouter />
          <ToastContainer />
        </MovieContext>
      </AuthContext>
    </div>
  );
};

export default App;
