import CombinedNavigation from "../components/Navigation/CombinedNavigation";

function Contact() {
  return (
    <div>
      <div className="bg-alkaligrey-200">
        <CombinedNavigation headerBackground="bg-alkaligrey-200" />
        <div className="mx-7 xl:mx-auto max-w-7xl m-auto py-44 pb-80">
          <h1 className="text-6xl font-bold">Contact</h1>
          <p className="text-xl pt-7">
            Get in touch and let us know how we can help.
          </p>
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
          <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
            Chat Now
          </button>
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
          <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
            Chat Now
          </button>
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
          <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
            Chat Now
          </button>
        </div>
      </div>
      <section></section>
    </div>
  );
}

export default Contact;
