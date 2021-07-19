import ClientCardContainer from '../components/Clients/ClientCardContainer'
import Header from '../components/Header'
import ClientMainPage from '../content/clientPages/clientMainPage'
import ClientCard from '../components/Clients/ClientCard'
import CombinedNavigation from '../components/Navigation/CombinedNavigation'
import ClientCardTest from '../components/Clients/ClientCardTest'

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
            pageImage={clientMainPage.pageImage}
            slug={clientMainPage.slug}
            industry={clientMainPage.industry}
          />
        )}
      </ClientCardContainer>
    </div>
  </div>
}

export default Clients