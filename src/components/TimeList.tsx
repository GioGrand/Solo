import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import TimeItem from "./TimeItem";

const TimeList = observer(() => {
  const { filteredTimes } = useStore();

  return (
    <div className="timeList">
      {filteredTimes.map((t) => (
        <TimeItem time={t} key={t} />
      ))}
    </div>
  );
});

export default TimeList;
