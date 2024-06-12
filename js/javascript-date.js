const date = new Date("2022-03-25"); // ()
console.log(date);

const ObjectString = new Date("October 13, 2014 11:13:00"); // object string (date string)
console.log("Object String", ObjectString);

const YearMonth = new Date(2018, 1); // year , month
console.log("Year Month :", YearMonth);

const YMD = new Date(2018, 11, 29); // year , month, day
console.log("Year Month Day :", YMD);

const YMDH = new Date(2018, 11, 24, 10); // year, month, day,hour
console.log("Year Month Day Hour :", YMDH);

const YMDHM = new Date(2018, 11, 24, 10, 33); // year, month, day,hour, minute
console.log("Year Month Day Hour Minute :", YMDHM);

const YMDHMS = new Date(2018, 11, 24, 10, 33, 30); // year, month, day,hour,minute,second
console.log("Year Month Day Hour Minute Second :", YMDHMS);

const YMDHMSM = new Date(2018, 5, 1, 10, 11, 30, 0); // year, month, day,hour,minute,second, millisecond
console.log("Year Month Day Hour Minute Second Millisecond :", YMDHMSM);

const PreviousCenturyOneDigitYear = new Date(99, 11, 24); // tahun 19'an bisa disingkat 2 angka terakhir
const PreviousCenturyTwoDigitYear = new Date(9, 11, 24);
console.log("PreviousCentury One  : ", PreviousCenturyOneDigitYear);
console.log("PreviousCentury Two  : ", PreviousCenturyTwoDigitYear);

const LiveDate = new Date(); // jam sekarang yang live
LiveDate.toString(); // convert to string
console.log(LiveDate);

const toUTCString = new Date();
toUTCString.toUTCString();
console.log(toUTCString);

const toISOString = new Date();
toISOString.toISOString();
console.log(toISOString);
