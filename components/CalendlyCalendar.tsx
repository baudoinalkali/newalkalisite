import { InlineWidget } from "react-calendly";

const CalendlyCalendar = () => {
  return (
    <div className="App">
    <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/nbaudoin?embed=true"></div>
    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
    </div>
  );
};

export default CalendlyCalendar;