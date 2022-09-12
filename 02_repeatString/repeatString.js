
const repeatString = function(arg1, arg2) {
    if (arg2 === 0){
        let string = ""
        return string;
    } else if (arg2 < 0){
        string = "ERROR";
        return string;
    } else if(arg1 === "") {
        string = arg1;
        return string;
    } else {
        string = arg1;
        for (let i=0; i < arg2 - 1; i++){
        string = string + arg1;
    };
        return string;
    };
    
};

// Do not edit below this line
module.exports = repeatString;
