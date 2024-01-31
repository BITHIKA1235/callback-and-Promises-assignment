function multiplyBy2(number){ return number * 2;}
//call back function//
function arrayOperation(arr,operation)
{
    for(let index =0;index<arr.length;index++)
    {
        //passing array element to the callback element
        arr[index]=operation(arr[index]);
    }
    return arr;
}
//passing function multiply and divide//
console.log("Multiplying array element by 2",arrayOperation([1,2,3],multiplyBy2));


