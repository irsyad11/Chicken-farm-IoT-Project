import { Link } from "react-router-dom";
import Button from "../../component/landing/Button";

let Links = [
  { nama: "Home", link: "/" },
  { nama: "Tentang Kami", link: "/" },
];

export default function Navbar() {
  return (
    <header className="w-full py-5 bg-white drop-shadow-lg">
      <div className="container flex justify-between items-center">
        <div>
          <a href="#" className="cursor-pointer">
            <img src="/LogoNav.svg" alt="Logo" className=" h-8 " />
          </a>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            {Links.map((hola) => (
              <li key={hola.nama}>
                <Link
                  to={hola.link}
                  className="hidden lg:block hover:font-bold px-2 "
                >
                  {hola.nama}
                </Link>
              </li>
            ))}
            <Button text="masuk" />
          </ul>
        </div>
      </div>
    </header>
  );
}
