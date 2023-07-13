var year, month, date, hour, minute, second, today;

var dayString = new Array(
  "Sunday",
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

var monthString = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convert(input) {
  var output = "0" + input;
  return output.substring(output.length - 2, output.length);
}

function now() {
  dt = new Date();
  year = dt.getFullYear();
  month = dt.getMonth();
  day = dt.getDay();
  date = dt.getDate();
  hour = dt.getHours();
  minute = dt.getMinutes();
  second = dt.getSeconds();

  today0 =
    dayString[day] +
    " " +
    convert(date) +
    " " +
    monthString[month] +
    " " +
    (year) +
    "<br>" +
    convert(hour) +
    " Hr. " +
    convert(minute) +
    " Min. " +
    convert(second)+
    " Sec. ";
  today1 =
    convert(date) +
    "/" +
    convert(month) +
    "/" +
    convert(year + 543) +
    " - " +
    convert(hour) +
    " : " +
    convert(minute) +
    " : " +
    convert(second);
  if (hour >= 12) {
    hour -= 12;
    half = "PM";
  } else {
    half = "AM";
  }
  today2 =
    convert(date) +
    "/" +
    convert(month) +
    "/" +
    convert(year + 543) +
    " - " +
    convert(hour) +
    " : " +
    convert(minute) +
    " : " +
    convert(second) +
    half;
  document.getElementById("dPanel").innerHTML =
    today0 + "<br>" + today1 + "<br>" + today2;
  console.log();
  setTimeout("now()", 1000);
}
