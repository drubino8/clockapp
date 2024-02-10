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