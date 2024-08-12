export function getSelectionSortAnimation(array){
    const animations = [];
    if(array.length <= 1) return array;
    selectionSortHelper(array,array.length, animations);
    return animations;
}

function selectionSortHelper(
    mainArray,
    length,
    animations,
){
    for(let i = 0; i < length ; i++)
    {
        var index = i;
        animations.push([i, index,-1,-1,"red","red"]);
        for(let j = i+1 ; j < length ; j++)
        {
            animations.push([i, j,-1,-1,"red","orange"]);
            if(mainArray[index] > mainArray[j])
            {
                index = j;
            }
            if(i%2)
            {
                animations.push([i, j,-1,-1,"red","green"]);
            }
            else
            {
                animations.push([i, j,-1,-1,"red","lightgreen"]);
            }
        }
        animations.push([i, index,mainArray[index],mainArray[i],"red","red"]);
        animations.push([i, index,-1,-1,"turquoise","turquoise"]);
        var temp = mainArray[i];
        mainArray[i] = mainArray[index];
        mainArray[index] = temp;
    }
}