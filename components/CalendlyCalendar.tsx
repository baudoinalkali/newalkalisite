import { InlineWidget } from "react-calendly";

const CalendlyCalendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://meetings.hubspot.com/baudoin/website-consultation?embed=true" styles={{height: '800px',}}/>
    </div>
  );
};

export default CalendlyCalendar;