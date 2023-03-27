import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes , Navigate, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import "./App.css";
import Header from "./components/Header";

const Photo = React.lazy(() => import("./features/Photo"));
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate replace to="/photos" />} />

            <Route path="./photos" component={Photo} />
            <Route component={NotFound} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
