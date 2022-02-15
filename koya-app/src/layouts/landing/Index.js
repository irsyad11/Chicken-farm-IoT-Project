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
      <section className="container flex items-center p-10 space-x-5">
        <div className="w-1/3 bg-koya p-10 rounded-xl text-white">
          <div>
            <h1 className="text-3xl font-bold">Latar Belakang</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias blanditiis nam eius! Nulla iusto porro voluptatem
              tempore quod reiciendis possimus vero illum voluptas
              reprehenderit, labore, perferendis maxime corrupti qui laborum.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold">Manfaat</h1>
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
            <h1 className="text-3xl font-bold">Latar Belakang</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias blanditiis nam eius! Nulla iusto porro voluptatem
              tempore quod reiciendis possimus vero illum voluptas
              reprehenderit, labore, perferendis maxime corrupti qui laborum.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold">Manfaat</h1>
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
    </>
  );
}
