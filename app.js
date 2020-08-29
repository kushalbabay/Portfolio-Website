// Home Page

let changingText = document.getElementById("changing-text")
const wordArray = ["Web Developer","Coding Enthusiast","Proud Indian"]

window.addEventListener("load", () => {
    let i = 0;
    let isReversing = false;
    let j = wordArray[i].length - 1;
    let interval; //<==== Define interval
  
    const beginTyping = () => {
      if (!isReversing) {
        if (j >= 0) {
          changingText.innerHTML = wordArray[i][j] + changingText.innerHTML;
          j--;
        } else {
          window.clearInterval(interval); //<==== Stop interval
          window.setTimeout(() => {                  //<==== Psuedo sleep function
            isReversing = true;
            j = wordArray[i].length - 1;
            interval = setInterval(beginTyping, 100); //<==== Start interval again 
          }, 1000);
        }
      }
      if (isReversing) {
        if (j >= 0) {
          changingText.innerHTML = changingText.innerHTML.slice(0, j);
          j--;
        } else {
          i++;
          if (i == wordArray.length) {
            i = 0;
          }
          j = wordArray[i].length - 1;
          isReversing = false;
        }
      }
    };
    interval = setInterval(beginTyping, 100); //<==== Start interval
})


// Contact Page

const imageArray = [
    {
        "src": "./images/1.jpg",
        "caption": "Pic One"
    },
    {
        "src": "./images/2.jpg",
        "caption": "Pic Two"
    },
    {
        "src": "./images/3.jpg",
        "caption": "Pic Three"
    },
    {
        "src": "./images/4.jpg",
        "caption": "Pic Four"
    }
]

const next = document.getElementById("next-image")
const prev = document.getElementById("prev-image")
const image = document.getElementById("image")
const caption = document.getElementById("caption")

let currentItem

function changeImage(index) {
    image.src = imageArray[currentItem].src
    caption.innerText = imageArray[currentItem].caption
}
addEventListener("load", () =>{
    currentItem = 0
    changeImage(currentItem)
})

next.addEventListener("click",() => {
    currentItem++
    if(currentItem==imageArray.length){
        currentItem = 0
    }
    changeImage(currentItem)

})

prev.addEventListener("click",() => {
    currentItem--
    if(currentItem== -1){
        currentItem = imageArray.length - 1
    }
    changeImage(currentItem)

})