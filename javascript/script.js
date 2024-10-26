function pyramid(x) {
    var oddNumber = 1;  

    
    for (var i = 1; i <= x; i++) {  // O(x)
        var row = '';  

        for (var j = 0; j < i; j++) {  //  O(i)
            row += oddNumber + ' ';  // O(i) 
            oddNumber += 2;  // O(1)
        }

        console.log(row);  
    }
}


const x = parseInt(prompt("Enter number of rows: "));  
pyramid(x);  

//O(x) + O(i^2) = O(n^2)