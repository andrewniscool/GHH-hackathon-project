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
function isOpen(diningHall){
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  if(currentDate.getDay() === 0 || currentDate.getDay() === 6){
    if(diningHall === "newcomb"){
      if (currentDate.getDay() === 6){
        return false;
      }
      else if(hour >= 10 && hour < 20){
        return true;
      }
    }
    if(diningHall === "runk"){
      if(hour >= 10 && (hour < 21 && minute <= 30)){
        return true;
      }
      else{
        return false;
      }
    }
    if(diningHall === "ohill"){
      if(hour >= 8 && hour < 20){
        return true;
      }
      else{
        return false;
      }
    }
  }
  if(currentDate.getDay() >= 1 && currentDate.getDay() <= 5){
    if(currentDate.getDay() === 5 && diningHall === "newcomb"){
      if(hour >= 7 && (hour < 14 && minute < 15)){
        return true;
      }
      return false;
    }
    else if(diningHall === "runk"){
      if(hour >= 7 && (hour < 21 && minute < 30)){
        return true;
      }
      return false;
    }
    else{
      if(hour > 7 && hour < 20){
        return true;
      }
      return false;
    }
  }
}
console.log(isOpen("ohill"))
console.log(isOpen("newcomb"))
console.log(isOpen("runk"))