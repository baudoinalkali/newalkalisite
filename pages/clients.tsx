import ClientCardContainer from "../components/Clients/ClientCardContainer";
import ClientMainPage from "../content/clientPages/clientMainPage";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import ClientCard from "../components/Clients/ClientCardTest2";
import Head from "next/head";

function Clients() {
  return (
    <div>
      <Head>
        <title>Clients | Alkali</title>
        <meta name="description" content="A collection of projects we have had the pleasure to work on. Learn more about our previous digital marketing projects." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Clients | Alkali" />
        <meta property="og:description" content="A collection of projects we have had the pleasure to work on. Learn more about our previous digital marketing projects." />
        <meta property="og:url" content="/" />
        <meta property="og:site_name" content="Alkali" />
        <meta property="article:modified_time" content="2021-08-05T14:33:32+00:00" />
        <meta property="og:image" content="/images/facebook-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
