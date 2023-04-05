/*
Initializing variables such as array size, 
generate new array, speed of the algo.
*/

var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

// Initialising all .alog button into an array
var butts_algos = document.querySelectorAll(".algos button");

/*
    Array to store the sizes 
    div elements(this will be the criteria to sort the bars)
*/
var div_sizes = [];

// To create array elements(bars)
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";


//Array generation and updation.
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);


// Function to generate new array
function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        // Generate a random number between maximum and minimum size
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

// Update array size based on the input
function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}


/*
    Update array when the whole page has loaded, including all dependent 
    resources such as stylesheets, scripts etc
*/
window.onload = update_array_size();


// Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}


// Function to disable the buttons while any Sorting is running
function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        // We add a class to colorize buttons after got disabled
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}


// Function which runs clicked algorithm
function runalgo() {
    disable_buttons();

    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection_sort();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
        case "Heap": Heap();
            break;
    }
}