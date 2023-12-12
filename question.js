// var h= "tarun bhai kaise ho"
//    var str= h.split(" ").map((e)=>{
//        return e.split("").reverse().join("")
//     })
//     console.log(str);


// function checkArray(elem){
//         return Array.isArray(elem)
// }
// console.log(checkArray([]))
// console.log(checkArray({}))




// var arr =[1,2,3,4,6]
// p=arr.length=0
// console.log(p);



// var a =[1,2,4,5,9]
// a.concat(a)
// console.log(a);

/* reverse a number */
// function reverseNumber(num){
//   return  num.toString().split("").reverse().join("")
// }

// console.log(reverseNumber(21));  


/*2nd method */

// function reverseNumber(num){
//     let rev =0
//     while(num>0){
//         let rem = num%10
//         rev=rev*10 +rem
//         num = Math.floor(num/10) 
//     }
//     return rev
// }

// console.log(reverseNumber(233));



// function palindrome(str){
    
//     let reversed = str.split("").reverse().join("")
//     return reversed == str
// }

// console.log(palindrome("malayalam"));


/* sorting a alphabetical order */
// let word = "tarun"
//     console.log(word.split("").sort());


// let word = "tarun sharma "
// console.log( word.split(" ").map(w => w.charAt(0).toUpperCase()+w.slice(1)));



//count letter occur how many times

// function rp(str){
//     var occur={}
//     str.split("").map((elem)=>{
//         if(occur.hasOwnProperty(elem) === false){
//             occur[elem] =1
//         }
//         else{
//             occur[elem]++
//         }
//     })
//     return occur
   
// }

// console.log(rp('apple'));

// var s= [1,2,3,4,5,6]
// let sum =0
// s.map((e)=>{
//     sum= sum+e
// })

// console.log(sum);
// let add = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < add.length; i++) {
//     sum = sum + add[i];
// }

// console.log(sum);



// var arr= ['hello',12,'oop',89,30]
// var sum =0
// arr.forEach((elem)=>{
//     if(typeof elem ==='number'){
//         sum= sum +elem
//     }
// })

// console.log(arr,sum);


// var arr = [
//     {name:"harsh",gender:"male"},
//     {name:"harshita",gender:"female"},
//     {name:"kunal",gender:"male"},
//     {name:"mahima",gender:"female"},
//     {name:"kriti",gender:"female"},

// ]

// var newarr= arr.filter((elem)=>{
//     return elem.gender === 'female';
// })

// arr=newarr
// console.log(arr);


//2nd method
// var arr = [
//          {name:"harsh",gender:"male"},
//          {name:"harshita",gender:"female"},
//          {name:"kunal",gender:"male"},
//          {name:"mahima",gender:"female"},
//          {name:"kriti",gender:"female"},
    
//      ]
// var count =0;

// arr.forEach((elem)=>{
//     if(elem.gender !== "male") count ++
// })

// for(var i =0; i<=count; i++){
//     for(var j=0; j<arr.length;j++){
//         if(arr[j].gender !=='male'){
//             arr.splice(j,1)
//         }
//     }
// }

// console.log(arr);



//clone an array

// function cloneArray(num){
//     return [...num]
// }

// var newarr=cloneArray([1,2,3])


// function cloneArray(arr){
//     var add=[]
//     arr.forEach((e)=>{
//         add.push(e)
//     })
//     return add
// }
// var abc=[1,2,3]
// var newarr=cloneArray(abc)
// newarr.pop()
// console.log(newarr);
// console.log(abc);


// function cloneArray(Arr){
//     return Arr.map((e)=>{
//         return e
//     })

// }
// var newarr=cloneArray([1,2,3])
// console.log(newarr);


// print according given number

// function retrieve(arr,n=1){
//     if(n<=arr.length){
//         for (var i=0;i<n;i++){
//             console.log(arr[i])
//         }
//     }
// }

// console.log(retrieve([1,2,3,4,5],5))




function retrieve(arr,n=1){
    if(n<=arr.length){
        for (var i=0;i<n;i++){
            console.log(arr[arr.length-1 -i])
        }
    }
}

console.log(retrieve([1,2,3,4,5],3))