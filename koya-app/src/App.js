import { Route, Routes } from "react-router-dom";
import Button from "./component/landing/Button";
import Footer from "./component/landing/Footer";
import Navbar from "./component/landing/Navbar";
import Index from "./layouts/landing/Index";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/tentang-kami" element={<Index />}></Route>
          <Route path="/login" element={<Index />}></Route>
          <Route path="/dashboard" element={<Index />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}
