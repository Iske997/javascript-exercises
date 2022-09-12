const removeFromArray = function(arg1, arg2, arg3) {
     for (let number of arg1){
        if (arg2 === number && arg3 === undefined){
          let remove = arg1.indexOf(number);
          arg1.splice(remove,1);
          return arg1;
        } else if (arg3 === number && arg2 > 0){
            remove = arg1.indexOf(number);
            arg1.splice(remove,2);
            return arg1;
        }
     };
};

// Do not edit below this line
module.exports = removeFromArray;
