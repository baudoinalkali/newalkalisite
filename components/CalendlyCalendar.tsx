import { InlineWidget } from "react-calendly";

const CalendlyCalendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://meetings.hubspot.com/nbaudoin" styles={{height: '800px'}}/>
    </div>
  );
};

export default CalendlyCalendar;