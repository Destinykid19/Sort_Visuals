/* every out commented code is for the features which I will we working on next */


let radomize_array = document.getElementById("random_array");
// let numOfBars = document.getElementById("sizeOfArray").value;
let sort_btn = document.getElementById("sort_btn");
let minRange = 1;
let maxRange = 50;
let defaultNum = 75;
let swapcom = 0;
let Hfactor = 10;
let delay = 15;
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

//load array, draw bars

document.addEventListener("DOMContentLoaded", function() {
  createArray();
  renderBars(unsorted_Array);
});

//draw function

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

//drop select menu

function SortAlgo (sort_menu) {
    if (sort_menu.value == "1") {
      let sorted_array = bubblesort(unsorted_Array);
      console.log(sorted_array);
      } else if (sort_menu.value == "2") {
        let sorted_array_2 = quicksort(unsorted_Array, 0, unsorted_Array.length -1);
        console.log(sorted_array_2);
      } else if (sort_menu.value == "3") {
        alert("work in progress");
      }
}

//delay for visualization

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));  
}

// BubbleSort

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

// QuickSort

function quicksort(array, low, high) {
  if(high >= low) {
    return;
  }
  let pi = partition(array, low, high);
  quicksort(array, low, pi - 1);
  quicksort(array, pi + 1, high);
}

function partition(array, low, high) {
  let pivotVal = array[high];
  let pivotIndex = low;

  for (let j = low ; j < high ; j++){
    if (array[j] < pivotVal){
      swap(array, j, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, high);
  return pivotIndex;
}

function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

