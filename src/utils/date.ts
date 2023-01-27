import moment from "moment";

enum Period {
  Anytime = "Anytime",
  Morning = "Morning",
  Afternoon = "Afternoon",
  Evening = "Evening",
}

const PeriodMap = {
  [Period.Anytime]: {
    start: "06:00",
    end: "21.45",
  },
  [Period.Morning]: {
    start: "06:00",
    end: "11.45",
  },
  [Period.Afternoon]: {
    start: "12:00",
    end: "16.45",
  },
  [Period.Evening]: {
    start: "15:00",
    end: "21.45",
  },
};

/**
 * @param date The input date
 * Converts a date: 2021-01-05 => Jan 5th 2021
 */
const formatDate = (date: string) => {
  return moment(date, "YYYY-MM-DD").format("MMM Do YYYY");
};

/**
 * @param time The input time
 * Converts a time: 6.75 => 6:45
 */
const formatTime = (time: number) => {
  return moment(time, "HH.mm").format("HH:mm");
};

/**
 * @param weeks The number of weeks
 * Generates an array of dates for the n next weeks including today
 */
const getDays = (weeks: number) => {
  const days = [];

  // +1 to include current day
  const numberOfDays = weeks * 7 + 1;

  for (let i = 0; i < numberOfDays; i++) {
    const day = moment().add(i, "days");

    days.push(day.format("YYYY-MM-DD"));
  }

  return days;
};

/**
 * @param startTime The initial time
 * @param endTime The final time
 * @param interval Interval in minutes
 * Generates an array of time for the specified timeframe
 */
const getHours = (startTime: string, endTime: string, interval: number) => {
  const start = moment(startTime, "hh:mm");
  const end = moment(endTime, "hh:mm");

  const intervals = moment.duration(end.diff(start)).as("minutes");

  const res = [];
  for (let i = 0; i <= intervals; i += interval) {
    start.add(i === 0 ? 0 : interval, "minutes");
    res.push(start.format("HH:mm"));
  }

  return res.slice(0, -1);
};

/**
 * @param day Selected day
 * @param time Selected time
 * Generates a date as: 12:30 on Tue 2nd January 21
 */
const formatBookingDate = (day: string, time: string) => {
  const date = moment(day);
  const t = moment(time, "HH:mm");

  date.set({
    hour: t.get("hour"),
    minute: t.get("minute"),
  });

  return date.format("HH:mm on ddd Do MMMM YY");
};

/**
 * @param time item time
 * Checks if the time is disabled
 */
const isUnavailableTime = (time: string) => {
  const t = moment(time, "HH:mm");
  const res = moment().add(2, "hour").isSameOrAfter(t);
  return res;
};

/**
 * @param time item time
 * @param period selected period
 * Returns a filtered list depending on the period
 */
const filterTimes = (times: string[], period: Period) => {
  const startTime = moment(PeriodMap[period].start, "HH:mm");
  const endTime = moment(PeriodMap[period].end, "HH:mm");

  const res = times.filter((date: string) => {
    const momentDate = moment(date, "HH:mm");

    return (
      momentDate.isSameOrBefore(endTime) && momentDate.isSameOrAfter(startTime)
    );
  });

  return res;
};

export {
  formatDate,
  formatTime,
  isUnavailableTime,
  getDays,
  formatBookingDate,
  getHours,
  filterTimes,
  Period,
};
