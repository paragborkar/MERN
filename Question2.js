// Here In This Question We Have To Find Out The First Missing Odd Number In The Array
const input=[5,7,9,11,15]
const output=13;
let missingelement;
let j=0;


for(i=input[0];i<input[input.length-1];i+=2)
{
    if(i!==input[j])
    {
        missingelement=i;
        break;
    }
    j++;
}

console.log(missingelement);

