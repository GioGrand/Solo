import { useStore } from '../App'
import PeriodItem from './PeriodItem'

function PeriodSelector() {
  const rootStore = useStore()

  return <div className="periodSelector">
    {rootStore.periods.map(p => <PeriodItem period={p} key={p} />)}
  </div>
}

export default PeriodSelector