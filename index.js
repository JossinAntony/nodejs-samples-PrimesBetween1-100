for (var i = 1; i <= 10; i++) {
    var notPrime = false;
    for(var j = 2; j <= (i/2); j++){
        if((i%j) == 0 && i!=j){
            notPrime = true;
            //console.log('i is: ' + i + '; j is: ' + j);
            break;
        }
    }
    if(!notPrime){
        console.log(i);
    }
}