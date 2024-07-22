// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  dayName = new Date(dateString).toLocaleString("en-US", { weekday: "long" });

  return dayName;
}

console.log(getDayName("10/11/2009"));
