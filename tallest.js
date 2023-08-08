function tallestArray(array){
    let largest = array[0];
    for(let i = 0; i < array.length; i++){
        const index = i;
        const element = array[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;

}
const heights = [120, 23, 345, 567, 456, 98];
const tallest = tallestArray(heights);
console.log(tallest);