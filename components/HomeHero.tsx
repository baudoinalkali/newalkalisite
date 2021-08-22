import Modal from "../components/Modal";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";

function HomeHero() {
  return (
    <section>
      <div className="bg-alkaligrey-200">
        <CombinedNavigation headerBackground="bg-alkaligrey-200" />
        <div className="pt-24 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-4xl md:text-6xl lg:text-7xl max-w-6xl leading-normal">
              Digital Experiences and Marketing Solutions Tailored for You
            </h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-4xl m-auto text-xl lg:text-2xl">
              Alkali is a full service digital marketing company that designs, develops, and markets digital experiences designed to grow your business.
            </p>
          </div>
        </div>
        <div className="max-w-7xl flex-col md:flex-row justify-center flex m-auto pb-36 items-center space-y-8 md:space-y-0 space-x-0 md:space-x-10">
            <Modal
              style="p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
              text="Schedule a Discovery Call"
            />
              <a
                href=""
                className="p-4 shadow-2xl px-16 font-semibold text-text-alkaligrey-600 border border-alkaligrey-600 rounded-md transition duration-500 ease-in-out hover:bg-alkaligrey-600 hover:text-white"
              >
                View Services
              </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
