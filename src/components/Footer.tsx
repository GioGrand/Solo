import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import { formatBookingDate } from "../utils/date";

const Footer = observer(() => {
  const {
    selectedDay,
    numberOfPros,
    loadingPros,
    selectedTime,
    requestBooking,
  } = useStore();

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
        <p>
          {loadingPros
            ? "..."
            : `${numberOfPros} propfessional${
                numberOfPros === 1 ? "" : "s"
              } available`}
        </p>
      </div>
      <button
        onClick={handleRequestBooking}
        className={`bookButton ${!selectedTime ? "disabled" : ""}`}
        disabled={!selectedTime || numberOfPros === 0}
      >
        Book Now
      </button>
    </div>
  );
});

export default Footer;
