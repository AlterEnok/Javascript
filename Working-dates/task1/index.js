const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const getDayOfWeek = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);

  return weekDays[newDate.getDay()];
};
const result = getDayOfWeek(new Date(2022, 2, 1), 4);

console.log(result);
