//these are variables for cards
let cards = [];
let sum = 0;
let havewon = false;
let isAlive = true;
let msg;

//js to html
let msgtext1 = document.querySelector("#msgtext");
let cardstxt1 = document.querySelector("#cardss");
let sumtxt = document.querySelector("#sum1");

//player 1 
let player = { 
  name: "kor",
  chips: 145
};
//this let html copy what player 1 has
let player1js = document.querySelector("#player1");
player1js.textContent = player.name + ": $" + player.chips;


//------------------------------------------------------------
//functions 

//this function generates random number using (math.random)
function getrandomcard() {
  let number = Math.floor(Math.random() * 13) + 1;

  if (number >= 10) { // if the number is morethan 10 it inputs 10
    return 10;
  } else if (number === 1) { // if the number is equals to 1 it inputs 11
    return 11;
  } else {
    return number;
  }
}

function startgame() {
  isAlive = true;
  let firstcard = getrandomcard(); //let first card get rndm num
  let secondcard = getrandomcard(); //second get rndm num
  cards = [firstcard, secondcard]; //this array shows in html
  sum = firstcard + secondcard; // this adds the two num card
  rendergame();
  if (isAlive == false){
    alert("Game Over! Press OK To Restart!");
  }
}
function rendergame() {
  cardstxt1.textContent = "cards; "; //this shows on screen

  for (let i = 0; i < cards.length; i++) { // this inputs the cards in html(first,second) until nothings left
    cardstxt1.textContent += cards[i] + " ";
     
  } 

  if (sum <= 20) {  //if your card is lower than 20 then this apear
    msg = "draw card?";
  } else if (sum === 21) {
    msg = "blackjack!!";
    havewon = true;
  } else {
    msg = "you lost";
    isAlive = false;
  }

  msgtext1.textContent = msg; //this shows in html
  sumtxt.textContent = "total: " + sum; //shows in html
}
function drawcard() { // this is another function ,lets player draw card or not
  if ( havewon === false && isAlive === true) {// only allows the player to get a card if hes alive or did not win
    let dcard = getrandomcard();
    sum += dcard;
    cards.push(dcard);

  }

  rendergame();
}

