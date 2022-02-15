export default function Footer() {
  return (
    <>
      <footer className="bg-koya mt-32">
        <div className="container flex  justify-between p-10">
          <a href="#">
            <img src="/LogoFoot.svg" alt="Logo" />
          </a>
          <div className="flex space-x-10 text-white">
            <div className="flex">
              <h3 className="mr-5 font-bold">Kontak Kami :</h3>
              <ul>
                <li>
                  <span>+62-821-9798-6086</span>
                </li>
                <li>
                  <span>koyamku@gmail.com</span>
                </li>
                <li>
                  <span>Jl. Pongtiku Lr. 10 No. 2</span>
                </li>
              </ul>
            </div>
            <div className="flex">
              <h3 className="mr-5 font-bold">Pelayanan</h3>
              <ul>
                <li>
                  <a href="#">Hubungi Kami</a>
                </li>
                <li>
                  <a href="#">Daftar</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex">
                <li className="w-max mx-auto">
                  <a href="#">
                    <img src="/IG.SVG" alt="" />
                  </a>
                </li>
                <li className="w-max mx-auto ml-2">
                  <a href="#">
                    <img src="/tw.SVG" alt="" />
                  </a>
                </li>
                <li className="w-max mx-auto ml-2">
                  <a href="#">
                    <img src="/fb.SVG" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
