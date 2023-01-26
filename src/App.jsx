import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const NavBar = React.lazy(() => import("./components/NavBar"));
const Home = React.lazy(() => import("./pages/Home"));
const MyShows = React.lazy(() => import("./pages/MyShows"));

function App() {
  return (
    <div className="wrapper">
      <Suspense fallback={<p>loading...</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-shows" element={<MyShows />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
