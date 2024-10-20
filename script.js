function isOpen(diningHall){
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const time = (hour * 60) + minute;
  if(currentDate.getDay() === 0 || currentDate.getDay() === 6){
    if(diningHall === "newcomb"){
      if (currentDate.getDay() === 6){
        return false;
      }
      else if(time >= 600 && hour < 1200){ // 10 am and 8 pm
        return true;
      }
    }
    if(diningHall === "runk"){
      if(time >= 600 && time < 1290){ // 10 am and 9:30 pm
        return true;
      }
      else{
        return false;
      }
    }
    if(diningHall === "ohill"){
      if(time >= 480 && time < 1200){ // 8 am and 8 pm
        return true;
      }
      else{
        return false;
      }
    }
  }
  if(currentDate.getDay() >= 1 && currentDate.getDay() <= 5){
    if(currentDate.getDay() === 5 && diningHall === "newcomb"){
      if(time >= 420 && time < 855){
        return true;
      }
      return false;
    }
    else if(diningHall === "runk"){
      if(time >= 420 && time < 1290){
        return true;
      }
      return false;
    }
    else{
      if(time > 420 && time < 1200){
        return true;
      }
      return false;
    }
  }
}

function ohillStatus() {
    const ohillStatus = document.querySelector('.ohill-status');
    if (isOpen("ohill")) {
        ohillStatus.textContent = `Open`;
    } else {
        ohillStatus.textContent = `Closed`;
    }
   
}

function newcombStatus() {
    const newcombStatus = document.querySelector('.newcomb-status');
    if (isOpen("newcomb")) {
        newcombStatus.textContent = `Open`;
    } else {
        newcombStatus.textContent = `Closed`;
    }
   
}

function runkStatus() {
    const runkStatus = document.querySelector('.runk-status');
    if (isOpen("runk")) {
        runkStatus.textContent = `Open`;
    } else {
        runkStatus.textContent = `Closed`;
    }
   
}

ohillStatus();
newcombStatus();
runkStatus();

