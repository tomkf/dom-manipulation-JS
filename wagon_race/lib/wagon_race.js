let teamA = document.querySelectorAll("#player1_race td");

  let teamB = document.querySelectorAll("#player2_race td");

let indexCounterA = 0

let indexCounterB = 0



const keyPress = (key) => {


 if (indexCounterA == teamA.length - 1){
  alert("game over dude!!!!!!!!!! playerA wins");
 }

if (indexCounterB == teamB.length - 1){
  alert("game over dude!!!!!!!!!! playerB wins");
 }


  if (key === 'o') {
    let myPosition = document.querySelector("#player1_race .active");
    myPosition.classList.remove("active");
    indexCounterA += 1
    let newPosition = teamA[indexCounterA]
    newPosition.classList.add("active")
}

if (key === 'p') {
      let myPosition = document.querySelector("#player2_race .active");
          myPosition.classList.remove("active");
    indexCounterB += 1
    let newPosition = teamB[indexCounterB]
    newPosition.classList.add("active")
 }
}


document.addEventListener("keyup", event => keyPress(event.key))
