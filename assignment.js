



// 1st problem solved
function kilometerToMeter(kilometer){
  if((kilometer === kilometer.toString())||(Math.sign(kilometer) === -1)){
    return 'Please Enter a Valid Number !sorry char is not allow'
  }
  var meters = kilometer*1000;
  return meters;
}
console.log(kilometerToMeter(4))



// 2nd problem solved
function budgetCalculator(watch, phone, laptop){
  
  var watchPrice  = watch*50;
      phonePrice  = phone*100;
      laptopPrice = laptop*500;
  return  watchPrice + phonePrice + laptopPrice;
}
console.log(budgetCalculator(2,1,1))


//third problem solved
function megaFriend(findLongName){
  var lengthContainer = 0;
  var nameContainer;

  for (var i = 0; i < findLongName.length; i++) {

    if (findLongName[i].length > lengthContainer) {
       lengthContainer = findLongName[i].length;
       nameContainer   = findLongName[i];
    }
  }  
  return nameContainer;
} 
console.log(megaFriend(['misbah', 'hasan', 'abu taher', 'abul kalam']))



//4th problem solved

function hotelCost(stayDays){
  let containerDays = 0;
  if((stayDays === stayDays.toString())||(Math.sign(stayDays) === -1)){
    return 'Please Enter a Valid Number'

  } else if(stayDays<=10){

     containerDays    = stayDays*100;

  }else if(stayDays  <= 20){

    let firstTenDay   = 10*100;
    let remainigDays  = stayDays - 10;
    let secondTenDays = remainigDays*80;
       containerDays  = firstTenDay+secondTenDays;

  }else{

    let firstTenDay   = 10*100;
    let secondTenDays = 10*80;
    let remainingDays = stayDays-20;
    let thirdTenDays  = remainingDays*50;
       containerDays  = firstTenDay+secondTenDays+thirdTenDays;

  }
  
  return containerDays;
}
console.log(hotelCost(31))




