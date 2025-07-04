function add(numbers){

    //first test case
    if(numbers === '') {
        return 0;
    }

    //second test case
    if(!numbers.includes(",")) return parseInt(numbers, 10);
}


module.exports = { add };