import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import moment from "moment";

import { useStore } from "../App";
import mockApi from "../mockApi";
import { formatBookingDate } from "../utils/date";

const Footer = observer(() => {
  const { selectedDay, selectedTime, requestBooking } = useStore();
  const [numberOfPros, setNumberOfPros] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRequestBooking = () => {
    requestBooking();
  };

  useEffect(() => {
    const fetchPros = async () => {
      try {
        setLoading(true);
        if (!selectedDay) return;
        const dayNumber = moment(selectedDay).day();
        const res = await mockApi.getNumberOfPros(dayNumber);
        setNumberOfPros(res > 0 ? res : 0);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchPros();
  }, [selectedDay]);

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
          {loading
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
