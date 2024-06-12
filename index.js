function compareTriplets(a, b) {
  
    let alicePoints = 0;
    let bobPoints = 0;
    
 
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        } else if (a[i] < b[i]) {
            bobPoints++;
        }
    }
    
    return [alicePoints, bobPoints];
}

let a = [17, 28, 30];
let b = [99, 16, 8];
console.log(compareTriplets(a, b));  
