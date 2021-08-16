import SplitTextImageAlt from "../components/SplitTextImageAlt";
import CombinedNavigation from "../components/Navigation/CombinedNavigation";
import ServiceBlocks from "../components/Services/ServiceBlocks";
import ServiceLeadSection from "../components/ServiceLeadSection";
import AboutContent from "../content/about";
import dynamic from 'next/dynamic';
const TestimonialSlide = dynamic(() => import("../components/TestimonialSlide"));

export default function About() {
  return (
    <div className="">
      <div className="bg-alkaligrey-300">
        <CombinedNavigation headerBackground="bg-alkaligrey-300" />
        <div className="py-20 flex text-center justify-center z-20">
          <div className="relative z-20">
            <h1 className="text-alkaligrey-800 font-bold pt-5 text-5xl lg:text-6xl max-w-6xl">
              About Alkali
            </h1>
            <p className="text-white py-10 text-alkaligrey-800 max-w-2xl m-auto text-xl lg:text-2xl">
              Learn more about Alkali and the values that drive us to deliver
              for our clients, employees, and partners.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <SplitTextImageAlt
          style="py-36 z-0"
          title="Constantly Evolving"
          image="/images/custom-built.png"
          text="Alkali, formerly Alkali Designs, was founded in 2015 as a web design and development company. Over the years, we have expanded our service offerings to meet the needs of our clients. We pride ourselves on being technology and marketing experts that are deeply client-oriented. We strive to bring our diverse experiences and knowledge to every client engagement, providing the best possible outcome. We have the technology and marketing experience to bring your vision to life and the commitment to client satisfaction to leave no stone unturned while doing so."
        />
      </div>
      <div className="bg-alkaligrey-300 py-36">
        <div className="px-7 pb-36 2xl:px-0">
        <h6 className="text-4xl md:text-5xl text-center font-bold m-auto leading-tight pb-20">
          Our SEO Services
        </h6>
        <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
          {AboutContent.values.map((values) => (
            <ServiceBlocks
              serviceTitle={values.serviceTitle}
              serviceText={values.serviceText}
              image={values.image}
              altText={values.altText}
            />
          ))}
        </div>
      </div>
        <div className="px-7 -mb-80">
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            brandColor="#00baff"
            background="/images/clients/bobtail/slide-bg.jpg"
            company="Alkali Designs"
            logo="/images/alkali-logo-white.svg"
            logoWidth={160}
            logoHeight={35}
            altText="test"
            name="Nick Baudoin, Owner"
            quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
          />
        </div>
      </div>
      <div className="">
        <SplitTextImageAlt
          style="py-36 pt-80 z-0"
          title="Why we do what we do"
          image="/images/custom-built.png"
          text="At our core, we genuinely believe that for a business to succeed, they need to have a well-rounded online presence. We don’t look at our services as one-off tasks that need to get checked off for a business to succeed. When a potential client comes to us and says they need help, we don’t say yes and start working. Instead, we spend the time to gain a deep understanding of their business, their struggles, and goals, and we proceed with those front and center. Our solutions have the opportunity to drastically impact a business for the better, and we do everything we can to make sure they do."
        />
      </div>
      <div className="pt-80">
        <h3 className="text-4xl md:text-5xl pt-2 pb-24 font-bold text-center">
          Don't Just Take Our Word For It
        </h3>
      </div>
      <section className="">
        <div className="grid grid-cols-3 gap-x-10 mb-36">
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client
              testimonial Client testimonial Client testimonial.Client
              testimonial Client testimonial Client testimonial Client
              testimonial Client testimonial Client testimonial.
            </div>
            <div
              className="flex px-10 py-7 items-center gap-x-10 rounded-b-md"
              style={{ backgroundColor: "#07433f" }}
            >
              <div>
                <img src="/images/clients/bobtail/logo.svg" />
              </div>
              <div className="text-white">Client Name</div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client
              testimonial Client testimonial Client testimonial.Client
              testimonial Client testimonial Client testimonial Client
              testimonial Client testimonial Client testimonial.
            </div>
            <div
              className="flex px-10 py-7 items-center gap-x-10 rounded-b-md"
              style={{ backgroundColor: "#f9a8d4" }}
            >
              <div>
                <img width="90" src="/images/clients/carro/logo.svg" />
              </div>
              <div className="text-white">Client Name</div>
            </div>
          </div>
          <div className="shadow-2xl rounded-md bg-white">
            <div className="p-10 py-14">
              Client testimonial Client testimonial Client testimonial Client
              testimonial Client testimonial Client testimonial.Client
              testimonial Client testimonial Client testimonial Client
              testimonial Client testimonial Client testimonial.
            </div>
            <div
              className="flex px-10 py-7 items-center gap-x-10 rounded-b-md"
              style={{ backgroundColor: "#ff936b" }}
            >
              <div>
                <img width="90" src="/images/clients/ben/logo.svg" />
              </div>
              <div>Client Name</div>
            </div>
          </div>
        </div>
        <div className="w-5/6 lg:w-full m-auto bg-alkali-500 py-24 mb-24">
          <h5 className="text-4xl text-center text-white font-bold m-auto leading-tight">
            Your Next Adventure is Waiting
          </h5>
          <p className="text-white pt-7 pb-10 text-center max-w-md m-auto text-lg font-normal">
            If our values align with yours, we'd love to connect. Check out our
            open positions.
          </p>
          <div className="flex justify-center">
            <button className="p-4 px-6 font-semibold text-white hover:text-alkali-500 hover:bg-white rounded-md transition duration-500 ease-in-out border border-white">
              See Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
