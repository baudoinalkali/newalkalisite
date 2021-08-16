import ClientCardContainer from "../components/Clients/ClientCardContainer";
import Header from "../components/Header";
import ClientMainPage from "../content/clientPages/clientMainPage";
import ClientCard from "../components/Clients/ClientCard";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";

function Clients() {
  const testClient = ClientMainPage[0];
  return (
    <div>
      <div className="bg-alkaligrey-300 px-7">
        <CombinedNavigation headerBackground="bg-alkaligrey-300" />
        <div className="py-20 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
              Our Clients
            </h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">
              See some of the projects we have had the pleasure to work on and
              the clients we have had the honor to serve.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto pt-36">
        <ClientCardContainer>
          {ClientMainPage.map((clientMainPage, idx) => (
            <ClientCard
              key={idx}
              name={clientMainPage.name}
              backgroundColor={clientMainPage.backgroundColor}
              backgroundImage={clientMainPage.backgroundImage}
              slug={clientMainPage.slug}
              industry={clientMainPage.industry}
            />
          ))}
        </ClientCardContainer>
      </div>
    </div>
  );
}

export default Clients;
