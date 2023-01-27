import { formatDate } from "../utils/date";

interface Props {
  day: string;
}

const DayItem = ({ day }: Props) => {
  return <button className="dayItem">{formatDate(day)}</button>;
};

export default DayItem;
