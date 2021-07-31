import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'
import DesktopNavigationTest from './DesktopNavigationTest'

const CombinedNavigation = props => {
    return (
        <div>
            <div className="contents lg:hidden">
                <MobileNavigation
                    headerColor={props.headerColor}
                />
            </div>
            <div className="fixed hidden lg:contents">
                <DesktopNavigationTest
                    headerColor={props.headerColor}
                />
            </div>
        </div>
    )
}
export default CombinedNavigation