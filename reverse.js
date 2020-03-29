function reverse(x) {
    if (x <= (-2)**31 || x >= ((-2)**31 - 1) ){
        return 0;
    }
    let strX = x + "";
    let result = "";
    for (let i = strX.length - 1; i >= 0; i--) {
        result += strX[i];
        
    }
    if (x < 0) {
        let reverseNum = -1 * parseInt(result);
        return reverseNum;
    } 
    else {
        reverseNum = parseInt(result);
        return reverseNum;
    }
    
    
    
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
