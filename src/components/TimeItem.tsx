import { formatTime } from "../utils/date";

interface Props {
  time: number;
}

const TimeItem = ({ time }: Props) => {
  return <button className="timeItem">{formatTime(time)}</button>;
};

export default TimeItem;
