import { makeObservable, observable } from "mobx";

import { getDays, getHours, Period } from "./utils/date";
import { getConfirmationText } from "./utils/form";

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

  numberOfPros: number;

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectedTime: observable,
      selectedPeriod: observable,
      numberOfPros: observable,
    });

    this.times = getHours("06:00", "22:00", 15);

    this.days = getDays(4);

    this.selectedDay = this.days[0];

    this.selectedPeriod = this.periods[0];

    this.numberOfPros = 0;
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
    if (!this.selectedTime || !this.selectedDay) return null;
    alert(
      getConfirmationText(
        this.selectedTime,
        this.selectedDay,
        this.numberOfPros
      )
    );
  };

  setNumberOfPros = (number: number) => {
    this.numberOfPros = number;
  };

  clearSelectedTime = () => {
    this.selectedTime = null;
  };
}

export default RootStore;
