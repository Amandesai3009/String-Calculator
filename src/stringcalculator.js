function add(numbers){

    if(numbers === '') {
        return 0;
    }

    // if(!numbers.includes(",")) return parseInt(numbers, 10);
    
    const delimiters = /[,\n]/;
    return numbers.split(delimiters).reduce((sum, num) => sum + parseInt(num), 0);
    
}


module.exports = { add };