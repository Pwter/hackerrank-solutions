function processData(myArray) {
    myArray.sort(function(a,b){ return parseInt(b)<parseInt(a);});
    var highest=myArray[myArray.length-1];
    var secondhighest;
    
    while (highest==myArray[myArray.length-1]) {
        highest=myArray.pop();
        
    }
    secondhighest=myArray.pop();
    if (secondhighest!=null)
        console.log(secondhighest);
    else console.log(highest);
    
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
