import Link from "next/link";
import Image from "next/image";

export default function HomeTownHomePage() {
  return (
    <main>
      <section
        aria-labelledby="hero-title"
        className="w-full h-64 bg-[url(/images/hero-banner.webp)] bg-cover bg-center flex flex-col justify-center items-center gap-2"
      >
        <h1
          id="hero-title"
          className="text-slate-100 bg-sky-950 px-2 py-1 rounded-md font-semibold text-3xl 
          "
        >
          Visit West Haven, CT
        </h1>
        <p
          className="text-slate-100 bg-sky-700 px-2 py-1 rounded-md font-medium text-lg
          "
        >
          Miles of Shore and so much more
        </p>
      </section>
      <section aria-labelledby="activities-title" className="bg-lime-50  py-8">
        <h2
          id="activities-title"
          className="text-2xl text-sky-950 font-bold flex justify-center capitalize"
        >
          Top three activities in West Haven, CT
        </h2>
        <ul className="grid md:grid-cols-3 gap-4:md gap-14 px-8 mt-10">
          <li>
            <a
              target="_blank"
              href="https://www.google.com/maps/dir/41.268993,-72.9335036/Charlotte+Bacon's+Playground,+1083+Ocean+Ave+%231075,+West+Haven,+CT+06516/@41.2597648,-72.9624757,8063m/data=!3m1!1e3!4m10!4m9!1m1!4e1!1m5!1m1!1s0x89e8764780c3645f:0xb196d208adf428e0!2m2!1d-72.9603762!2d41.2527455!3e2?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
            >
              <Image
                src="/images/beach.webp"
                alt="Aerial view of the shoreline."
                width={400}
                height={410}
                className="w-30 h-30 object-cover rounded-full mx-auto"
              />
              <h3 className="text-sky-950 font-bold text-center mt-4 h-12 flex flex-col justify-center capitalize">
                Walk along beach
              </h3>
              <p className="text-sky-950 text-center mt-4 max-w-120">
                I recommend starting at 1st Ave. & Monahan Pl. and walking along
                the cost to Charlotte Bacon's Playground. Which is a 2 mile walk
                one-way.
              </p>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://us.pez.com/pages/hours-and-location"
            >
              <Image
                src="/images/pez.webp"
                alt="Interior of the PEZ Visitor Center."
                width={1800}
                height={1200}
                className="w-30 h-30 object-cover rounded-full mx-auto"
              />
              <h3 className="text-sky-950 font-bold text-center mt-4 h-12 flex flex-col justify-center">
                Visit The PEZ Visitor Center
              </h3>
              <p className="text-sky-950 text-center mt-4 max-w-120">
                This is a great place to take younger kids and one of my
                favorite early memories was visiting the PEZ Visitor Center with
                my siblings and cousins.
              </p>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.urbanair.com/connecticut-orange/?utm_source=gmb&utm_medium=website"
            >
              <Image
                src="/images/urban-air.webp"
                alt="Interior of Urban Air Trampoline and Adventure Park."
                width={800}
                height={500}
                className="w-30 h-30 object-cover rounded-full mx-auto "
              />
              <h3 className="text-sky-950 font-bold text-center mt-4 h-12 flex flex-col justify-center capitalize">
                Bounce around at Urban Air Trampoline and Adventure Park
              </h3>
              <p className="text-sky-950 text-center mt-4 max-w-120">
                Now this is a place recommended for all ages with fun activities
                such as ziplining, trampolines, and various arcades to bring
                together friends and family.
              </p>
            </a>
          </li>
        </ul>
      </section>
      <section aria-labelledby="guide-title">
        <figure className="bg-sky-700 grid items-center grid-cols-2 p-8 gap-x-8  text-lime-200 md:w-150 md:mx-auto md:my-8 md:rounded-2xl">
          <Image
            src="/images/ian-valeta.webp"
            alt=""
            width={800}
            height={800}
            className="object-cover rounded-2xl h-full"
          />
          <div>
            <h2
              id="guide-title"
              className="border-t-3 pt-2 text-2xl text-lime-200 font-bold"
            >
              Your guide
            </h2>
            <blockquote>
              <p className="text-lime-50 italic mt-6 max-w-120">
                I have lived in West Haven for 13 years growing up from a kid to
                a young professional. I frequently bike around and walk around
                to keep my eyes sharp for hidden gems.
              </p>
            </blockquote>
            <figcaption className="text-lime-200 mt-6 italic">
              Ian Anthony-Carter Valeta
            </figcaption>
          </div>
        </figure>
      </section>
    </main>
  );
}
