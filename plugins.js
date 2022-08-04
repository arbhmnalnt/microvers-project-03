function findDigits(n){
    let numberContent = String(n).split(''),
        count=0;
    for(let i=0; i<numberContent.length; i++){
        if( n % numberContent[i] == 0 ){
            count ++;
        }
    }

    return count;

}


n = 12
findDigits(n)