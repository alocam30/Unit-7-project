import React from 'react';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";



//App components
import PhotoContainer from "./components/PhotoContainer";
import SearchForm from "./components/SearchForm";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";


//source: https://medium.com/swlh/fetching-data-with-react-hooks-using-the-effect-hook-for-api-calls-3cd33454c8ba

function App(props) {

  return (
    <BrowserRouter>
    <div className="container">
        <SearchForm   />
        <Nav />
        <Routes>
            <Route path="/" element={<Navigate to="/cafes" />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cities" element={<PhotoContainer data="cities" />} />
            <Route path="/cafes" element={<PhotoContainer data="cafes" />} />
            <Route path="/computers" element={<PhotoContainer data="computers" />} />
            <Route path="/search/:keyword" element={<PhotoContainer />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
  }

export default App;