export function showCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  //   console.log(formattedDate);
  return formattedDate;
}
