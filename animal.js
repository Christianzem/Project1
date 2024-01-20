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
let userTries = 3;
let userPts = 0 

let card1 = null
let card2 = null

document.querySelector(".tries").innerHTML = "Number of Tries: " + userTries
document.querySelector(".score").innerHTML = "Points: " + userPts
// let buttonStart = document.querySelector("#start");
const buttonRestart = document.querySelector("#restart");

// This button is clickable for the player and will alert the player once the game has begun. 
// buttonStart.addEventListener('click', event => {
//     event.target.style.backgroundColor = "red"
//     let cards = document.querySelector(".alert")
//     cards.innerHTML = "GAME HAS BEGUN";
//     setTimeout(() => {
//         let cards = document.querySelector(".alert")
//         cards.innerHTML = "";
//     }, 2000)

// }); 

// This gives the player the option to restart the game if player wishes. 
buttonRestart.addEventListener('click', event => {
    window.location.reload(true); 
    event.target.style.backgroundColor = "red"
})

// This function will allow the player to click a random card and reveal a image. 

const handleClick = function(event) {
    event.preventDefault()
    event.target.setAttribute('src', `Project1/${event.target.id}.jpeg`);
    matchedCards(event.target.id)
}
let puppy = document.querySelectorAll("#puppy");
    for (i = 0; i < puppy.length; i++){
        puppy[i].addEventListener('click',handleClick)
            
    }
let crazycat = document.querySelectorAll("#crazycat");
    for (i = 0; i < crazycat.length; i++){
        crazycat[i].addEventListener('click', handleClick)
    }   

let crazyhamster = document.querySelectorAll("#crazyhamster");
    for (i = 0; i < crazyhamster.length; i++){
        crazyhamster[i].addEventListener('click', handleClick)
    }  

let panda = document.querySelectorAll("#panda");
    for (i = 0; i < panda.length; i++){
        panda[i].addEventListener('click',handleClick)
    }     

// This function will determine if the cards are similar and give the player a pt if matched. 

function matchedCards(id) {
if (card1 === null){
    card1 = id
}
else if (card2 === null){ // Assignment
    card2 = id
}
if (card1 === card2){
userPts += 1
document.querySelector(".score").innerHTML = "Points: " + userPts 
userTries = userTries
document.querySelector(".tries").innerHTML = "Number of Tries: " + userTries
// Give a pt. to player 
let alert = document.querySelector(".alert")
alert.innerHTML = "They Match!"
setTimeout(() => {
let alert = document.querySelector(".alert")
alert.innerHTML = ""
}, 1000)
let cards = document.querySelectorAll(`#${card1}`)
for (i = 0; i < cards.length; i++){
    console.log(cards[i])
    cards[i].removeEventListener('click', handleClick)     
}
card1 = null
card2 = null
}

else if (card1 !== card2 && card1 !== null && card2 !== null) {
        event.target.setAttribute("src", "Project1/background.jpeg")
        document.querySelector(`#${card1}`).setAttribute("src", "Project1/background.jpeg")
        document.querySelector(".score").innerHTML = "Points: " + userPts
        userTries = userTries - 1
        card1 = null
        card2 = null
        if (userPts !== 0 ) {
            userPts = userPts - 1
        } 
        document.querySelector(".tries").innerHTML = "Number of Tries: " + userTries
        let alert1 = document.querySelector(".alert")
        alert1.innerHTML = "Not a Match, Try Again!"
        setTimeout(() => {
            let alert1 = document.querySelector(".alert")
            alert1.innerHTML = ""
        }, 1000)
        if (userTries == 0) {
            document.querySelector(".gameover").innerHTML = "You have lost the Game! <br> Restart Game!";
            setTimeout(() => {
                window.location.reload(true); 
            }, 2000)
        }
}

}
