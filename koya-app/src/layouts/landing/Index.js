export default function Index() {
  return (
    <>
      {/* Start hero sesction */}
      <section className="container flex items-center py-64 ">
        <div className="w-1/2 pr-10">
          <img src="/hero.png" alt="Hero" />
        </div>
        <div className="w-1/2 text-koya">
          <h1 className="text-9xl font-black">KO YA</h1>
          <h2 className="text-4xl font-medium tracking-widest">
            Kontrol Ayamku
          </h2>
          <p className="mt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            vel accusantium maxime rerum quos laborum nostrum sed magnam
            corporis totam vero pariatur delectus facere quod debitis modi
            nulla, magni reiciendis.
          </p>
        </div>
      </section>
      {/* end hero section */}

      {/* what is section */}
      <section className="container flex items-center p-10 space-x-5 h-screen">
        <div className="w-1/3 bg-koya p-10 rounded-xl text-white">
          <div>
            <h2 className="text-3xl font-bold">Latar Belakang</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias blanditiis nam eius! Nulla iusto porro voluptatem
              tempore quod reiciendis possimus vero illum voluptas
              reprehenderit, labore, perferendis maxime corrupti qui laborum.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold">Manfaat</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias blanditiis nam eius! Nulla iusto porro voluptatem
              tempore quod reiciendis possimus vero illum voluptas
              reprehenderit, labore, perferendis maxime corrupti qui laborum.
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <img src="/img-1.png" alt="KOYA" />
        </div>
        <div className="w-1/3 bg-koya p-10 rounded-xl text-white">
          <div>
            <h2 className="text-3xl font-bold">Latar Belakang</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias blanditiis nam eius! Nulla iusto porro voluptatem
              tempore quod reiciendis possimus vero illum voluptas
              reprehenderit, labore, perferendis maxime corrupti qui laborum.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold">Manfaat</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias blanditiis nam eius! Nulla iusto porro voluptatem
              tempore quod reiciendis possimus vero illum voluptas
              reprehenderit, labore, perferendis maxime corrupti qui laborum.
            </p>
          </div>
        </div>
      </section>
      {/* what is section */}

      {/*Measuring Section Start*/}
      <section className="container mt-32 h-screen">
        <div className="text-center text-koya">
          <h3 className="text-5xl font-semibold">Kamu dapat</h3>
          <h2 className="text-7xl font-bold">Memonitoring</h2>
        </div>
        <div className="flex space-x-5 items-center w-full text-center text-koya px-10 mt-10 ">
          <div className="w-1/3 px-10 bg-white py-10 rounded-xl drop-shadow-md hover:drop-shadow-xl transform-gpu ease-in-out duration-300 hover:-translate-y-5">
            <img
              src="/thermometer.svg"
              alt="Thermometer"
              className="h-32 w-auto mx-auto px-20 mt-10"
            />
            <h2 className="text-3xl font-bold mt-10">Suhu</h2>
            <p className="mt-2 leading-6 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              enim numquam quia, qui voluptatibus deserunt repellat adipisci
              labore repudiandae nisi quisquam blanditiis quibusdam quae culpa
              odit dolores quaerat placeat in.
            </p>
          </div>
          <div className="w-1/3 px-10 bg-white py-10 rounded-xl drop-shadow-md hover:drop-shadow-xl transform-gpu ease-in-out duration-300 hover:-translate-y-5">
            <img
              src="/humidity.svg"
              alt="Water"
              className="h-32 w-auto mx-auto px-20 mt-10"
            />
            <h2 className="text-3xl font-bold mt-10">Humidity</h2>
            <p className="mt-2 leading-6 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              enim numquam quia, qui voluptatibus deserunt repellat adipisci
              labore repudiandae nisi quisquam blanditiis quibusdam quae culpa
              odit dolores quaerat placeat in.
            </p>
          </div>
          <div className="w-1/3 px-10 bg-white py-10 rounded-xl drop-shadow-md transform-gpu ease-in-out duration-300 hover:drop-shadow-xl  hover:-translate-y-5">
            <img
              src="/NH3.svg"
              alt="Thermometer"
              className="h-32 w-auto mx-auto px-20 mt-10"
            />
            <h2 className="text-3xl font-bold mt-10">Kadar Gas Amoniak</h2>
            <p className="mt-2 leading-6 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              enim numquam quia, qui voluptatibus deserunt repellat adipisci
              labore repudiandae nisi quisquam blanditiis quibusdam quae culpa
              odit dolores quaerat placeat in.
            </p>
          </div>
        </div>
      </section>
      {/*Measuring Section Start*/}
    </>
  );
}
