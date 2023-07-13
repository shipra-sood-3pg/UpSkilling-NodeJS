//Creating Dates
let date = new Date("2023-03-16");

let currDate = new Date();
console.log("\n" + currDate);

let dateOfBirth = new Date("May 10, 2018");
console.log("\n", dateOfBirth);

let dateOfBirth1 = new Date(2012, 11, 1, 17, 40, 0)
console.log("\n", dateOfBirth1);

//Accessing elements from a date
console.log(`
    Full Year: ${currDate.getFullYear()}
    Month: ${currDate.getMonth()}
    Day of Month: ${currDate.getDate()}, ${currDate.getDay()}
    TimezoneOffSet: ${currDate.getTimezoneOffset()}
    Hours: ${currDate.getHours()}
    Minutes: ${currDate.getMinutes()}
    Seconds: ${currDate.getSeconds()}
    Milliseconds: ${currDate.getUTCMilliseconds()}
    Time: ${currDate.getTime()}
`)

//epoch date is 1st Jan 1970 for javascript and the time is saved as no of seconds elapsed from this time till the given date
//Any date which is less than epoch is saved as -ve number and after this as +ve value

console.log(`
    Date: ${date}
    CalenderDate: ${date.toDateString()}
    Locale US: ${date.toLocaleDateString('en-US')}
    Locale UK: ${date.toLocaleDateString('en-GB')}
    Locale India: ${date.toLocaleDateString('hi-IN')}
    Locale Japan: ${date.toLocaleDateString('ja-JP')}
    TimeOnly: ${date.toTimeString()}
    Locale US: ${date.toLocaleTimeString('en-US')}
    Locale UK: ${date.toLocaleTimeString('en-GB')}
    Locale India: ${date.toLocaleTimeString('hi-IN')}
    Locale Japan: ${date.toLocaleTimeString('ja-JP')}
`);

//custom date string
let options = { dateStyle: "short", timeStyle: "short"};
console.log(`Custom Date format: ${date.toLocaleString('hi-IN', options)}`);

function formatDate(userDate) {
    let currDate = new Date(userDate);

    let currMonth = currDate.getMonth();
    let dayOfMonth = currDate.getDate();
    console.log(currMonth);
    console.log(dayOfMonth);
    return `${currDate.getFullYear()}${(currMonth.toString().length == 1 ? '0' : '')}${currMonth}${currDate.getDate()}`;
}
console.log(formatDate("4/31/2014"))