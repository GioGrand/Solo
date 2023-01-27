import { makeObservable, observable } from "mobx";

import { getDays, getHours } from "./utils/date";

class RootStore {
  days: string[] = [];
  times: string[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    });

    this.times = getHours("06:00", "22:00", 15);

    this.days = getDays(4);
  }

  requestBooking = () => {
    alert("Booking requested!");
  };
}

export default RootStore;
