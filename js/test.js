/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average() {    
    let sum = 0;
    len = arguments.length;
    // console.log(...arguments);
    let arr = [...arguments];
    // console.log(arr);
    if(arr.length == 0){
        // let sum = 0;
        // console.log("LOOP I")
        return sum;
    } else {
        // console.log("LOOP II")
        // let sum = 0
        for(let i = 0; i<arr.length; i++){
            sum += arr[i];
            // console.log(i,"-",sum);
        }
        return sum/arr.length;
    };
    // else if(arguments.length==1){
    //     return arguments;
    // } 
};

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
