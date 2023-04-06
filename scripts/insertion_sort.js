function Insertion() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    // Calculating delay so far
    for (var i = 0; i < array_size; i++) {
        div_update(divs[i], div_sizes[i], "yellow");//Color update
        var key = div_sizes[i];
        var j = i - 1;
        while (j > -1 && div_sizes[j] > key) {
            div_update(divs[j], div_sizes[j], "red");//Color update
            div_update(divs[j + 1], div_sizes[j], "red");//Color update

            div_sizes[j + 1] = div_sizes[j];

            div_update(divs[j], div_sizes[j], "red");//Height update
            div_update(divs[j + 1], div_sizes[j], "red");//Height update

            div_update(divs[j], div_sizes[j], "blue");//Colour update

            if (j == (i - 1)) {
                div_update(divs[i], div_sizes[i], "yellow");
            }
            else {
                div_update(divs[j + 1], div_sizes[j + 1], "blue");
            }
            j -= 1
        }
        div_sizes[j + 1] = key;
        for (var t = j; t <= i; t++) {
            div_update(divs[t], div_sizes[t], "green");
        }
    }

    //div_update(divs[i-1], div_sizes[i-1], "green");
    enable_buttons();
}