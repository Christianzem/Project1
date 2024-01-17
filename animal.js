// Deliverables 

// 1. Player clicks on 'Start' button to start the game 
// and presents a notification to player that game has begun. 

// 2. Player clicks on one of the cards and the card reveals an image 
// and player clicks another to reveal another image. 

// 3. Once player has two cards flipped over, 
// notify the player if flipped over cards are matching or 
// if not then to flip over the cards back to their original state.

// 4. If player matched the cards, player recieves 1 pt and number tries stays the same.
// 4.1 If player did not match the cards, player does not receive a pt and number of tries decreases 1. 

// Additional bonus: Player can restart the game whenever they seem fit
// and it refreshes the page. 

// Assignments 
let userTries = 5;
let userPts = 0 

const buttonStart = document.querySelector(".btn");
const buttonRestart = document.querySelector(".btn2");
const img = document.querySelector(".Card")

// This button is clickable for the player and will alert the player once the game has begun. 
buttonStart.addEventListener('click', event => {
    // alert("You clicked the button");
    event.target.style.backgroundColor = "red"
    let cards = document.querySelector(".alert")
    cards.innerHTML = "GAME HAS BEGUN";
    return
}); 

// This gives the player the option to restart the game if player wishes. 
buttonRestart.addEventListener('click', event => {
    window.location.reload(true); 
    event.target.style.backgroundColor = "red"
})

// This function will allow the player to click a random card and reveal the image. 
function flipCard() {
    let img = document.querySelector('.Card'); 
    img.src = "https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg";
}

img.addEventListener('click', flipCard()); 


// This function will determine if the cards are similar and give the player  a pt if matched. 
function matchedCards() {

}
// This fuunction will dtermine if the cards are not similar and not give the pt. to player. 
function nonMatchedCard() {

}
