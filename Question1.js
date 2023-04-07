// Question 1
// Here str is given contains string "Hello This Is Javascript" we have to convert this to "tpircsavaJ sI sihT olleH"
var str="Hello This Is Javascript";

var arr=str.split(" ");
console.log(arr);
console.log(arr.reverse());
for(i=0;i<arr.length;i++)
{
  arr[i]=arr[i].split("").reverse().join("");
}
const joined=arr.join(" ");
console.log(joined);