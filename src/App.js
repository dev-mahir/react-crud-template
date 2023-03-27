import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import View from './pages/View';
import Add from "./pages/Add";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="/delete/:id" element={<Delete/>}></Route>
            <Route path="/view/:id" element={<View/>}></Route>
        </Routes>
    </>
  );
}





export default App;













