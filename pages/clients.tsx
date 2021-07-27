import ClientCardContainer from '../components/Clients/ClientCardContainer'
import Header from '../components/Header'
import ClientMainPage from '../content/clientPages/clientMainPage'
import ClientCard from '../components/Clients/ClientCard'
import CombinedNavigation from '../components/Navigation/CombinedNavigation'
import ClientCardTest from '../components/Clients/ClientCardTest'
import ClientCardTest2 from '../components/Clients/ClientCardTest2'

function Clients() {
  const testClient = ClientMainPage[0];
  return <div>
    <CombinedNavigation />
    <div className="bg-alkali-500 px-7">
      <div className="App max-w-7xl m-auto" style={{ position: 'relative', overflow: "hidden" }}>
        <div style={{ position: 'absolute' }}>
          <div className="w-screen h-screen">
          </div>

        </div>
        <div className="flex justify-between items-center py-24 relative">
          <div className="">
            <h1 className="portfolio-title text-white uppercase text-md font-bold"></h1>
            <h2 className="text-4xl md:text-6xl text-white font-bold max-w-4xl leading-normal">Our Clients</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl m-auto py-24">
      <ClientCardContainer>
        {ClientMainPage.map(clientMainPage =>
          <ClientCardTest
            name={clientMainPage.name}
            backgroundColor={clientMainPage.backgroundColor}
            backgroundImage={clientMainPage.backgroundImage}
            slug={clientMainPage.slug}
            industry={clientMainPage.industry}
          />
        )}
      </ClientCardContainer>
    </div>
    <div className="max-w-7xl m-auto py-24">
      <ClientCardContainer>
        {ClientMainPage.map(clientMainPage =>
          <ClientCardTest2
            name={clientMainPage.name}
            backgroundColor={clientMainPage.backgroundColor}
            backgroundImage={clientMainPage.backgroundImage}
            slug={clientMainPage.slug}
            industry={clientMainPage.industry}
          />
        )}
      </ClientCardContainer>
    </div>
    <div className="grid grid-cols-3 max-w-7xl gap-y-10 m-auto">
      <div className="group duration-500 rounded shadow-2xl px-10 pb-10 m-auto client-card-bg" style={{ paddingTop: "22.4rem", width:"380px", backgroundImage: `url("/images/clients/carro/testimonial-bg.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: "#00baff" }}>
      <div className="justify-center p-4 px-6 w-48 m-auto font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-500 ease-in-out border border-white hidden group-hover:flex" style={{marginTop:"-9.5rem", marginBottom: "9.5rem"}}>View Project</div>
        <div className="text-white group-hover:hidden">Technology</div>
        <div className="font-bold text-4xl text-white group-hover:hidden">Carro</div>
      </div>
      <div className="rounded px-10 pb-10 m-auto" style={{ paddingTop: "22.4rem", width:"380px", backgroundImage: `url("/images/clients/bobtail/testimonial-bg.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="text-white">Technology</div>
        <div className="font-bold text-4xl text-white">Bobtail</div>
      </div>
      <div className="rounded pl-5 pb-10 m-auto" style={{ paddingTop: "20rem", width:"380px", backgroundImage: `url("/images/clients/ben/testimonial-bg.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="text-white">Non-profit</div>
        <div className="font-bold text-4xl text-white">Blockchain Education Network</div>
      </div>
      <div className="rounded pl-5 pb-10 m-auto" style={{ paddingTop: "22.4rem", width:"380px", backgroundImage: `url("/images/clients/chattr/testimonial-bg.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="text-white">Technology</div>
        <div className="font-bold text-4xl text-white">Chattr</div>
      </div>
    </div>
  </div>
}

export default Clients