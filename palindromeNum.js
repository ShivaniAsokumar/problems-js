function isPalindrome(input) {
    let result = "";
    let intString = input + "";
    for (let i = intString.length - 1; i >= 0; i--) {
        result = result + intString.substring(i, i+1);
        
    }
    if (result === intString) {
        return true;
    }
    else {
        return false;
    }
    
}

