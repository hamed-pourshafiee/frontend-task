// format date object to desired string - e.g. 10-23-2021 8:48 PM
const formatDate = (): string => {
  const newDate = new Date();
  const sMonth = padValue(newDate.getMonth() + 1);
  const sDay = padValue(newDate.getDate());
  const sYear = newDate.getFullYear();
  let sHour = newDate.getHours();
  const sMinute = padValue(newDate.getMinutes());
  let sAMPM = 'AM';
  const iHourCheck = sHour;
  if (iHourCheck > 12) {
    sAMPM = 'PM';
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = 12;
  }
  sHour = padValue(sHour);
  return `${sMonth}-${sDay}-${sYear} ${sHour}:${sMinute} ${sAMPM}`;
};
export default formatDate;

const padValue = (value: number): number => (value < 10 ? 0 + value : value);
