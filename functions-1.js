let jonSnowHealth = 100


//string conversion
// jonSnowHealth = 100 + ''
// console.log(jonSnowHealth)
// jonSnowHealth = String(jonSnowHealth)
// console.log(jonSnowHealth)

let theWinnerIs = `Jaime is the winner`

//winner reassinging 
// theWinnerIs = theWinnerIs.toLowerCase().replace(`jaime,`Jon)

//saving to a new variable
let newWinner = theWinnerIs.toLowerCase().replace(`jaime`,`jon`)
//console.log(theWinnerIs)


//convert-string-to-kebab-case
//convert it to lowercase, then 

//newWinner = newWinner.toLowerCase().replaceAll(' ', '-')
//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerSplit = newWinnerLower.split(' ')
//let newWinnerKebab = newWinnerSplit.join('-')
//same as above but minified by chaining commands
let newWinnerKebab = newWinner.toLocaleLowerCase().split(' ').join('-')

console.log(newWinner,'------------',newWinnerKebab)


//functions

//lets create a function that will check to see if Jon's alive

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log(`Jon is alive!`)
    } else {
        console.log(`Rip Jon Snow.`)
    }
}

//you have to call a function for it to run
//Ex:
//isJonAlive()


//lets create a function that will be used everytime jon is attacked

function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

surpriseAttack(21)
surpriseAttack(13)
surpriseAttack(32)
surpriseAttack(26)
surpriseAttack(26)

//create a function that allows two people to greet each other
function greeting(person1,person2){
    console.log(`${person1} and ${person2} say hello to eachother`)
}

greeting("isha",'Jaime')
greeting("Stephanie",'Jon')
greeting("Isha",'Jon')

//function greetings() {
  //  console.log(`Hey, what's up?`)
    //console.log(`Not much, hbu?`)
//}



greetings()

