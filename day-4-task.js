let obj1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
//let op=true;
// for(let i in obj1){
//     if(obj1[i]!=obj2[i]){
//         op=false;
//         break;
//     }
// }
// op?console.log("equal"):console.log("not equal");


let keys1= Object.keys(obj1);
let keys2= Object.keys(obj2);
let op=true;
//console.log(keys1);
if(keys1.length===keys2.length){
for(let i of keys1){
    // console.log(keys1[i]);
    if(obj1[i]!=obj2[i]){
        op=false;
        break;   
    }
}
}
else{
    op=false;
}
op?console.log("equal"):console.log("not equal");
