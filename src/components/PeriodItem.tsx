import { observer } from "mobx-react-lite";

import { useStore } from "../App";
import { Period } from "../utils/date";

interface Props {
  period: Period;
}

const PeriodItem = observer(({ period }: Props) => {
  const rootStore = useStore();

  const handleSelectPeriod = () => {
    rootStore.setSelectedPeriod(period);
  };

  const isSelectedPeriod = rootStore.selectedPeriod === period;

  return (
    <button
      onClick={handleSelectPeriod}
      className={`periodItem ${isSelectedPeriod ? "selected" : ""}`}
    >
      {period}
    </button>
  );
});

export default PeriodItem;
