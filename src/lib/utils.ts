export const isDifferentDate = (date1: Date, date2: Date) => {
  return date1.toISOString().slice(0, 10) !== date2.toISOString().slice(0, 10);
};
