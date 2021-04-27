import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

const CombinedNavigation = props => {
    return (
        <div>
            <div className="contents lg:hidden">
                <MobileNavigation
                />
            </div>
            <div className="hidden lg:contents">
                <DesktopNavigation
                    headerColor={props.headerColor}
                />
            </div>
        </div>
    )
}
export default CombinedNavigation