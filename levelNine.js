//Phrase. Changes with each level
let phrase = "LUCKY NUMBER"
//let phrase = "PUPPY DOG EYES"

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


letterLs.forEach(L => {
    L.addEventListener('click', function addL (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('L')!==-1
        if(hasText){
            document.querySelector('.space1').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterUs.forEach(U => {
    U.addEventListener('click', function addU (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('U')!==-1
        if(hasText){
            document.querySelector('.space2').style.color = 'rgba(0, 0, 0, 100)'
            document.querySelector('.space8').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterCs.forEach(C => {
    C.addEventListener('click', function addC (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('C')!==-1
        if(hasText){
            document.querySelector('.space3').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterKs.forEach(K => {
    K.addEventListener('click', function addK (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('K')!==-1
        if(hasText){
            document.querySelector('.space4').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterYs.forEach(Y => {
    Y.addEventListener('click', function addY (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('Y')!==-1
        if(hasText){
            document.querySelector('.space5').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})

letterNs.forEach(N => {
    N.addEventListener('click', function addN (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('N')!==-1
        if(hasText){
            document.querySelector('.space7').style.color = 'rgba(0, 0, 0, 100)'
        
        }
    })
})
letterMs.forEach(M => {
    M.addEventListener('click', function addM (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('M')!==-1
        if(hasText){
            document.querySelector('.space9').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterBs.forEach(B => {
    B.addEventListener('click', function addB (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('B')!==-1
        if(hasText){
            document.querySelector('.space10').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterEs.forEach(E => {
    E.addEventListener('click', function addE (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('E')!==-1
        if(hasText){
            document.querySelector('.space11').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})
letterRs.forEach(R => {
    R.addEventListener('click', function addR (){
        let content = document.body.textContent || document.body.innerText
        let hasText = content.indexOf('R')!==-1
        if(hasText){
            document.querySelector('.space12').style.color = 'rgba(0, 0, 0, 100)'
        }
    })
})

/*************************************************************************************************************/



// letterAs.forEach(A => {
//     A.addEventListener('click', function addA (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('A')!==-1
//         if(hasText){
//             document.querySelector('.space12').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterBs.forEach(B => {
//     B.addEventListener('click', function addB (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('B')!==-1
//         if(hasText){
//             document.querySelector('.space12').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterCs.forEach(C => {
//     C.addEventListener('click', function addC (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('C')!==-1
//         if(hasText){
//             document.querySelector('.space12').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterDs.forEach(D => {
//     D.addEventListener('click', function addD (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('D')!==-1
//         if(hasText){
//             document.querySelector('.space13').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterEs.forEach(E => {
//     E.addEventListener('click', function addE (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('E')!==-1
//         if(hasText){
//             document.querySelector('.space3').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space4').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space12').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterFs.forEach(F => {
//     F.addEventListener('click', function addF (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('F')!==-1
//         if(hasText){
//             document.querySelector('.space10').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterGs.forEach(G => {
//     G.addEventListener('click', function addG (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('G')!==-1
//         if(hasText){
//             document.querySelector('.space1').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterHs.forEach(H => {
//     H.addEventListener('click', function addH (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('H')!==-1
//         if(hasText){
//             document.querySelector('.space10').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterIs.forEach(I => {
//     I.addEventListener('click', function addI (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('I')!==-1
//         if(hasText){
//             document.querySelector('.space8').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterJs.forEach(J => {
//     J.addEventListener('click', function addJ (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('J')!==-1
//         if(hasText){
//             document.querySelector('.space8').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterKs.forEach(K => {
//     K.addEventListener('click', function addK (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('K')!==-1
//         if(hasText){
//             document.querySelector('.space12').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterLs.forEach(L => {
//     L.addEventListener('click', function addL (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('L')!==-1
//         if(hasText){
//             document.querySelector('.space5').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterMs.forEach(M => {
//     M.addEventListener('click', function addM (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('M')!==-1
//         if(hasText){
//             document.querySelector('.space2').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space16').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterNs.forEach(N => {
//     N.addEventListener('click', function addN (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('N')!==-1
//         if(hasText){
//             document.querySelector('.space5').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space13').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterOs.forEach(O => {
//     O.addEventListener('click', function addO (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('O')!==-1
//         if(hasText){
//             document.querySelector('.space4').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space15').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterPs.forEach(P => {
//     P.addEventListener('click', function addP (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('P')!==-1
//         if(hasText){
//             document.querySelector('.space1').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space7').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterQs.forEach(Q => {
//     Q.addEventListener('click', function addQ (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('Q')!==-1
//         if(hasText){
//             document.querySelector('.space1').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space7').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterRs.forEach(R => {
//     R.addEventListener('click', function addR (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('R')!==-1
//         if(hasText){
//             document.querySelector('.space2').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterSs.forEach(S => {
//     S.addEventListener('click', function addS (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('S')!==-1
//         if(hasText){
//             document.querySelector('.space5').style.color = 'rgba(0, 0, 0, 100)'
//             document.querySelector('.space10').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterTs.forEach(T => {
//     T.addEventListener('click', function addT (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('T')!==-1
//         if(hasText){
//             document.querySelector('.space9').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterUs.forEach(U => {
//     U.addEventListener('click', function addU (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('U')!==-1
//         if(hasText){
//             document.querySelector('.space5').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterVs.forEach(V => {
//     V.addEventListener('click', function addV (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('V')!==-1
//         if(hasText){
//             document.querySelector('.space14').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })


// letterWs.forEach(W => {
//     W.addEventListener('click', function addW (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('W')!==-1
//         if(hasText){
//             document.querySelector('.space7').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterXs.forEach(X => {
//     X.addEventListener('click', function addX (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('X')!==-1
//         if(hasText){
//             document.querySelector('.space3').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterYs.forEach(Y => {
//     Y.addEventListener('click', function addY (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('Y')!==-1
//         if(hasText){
//             document.querySelector('.space15').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })

// letterZs.forEach(Z => {
//     Z.addEventListener('click', function addZ (){
//         let content = document.body.textContent || document.body.innerText
//         let hasText = content.indexOf('Z')!==-1
//         if(hasText){
//             document.querySelector('.space15').style.color = 'rgba(0, 0, 0, 100)'
//         }
//     })
// })



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

/*************************************************************************************/
//Take limbs away from hangman with each incorrect guess
//When player loses, display 'retry' button and "You have lost"

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

//When player wins, display next level button and 'you have won'

alphabet.forEach(letter => {
    letter.addEventListener('click', function wonGame (){
        if(goodClicks === 10 ){
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



// document.querySelector('.buttonThree').addEventListener('click', makeBackgroundColorDarker)
// function makeBackgroundColorDarker (){
//     document.querySelector('body').style.color = 'rgb(189, 230, 230)'
// }