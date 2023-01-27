import { useStore } from "../App";

import DayItem from "./DayItem";

const DayList = () => {
  const { days } = useStore();

  return (
    <div className="dayList">
      {days.map((d) => (
        <DayItem day={d} key={d} />
      ))}
    </div>
  );
};

export default DayList;
