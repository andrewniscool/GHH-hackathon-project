function showCurrentTime() {
    // Create a new Date object for the current time in UTC
    const currentDateTimeUTC = new Date();
  
    // Display the current UTC date and time
    console.log("Current UTC Time:");
    console.log(currentDateTimeUTC.toUTCString());
  
    // Convert and display the time in Eastern Time (EST/EDT)
    convertToEasternTime(currentDateTimeUTC);
  }
  
  function convertToEasternTime(utcDate) {
    // Convert to Eastern Time using toLocaleString with timeZone option
    const options = {
      timeZone: 'America/New_York', // Eastern Time (handles EST and EDT automatically)
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Use 24-hour format (military time)
    };
  
    const easternTime = utcDate.toLocaleString('en-US', options);
  
    console.log("Eastern Time (EST/EDT):");
    console.log(easternTime);
  }
  
  // Call the function to show the current UTC time and Eastern Time
  showCurrentTime();
  