import { makeObservable, observable } from "mobx";

import { getDays, getHours } from "./utils/date";

class RootStore {
  days: string[] = [];
  times: string[] = [];
  periods = ["Anytime", "Morning", "Afternoon", "Evening"];

  selectedDay: string | null = null;
  selectetTime: string | null = null;
  selectedPeriod: string | null = null;

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectetTime: observable,
      selectedPeriod: observable,
    });

    this.times = getHours("06:00", "22:00", 15);

    this.days = getDays(4);

    this.selectedDay = this.days[0];

    this.selectedPeriod = this.periods[0];
  }

  setSelectedDay = (day: string) => {
    this.selectedDay = day;
  };

  setSelectedTime = (time: string) => {
    this.selectetTime = time;
  };

  setSelectedPeriod = (period: string) => {
    this.selectedPeriod = period;
  };

  requestBooking = () => {
    alert("Booking requested!");
  };

  clearSelectedTime = () => {
    this.selectetTime = null;
  };
}

export default RootStore;
