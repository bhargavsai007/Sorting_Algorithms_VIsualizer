function Merge(){
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    // Calculating delay so far
    c_delay=0;

    var tempArray = Array.apply(null, Array(array_size)).map(function () {});
    merge_partition(tempArray, 0, array_size-1);

    enable_buttons();
}

function merge_sort(tempArray, start, mid, end){
    var i=start, j = mid+1, k=start;
    while(i<=mid && j<=end){
        if(div_sizes[i]<=div_sizes[j]){
            tempArray[k++] = div_sizes[i++];
            div_update(divs[i-1], div_sizes[i-1], "red");
        }
        else{
            tempArray[k++] = div_sizes[j++];
            div_update(divs[j-1], div_sizes[j-1], "red");
        }
    }

    while(i<=mid){
        tempArray[k++] = div_sizes[i++];
        div_update(divs[i-1], div_sizes[i-1], "red");
    }

    while(j<=end){
        tempArray[k++] = div_sizes[j++];
        div_update(divs[j-1], div_sizes[j-1], "red");
    }

    for(var t=start; t<=end; t++){
        div_sizes[t]=tempArray[t];
        div_update(divs[t], div_sizes[t], "green");
    }
}


function merge_partition(tempArray, start, end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");//Color update

        merge_partition(tempArray, start, mid);
        merge_partition(tempArray, mid+1, end);

        merge_sort(tempArray, start, mid, end);
    }
}