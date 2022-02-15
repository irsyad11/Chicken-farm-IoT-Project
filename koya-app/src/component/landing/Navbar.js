import Button from "./Button";

export default function Navbar() {
  return (
    <header className="w-full py-5 bg-slate-500">
      <div className="container flex justify-between items-center">
        <div>
          <a href="#">
            <img src="/LogoNav.svg" alt="Logo" className=" h-8 " />
          </a>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li className="px-3 font-semibold">Beranda</li>
            <li className="px-3 font-semibold">Tentang Kami</li>
            <Button text="Masuk" />
          </ul>
        </div>
      </div>
    </header>
  );
}
