// Function to get the current time in Eastern Time (EST/EDT)
function showCurrentTime() {
  const currentDateTimeUTC = new Date();
  return convertToEasternTime(currentDateTimeUTC);
}

// Function to convert UTC time to Eastern Time (handles EST/EDT)
function convertToEasternTime(utcDate) {
  const options = {
    timeZone: 'America/New_York', // Eastern Time (handles EST and EDT automatically)
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // Added seconds to display
    hour12: false // Use 24-hour format (military time)
  };
  return utcDate.toLocaleString('en-US', options); // Return the formatted time
}

// Function to update the time on the webpage
function updateTime() {
  const timeElement = document.querySelector('.current-time');
  const currentTime = showCurrentTime();
  timeElement.textContent = `Your time is: ${currentTime}`; // Update the HTML with the time
}

// Call updateTime initially and set an interval to update every second
updateTime();
setInterval(updateTime, 1000); // Update the time every second
