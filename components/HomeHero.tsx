import Modal from '../components/Modal'
import CombinedNavigation from '../components/Navigation/CombinedNavigation'

function HomeHero() {
  return <section>
    <div className="bg-alkaligrey-200">
      <CombinedNavigation />
      <div className="pt-24 flex text-center justify-center z-20">
        <div className="relative z-20">
          <p className="text-alkaligrey-800 uppercase font-medium text-lg">Our Mission</p>
          <h1 className="text-alkaligrey-800 font-bold pt-5 text-4xl md:text-6xl lg:text-7xl max-w-6xl">Ehancing Your Online Presence Made Easy</h1>
          <p className="text-white py-10 text-alkaligrey-800 max-w-4xl m-auto text-xl lg:text-2xl">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
      </div>
      <div className="max-w-7xl justify-center flex m-auto pb-36">
        <span>
          <Modal
            style="p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
            text="Schedule a Discovery Call"
          />
          <a href="/#services"><a href="" className="p-4 shadow-2xl px-12 font-semibold ml-5 text-text-alkaligrey-600 mt-48 border border-alkaligrey-600 rounded-md transition duration-500 ease-in-out hover:bg-alkaligrey-600 hover:text-white transform hover:-translate-y-1 hover:scale-110">View Services</a></a>
        </span>
      </div>
    </div>
  </section>
}

export default HomeHero