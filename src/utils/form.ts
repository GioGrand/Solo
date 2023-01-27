import moment from "moment";

const getConfirmationText = (
  time: string,
  date: string,
  numberOfProps: number
) => {
  return `Your booking has been made for ${time} on ${moment(date).format(
    "ddd Do MMMM YY"
  )}. We have sent your request to ${numberOfProps} professional${
    numberOfProps === 1 ? "" : "s"
  }`;
};

export { getConfirmationText };
