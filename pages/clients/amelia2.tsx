import ClientCardContainer from "../../components/Clients/ClientCardContainer";
import AmeliaSlide from "../../content/testimonials";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import StandardImage from "../../components/StandardImage";
import StandardTextBlock from "../../components/StandardTextBlock";
import ClientCard from "../../components/Clients/ClientCard";
import AmeliaContent from "../../content/clientPages/clientContent";
import ClientHeader from "../../components/Clients/ClientHeader";
import ClientAbout from "../../components/Clients/ClientAbout";
import dynamic from 'next/dynamic';
import ClientScheduleCTA from "../../components/Clients/ClientScheduleCTA";
import clientMainPage from "../../content/clientPages/clientMainPage";
import Head from "next/head";
const TestimonialSlide = dynamic(() => import("../../components/TestimonialSlide"));
const ResponsiveScreens = dynamic(() => import("../../components/ResponsiveScreens"));

import ClientPage from '../../components/Clients/ClientPage';

function Amelia() {
  return(
    <>
      <ClientPage clientContent={AmeliaContent} /> 
    </>
  )
}

export default Amelia;
