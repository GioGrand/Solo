import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import { filterTimes } from "../utils/date";
import TimeItem from "./TimeItem";

const TimeList = observer(() => {
  const { times, selectedPeriod } = useStore();

  const list = selectedPeriod ? filterTimes(times, selectedPeriod) : times;

  return (
    <div className="timeList">
      {list.map((t) => (
        <TimeItem time={t} key={t} />
      ))}
    </div>
  );
});

export default TimeList;
