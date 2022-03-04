import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Chart } from "../components/Chart";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" w-full gap-4 px-5 mt-8">
        <div className="w-full flex flex-wrap justify-center gap-5">
          <div className="card bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg drop-shadow-md px-5 pt-5 pb-14 w-52 h-[200px] ">
            <h2 className="text-xl font-bold">Suhu</h2>
            <div className="flex items-center h-max py-6 ">
              <div className="w-max flex items-center">
                <img src="/asset/hum.svg" alt="temp." />
              </div>
              <div className="w-full text-center">
                <span className="font-bold text-4xl">37,66°</span>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="px-5 py-2 w-max bg-white rounded-lg bg-opacity-20 hover:bg-opacity-80 hover:text-green-500"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? "Tutup" : "Lihat Detail"}
              </button>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg drop-shadow-md px-5 pt-5 pb-14 w-52 h-[200px] ">
            <h2 className="text-xl font-bold">Kelembaban</h2>
            <div className="flex items-center h-max py-6">
              <div className="w-max flex items-center">
                <img src="/asset/hum.svg" alt="temp." />
              </div>
              <div className="w-full text-center">
                <span className="font-bold text-4xl">37,45%</span>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="px-5 py-2 w-max bg-white rounded-lg bg-opacity-20 hover:bg-opacity-80 hover:text-green-500"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? "Tutup" : "Lihat Detail"}
              </button>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg drop-shadow-md px-5 pt-5 pb-14 w-52 h-[200px] ">
            <h2 className="text-xl font-bold">Kadar Amoniak</h2>
            <div className="flex items-center h-max py-6">
              <div className="w-max flex items-center">
                <img src="/asset/hum.svg" alt="temp." />
              </div>
              <div className="w-full text-center">
                <span className="font-bold text-5xl">
                  37<sup className="text-xl ml-1">ppm</sup>
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="px-5 py-2 w-max bg-white rounded-lg bg-opacity-20 hover:bg-opacity-80 hover:text-green-500"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? "Tutup" : "Lihat Detail"}
              </button>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="w-3/4 mx-auto mt-10 px-5 pb-5 bg-white rounded-lg drop-shadow-md">
            <Chart />
          </div>
        ) : null}
      </div>
    </>
  );
}
