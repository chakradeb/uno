let pop = function(element,list) {
  let count = 0;
  if(!list.includes(element)){
    return undefined;
  }
  while(list[count]!=element){
    count++;
  }
  list.splice(count,1);
  return element;
}

let shuffle = function(unoCards){
  let shuffledCards = [];
  while(unoCards.length!=0){
    let randomPlace = Math.floor(Math.random()*unoCards.length);
    let randomCard = unoCards[randomPlace];
    shuffledCards.push(randomCard);
    pop(randomCard,unoCards);
  }
  return shuffledCards;
}

exports.shuffle = shuffle;
