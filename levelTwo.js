let phrase = "RAINING CATS AND DOGS OUT"
//Change background to green if letter is correct and red if letter is incorrect
const alphabet = document.querySelectorAll('h5')
let checkIfSameLetter = alphabet.forEach(letter=> {
    letter.addEventListener('click', function checkIfSameLetter(){
        if (phrase.includes(letter.className)){
            document.querySelector('body').style.backgroundColor = 'green'
        }else{
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }, {once:true})
    
})

/********************************************************************************************************/
//Make it so when a letter is clicked, all occurences of that letter in the phrase becomes visible
const letterAs = document.querySelectorAll('.A')
const letterBs = document.querySelectorAll('.B')
const letterCs = document.querySelectorAll('.C')
const letterDs = document.querySelectorAll('.D')
const letterEs = document.querySelectorAll('.E')
const letterFs = document.querySelectorAll('.F')
const letterGs = document.querySelectorAll('.G')
const letterHs = document.querySelectorAll('.H')
const letterIs = document.querySelectorAll('.I')
const letterJs = document.querySelectorAll('.J')
const letterKs = document.querySelectorAll('.K')
const letterLs = document.querySelectorAll('.L')
const letterMs = document.querySelectorAll('.M')
const letterNs = document.querySelectorAll('.N')
const letterOs = document.querySelectorAll('.O')
const letterPs = document.querySelectorAll('.P')
const letterQs = document.querySelectorAll('.Q')
const letterRs = document.querySelectorAll('.R')
const letterSs = document.querySelectorAll('.S')
const letterTs = document.querySelectorAll('.T')
const letterUs = document.querySelectorAll('.U')
const letterVs = document.querySelectorAll('.V')
const letterWs = document.querySelectorAll('.W')
const letterXs = document.querySelectorAll('.X')
const letterYs = document.querySelectorAll('.Y')
const letterZs = document.querySelectorAll('.Z')

letterAs.forEach(A => {
    A.addEventListener('click', function addA (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('A')!==-1
        if(hasText){
            document.querySelector('.spaceTwo').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceTen').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceFourteen').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterTs.forEach(T => {
    T.addEventListener('click', function addT (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('T')!==-1
        if(hasText){
            document.querySelector('.spaceEleven').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceTwentyFive').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterGs.forEach(G => {
    G.addEventListener('click', function addG (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('G')!==-1
        if(hasText){
            document.querySelector('.spaceSeven').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceTwenty').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterIs.forEach(I => {
    I.addEventListener('click', function addI (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('I')!==-1
        if(hasText){
            document.querySelector('.spaceThree').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceFive').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterRs.forEach(R => {
    R.addEventListener('click', function addR (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('R')!==-1
        if(hasText){
            document.querySelector('.spaceOne').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterSs.forEach(S => {
    S.addEventListener('click', function addS (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('S')!==-1
        if(hasText){
            document.querySelector('.spaceTwelve').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceTwentyOne').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterOs.forEach(O => {
    O.addEventListener('click', function addO (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('O')!==-1
        if(hasText){
            document.querySelector('.spaceNineteen').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceTwentyThree').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterDs.forEach(D => {
    D.addEventListener('click', function addD (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('D')!==-1
        if(hasText){
            document.querySelector('.spaceSixteen').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceEighteen').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterNs.forEach(N => {
    N.addEventListener('click', function addN (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('N')!==-1
        if(hasText){
            document.querySelector('.spaceFour').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceSix').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.spaceFifteen').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterCs.forEach(C => {
    C.addEventListener('click', function addC (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('C')!==-1
        if(hasText){
            document.querySelector('.spaceNine').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterUs.forEach(U => {
    U.addEventListener('click', function addU (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('U')!==-1
        if(hasText){
            document.querySelector('.spaceTwentyFour').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})

/***************************************************************************************************/
//Counts the amount of correct and incorrect guesses
let badClicks = 0
let goodClicks = 0
let clicks = badClicks + goodClicks
alphabet.forEach(letter => {
    letter.addEventListener('click', function countClicks (){
        if (phrase.includes(letter.className) === false){
            badClicks += 1
            clicks += 1
        }else{
            goodClicks += 1
            clicks += 1
        }
        console.log(clicks)
    }, {once:true})
})

//Make words in buttons change color with hover

document.querySelector('.buttonThree').addEventListener('mouseover', changeBtnThreeToWhite)
function changeBtnThreeToWhite (){
    document.querySelector('.buttonThree').querySelector('h3').style.color = 'white'
}
document.querySelector('.buttonThree').addEventListener('mouseout', changeBtnThreeToBlack)
function changeBtnThreeToBlack (){
    document.querySelector('.buttonThree').querySelector('h3').style.color = 'black'
}
document.querySelector('.buttonTwo').addEventListener('mouseover', changeBtnTwoToWhite)
function changeBtnTwoToWhite (){
    document.querySelector('.buttonTwo').querySelector('h3').style.color = 'white'
}
document.querySelector('.buttonTwo').addEventListener('mouseout', changeBtnTwoToBlack)
function changeBtnTwoToBlack (){
    document.querySelector('.buttonTwo').querySelector('h3').style.color = 'black'
}

/*******************************************************************************/


alphabet.forEach(letter => {
    letter.addEventListener('click', function losingGame (){
        if(badClicks === 1 ){
            document.querySelector('.leg1').style.visibility = 'hidden'
        }else if (badClicks === 2){
            document.querySelector('.leg2').style.visibility = 'hidden'
        }else if (badClicks === 3){
            document.querySelector('.arm1').style.visibility = 'hidden'
        }else if (badClicks === 4){
            document.querySelector('.arm2').style.visibility = 'hidden'
        }else if (badClicks === 5){
            document.querySelector('.body').style.visibility = 'hidden'
        }else if (badClicks === 6){
            document.querySelector('.head').style.visibility = 'hidden'
            // document.querySelector('.lose').style.display = 'block'
            // document.querySelector('.blur').style.color = 'transparent'
            document.querySelector('.buttonTwo').style.visibility = 'visible'
            document.querySelector('.lose').style.display = 'block'
        }
    })
})


alphabet.forEach(letter => {
    letter.addEventListener('click', function wonGame (){
        if(goodClicks === 11 ){
            document.querySelector('.win').style.display = 'block'
            document.querySelector('.buttonThree').style.visibility = 'visible'
        }
    })
})

/******************************************************************* */
//Reload page when retry button is pressed
document.querySelector('.buttonTwo').addEventListener('click', refreshPage)
function refreshPage(){
    document.location.reload()
}


/********************************************************************************/
//Strikethrough letters after click


const makeLettersDisappear = alphabet.forEach(letter=> {
    letter.addEventListener('click', function makeLettersDisappear(){
        letter.style.visibility = 'hidden'
    }, {once:true})
    
})
