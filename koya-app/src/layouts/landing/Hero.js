export default function Hero() {
  return (
    <section className="container block lg:flex items-center py-64 ">
      <div className="hidden lg:block lg:w-1/2 pr-10">
        <img src="/hero.png" alt="Hero" />
      </div>
      <div className="lg:w-1/2 text-koya px-10 text-center lg:text-left">
        <h1 className="text-9xl font-black">KO YA</h1>
        <h2 className="text-4xl font-medium tracking-widest">Kontrol Ayamku</h2>
        <p className="mt-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel
          accusantium maxime rerum quos laborum nostrum sed magnam corporis
          totam vero pariatur delectus facere quod debitis modi nulla, magni
          reiciendis.
        </p>
      </div>
    </section>
  );
}
