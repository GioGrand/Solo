import { makeObservable, observable } from "mobx";
import { getDays } from "./utils/date";

class RootStore {
  days: string[] = [];
  times: number[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    });

    this.times = [
      6.0, 6.15, 6.3, 6.45, 7.0, 7.15, 7.3, 7.45, 8.0, 8.15, 8.3, 8.45,
    ];

    this.days = getDays(4);
  }

  requestBooking = () => {
    alert("Booking requested!");
  };
}

export default RootStore;
