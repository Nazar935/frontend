let arr=[20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
let min=arr[0];
let max=arr[0];
let k_even=0;
let k_not_even=0;
let k_two_number=0;
let k_plus_elements=0;
let k_minus_elements=0;

for (let i = 0; i < arr.length; i++) 
{
    if (arr[i]<min) 
    {
        min=arr[i]; 
    }
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
for (let i = 0; i < arr.length; i++) 
{
    if (arr[i]%2==0) 
{
    k_even=k_even+1;

}
if (arr[i]%2!=0)
{
    k_not_even=k_not_even+1;
} 
}
for (let i = 0; i < arr.length; i++) 
{
    if(arr[i]>=10)
    {
        k_two_number=k_two_number+1;
    }
    else
    {
        break;
    }
}
for (let i = 0; i < arr.length; i++)
{
    if (arr[i]>0) 
    {
        k_plus_elements=k_plus_elements+1;
    }
    if(arr[i]<0)
    {
        k_minus_elements=k_minus_elements+1;
    }
    
}
arr.sort((a, b) => a - b);
console.log("Мінімальний елемент масиву:",min);
console.log("Максимальний елемент масиву:",max);
console.log("Кількість парних елементів масиву:",k_even);
console.log("Кількість не парних елементів масиву:",k_not_even);
console.log("Кількість елементів масиву мають дві цифри:",k_two_number);
console.log("Кількість додатніх елементів масиву:",k_plus_elements);
console.log("Кількість від'ємних елементів масиву:",k_minus_elements);
console.log("Масив, відсортований за зростанням:", arr);
let reversedArr = arr.reverse();
console.log("Масив з оберненим порядком елементів:", reversedArr);
