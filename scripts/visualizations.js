// Initialize a variable for speed
var speed = 1000;

inp_aspeed.addEventListener("input", vis_speed);

// Function to re-initalize speed variable based on input
function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch (parseInt(array_speed)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        default: speed = 10000;
            break;
    }

    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

// It indicates seconds to delay for each transition
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);

//It represents total delay we had so far
var c_delay = 0;

function div_update(cont, height, color) {
    // Sets the elements(bars) after certain seconds
    window.setTimeout(function () {
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}


// Function enable buttons to clickable
function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
        /*
            Here we are setting delay to c_delay beacuse 
            let's say the element changed to Yello after one scond then we will 
            change it into Blue after two seconds.
        */
    }, c_delay += delay_time);
}
