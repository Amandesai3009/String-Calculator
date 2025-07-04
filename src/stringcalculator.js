function add(numbers){

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
    
    return numbers.split(delimiters).reduce((sum, num) => sum + parseInt(num), 0);
    
}


module.exports = { add };