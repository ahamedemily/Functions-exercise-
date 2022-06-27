let jonSnowHealth = 100


//string conversion
// jonSnowHealth = 100 + ''
// console.log(jonSnowHealth)
jonSnowHealth = String(jonSnowHealth)
// console.log(jonSnowHealth)

let theWinnerIs = `Jamie is the winner`

//winner reassigning
// theWinnerIs = theWinnerIs.toLowerCase().replace('jamie','Jon')

//saving to a new variable
let newWinner = theWinnerIs.toLowerCase().replace('jamie','Jon')
// console.log(theWinnerIs)


//convert-string-to-kebab-case 
//convert it to lowercase, then 

// newWinner = newWinner.toLowerCase().replaceAll(' ', '-')
let newWinnerLower = newWinner.toLowerCase()
let newWinnerSplit = newWinnerLower.split(' ')
let newWinnerKebab = newWinnerSplit.join('-')


console.log(newWinner,'-------------',newWinnerKebab)