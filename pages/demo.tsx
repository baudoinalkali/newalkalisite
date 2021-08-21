import Modal from '../components/Modal'
import SiteMap from '../content/siteMap'
import SiteMapContainer from '../components/SiteMapContainer'
import Image from 'next/image'

const Demo = (props) => {
    return (
        <div>
    <div className="meetings-iframe-container" style={{height: "300px"}} data-src="https://meetings.hubspot.com/baudoin?embed=true"></div>
    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
        </div>
    )
}

export default Demo