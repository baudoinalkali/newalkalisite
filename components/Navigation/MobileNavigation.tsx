import MobileDropdown from "./mobileDropdown"
import Image from 'next/image'
const MobileNav = props => {
    return (
        <nav>
            <div className="max-w-7xl flex m-auto justify-between items-center py-7 px-7">
                <div className="">
                    <a href="">
                        <Image
                            src="/images/alkali-logo-white.svg"
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