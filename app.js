/* every out commented code is for the features which I will we working on next */


let radomize_array = document.getElementById("random_array");
// let numOfBars = document.getElementById("BarsCount");
let sort_btn = document.getElementById("sort_btn");
let minRange = 1;
let maxRange = 50;
let defaultNum = 100;
let swapcom = 0;
let Hfactor = 10;
let delay = 20;
let bars_container = document.getElementById ("bars_container");
let unsorted_Array = new Array (defaultNum);
let sort_menu = document.getElementById("sMenu");
sort_menu.addEventListener("change", SortAlgo);





function randomNum(min, max) {
    return Math.floor(Math.random()* (max - min +1))+ 1;
}

function createArray() {
    for ( let i = 0; i < defaultNum; i++) {
        unsorted_Array[i] = randomNum(minRange, maxRange);
    }
}

document.addEventListener("DOMContentLoaded", function() {
  createArray();
  renderBars(unsorted_Array);
});


function renderBars (array) {
  for ( let i = 0; i < array.length; i++){
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] *10 + "px";
    bars_container.appendChild(bar);
}}

radomize_array.addEventListener("click", function(){
  createArray();
  bars_container.innerHTML ="";
  renderBars(unsorted_Array);
});

function SortAlgo (sort_menu) {
    if (sort_menu.value == "1") {
      let sorted_array = bubblesort(unsorted_Array);
      console.log(sorted_array);
      } else if (sort_menu.value == "2") {
        alert("work in progess")
      } else if (sort_menu.value == "3") {
        alert("work in progress")
      }
}

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));  
}

async function bubblesort(array) {
  let bars = document.getElementsByClassName("bar");
  for ( let i = 0; i < array.length; i++) {
    for ( let j = 0; j < array.length -1; j++) {
      if(array[j] > array[j+1]) {
        for ( let k = 0; k < bars.length; k++) {
          if(k !== j && k !== j+1){
            bars[k].style.backgroundColor = "aqua";
          }
        }
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        bars[j].style.height = array[j] *Hfactor + "px";
        bars[j].style.backgroundColor = "lightgreen";
        bars[j+1].style.height = array[j+1] * Hfactor +"px";
        bars[j+1].style.backgroundColor = "lightgreen";
        swapcom++;
        await sleep(delay);
      }
    }
    await sleep(delay);
  }
  return array, swapcom;
}

