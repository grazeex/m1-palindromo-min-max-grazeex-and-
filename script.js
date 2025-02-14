function isPalindrome(str){
    let palavra = str.toLowerCase().replace(/\s/g, '')
    let invertida = ""
   
    for(let i = palavra.length - 1; i >= 0; i--){
        invertida += palavra[i]     
    }
    return palavra === invertida
}

console.log(isPalindrome("Radar"))




function arrayMaxMin(array){
    let minima = array[0];
    let maxima = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minima) {
            minima = array[i];
        }
        if (array[i] > maxima) {
            maxima = array[i];
        }
    }

    return [minima, maxima];
}
   console.log(arrayMaxMin([3, 1, 7, 9, 2, 10]))
    

