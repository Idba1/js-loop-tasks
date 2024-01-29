/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

var i = 1;
var sum = 0;
while(i<20){
    // console.log(i);
    i++;
    if(sum >= 100){
        break;
    }
    sum = sum+i;
    console.log(sum);
}