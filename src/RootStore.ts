import { makeObservable, observable } from "mobx";

import { getDays, getHours, Period } from "./utils/date";

class RootStore {
  days: string[] = [];
  times: string[] = [];
  periods: Period[] = [
    Period.Anytime,
    Period.Morning,
    Period.Afternoon,
    Period.Evening,
  ];

  selectedDay: string | null = null;
  selectedTime: string | null = null;
  selectedPeriod: Period | null = null;

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectedTime: observable,
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
    this.selectedTime = time;
  };

  setSelectedPeriod = (period: Period) => {
    this.selectedPeriod = period;
  };

  requestBooking = () => {
    alert("Booking requested!");
  };

  clearSelectedTime = () => {
    this.selectedTime = null;
  };
}

export default RootStore;
