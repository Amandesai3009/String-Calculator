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
        const delimiterSection = parts[0].substring(2);
        numbers = parts.slice(1).join("\n");
    
    
        if(delimiterSection.startsWith("[")) {
            // Handle multiple custom delimiters
            const matches = delimiterSection.match(/\[([^\]]+)\]/g);
            const delimiterArray = matches.map(d => escapeRegExp(d.slice(1, -1)));
            delimiters = new RegExp(delimiterArray.join("|"));
        }
        else {
            delimiters = new RegExp(escapeRegExp(delimiterSection));
        }
    }

    const nums = numbers.split(delimiters).map(Number);
    const negatives = nums.filter(num => num < 0);

    if(negatives.length > 0) {
        throw new Error("Negative numbers not allowed: " + negatives.join(", "));
    }

    const validNums = nums.filter(num => num <= 1000);
    return validNums.reduce((sum, num) => sum + num, 0);

    // return nums.reduce((sum, num) => sum + num, 0);    

}

function getCalledCount() {
    return callcount;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { add, getCalledCount };