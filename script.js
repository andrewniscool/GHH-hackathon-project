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