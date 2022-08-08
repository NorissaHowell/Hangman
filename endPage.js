// function change(i) {  
//     var doc = document.querySelector("body");  
//     var color =[ "orange", "red"];  
//     for(i = 0; i<color.length; i++){  
//         doc.style.backgroundColor = color[i];
//         console.log(color[i])
//     }
//         //i = (i + 1) % color.length;
//         //  console.log("my color is "+ color[i]);  
//  /*if (i>=color.length){i=0;}*/  
//   }  
// //  setInterval(function changebackground(){change(0)},1000);
// setInterval(change, 1000)

// function changeColor (){
//     const bubble = document.querySelector(".bubble1")
//     let color = ["red", "orange", "yellow"]
//     for (i = 0; i<color.length; i++){
//         bubble.style.backgroundColor = color
//     }
// }
// setInterval(changeColor,1000)


const bubble1 = document.querySelector(".bubble1")
const bubble2 = document.querySelector(".bubble2")
const bubble3 = document.querySelector(".bubble3")
const bubble4 = document.querySelector(".bubble4")
const bubble5 = document.querySelector(".bubble5")
const bubble6 = document.querySelector(".bubble6")
const bubble7 = document.querySelector(".bubble7")
const bubble8 = document.querySelector(".bubble8")
const bubble9 = document.querySelector(".bubble9")
const bubble10 = document.querySelector(".bubble10")
const bubble11 = document.querySelector(".bubble11")
const bubble12 = document.querySelector(".bubble12")
const bubble13 = document.querySelector(".bubble13")
const bubble14 = document.querySelector(".bubble14")
const bubble15 = document.querySelector(".bubble15")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  bubble1.style.backgroundColor= getRandomColor();
  bubble2.style.backgroundColor= getRandomColor();
  bubble3.style.backgroundColor= getRandomColor();
  bubble4.style.backgroundColor= getRandomColor();
  bubble5.style.backgroundColor= getRandomColor();
  bubble6.style.backgroundColor= getRandomColor();
  bubble7.style.backgroundColor= getRandomColor();
  bubble8.style.backgroundColor= getRandomColor();
  bubble9.style.backgroundColor= getRandomColor();
  bubble10.style.backgroundColor= getRandomColor();
  bubble11.style.backgroundColor= getRandomColor();
  bubble12.style.backgroundColor= getRandomColor();
  bubble13.style.backgroundColor= getRandomColor();
  bubble14.style.backgroundColor= getRandomColor();
  bubble15.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);
