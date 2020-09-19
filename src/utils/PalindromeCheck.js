
export default function isPalindrome(input) {
    var length = input.length;
    if (length === 0 || length === 1) {
        return true;
    }
    
    if (input[0] === input[length - 1]) {
        return isPalindrome( input.slice(1, length - 1) );
    }
    
    return false;
   }