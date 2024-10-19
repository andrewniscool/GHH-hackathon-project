function showCurrentTime() {
    // Create a new Date object
    const currentDateTime = new Date();
  
    // Get the date components
    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1; // Months are zero-indexed
    const day = currentDateTime.getDate();
  
    // Get the time components
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();
  
    // Format date and time
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Display current date and time
    console.log(`Current Date: ${formattedDate}`);
    console.log(`Current Time: ${formattedTime}`);
  }
  
  // Call the function to show the current time
  showCurrentTime();
  function convertToEasternTime(utcDateString) {
    // Create a Date object from the UTC string
    const utcDate = new Date(utcDateString);
  
    // Convert to Eastern Time using toLocaleString with timeZone option, excluding seconds and milliseconds
    const options = {
      timeZone: 'America/New_York', // Eastern Time (ET) (handles both EST and EDT automatically)
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Use 24-hour format
    };
  
    const easternTime = utcDate.toLocaleString('en-US', options);
  
    console.log(`Eastern Time: ${easternTime}`);
  }
  
  // Example usage
  convertToEasternTime('2024-10-19T12:34:56.789Z');
  