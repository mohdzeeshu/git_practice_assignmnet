//prime Number

let arr = [1,2,3,4,5,7,13,15,19,23,21]
let N =13
let count =0
for (let i= 1;i<=N;i++){
    if (num%i==0){
        count++
    }
}
if ( count==2){
    console.log(N,"is a prime number")
} else{
    console.log(N , "is not prime number")
}


//Palindrome
let str = "madam"
let N = 5

let bag ="";
for(let i= str.length-1; i>=0 ; i--){
    bag = bag + str[i]

} if (bag == str){
    console.log("Yes")
}else{
    console.log("No")
}
