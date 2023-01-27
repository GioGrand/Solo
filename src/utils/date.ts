import moment from "moment";

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

export { formatDate, formatTime, getDays };
