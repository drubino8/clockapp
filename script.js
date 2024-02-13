// Check JS is Connected
// console.log('Clock Ready to Go');

// The Clock App DEFINITION
const theClockApp = () => {
  
  
  // GET Stuff
  // Time Data
  const theDateNow = new Date();
  const hours = theDateNow.getHours();
  const minutes = theDateNow.getMinutes();
  const seconds = theDateNow.getSeconds();
    
  // the HTML Elements
  const theHours = document.querySelector('.hours');
  const theMinutes = document.querySelector('.minutes');
  const theSeconds = document.querySelector('.seconds');
  const amOrPM = document.querySelector('.amOrPM');
  
  // console.log( amOrPM );
    
  // FORMAT Stuff  
  // Get AM or PM
  const theAmOrPm = theHours >= 12 ? "AM" : "PM";
  // console.log( theAmOrPM );
  
  // SET Stuff
  theHours.textContent = hours;
  theMinutes.textContent = minutes;
  theSeconds.textContent = seconds;
  amOrPM.textContent = theAmOrPm;
    
  };
  
  // Run Clock App
  setInterval( theClockApp , 1000);
  /************
  Static Data
  ************/
  const allTheMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const allTheDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  /************
  Dynamic Data
  ************/
  // Get and store current date and time with `new Date()` object
  const now = new Date();
  // Check-Check: See all `Date()` methods and properties
  console.log( now );
  
  
  /************
  Get the Data
  ************/
  // Get current month
  const gotMonth = now.getMonth();
  // Get current day of the month
  let gotDayOfMonth = now.getDate();
  // Get current year
  const gotYear = now.getFullYear();
  // Get current day of the week
  const gotDayOfWeek = now.getDay();
  
  /************
  Get DOM Elements
  ************/
  const month = 
  document.querySelector('.month');
  const dayOfMonth = 
  document.querySelector('.dayOfMonth');
  const year = 
  document.querySelector('.year');
  const dayOfWeek = 
  document.querySelector('.dayOfWeek');
  
  /************
  Set the Data
  ************/
  month.textContent = allTheMonths[gotMonth];
  dayOfMonth.textContent = gotDayOfMonth;
  year.textContent = gotYear;
  dayOfWeek.textContent = allTheDays[gotDayOfWeek];
  


  // GET Stuff
  const switcher = document.querySelector("#switcher");
  const body = document.querySelector("body");
  
  // SET Stuff
  switcher.addEventListener( "click" , () => {
    body.classList.toggle("dark");
  } );
  