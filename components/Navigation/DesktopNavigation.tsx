import Modal from '../../components/Modal'
import SiteMap from '../../content/siteMap'
import SiteMapContainer from '../../components/SiteMapContainer'
import Image from 'next/image'

const DesktopNavigation = (props) => {
    const headerDropDownColor = () => {
        return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'hover:text-alkali-500'} dropbtn font-bold uppercase inline-block p-5`
    }
    const headerLogoColor = () => {
        return `${props.headerColor === "white" ? '/images/alkali-logo-white.svg' : '/images/alkali-logo-blue.svg'}`
    }
    const headerCTAColor = () => {
        return `${props.headerColor === "white" ? 'text-alkaligrey-800 bg-white hover:bg-alkaligrey-700' : 'text-white bg-alkali-500 hover:bg-alkali-700'} p-3 px-6 font-semibold shadow-2xl rounded-md`
    }
    const headerNonDropDown = () => {
        return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'hover:text-alkali-500'} text-md font-bold uppercase inline-block p-5`
    }
    return (
        <div className="py-7">
            <div className="flex justify-between items-center max-w-7xl m-auto px-10 2xl:px-0">
                <div>
                    <a href="/">
                        <Image
                            src={headerLogoColor()}
                            width={160}
                            height={34}
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex justify-between items-center w-2/5 transition">
                    <div className="dropdownmega transition">
                        <button className={headerNonDropDown()}>Solutions
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdownmega-content bg-transparent z-30 transition">
                            <div className="pt-7">
                            </div>
                            <div className="bg-white border-t-2 border-alkali-500 shadow-2xl">
                                <div className="flex justify-between max-w-7xl m-auto py-14">
                                    <div className="items-center flex">
                                        <div>
                                            <h3 className="font-bold text-3xl">Our Services</h3>
                                            <p className="max-w-xs">Learn more about how we help your specific business.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-3xl pb-4">Digital Marketing</h3>
                                        {SiteMap.digitalMarketing.links.map(digitalMarketing =>
                                            <SiteMapContainer
                                                name={digitalMarketing.name}
                                                slug={digitalMarketing.slug}
                                            />
                                        )}
                                    </div>
                                    <div className="">
                                        <h3 className="font-bold text-3xl pb-4">Web Development</h3>
                                        {SiteMap.webDevelopment.links.map(webDevelopment =>
                                            <SiteMapContainer
                                                name={webDevelopment.name}
                                                slug={webDevelopment.slug}
                                            />
                                        )}
                                    </div>
                                    <div className="">
                                        <h3 className="font-bold text-3xl pb-4">Web Design</h3>
                                        {SiteMap.webDesign.links.map(webDesign =>
                                            <SiteMapContainer
                                                name={webDesign.name}
                                                slug={webDesign.slug}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className={headerNonDropDown()} href="/clients">Clients</a>
                    <a className={headerNonDropDown()} href="">About</a>
                    <a className={headerNonDropDown()} href="/contact">Contact</a>
                </div>
                <div>
                    <Modal
                        style={headerCTAColor()}
                        text="Schedule a Call"
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopNavigation