export function getQuickSortAnimation(array, pivotValue){
    const animations = [];
    if(array.length <= 1) return array;
    quickSortHelper(array,0,array.length-1, animations, pivotValue);
    return animations;
}

function quickSortHelper(
    mainArray,
    low,
    high,
    animations,
    pivotValue,
){
    if(low < high)
    {
        var pivot = partition(mainArray, low, high, animations, pivotValue); 
        quickSortHelper(mainArray, low, pivot-1, animations, pivotValue);
        quickSortHelper(mainArray, pivot+1, high, animations, pivotValue);
    }
}

function partition(
    mainArray,
    low,
    high,
    animations,
    pivotValue,
){
    let pivotIndex =  low;
    if (pivotValue === "high")
    {
        pivotIndex = high;
    }
    else if(pivotValue === "random")
    {
        pivotIndex =  Math.floor(Math.random() * (high - low + 1)) + low;
    }
    let pivot = mainArray[pivotIndex];
    swap(mainArray, pivotIndex, high);
    animations.push([pivotIndex, low, high,mainArray[pivotIndex],-1,mainArray[high],"red","orange","red"]);
    animations.push([pivotIndex, low, high,-1,-1,-1,"red","turquoise","turquoise"]);
    let i = low - 1;
    
    for (let j = low; j < high; j++)
    {
        animations.push([pivotIndex, i, j,-1,-1,-1,"red","yellow","yellow"]);
        animations.push([pivotIndex, i, j,-1,-1,-1,"red","turquoise","turquoise"]);
        if(mainArray[j] <= pivot)
        {
            i++;
            animations.push([pivotIndex, i, j,-1,-1,-1,"red","yellow","turquoise"]);
            animations.push([pivotIndex, i, j,-1,-1,-1,"red","turquoise","turquoise"]);

            swap(mainArray, i, j);
            animations.push([pivotIndex, i, j,-1,mainArray[i],mainArray[j],"red","yellow","yellow"]);
            animations.push([pivotIndex, i, j,-1,-1,-1,"red","turquoise","turquoise"]);
        }
    }

    swap(mainArray, i+1, high);
    animations.push([i+1, low, high,mainArray[i+1],-1,mainArray[high],"red","blue","blue"]);
    animations.push([i+1, low, high,-1,-1,-1,"turquoise","turquoise","turquoise"]);

    return i + 1;
}
function swap(
    mainArray,
    value1,
    value2,
){
    var temp = mainArray[value1];
    mainArray[value1] = mainArray[value2];
    mainArray[value2] = temp;
}