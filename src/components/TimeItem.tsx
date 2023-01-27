import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import { isUnavailableTime } from "../utils/date";
interface Props {
  time: string;
}

const TimeItem = observer(({ time }: Props) => {
  const rootStore = useStore();

  const handleSelectTime = () => {
    rootStore.setSelectedTime(time);
  };

  const isSelectedTime = rootStore.selectedTime === time;

  return (
    <button
      onClick={handleSelectTime}
      className={`timeItem ${isSelectedTime ? "selected" : ""} ${
        isUnavailableTime(time) ? "disabled" : ""
      }`}
    >
      {time}
    </button>
  );
});

export default TimeItem;
