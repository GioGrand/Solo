import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import { formatBookingDate } from "../utils/date";

const Footer = observer(() => {
  const { selectedDay, selectedTime, requestBooking } = useStore();

  const handleRequestBooking = () => {
    requestBooking();
  };

  return (
    <div className="footer">
      <div>
        <p>
          <b>
            {selectedDay && selectedTime
              ? formatBookingDate(selectedDay, selectedTime)
              : "Please select a time"}
          </b>
        </p>
        <p>0 professionals available</p>
      </div>
      <button
        onClick={handleRequestBooking}
        className={`bookButton ${!selectedTime ? "disabled" : ""}`}
        disabled={!selectedTime}
      >
        Book Now
      </button>
    </div>
  );
});

export default Footer;
