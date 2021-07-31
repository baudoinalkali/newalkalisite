import MobileDropdown from "./mobileDropdown"
import Image from 'next/image'
const MobileNav = props => {
    const headerLogoColor = () => {
        return `${props.headerColor === "white" ? '/images/alkali-logo-white.svg' : '/images/alkali-logo-blue.svg'}`
    }
    return (
        <nav>
            <div className="max-w-7xl flex m-auto justify-between items-center px-7 py-7">
                <div className="">
                    <a href="/">
                        <Image
                            src={`${headerLogoColor()}`}
                            width={160}
                            height={34}
                            alt=""
                        />
                    </a>
                </div>
                <div className="">
                    <MobileDropdown 
                    headerColor={props.headerColor}
                    />
                </div>
            </div>
        </nav>
    )
}

export default MobileNav