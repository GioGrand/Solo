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

export { formatDate, formatTime };
