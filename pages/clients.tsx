import ClientCardContainer from '../components/Clients/ClientCardContainer'
import Header from '../components/Header'
import ClientMainPage from '../content/clientPages/clientMainPage'
import ClientCard from '../components/Clients/ClientCard'
import CombinedNavigation from '../components/Navigation/CombinedNavigation'

function Clients() {
  const testClient = ClientMainPage[0];
  return <div>
    <CombinedNavigation />
    <div className="pt-36 pb-24 flex max-w-6xl justify-center m-auto">
      <div className="text-center bg-alkaligrey-500 mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        All
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        Web Design
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        E-commerce
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        SEO
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        Social
      </div>
    </div>
    <ClientCardContainer>
      {ClientMainPage.map(clientMainPage =>
        <ClientCard
          name={clientMainPage.name}
          backgroundImg={clientMainPage.backgroundImg}
          slug={clientMainPage.slug}
        />
      )}
    </ClientCardContainer>
    <div className="max-w-7xl m-auto">
    <div className="grid grid-cols-3 space-x-20">
      <div className="rounded-md shadow-2xl pt-7 px-7 h-[300px] overflow-hidden">
          <div className="font-bold text-4xl">Carro</div>
          <div>Technology</div>
          <img className="pt-10" src="/images/clients/carro/page-preview.png"></img>
      </div>
      <div className="rounded-md shadow-2xl">
          <div>Carro</div>
          <div>Technology</div>
          <img src=""></img>
      </div>
      <div className="rounded-md shadow-2xl">
          <div>Carro</div>
          <div>Technology</div>
          <img src=""></img>
      </div>
    </div>
    </div>
  </div>
}

export default Clients