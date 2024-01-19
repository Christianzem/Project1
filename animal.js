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

let card1 = null
let card2 = null


let buttonStart = document.querySelector("#start");
const buttonRestart = document.querySelector("#restart");

// This button is clickable for the player and will alert the player once the game has begun. 
buttonStart.addEventListener('click', event => {
    event.target.style.backgroundColor = "red"
    let cards = document.querySelector(".alert")
    cards.innerHTML = "GAME HAS BEGUN";
    setTimeout(() => {
        let cards = document.querySelector(".alert")
        cards.innerHTML = "";
    }, 2000)

}); 

// This gives the player the option to restart the game if player wishes. 
buttonRestart.addEventListener('click', event => {
    window.location.reload(true); 
    event.target.style.backgroundColor = "red"
})

// This function will allow the player to click a random card and reveal a image. 


let puppy = document.querySelectorAll("#puppy");
    for (i = 0; i < puppy.length; i++){
        puppy[i].addEventListener('click',function(event) {
            event.preventDefault()
            event.target.setAttribute('src', 'Project1/puppy1.jpeg');
            matchedCards(event.target.id)
            // nonMatchedCard(event.target.id)
        
        })
            
    }
let crazycat = document.querySelectorAll("#crazycat");
    for (i = 0; i < crazycat.length; i++){
        crazycat[i].addEventListener('click',function(event) {
            event.preventDefault()
            event.target.setAttribute('src', 'Project1/crazycat.jpeg'); 
            matchedCards(event.target.id) 
            // nonMatchedCard(event.target.id)
        })
    }   

let crazyhamster = document.querySelectorAll("#crazyhamster");
    for (i = 0; i < crazyhamster.length; i++){
        crazyhamster[i].addEventListener('click',function(event) {
            event.preventDefault()
            event.target.setAttribute('src', 'Project1/WorkingHamster.jpeg');
            matchedCards(event.target.id) 
            // nonMatchedCard(event.target.id)
        })
    }  

let panda = document.querySelectorAll("#panda");
    for (i = 0; i < panda.length; i++){
        panda[i].addEventListener('click',function(event) {
            event.preventDefault()
            event.target.setAttribute('src', 'Project1/panda.jpeg'); 
            matchedCards(event.target.id) 
            // nonMatchedCard(event.target.id)
         })
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
// Give a pt. to player 
userPts =+ 1
userPts.append(Pts)
let alert = document.querySelector(".alert")
alert.innerHTML = "They Match!"
setTimeout(() => {
let alert = document.querySelector(".alert")
alert.innerHTML = ""
}, 1000)

}

else if (card1 !== card2 && card1 !== null && card2 !== null) {
        event.target.setAttribute("src", ""); 
        let alert1 = document.querySelector(".alert")
        alert1.innerHTML = "Not a Match, Try Again!"
        setTimeout(() => {
            let alert1 = document.querySelector(".alert")
            alert1.innerHTML = ""
        }, 1000)
}

}
