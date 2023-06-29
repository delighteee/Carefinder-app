import MyHospitals from "./components/Hospitals";
import { Helmet } from "react-helmet"



function Home() {
  return (
    <div className="font-manrope bg-Grey/200">
      {/* header */}
      <Helmet>
        <title>Carefinder</title>
        <meta name="description" content="Find Hospitals" />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* hero section */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-4 lg:mt-2">
          {/* Content */}
          <div className=" flex flex-1 flex-col items-center lg:items-start">
            <h2 className=" text-Grey/900 text-4xl font-bold md: text-4 lg:text-5xl text-center lg:text-left mb-6">
              Find best hospitals near you!
            </h2>
            <p className="text-Grey/800 text-lg text-center lg:text-left mb-6 ">
              Are you in need of urgent medical attention? Looking for a
              reputable hospital in Nigeria? Look no further! With Carefinder,
              your trusted hospital locator app, you can easily search and find
              the best hospitals in Nigeria, tailored to your specific needs.
            </p>
            <div className="flex justify-center flex-wrap gap-6"></div>
          </div>
          <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg: mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="src/assets/himage.png"
              alt=""
            />
          </div>
        </div>
        {/* Bg image */}
        {/* <div className=" hidden md:block overflow-hidden absolute h-20 w-2/4 top-4 right-0"><img src="src/assets/himage.png">
        </img> */}
        {/* 
        </div> */}
      </section>

      {/* Search section */}
      <MyHospitals/>

      {/* Features 1 */}
      <section>
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content */}
          <div className=" flex flex-1 flex-col items-center lg:items-start">
            <h2 className=" text-Grey/900 text-3xl font-bold md: text-4 lg:text-3xl text-center lg:text-left mb-6">
              Over 10,000 people use Carefinder to locate hospitals near them.
            </h2>
            <p className="text-Grey/800 text-lg text-center lg:text-left mb-6 ">
              We have compiled an extensive database of hospitals across
              Nigeria, ranging from major cities to remote areas.
            </p>
            <button
              type="button"
              className="btn btn-primary hover:bg-Secondary"
             
            >
              Find a hospital
            </button>
            <div className="flex justify-center flex-wrap gap-6"></div>
          </div>
          <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg: mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 md:w-full md:h-full"
              src="src/assets/feature.svg"
              alt="Feature-image"
            />
          </div>
        </div>
      </section>

      {/* Features 2 */}
      <section className="bg-White py-20 mt-20">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-Grey/800 font-semibold md: text-4">
            Gain access to the most up-to-date and reliable hospital information
            in Nigeria.
          </h1>
        </div>
        {/* Cards */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16 ">
          {/* card 1 */}

          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center hover:bg-Grey/200">
              <img
                src="src/assets/line-md_download-loop.svg"
                alt="download-icon"
              />
              <h3 className="mt-5 mb-2 text-Grey/800 text-lg font-semibold">
                Download and save
              </h3>
              <p className="text-Grey/600 font-light text-center">
                Found a hospital you love? Download CSV or share quick access
                later. Carefinder allows you to download and share, making it
                convenient to revisit them whenever you need.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center hover:bg-Grey/200">
              <img src="src/assets/icon-park_search.svg" alt="search-icon" />
              <h3 className="mt-5 mb-2 text-Grey/800 text-lg font-semibold">
                Advanced Search
              </h3>
              <p className="text-Grey/600 font-light text-center">
                Our intuitive search filters allow you to narrow down your
                hospital search based on location, medical specialization,
                available services, and more. With just a few clicks, you'll
                find the hospitals that best match your needs.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex flex-col rounded-md shadow-md">
            <div className="p-6 flex flex-col items-center hover:bg-Grey/200">
              <img
                src="src/assets/mingcute_location-3-fill.svg"
                alt="location-icon"
              />
              <h3 className="mt-5 mb-2 text-Grey/800 text-lg font-semibold">
                Precise locations
              </h3>
              <p className="text-Grey/600 font-light text-center">
                In urgent situations, finding the nearest emergency care center
                can be a matter of life and death. With Carefinder, you can
                quickly locate emergency hospitals near your current location,
                ensuring timely access to critical medical care.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div></div>
      </section>
    </div>
  );
}
export default Home;
