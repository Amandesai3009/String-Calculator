let callcount = 0;


function add(numbers){

    callcount++;

    if(numbers === '') {
        return 0;
    }

    // if(!numbers.includes(",")) return parseInt(numbers, 10);

    let delimiters = /,|\n/;

    if(numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiters = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }

    const nums = numbers.split(delimiters).map(Number);
    const negatives = nums.filter(num => num < 0);

    if(negatives.length > 0) {
        throw new Error("Negative numbers not allowed: " + negatives.join(", "));
    }

    // const validNums = nums.filter(num => num <= 1000);

    return nums.reduce((sum, num) => sum + num, 0);    

}

function getCalledCount() {
    return callcount;
}


module.exports = { add };