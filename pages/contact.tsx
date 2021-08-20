import CombinedNavigation from "../components/Navigation/CombinedNavigation";

function Contact() {
  return (
    <div>
      <div className="bg-alkaligrey-200">
        <CombinedNavigation headerBackground="bg-alkaligrey-200" />
        <div className="py-20 pb-64 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
              Contact
            </h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">
              Get in touch and let us know how we can help.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-0 gap-y-24 lg:gap-y-0 md:gap-x-10 mx-7 xl:mx-auto justify-between items-center max-w-7xl -mt-32">
        <div className="rounded-md shadow-2xl p-14 bg-white">
          <div className="">
            <img
              className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl mx-auto"
              src="../images/alkalismall.png"
            />
          </div>
          <h2 className="text-center py-3 pt-11 text-xl font-medium">Chat</h2>
          <p className="text-center max-w-xs text-lg pb-7">
            We'd love to talk about how we can work together.
          </p>
          <div className="flex justify-center">
            <button className="p-2 px-8 font-medium shadow-2xl rounded-md bg-alkali-500 text-white">
              Start Chat
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-2xl p-14 bg-white">
          <div className="">
            <img
              className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl mx-auto"
              src="../images/alkalismall.png"
            />
          </div>
          <h2 className="text-center py-3 pt-11 text-xl font-medium">Chat</h2>
          <p className="text-center max-w-xs text-lg pb-7">
            We'd love to talk about how we can work together.
          </p>
          <div className="flex justify-center">
            <button className="p-2 px-8 font-medium shadow-2xl rounded-md bg-alkali-500 text-white">
              Send Email
            </button>
          </div>
        </div>
        <div className="rounded-md shadow-2xl p-14 bg-white">
          <div className="">
            <img
              className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl mx-auto"
              src="../images/alkalismall.png"
            />
          </div>
          <h2 className="text-center py-3 pt-11 text-xl font-medium">Chat</h2>
          <p className="text-center max-w-xs text-lg pb-7">
            We'd love to talk about how we can work together.
          </p>
          <div className="flex justify-center">
            <button className="p-2 px-12 font-medium shadow-2xl rounded-md bg-alkali-500 text-white hover:bg-alkali-700">
              Call Us
            </button>
          </div>
        </div>
      </div>
      <section></section>
    </div>
  );
}

export default Contact;
