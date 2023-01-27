import { makeObservable, observable } from "mobx";

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

    this.days = [
      "2021-01-01",
      "2021-01-02",
      "2021-01-03",
      "2021-01-04",
      "2021-01-05",
    ];
  }

  requestBooking = () => {
    alert("Booking requested!");
  };
}

export default RootStore;
