export default function Measuring() {
  return (
    <section className="container mt-32 ">
      <div className="text-center text-koya">
        <h3 className="text-2xl lg:text-5xl font-semibold">Kamu dapat</h3>
        <h2 className=" text-4xl lg:text-7xl font-bold">Memonitoring</h2>
      </div>
      <div className="block lg:flex lg:space-x-5 items-center w-full text-center text-koya px-10 mt-20 ">
        <div className="w-full mb-8 lg:mb-0 lg:w-1/3 px-10 bg-white py-10 rounded-xl drop-shadow-md hover:drop-shadow-2xl lg:transform-gpu ease-in-out duration-500 lg:hover:-translate-y-10">
          <img
            src="/thermometer.svg"
            alt="Thermometer"
            className="h-32 w-auto mx-auto px-20 mt-10"
          />
          <h2 className="text-3xl font-bold mt-10">Suhu</h2>
          <p className="mt-2 leading-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim
            numquam quia, qui voluptatibus deserunt repellat adipisci labore
            repudiandae nisi quisquam blanditiis quibusdam quae culpa odit
            dolores quaerat placeat in.
          </p>
        </div>
        <div className="w-full mb-8 lg:mb-0 lg:w-1/3  px-10 bg-white py-10 rounded-xl drop-shadow-md hover:drop-shadow-2xl transform-gpu ease-in-out duration-500 hover:-translate-y-10">
          <img
            src="/humidity.svg"
            alt="Water"
            className="h-32 w-auto mx-auto px-20 mt-10"
          />
          <h2 className="text-3xl font-bold mt-10">Humidity</h2>
          <p className="mt-2 leading-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim
            numquam quia, qui voluptatibus deserunt repellat adipisci labore
            repudiandae nisi quisquam blanditiis quibusdam quae culpa odit
            dolores quaerat placeat in.
          </p>
        </div>
        <div className="w-full mb-8 lg:mb-0 lg:w-1/3  px-10 bg-white py-10 rounded-2xl drop-shadow-md transform-gpu ease-in-out duration-500 hover:drop-shadow-xl  hover:-translate-y-10">
          <img
            src="/NH3.svg"
            alt="Thermometer"
            className="h-32 w-auto mx-auto px-20 mt-10"
          />
          <h2 className="text-3xl font-bold mt-10">Kadar Gas Amoniak</h2>
          <p className="mt-2 leading-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim
            numquam quia, qui voluptatibus deserunt repellat adipisci labore
            repudiandae nisi quisquam blanditiis quibusdam quae culpa odit
            dolores quaerat placeat in.
          </p>
        </div>
      </div>
    </section>
  );
}
