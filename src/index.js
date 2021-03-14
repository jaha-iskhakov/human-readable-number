module.exports = function toReadable (number) {
    let array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let array2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let array3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number >= 0 && number < 10) return (array1[number]); // for 1-9
    if (number > 9 && number < 20) return (array2[number % 10]); //for 9-20
    if (number > 19 && number < 100) {                            //for 19-100
       let first = Math.floor(number / 10);
       let second = number % 10;
       if (second !== 0) return (array3[first] + ' ' + array1[second])
       else return array3[first];
    }
// for 99-1000
    if (number > 99 && number < 1000) {
       let hundreds = number % 100;
       let first = Math.floor(number / 100);
       let second = Math.floor(hundreds / 10);
       let third = hundreds % 10;
       if (hundreds === 0) return (array1[first]+' hundred')
       if (0 < hundreds && hundreds < 10) 
       return (array1[first] + ' hundred '+ array1[hundreds])
       if ( 9 < hundreds && hundreds < 20) 
       return (array1[first] + ' hundred '+ array2[hundreds % 10])
       if (19 < hundreds && hundreds < 100) {
          if (third === 0) return (array1[first] + ' hundred ' + array3[second])
          if (third > 0) return (array1[first] + ' hundred ' + array3[second] +' '+array1[third])
    }
    }
 }
