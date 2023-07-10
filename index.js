const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Charlie, Samip, Ali"];
const thankYouMessage = [];

function writeCards(names, event) {
    for (let i = 0; i <names.length; i++) {
    thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
  return thankYouMessage;
}


function countDown(countDownNumber) {
    while (countDownNumber > -1) {
      console.log(countDownNumber);
      countDownNumber--;
    }
}