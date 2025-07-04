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

     if (delimiterSection.startsWith('[')) {
      // Multiple or long delimiters: //[***][%%]
      const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
      const delimiterList = delimiterMatches.map(d => escapeRegExp(d.slice(1, -1)));
      delimiters = new RegExp(delimiterList.join('|'));
    } else {
      // Single-char delimiter: //;\n1;2
      delimiters = new RegExp(escapeRegExp(delimiterSection));
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

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getCalledCount() {
    return callcount;
}

function resetCount() {
  callCount = 0;
}


module.exports = { add, getCalledCount, resetCount };