import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import { formatDate } from "../utils/date";

interface Props {
  day: string;
}

const DayItem = observer(({ day }: Props) => {
  const rootStore = useStore();

  const handleSelectDay = () => {
    rootStore.setSelectedDay(day);
    rootStore.clearSelectedTime();
  };

  const isSelectedDay = rootStore.selectedDay === day;

  return (
    <button
      onClick={handleSelectDay}
      className={`dayItem ${isSelectedDay ? "selected" : ""}`}
    >
      {formatDate(day)}
    </button>
  );
});

export default DayItem;
