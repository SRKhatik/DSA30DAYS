//input=7;
//output=0,1,1,2,3,5,8

// const fabbonaciSeries =(number)=>{
//     let arr=[0,1];
//     let sum=0
//     for(let i=0;i<number-2;i++){
//         sum=arr[i]+arr[i+1]
//             arr.push(sum)
        
//     }
// console.log(arr)
// }
// fabbonaciSeries(7)


//recurssion 
const fabbonaciSeries=(number)=>{
    if(number <2){
        return 1
    }
    return fabbonaciSeries(number-1) + fabbonaciSeries(number-2)
}
let ans = fabbonaciSeries(7)
console.log(ans)