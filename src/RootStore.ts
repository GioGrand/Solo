import moment from "moment";
import { computed, makeObservable, observable, runInAction } from "mobx";

import mockApi from "./mockApi";
import { filterTimes, getDays, getHours, Period } from "./utils/date";
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

  loadingPros: boolean = false;

  numberOfPros: number;

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      selectedTime: observable,
      selectedPeriod: observable,
      numberOfPros: observable,
      loadingPros: observable,
      filteredTimes: computed,
    });

    this.times = getHours("06:00", "22:00", 15);

    this.days = getDays(4);

    this.selectedDay = this.days[0];

    this.selectedPeriod = this.periods[0];

    this.numberOfPros = 0;
  }

  setSelectedDay = (day: string) => {
    this.selectedDay = day;
    this.fetchPros();
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

  get filteredTimes() {
    if (!this.selectedPeriod) return this.times;
    return filterTimes(this.times, this.selectedPeriod);
  }

  async fetchPros() {
    this.loadingPros = true;
    try {
      const dayNumber = moment(this.selectedDay).day();

      const pros = await mockApi.getNumberOfPros(dayNumber);

      runInAction(() => {
        this.numberOfPros = pros;
        this.loadingPros = false;
      });
    } catch (e) {
      runInAction(() => {
        this.loadingPros = false;
      });
    }
  }
}

export default RootStore;
