import Button from "./component/landing/Button";
import Navbar from "./component/landing/Navbar";
import Index from "./layouts/landing/Index";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50">
        <Index />
      </div>
    </>
  );
}
