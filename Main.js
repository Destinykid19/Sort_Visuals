/* every out commented code is for the features which I will we working on next */

// import { quickSort, swap, bubblesort } from "./sorts.js";

let radomize_array = document.getElementById("random_array");
// let numOfBars = document.getElementById("BarsCount");
let sort_btn = document.getElementById("sort_btn");
let minRange = 1;
let maxRange = 50;
let defaultNum = 100;
let swapcom = 0;
let Hfactor = 10;
let delay = 10;
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
  swapcom = 0;
  document.querySelector("#swap_counter").innerHTML= swapcom;
});

function SortAlgo (sort_menu) {
    if (sort_menu.value == "1") {
      let sorted_array = bubblesort(unsorted_Array);
      console.log(sorted_array);
      } else if (sort_menu.value == "2") {
        let sorted_array = quickSort(array, start, end);
        console.log(sorted_array);
      } else if (sort_menu.value == "3") {
        alert("work in progress")
      }
}

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));  
}
// export {SortAlgo, sleep}

async function bubblesort(array) {
  let bars = document.getElementsByClassName("bar");
  for ( let i = 0; i < array.length; i++) {
    for ( let j = 0; j < array.length -1; j++) {
      if(array[j] > array[j+1]) {
        for ( let k = 0; k < bars.length; k++) {
          if(k !== j && k !== j+1){
            bars[k].style.backgroundColor = "rgb(140, 13, 224)";
          }
        }
        swap(array, j,j+1) //Swap

        //ReDraw
        bars[j].style.height = array[j] *Hfactor + "px";
        bars[j].style.backgroundColor = "aqua";
        bars[j+1].style.height = array[j+1] * Hfactor +"px";
        bars[j+1].style.backgroundColor = "aqua";
        swapcom++;
        document.querySelector("#swap_counter").innerHTML= swapcom;
        await sleep(delay);
      }
    }
    await sleep(delay);
  }
  alert("number of swaps: "+ swapcom);
  return array, swapcom;
}


function swap(array, a, b) {
  let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
}

