// Initialize variables to store the time
let [seconds, minutes, hours] = [0, 0, 0];

// Get the element where the time will be displayed
let displayTime = document.querySelector(".stopwatch h1");

// Variable to hold the timer interval reference
let timer = null;

// Function to update the stopwatch time
function stopwatch() {
    // Increment seconds
    seconds++;
    // Check if seconds reach 60, if so reset to 0 and increment minutes
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        // Check if minutes reach 60, if so reset to 0 and increment hours
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format hours, minutes, and seconds to always display two digits
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Update the display with the formatted time
    displayTime.textContent = `${h}:${m}:${s}`;
}

// Function to start the stopwatch
function watchStart() {
    // Clear any existing timer interval
    if (timer !== null) {
        clearInterval(timer);
    }
    // Start a new timer interval that calls the stopwatch function every second
    timer = setInterval(stopwatch, 1000);
}

// Function to stop the stopwatch
function watchStop(){
    clearInterval(timer); // Clear the timer interval to stop the stopwatch
}

// Function to reset the stopwatch
function watchReset(){
    clearInterval(timer); // Clear the timer interval
    // Reset the time variables to 0 and update the display
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.textContent = "00:00:00";
}
