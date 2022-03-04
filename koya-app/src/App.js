import { Route, Routes } from "react-router-dom";
import { Chart } from "./components/Chart";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex bg-slate-200">
        <Navbar />
        <div className="w-full flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
