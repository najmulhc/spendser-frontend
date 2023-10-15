import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

function getTimeDifference(time:number) {
  console.log(new Date().getTime());
  const yearsDifference = differenceInYears(
    new Date().getTime(),
    new Date(time)
  );
  const monthsDifference = differenceInMonths(
    new Date().getTime(),
    new Date(time)
  );
  const weeksDifference = differenceInWeeks(
    new Date().getTime(),
    new Date(time)
  );
  const daysDifference = differenceInDays(new Date(), new Date(time));
  const hoursDifference = differenceInHours(new Date(), new Date(time));
  const minutessDifference = differenceInMinutes(new Date(), new Date(time));

  if (yearsDifference !== 0) {
    return { value: yearsDifference, unit: "years" };
  } else if (monthsDifference !== 0) {
    return { value: monthsDifference, unit: "months" };
  } else if (weeksDifference !== 0) {
    return { value: weeksDifference, unit: "weeks" };
  } else if (daysDifference !== 0) {
    return { value: daysDifference, unit: "days" };
  } else if (hoursDifference !== 0) {
    return { value: hoursDifference, unit: "hours" };
  } else {
    return {
      value: minutessDifference,
      units: "minutes",
    };
  }
}

export default getTimeDifference;
