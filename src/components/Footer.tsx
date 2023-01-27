import { observer } from "mobx-react-lite";
import { useStore } from "../App";
import { formatBookingDate } from "../utils/date";

const Footer = observer(() => {
  const { selectedDay, selectedTime } = useStore();

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
      <button className="bookButton">Book Now</button>
    </div>
  );
});

export default Footer;
