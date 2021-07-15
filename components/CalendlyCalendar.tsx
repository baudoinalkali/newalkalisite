import { InlineWidget } from "react-calendly";

const CalendlyCalendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/alkali/lsa-consultation" styles={{height: '800px'}}/>
    </div>
  );
};

export default CalendlyCalendar;